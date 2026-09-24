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
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
mkdirSync('artifacts', { recursive: true });
const titles = [
  'Direct chat with brands',
  'Briefs & deliverables',
  'Trust & safety',
];
const paragraphs = [
  'Pitch, negotiate and agree on the details in one thread, with nothing lost in email.',
  'Every campaign becomes a clear checklist with formats, dates and approvals.',
  'Verified profiles and protected payments keep every collaboration fair.',
];

const settleScene = async (index) => {
  await page.locator(`.deal[data-step="${index}"]`).waitFor();
  await page.waitForFunction(() => {
    const phone = document.querySelector('.deals-window .deal-device');
    return phone?.querySelector('[data-phone-screen]');
  });
  await page.waitForTimeout(2100);
};

const checkLayout = async (deal, label) => {
  const issues = await deal.evaluate((el) => {
    const rect = (selector) =>
      el.querySelector(selector).getBoundingClientRect();
    const phone = rect('.deal-device');
    const screen = rect('.deal-screen');
    const failures = [];
    if (phone.width < 100 || phone.height < 250)
      failures.push('Device too small');
    if (
      phone.left < screen.left ||
      phone.right > screen.right ||
      phone.top < screen.top ||
      phone.bottom > screen.bottom
    )
      failures.push('Device outside screen');
    for (const accent of el.querySelectorAll('.deal-accent, .deal-badge')) {
      const box = accent.getBoundingClientRect();
      if (
        box.left < phone.right &&
        box.right > phone.left &&
        box.top < phone.bottom &&
        box.bottom > phone.top
      )
        failures.push(`${accent.className} overlaps phone`);
      if (box.left < screen.left || box.right > screen.right)
        failures.push(`${accent.className} outside screen`);
    }
    return failures;
  });
  assert.deepEqual(issues, [], label);
};

try {
  await page.goto(`${base}/features`, { waitUntil: 'networkidle' });
  await page.locator('.deals-track').evaluate((el) => {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY + 80,
      behavior: 'instant',
    });
  });
  for (let index = 0; index < 3; index++) {
    if (index)
      await page
        .getByRole('button', {
          name: `Step ${index + 1}: ${titles[index]}`,
          exact: true,
        })
        .click();
    await settleScene(index);
    if (index)
      assert.equal(
        await page
          .getByRole('button', {
            name: `Step ${index + 1}: ${titles[index]}`,
            exact: true,
          })
          .evaluate((el) => el === document.activeElement),
        true,
        'Step selection retains keyboard focus',
      );
    assert.equal(
      await page.locator('.deals-window .deal').count(),
      1,
      'Only one desktop scene is mounted',
    );
    const deal = page.locator('.deals-window .deal');
    assert.equal(await deal.locator('h3').innerText(), titles[index]);
    assert.equal(await deal.locator('p').innerText(), paragraphs[index]);
    await deal.screenshot({ path: `artifacts/deals-${index}.png` });
    await checkLayout(deal, `Desktop step ${index + 1}`);
  }
  await page.locator('.deals-track').evaluate((el) =>
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY + 40,
      behavior: 'instant',
    }),
  );
  await settleScene(0);
  assert.equal(
    await page.locator('.deals-window').getAttribute('data-active-step'),
    '0',
    'Scrolling back restores the first step',
  );

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(
    await page.locator('.deals-track').count(),
    0,
    'Reduced motion uses normal document flow',
  );
  assert.equal(await page.locator('.deals-static .deal').count(), 3);
  // Phones ignore reduce-motion (client decision), so the static layout is
  // only checked on larger screens.
  for (const width of [1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (let index = 0; index < 3; index++) {
      const deal = page.locator(`.deal[data-step="${index}"]`);
      await deal.scrollIntoViewIfNeeded();
      await page.waitForTimeout(150);
      if (width === 390)
        await deal.screenshot({ path: `artifacts/deals-mobile-${index}.png` });
      await checkLayout(deal, `${width}px step ${index + 1}`);
      assert.equal(
        await deal
          .locator('.deal-device-wrap')
          .evaluate((el) => getComputedStyle(el).animationName),
        'none',
      );
    }
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `No overflow at ${width}px`,
    );
  }
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: 'networkidle' });
  // Phones keep the pinned, scroll-driven stage (all animations stay on).
  assert.equal(
    await page.locator('.deals-track .deal-stage').count(),
    1,
    'Mobile keeps the pinned scroll stage',
  );
  assert.equal(
    await page.locator('.deal').first().getAttribute('data-visible'),
    'false',
  );
  assert.equal(
    await page
      .locator('.deal-device-wrap')
      .first()
      .evaluate((el) => getComputedStyle(el).animationPlayState),
    'paused',
    'Offscreen artwork is paused',
  );
  await page.locator('.deal').first().scrollIntoViewIfNeeded();
  await page.waitForFunction(
    () => document.querySelector('.deal')?.dataset.visible === 'true',
  );
  assert.equal(
    await page
      .locator('.deal-device-wrap')
      .first()
      .evaluate((el) => getComputedStyle(el).animationPlayState),
    'running',
  );
  assert.deepEqual(errors, []);
  console.log(
    'Deals checks passed: scene navigation, preserved copy, clear devices at five widths, mobile pinned stage, reduced motion, and offscreen pause.',
  );
} finally {
  await browser.close();
}
