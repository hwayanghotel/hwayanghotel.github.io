import { chromium } from '@playwright/test';
import { mkdir, writeFile, readdir, readFile, stat } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import path from 'node:path';

const base = process.env.SITE_AUDIT_URL || 'http://127.0.0.1:4321';
const shotDir = process.env.SITE_AUDIT_SCREENSHOTS || 'artifacts/screenshots';
const routes = [
  '/',
  '/rooms/',
  '/rooms/neungundae/',
  '/rooms/haksodae/',
  '/rooms/waryongam/',
  '/rooms/cheomseongdae/',
  '/dining/',
  '/valley/',
  '/visit/',
  '/guide/',
];
await mkdir(shotDir, { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined,
  args: ['--disable-gpu'],
});
const results = { pages: [], noJavaScript: {}, zoom: {}, homeNetwork: {}, build: {} };
for (const width of [1440, 390]) {
  for (const route of routes) {
    const context = await browser.newContext({
      viewport: { width, height: 1000 },
      locale: 'ko-KR',
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const initialNetwork = await page.evaluate(() =>
      performance
        .getEntriesByType('resource')
        .map((r) => ({ name: r.name, bytes: r.encodedBodySize, type: r.initiatorType })),
    );
    if (route === '/' && width === 390)
      results.homeNetwork = {
        resources: initialNetwork,
        bytes: initialNetwork.reduce((n, r) => n + r.bytes, 0),
      };
    const height = await page.locator('body').evaluate((el) => el.scrollHeight);
    for (let y = 0; y < height; y += 650) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), y);
      await page.waitForTimeout(55);
    }
    await page
      .locator('img[src]')
      .evaluateAll((imgs) => Promise.all(imgs.map((img) => img.decode().catch(() => {}))));
    await page.waitForTimeout(120);
    const images = await page.locator('img[src]').evaluateAll((els) =>
      els.map((img) => ({
        src: img.getAttribute('src'),
        loaded: img.complete && img.naturalWidth > 0,
      })),
    );
    await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(500);
    const name = route === '/' ? 'home' : route.slice(1, -1).replaceAll('/', '-');
    await page.screenshot({ path: `${shotDir}/${name}-${width}.png`, fullPage: true });
    if (route === '/') await page.screenshot({ path: `${shotDir}/home-viewport-${width}.png` });
    results.pages.push({
      route,
      width,
      title: await page.title(),
      overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
      images,
      errors,
    });
    await context.close();
  }
}

// Core content and navigation remain useful when scripts are unavailable.
const fallback = await browser.newContext({
  javaScriptEnabled: false,
  viewport: { width: 390, height: 844 },
});
const fallbackPage = await fallback.newPage();
await fallbackPage.goto(base + '/');
await fallbackPage.locator('.mobile-menu summary').click();
await fallbackPage
  .locator('.mobile-menu')
  .getByRole('link', { name: '객실', exact: false })
  .click();
results.noJavaScript.roomNavigation = fallbackPage.url().endsWith('/rooms/');
await fallbackPage.locator('.room-card').first().click();
results.noJavaScript.roomDetail = await fallbackPage.locator('h1').innerText();
await fallbackPage.locator('.gallery-hero').click();
results.noJavaScript.photoFallback = fallbackPage.url().includes('/images/room1-1-');
await fallbackPage.goto(base + '/guide/');
await fallbackPage.locator('.faq-item summary').first().click();
results.noJavaScript.faq =
  (await fallbackPage.locator('.faq-item').first().getAttribute('open')) !== null;
await fallbackPage.goto(base + '/visit/');
results.noJavaScript.addressVisible = await fallbackPage.locator('[data-address]').isVisible();
results.noJavaScript.copyHidden = await fallbackPage.locator('[data-copy]').isHidden();
await fallback.close();

const zoomContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const zoom = await zoomContext.newPage();
await zoom.goto(base + '/');
await zoom.evaluate(() => {
  document.documentElement.style.zoom = '2';
});
results.zoom = {
  cssZoom: '200%',
  overflow: await zoom.evaluate(() => document.documentElement.scrollWidth > innerWidth),
};
await zoom.screenshot({ path: `${shotDir}/home-200-percent.png` });
await zoomContext.close();
await browser.close();

async function files(dir) {
  const result = [];
  for (const name of await readdir(dir)) {
    const p = path.join(dir, name);
    if ((await stat(p)).isDirectory()) result.push(...(await files(p)));
    else result.push(p);
  }
  return result;
}
const all = await files('dist');
let bytes = 0;
let jsBytes = 0;
let jsGzipBytes = 0;
const inlineScripts = new Set();
for (const p of all) {
  const b = await readFile(p);
  bytes += b.length;
  if (p.endsWith('.html')) {
    for (const match of b.toString().matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (!match[1].includes('application/ld+json')) inlineScripts.add(match[2]);
    }
  }
  if (p.endsWith('.js')) {
    jsBytes += b.length;
    jsGzipBytes += gzipSync(b).length;
  }
}
for (const script of inlineScripts) {
  jsBytes += Buffer.byteLength(script);
  jsGzipBytes += gzipSync(script).length;
}
results.build = { files: all.length, bytes, jsBytes, jsGzipBytes };
await writeFile('artifacts/site-audit.json', JSON.stringify(results, null, 2) + '\n');
console.log(
  JSON.stringify(
    {
      pages: results.pages.length,
      issues: results.pages.filter(
        (p) => p.overflow || p.errors.length || p.images.some((i) => !i.loaded),
      ),
      noJavaScript: results.noJavaScript,
      zoom: results.zoom,
      homeInitialResourceBytes: results.homeNetwork.bytes,
      build: results.build,
    },
    null,
    2,
  ),
);
if (
  results.pages.some((p) => p.overflow || p.errors.length || p.images.some((i) => !i.loaded)) ||
  results.zoom.overflow ||
  Object.values(results.noJavaScript).some((x) => !x)
)
  process.exitCode = 1;
