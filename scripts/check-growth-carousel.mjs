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
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
mkdirSync('artifacts', { recursive: true });
const carousel = () => page.locator('.growth-carousel');
const active = () => carousel().getAttribute('data-active');
const waitActive = (index) =>
  page.waitForFunction(
    (value) =>
      document.querySelector('.growth-carousel')?.dataset.active ===
      String(value),
    index,
    { timeout: 7500 },
  );
const settle = () => page.waitForTimeout(1400);
const showCarousel = async () => {
  await carousel().evaluate((el) =>
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 112,
      behavior: 'instant',
    }),
  );
  await settle();
};
const clickCard = async (index) => {
  await settle();
  const point = await page
    .locator('.gcard[data-index="' + index + '"]')
    .evaluate((card) => {
      const box = card.getBoundingClientRect();
      for (
        let y = Math.max(130, box.top + 70);
        y < Math.min(innerHeight - 30, box.bottom - 30);
        y += 25
      ) {
        for (
          let x = Math.max(10, box.left + 10);
          x < Math.min(innerWidth - 10, box.right - 10);
          x += 20
        ) {
          if (document.elementFromPoint(x, y)?.closest('.gcard') === card)
            return { x, y };
        }
      }
      return null;
    });
  assert.ok(point, 'A side card has an exposed, clickable area');
  await page.mouse.click(point.x, point.y);
  await waitActive(index);
  await settle();
  const card = page.locator('.gcard[data-index="' + index + '"]');
  const box = await card.boundingBox();
  assert.ok(
    Math.abs(box.x + box.width / 2 - 720) < 2,
    'The clicked card physically moves to the center',
  );
  assert.equal(
    await card.locator('button').getAttribute('aria-pressed'),
    'true',
  );
};

try {
  await page.goto(base + '/features', { waitUntil: 'networkidle' });
  assert.equal(await carousel().getAttribute('data-running'), 'false');
  await showCarousel();
  // Verify the entire cycle, including wrapping back to the first card.
  for (const index of [1, 2, 0]) await waitActive(index);
  await page
    .getByRole('button', { name: 'Pause growth carousel', exact: true })
    .click();
  await page.mouse.move(0, 0);
  await page.waitForFunction(() => {
    const animation = document
      .querySelector('.growth-progress')
      ?.getAnimations()[0];
    return animation?.playState === 'paused' && !animation.pending;
  });
  const progress = await page
    .locator('.growth-progress')
    .evaluate((el) => getComputedStyle(el).transform);
  await page.waitForTimeout(600);
  assert.equal(
    await page
      .locator('.growth-progress')
      .evaluate((el) => getComputedStyle(el).transform),
    progress,
    'Pause holds the progress indicator',
  );

  await clickCard(1);
  await clickCard(2);
  await carousel().screenshot({ path: 'artifacts/growth-desktop.png' });
  assert.equal(
    await carousel().getAttribute('data-paused'),
    'true',
    'Selection preserves explicit pause',
  );
  await page.locator('.gcard[data-index="2"] button').press('ArrowLeft');
  await waitActive(1);
  assert.equal(
    await page
      .locator('.gcard[data-index="1"] button')
      .evaluate((el) => el === document.activeElement),
    true,
    'Keyboard focus follows the selected card',
  );
  await page.keyboard.press('Home');
  await waitActive(0);
  await page.keyboard.press('End');
  await waitActive(2);
  await page
    .getByRole('button', { name: 'Play growth carousel', exact: true })
    .click();
  assert.equal(
    await carousel().getAttribute('data-running'),
    'false',
    'Hover holds autoplay',
  );
  await page.mouse.move(0, 0);
  await waitActive(0);
  await clickCard(1);
  await page.mouse.move(0, 0);
  await waitActive(2);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(150);
  const offscreen = await active();
  await page.waitForTimeout(5300);
  assert.equal(await active(), offscreen, 'Offscreen slides do not advance');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(
    await page
      .getByRole('button', { name: 'Pause growth carousel', exact: true })
      .count(),
    0,
  );
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await showCarousel();
    for (const [index, title] of [
      'Active job tracking',
      'Performance insights',
      'Earnings tracking',
    ].entries()) {
      await page
        .getByRole('button', {
          name: 'Show ' + title.toLowerCase(),
          exact: true,
        })
        .click();
      await waitActive(index);
      const issues = await page.locator('.gcard.is-active').evaluate((el) => {
        const card = el.getBoundingClientRect();
        const text = el.querySelector('p').getBoundingClientRect();
        return (
          card.left < 0 ||
          card.right > innerWidth ||
          text.bottom > card.bottom ||
          text.left < card.left ||
          text.right > card.right
        );
      });
      assert.equal(issues, false, title + ' fits ' + width + 'px');
    }
    assert.equal(await carousel().getAttribute('data-running'), 'false');
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      'No horizontal overflow',
    );
    const buttons = await page
      .locator('.growth-controls button')
      .evaluateAll((els) =>
        els.every((el) => el.clientWidth >= 44 && el.clientHeight >= 44),
      );
    assert.ok(buttons, 'Controls keep 44px touch targets');
    if (width === 390)
      await carousel().screenshot({ path: 'artifacts/growth-mobile.png' });
  }
  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  mobile.on('pageerror', (error) => errors.push(error.message));
  await mobile.goto(base + '/features', { waitUntil: 'networkidle' });
  await mobile.locator('.growth-carousel').evaluate((el) =>
    window.scrollTo({
      top: el.getBoundingClientRect().top + scrollY - 112,
      behavior: 'instant',
    }),
  );
  await mobile.waitForTimeout(1400);
  const cdp = await mobile.context().newCDPSession(mobile);
  await cdp.send('Input.dispatchTouchEvent', {
    type: 'touchStart',
    touchPoints: [{ x: 285, y: 350 }],
  });
  for (const x of [245, 205, 165, 125, 85]) {
    await cdp.send('Input.dispatchTouchEvent', {
      type: 'touchMove',
      touchPoints: [{ x, y: 350 }],
    });
  }
  await cdp.send('Input.dispatchTouchEvent', {
    type: 'touchEnd',
    touchPoints: [],
  });
  await mobile.waitForTimeout(1500);
  assert.equal(
    await mobile.locator('.growth-carousel').getAttribute('data-active'),
    '1',
    'A real touch swipe moves to the next card without a second click',
  );
  await mobile.close();
  assert.deepEqual(errors, []);
  console.log(
    'Growth carousel passed: full autoplay loop, click-to-center, timer pause/resume, continued autoplay after selection, keyboard navigation, offscreen pause, reduced motion, five widths, and touch swipe.',
  );
} finally {
  await browser.close();
}
