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
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
mkdirSync('artifacts', { recursive: true });

try {
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await page.locator('[data-liquid-left]').waitFor();
  const first = await page.locator('[data-liquid-left]').getAttribute('d');
  const cardStart = await page
    .locator('.hcard-spin')
    .first()
    .evaluate((el) => getComputedStyle(el).transform);
  await page.waitForTimeout(400);
  assert.notEqual(
    await page.locator('[data-liquid-left]').getAttribute('d'),
    first,
    'The app liquid-fill animation runs',
  );
  assert.notEqual(
    await page
      .locator('.hcard-spin')
      .first()
      .evaluate((el) => getComputedStyle(el).transform),
    cardStart,
    'The restored cards animate out from behind the phone',
  );
  await page.waitForTimeout(2600);
  assert.equal(
    await page
      .locator('.splash-wordmark')
      .evaluate((el) => getComputedStyle(el).opacity),
    '1',
  );
  assert.equal(
    await page
      .locator('.splash-tagline')
      .evaluate((el) => getComputedStyle(el).opacity),
    '0.72',
  );
  assert.equal(
    await page.locator('.hero-glass').count(),
    1,
    'The reference glass panel is back in front of the cards',
  );
  assert.equal(await page.locator('.hcard-spin').count(), 4);
  assert.ok(
    await page
      .locator('.hcard')
      .evaluateAll((cards) => cards.every((c) => /₹/.test(c.textContent))),
    'All four cards show rupee amounts',
  );
  assert.ok(
    await page.evaluate(
      () =>
        Number(
          getComputedStyle(document.querySelector('.hero-phone-drift')).zIndex,
        ) >
        Math.max(...[...document.querySelectorAll('.hslot')].map((el) => Number(getComputedStyle(el).zIndex) || 0)),
    ),
    'Every card stays behind the phone',
  );
  const cardAtTop = await page
    .locator('.hslot-balance')
    .evaluate((el) => getComputedStyle(el).transform);
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'instant' }));
  await page.waitForTimeout(200);
  assert.notEqual(
    await page
      .locator('.hslot-balance')
      .evaluate((el) => getComputedStyle(el).transform),
    cardAtTop,
    'Card parallax responds to scrolling',
  );
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(200);
  assert.equal(
    await page
      .locator('[data-splash-phone]')
      .evaluate((el) => getComputedStyle(el).filter),
    'none',
    'No clipped SVG drop-shadow rectangle',
  );
  assert.equal(
    await page
      .locator('[data-splash-phone]')
      .evaluate((el) => getComputedStyle(el).backgroundColor),
    'rgba(0, 0, 0, 0)',
  );
  await page.screenshot({ path: 'artifacts/hero-splash-desktop.png' });
  const pixels = await page
    .locator('[data-splash-phone]')
    .evaluate(async (el) => {
      const url = URL.createObjectURL(
        new Blob([new XMLSerializer().serializeToString(el)], {
          type: 'image/svg+xml',
        }),
      );
      try {
        const image = new Image();
        image.src = url;
        await image.decode();
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 400;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, 200, 400);
        return {
          corner: [...ctx.getImageData(0, 0, 1, 1).data],
          screen: [...ctx.getImageData(100, 60, 1, 1).data],
        };
      } finally {
        URL.revokeObjectURL(url);
      }
    });
  assert.equal(
    pixels.corner[3],
    0,
    'The device canvas is transparent outside the phone',
  );
  assert.deepEqual(
    pixels.screen,
    [109, 87, 252, 255],
    'The violet splash stays inside the screen',
  );

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload({ waitUntil: 'networkidle' });
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1100 });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(150);
    const layout = await page.evaluate(() => {
      const phone = document
        .querySelector('.hero-phone-wrap')
        .getBoundingClientRect();
      const brand = document
        .querySelector('.splash-lockup')
        .getBoundingClientRect();
      const title = document
        .querySelector('.hero-title')
        .getBoundingClientRect();
      return {
        brandBottom: brand.bottom,
        titleTop: title.top,
        fadeStart: phone.top + phone.height * 0.7,
        phoneHeight: phone.height,
        left: phone.left,
        right: phone.right,
        overflow: document.documentElement.scrollWidth > innerWidth,
      };
    });
    assert.ok(
      layout.brandBottom < layout.titleTop,
      'The splash stays above the headline at ' + width + 'px',
    );
    assert.ok(
      layout.brandBottom < layout.fadeStart,
      'The splash is fully visible before the phone fade at ' + width + 'px',
    );
    assert.ok(layout.left >= 0 && layout.right <= width && !layout.overflow);
    assert.ok(
      layout.phoneHeight <= (width <= 809 ? 480 : 780),
      'The phone is shorter at ' + width + 'px',
    );
    if (width === 390)
      await page.screenshot({ path: 'artifacts/hero-splash-mobile.png' });
  }
  const finished = await page.locator('[data-liquid-left]').getAttribute('d');
  const stillCard = await page
    .locator('.hcard-spin')
    .first()
    .evaluate((el) => getComputedStyle(el).transform);
  const stillSlot = await page
    .locator('.hslot-balance')
    .evaluate((el) => getComputedStyle(el).transform);
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'instant' }));
  await page.waitForTimeout(400);
  assert.equal(
    await page.locator('[data-liquid-left]').getAttribute('d'),
    finished,
    'Reduced motion keeps the completed logo still',
  );
  assert.equal(
    await page
      .locator('.hcard-spin')
      .first()
      .evaluate((el) => getComputedStyle(el).transform),
    stillCard,
    'Reduced motion keeps cards still',
  );
  assert.equal(
    await page
      .locator('.hslot-balance')
      .evaluate((el) => getComputedStyle(el).transform),
    stillSlot,
    'Reduced motion disables card parallax',
  );
  assert.deepEqual(errors, []);
  console.log(
    'Hero passed: splash phone above the glass, four rupee cards behind it, scroll drift, transparent frame, responsive spacing, and reduced motion.',
  );
} finally {
  await browser.close();
}
