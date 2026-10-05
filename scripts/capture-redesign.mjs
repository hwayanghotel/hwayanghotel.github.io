import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const browser = await chromium.launch({
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
    '/home/pss/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome',
  args: ['--disable-gpu'],
});
const root = 'artifacts/screenshots/v2';
await mkdir(root, { recursive: true });
const output = [];
for (const width of [1440, 390]) {
  const context = await browser.newContext({
    viewport: { width, height: width === 390 ? 844 : 1000 },
    deviceScaleFactor: 1,
    locale: 'ko-KR',
  });
  const page = await context.newPage();
  for (const route of [
    '/',
    '/rooms/',
    '/rooms/neungundae/',
    '/dining/',
    '/valley/',
    '/visit/',
    '/guide/',
  ]) {
    await page.goto('http://127.0.0.1:4321' + route, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const id = route === '/' ? 'home' : route.slice(1, -1).replaceAll('/', '-');
    await page.screenshot({ path: `${root}/${id}-${width}-viewport.png` });
    const height = await page.locator('body').evaluate((el) => el.scrollHeight);
    for (let y = 0; y < height; y += 700) {
      await page.evaluate((y) => scrollTo({ top: y, behavior: 'instant' }), y);
      await page.waitForTimeout(60);
    }
    await page
      .locator('img[src]')
      .evaluateAll((imgs) => Promise.all(imgs.map((img) => img.decode().catch(() => {}))));
    await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${root}/${id}-${width}-full.png`, fullPage: true });
    output.push({
      route,
      width,
      height,
      overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
      background: await page.locator('body').evaluate((e) => getComputedStyle(e).backgroundColor),
      font: await page.locator('h1').evaluate((e) => getComputedStyle(e).fontFamily),
      photos: await page
        .locator('img[src]')
        .evaluateAll((imgs) =>
          imgs.map((i) => ({ src: i.currentSrc, loaded: i.complete && i.naturalWidth > 0 })),
        ),
    });
  }
  await context.close();
}
await browser.close();
await writeFile('artifacts/redesign-review.json', JSON.stringify(output, null, 2));
console.log(
  JSON.stringify(
    output.map(({ photos, ...r }) => ({ ...r, broken: photos.filter((i) => !i.loaded).length })),
    null,
    2,
  ),
);
