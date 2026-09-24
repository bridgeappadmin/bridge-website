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
const scene = () => page.locator('.kf-stage').getAttribute('data-scene');
const waitForScene = (expected) =>
  page.waitForFunction(
    (value) =>
      document.querySelector('.kf-stage')?.dataset.scene === String(value),
    expected,
    { timeout: 9000 },
  );

try {
  await page.goto(`${base}/features`, { waitUntil: 'networkidle' });
  await page.locator('.kf-stage').waitFor({ state: 'attached' });
  assert.equal(
    await page.locator('.kf-stage').getAttribute('data-running'),
    'false',
    'Tour must stay idle before the section is visible',
  );
  await page.locator('.kf-art-card').scrollIntoViewIfNeeded();
  await waitForScene(1);
  await page
    .getByRole('button', { name: 'Pause feature animation', exact: true })
    .click();
  const pausedScene = await scene();
  await page.waitForFunction(() => {
    const animation = document
      .querySelector('.kf-tour-progress')
      ?.getAnimations()[0];
    return animation && animation.playState === 'paused' && !animation.pending;
  });
  const progress = await page
    .locator('.kf-tour-progress')
    .evaluate((el) => getComputedStyle(el).transform);
  await page.waitForTimeout(700);
  assert.equal(await scene(), pausedScene);
  assert.equal(
    await page
      .locator('.kf-tour-progress')
      .evaluate((el) => getComputedStyle(el).transform),
    progress,
    'Pause must freeze progress',
  );
  assert.equal(
    await page
      .locator('.kf-creator-center')
      .evaluate((el) => getComputedStyle(el).animationPlayState),
    'paused',
    'Pause must freeze scene artwork',
  );

  await page
    .getByRole('button', { name: 'Play feature animation', exact: true })
    .click();
  await waitForScene(2);
  await page
    .getByRole('button', { name: 'Show custom alerts', exact: true })
    .click();
  await page.waitForTimeout(7200);
  assert.equal(await scene(), '3', 'Manual selection must remain selected');
  assert.equal(
    await page.locator('.kf-stage').getAttribute('data-auto'),
    'false',
  );

  await page
    .getByRole('button', { name: 'Play feature animation', exact: true })
    .click();
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(200);
  assert.equal(
    await page.locator('.kf-stage').getAttribute('data-running'),
    'false',
  );
  const offscreenScene = await scene();
  await page.waitForTimeout(7000);
  assert.equal(
    await scene(),
    offscreenScene,
    'Tour must not advance offscreen',
  );
  await page.close();

  const still = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
  });
  still.on('pageerror', (error) => errors.push(error.message));
  await still.goto(`${base}/features`, { waitUntil: 'networkidle' });
  await still.locator('.kf-grid').scrollIntoViewIfNeeded();
  assert.equal(
    await still.locator('.kf-stage').getAttribute('data-running'),
    'false',
  );
  assert.equal(
    await still.locator('.kf-playback').count(),
    0,
    'Reduced motion does not offer autoplay',
  );

  for (let index = 0; index < 4; index++) {
    await still.locator('.kf-grid .acc-row button').nth(index).click();
    await still.waitForTimeout(100);
    assert.equal(
      await still.locator('.kf-stage').getAttribute('data-scene'),
      String(index),
    );
    const button = still.locator('.kf-grid .acc-row button').nth(index);
    assert.equal(await button.getAttribute('aria-expanded'), 'true');
    const controlled = await button.getAttribute('aria-controls');
    assert.equal(
      await still.locator(`[id="${controlled}"]`).getAttribute('aria-hidden'),
      'false',
    );
    assert.equal(
      await still
        .locator('.kf-stage')
        .evaluate(
          (el) =>
            el
              .getAnimations({ subtree: true })
              .filter((animation) => animation.playState === 'running').length,
        ),
      0,
      'Reduced-motion artwork stays still',
    );
    await still
      .locator('.kf-grid')
      .screenshot({ path: `artifacts/features-${index}.png` });
  }

  for (const width of [320, 390, 768, 1024, 1440]) {
    await still.setViewportSize({ width, height: 1000 });
    await still.locator('.kf-scene-nav button').first().click();
    // Phones animate (reduce-motion is ignored there), so let the scene
    // crossfade finish and measure the newest scene.
    await still.waitForTimeout(width < 810 ? 1400 : 100);
    const art = await still.locator('.kf-folder-front').last().boundingBox();
    const caption = await still.locator('.kf-caption').boundingBox();
    assert(
      art.y + art.height <= caption.y,
      `Artwork should clear its caption at ${width}px`,
    );
    assert.equal(
      await still.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `No overflow at ${width}px`,
    );
  }

  await still.setViewportSize({ width: 390, height: 844 });
  await still.locator('.kf-art-card').evaluate((el) =>
    window.scrollTo({
      top: el.getBoundingClientRect().top + scrollY - 112,
      behavior: 'instant',
    }),
  );
  await still.waitForTimeout(200);
  await still
    .locator('.kf-art-card')
    .screenshot({ path: 'artifacts/features-mobile.png' });
  assert.deepEqual(errors, []);
  console.log(
    'Feature checks passed: autoplay, pause/resume, manual selection, offscreen pause, four static reduced-motion scenes, accessible accordion, caption clearance and five viewport widths.',
  );
  await still.close();
} finally {
  await browser.close();
}
