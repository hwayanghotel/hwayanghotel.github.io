import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

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
const BOOKING = 'https://booking.ddnayo.com/booking-calendar-status?accommodationId=12342';

for (const route of routes) {
  test(`page works and is accessible: ${route}`, async ({ page, request }) => {
    const errors: string[] = [];
    const externalRequests: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('request', (r) => {
      if (!new URL(r.url()).hostname.match(/^(127\.0\.0\.1|localhost)$/))
        externalRequests.push(r.url());
    });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
    expect(await page.locator('meta[name="description"]').getAttribute('content')).toBeTruthy();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://hwayanghotel.github.io${route}`,
    );
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    await page.evaluate(() => scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
    const visibleText = await page.locator('body').innerText();
    expect(visibleText).not.toMatch(/평상|ADMIN|Firebase|lorem|Lorem/);
    await expect(page.locator('form')).toHaveCount(0);
    await expect(page.locator('a[href*="booking.ddnayo.com"]').first()).toHaveAttribute(
      'href',
      BOOKING,
    );
    for (const href of await page
      .locator('a[href^="tel:"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute('href'))))
      expect(href).toBe('tel:0438324281');
    const images = await page.locator('img[src]').evaluateAll((els) =>
      els.map((el) => ({
        src: (el as HTMLImageElement).getAttribute('src'),
        alt: el.getAttribute('alt'),
      })),
    );
    for (const image of images) {
      expect(image.alt).toBeTruthy();
      const r = await request.get(image.src!);
      expect(r.status(), image.src!).toBe(200);
      expect(r.headers()['content-type']).toContain('image/');
    }
    const a11y = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(a11y.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual(
      [],
    );
    expect(errors).toEqual([]);
    expect(externalRequests).toEqual([]);
  });
}

test('all internal navigation targets resolve, sitemap includes every main page', async ({
  page,
  request,
}) => {
  const urls = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute('href')!));
    hrefs.forEach((href) => urls.add(href));
  }
  for (const url of urls) expect((await request.get(url)).status(), url).toBe(200);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const body = await sitemap.text();
  for (const route of routes)
    expect(body).toContain(`<loc>https://hwayanghotel.github.io${route}</loc>`);
  expect(body.match(/<loc>/g)?.length).toBe(10);
});

test('room choices lead to the correct photo, capacity and reservation', async ({ page }) => {
  await page.goto('/rooms/');
  const roomCards = page.locator('.room-card');
  await expect(roomCards).toHaveCount(4);
  await roomCards.filter({ hasText: '첨성대' }).click();
  await expect(page).toHaveURL(/\/rooms\/cheomseongdae\/$/);
  await expect(page.locator('h1')).toHaveText('첨성대');
  await expect(page.locator('.room-facts')).toContainText('최대 3인');
  await expect(page.locator('.gallery-hero img')).toHaveAttribute('src', /room4-3/);
  await expect(page.locator('.room-aside .button')).toHaveAttribute('href', BOOKING);
});

test('gallery supports next, previous, arrows, Escape and focus restoration', async ({ page }) => {
  await page.goto('/rooms/neungundae/');
  const trigger = page.locator('.gallery-hero');
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(page.locator('[data-gallery-count]')).toHaveText('1 / 4');
  await page.getByRole('button', { name: '다음 사진' }).click();
  await expect(page.locator('[data-gallery-count]')).toHaveText('2 / 4');
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('[data-gallery-count]')).toHaveText('3 / 4');
  await page.getByRole('button', { name: '이전 사진' }).click();
  await expect(page.locator('[data-gallery-count]')).toHaveText('2 / 4');
  await expect(page.locator('[data-gallery-image]')).toHaveAttribute(
    'alt',
    '능운대 거실과 분리된 방, 주방',
  );
  const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  expect(a11y.violations.map((v) => v.id)).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await page.locator('.gallery-thumbs a').nth(3).click();
  await expect(page.locator('[data-gallery-count]')).toHaveText('4 / 4');
  await page.getByRole('button', { name: '다음 사진' }).click();
  await expect(page.locator('[data-gallery-count]')).toHaveText('1 / 4');
  await page.getByRole('button', { name: '사진 닫기' }).click();
  await expect(dialog).not.toBeVisible();
});

test('mobile navigation opens, closes with Escape, and reaches a page', async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, 'Mobile navigation');
  await page.goto('/');
  const menu = page.locator('.mobile-menu');
  await menu.locator('summary').click();
  await expect(menu).toHaveAttribute('open', '');
  await page.keyboard.press('Escape');
  await expect(menu).not.toHaveAttribute('open', '');
  await expect(menu.locator('summary')).toBeFocused();
  await menu.locator('summary').click();
  await menu.getByRole('link', { name: '오시는 길' }).click();
  await expect(page).toHaveURL(/\/visit\/$/);
  await expect(page.locator('.mobile-booking-bar')).toBeVisible();
});

test('FAQ expands and exposes the correct booking route', async ({ page }) => {
  await page.goto('/guide/');
  const faq = page.locator('.faq-item').first();
  await faq.locator('summary').click();
  await expect(faq).toHaveAttribute('open', '');
  await expect(faq.locator('.faq-answer')).toBeVisible();
  await expect(faq.locator('a')).toHaveAttribute('href', BOOKING);
  await faq.locator('summary').press('Enter');
  await expect(faq).not.toHaveAttribute('open', '');
});

test('address copy succeeds and map links name the real business', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/visit/');
  await page.getByRole('button', { name: '주소 복사하기' }).click();
  await expect(page.getByRole('status')).toContainText('주소를 복사했습니다');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    '충청북도 괴산군 청천면 화양동길 247',
  );
  for (const label of ['네이버 지도', '카카오맵']) {
    const href = await page.getByRole('link', { name: label }).getAttribute('href');
    expect(decodeURIComponent(href!)).toContain('화양계곡 능운대펜션');
    await expect(page.getByRole('link', { name: label })).toHaveAttribute('target', '_blank');
  }
});

test('clipboard failure has an honest, usable fallback', async ({ page }) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: () => Promise.reject(new Error('denied')) },
      configurable: true,
    }),
  );
  await page.goto('/visit/');
  await page.getByRole('button', { name: '주소 복사하기' }).click();
  await expect(page.getByRole('status')).toContainText('주소를 선택했습니다');
  expect(await page.evaluate(() => getSelection()?.toString())).toBe(
    '충청북도 괴산군 청천면 화양동길 247',
  );
});

test('layouts fit narrow, tablet and desktop viewports', async ({ page }) => {
  for (const width of [360, 390, 430, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/rooms/cheomseongdae/', '/visit/']) {
      await page.goto(route);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `${route} @ ${width}`,
      ).toBe(true);
    }
  }
});

test('legacy links redirect to their specific new page', async ({ page }) => {
  for (const [old, current] of [
    ['/neungundaeroom/', '/rooms/neungundae/'],
    ['/복제-능운대-1/', '/rooms/cheomseongdae/'],
    ['/service/', '/dining/'],
    ['/#/food', '/dining/'],
  ]) {
    await page.goto(old);
    await expect(page).toHaveURL(new RegExp(current.replaceAll('/', '\\/') + '$'));
  }
});

test('404 offers a way home, not a fake successful page', async ({ page }) => {
  const r = await page.goto('/does-not-exist/');
  expect(r?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('찾으시는 페이지가 없습니다.');
  await page.getByRole('link', { name: '홈으로 돌아가기' }).click();
  await expect(page).toHaveURL('/');
});

test('static build contains no research archive or application server', () => {
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((name) => {
      const p = path.join(dir, name);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });
  const files = walk('dist');
  expect(files.some((p) => /research|\.zip$|\.mp4$|server\.mjs|admin|firebase/i.test(p))).toBe(
    false,
  );
  const externalJs = files
    .filter((p) => p.endsWith('.js'))
    .map((p) => readFileSync(p, 'utf8'))
    .join('');
  const inlineJs = [
    ...new Set(
      files
        .filter((p) => p.endsWith('.html'))
        .flatMap((p) =>
          [...readFileSync(p, 'utf8').matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)]
            .filter((match) => !match[1].includes('application/ld+json'))
            .map((match) => match[2]),
        ),
    ),
  ].join('');
  const js = externalJs + inlineJs;
  expect(js).toContain('showModal');
  expect(js).not.toMatch(/booking-calendar-api|apiKey|firebase|fetch\(/);
  expect(Buffer.byteLength(js)).toBeLessThan(50_000);
});
