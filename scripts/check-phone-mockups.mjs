import assert from 'node:assert/strict';
import { existsSync, mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const base = process.env.SITE_URL || 'http://127.0.0.1:5180';
const browser = await chromium.launch({
  headless: true,
  ...(existsSync('C:/Program Files/Google/Chrome/Application/chrome.exe')
    ? { channel: 'chrome' }
    : {}),
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: 'reduce',
});
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
mkdirSync('artifacts', { recursive: true });

try {
  await page.goto(`${base}/scripts/phone-preview.html`, {
    waitUntil: 'networkidle',
  });
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator('[data-iphone-16-pro]').count(), 13);
  const clips = await page
    .locator('clipPath')
    .evaluateAll((els) => els.map((el) => el.id));
  assert.equal(
    new Set(clips).size,
    clips.length,
    'Every screen and photo needs its own clipping ID',
  );
  assert.deepEqual(
    await page
      .locator('[data-iphone-16-pro]')
      .evaluateAll((els) => [
        ...new Set(els.map((el) => el.getAttribute('viewBox'))),
      ]),
    ['0 0 200 400'],
    'Custom dimensions must not change device geometry',
  );
  const imageFailures = await page
    .locator('svg image')
    .evaluateAll(async (els) => {
      const urls = [...new Set(els.map((el) => el.getAttribute('href')))];
      return (
        await Promise.all(
          urls.map(
            (url) =>
              new Promise((resolve) => {
                const image = new Image();
                image.onload = () => resolve(null);
                image.onerror = () => resolve(url);
                image.src = url;
              }),
          ),
        )
      ).filter(Boolean);
    });
  assert.deepEqual(imageFailures, [], 'All app photos and demo assets load');
  const overflowingText = await page
    .locator('[data-phone-screen]')
    .evaluateAll((screens) =>
      screens.flatMap((screen) =>
        [...screen.querySelectorAll('text')].flatMap((text) => {
          const box = text.getBBox();
          return box.x < 0 ||
            box.x + box.width > 390 ||
            box.y + box.height > 849
            ? [`${screen.dataset.phoneScreen}: ${text.textContent}`]
            : [];
        }),
      ),
    );
  assert.deepEqual(
    overflowingText,
    [],
    'Phone content must fit inside the screen',
  );
  await page.screenshot({
    path: 'artifacts/iphone-gallery.png',
    fullPage: true,
  });
  for (const name of ['chat', 'connected', 'brand-home', 'earnings']) {
    await page
      .locator(`figure:has([data-phone-screen="${name}"])`)
      .screenshot({ path: `artifacts/iphone-${name}.png` });
  }
  const imageDemo = page
    .locator('[data-image-demos] > div')
    .nth(1)
    .locator('svg[data-iphone-16-pro]');
  assert.equal(
    await imageDemo.evaluate((el) => getComputedStyle(el).height),
    '320px',
    'Tailwind h-80 works',
  );
  await page.setViewportSize({ width: 390, height: 844 });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  );
  await page
    .locator('figure:has([data-phone-screen="connected"])')
    .screenshot({ path: 'artifacts/iphone-connected-mobile.png' });

  for (const route of ['/', '/features', '/about']) {
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
    if (route === '/about') {
      // The About story uses the gold role-select phone exported from Figma
      // (484:85) at the client's request, not the shared SVG frame.
      assert.equal(
        await page.locator('img[src*="role-select-gold.webp"]').count(),
        1,
        '/about shows the Figma role-select phone',
      );
    } else {
      assert.ok(
        (await page.locator('.mockup[data-iphone-16-pro]').count()) > 0,
        `${route} uses the shared frame`,
      );
      assert.equal(
        await page
          .locator('img[src*="mockups/"], img[src*="hero-phone.webp"]')
          .count(),
        0,
        `${route} has no baked-in device frames`,
      );
    }
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.waitForTimeout(100);
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${route} fits ${width}px`,
      );
    }
    if (route === '/')
      await page.screenshot({ path: 'artifacts/iphone-hero.png' });
  }
  assert.deepEqual(errors, []);
  console.log(
    'Phone checks passed: all ten screens, multiple instances, custom sizing, image/fallback demos, Tailwind utilities, text clearance, and site layouts at five widths.',
  );
} finally {
  await browser.close();
}
