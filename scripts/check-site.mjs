import assert from 'node:assert/strict';
import { existsSync, mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const baseURL = process.env.SITE_URL || 'http://127.0.0.1:5180';
const browser = await chromium.launch({
  headless: true,
  ...(existsSync('C:/Program Files/Google/Chrome/Application/chrome.exe')
    ? { channel: 'chrome' }
    : {}),
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text());
});
await page.emulateMedia({ reducedMotion: 'reduce' });
mkdirSync('artifacts', { recursive: true });

// Routes the app serves. Used to validate every internal link.
const ROUTES = [
  /^\/$/,
  /^\/about$/,
  /^\/features$/,
  /^\/pricing$/,
  /^\/blog$/,
  /^\/blog\/[a-z0-9-]+$/,
  /^\/careers$/,
  /^\/careers\/[a-z0-9-]+$/,
  /^\/contact$/,
  /^\/changelog$/,
  /^\/terms-and-conditions$/,
  /^\/data-deletion$/,
  /^\/privacy-policy$/,
  /^\/404$/,
];
const PAGES = [
  ['/', /Better work/i],
  ['/about', /About Tazmify/i],
  ['/features', /Everything collab/i],
  ['/pricing', /Simple Connects/i],
  ['/blog', /^Blog$/i],
  ['/careers', /Build the future/i],
  ['/contact', /here to help/i],
  ['/changelog', /Changelog/i],
  ['/terms-and-conditions', /Terms & conditions/i],
  ['/data-deletion', /Data deletion/i],
  ['/privacy-policy', /Privacy policy/i],
  ['/this-page-does-not-exist', /404/],
];

const scrollThrough = async () => {
  const total = await page.evaluate(
    () => document.documentElement.scrollHeight,
  );
  for (let y = 0; y < total; y += 600) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(60);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
};

// The pages are taller than Chromium's single-image screenshot limit, so the
// "full" capture is a numbered sequence of viewport-height screenshots.
const captureSequence = async (prefix) => {
  const { total, step } = await page.evaluate(() => ({
    total: document.documentElement.scrollHeight,
    step: innerHeight,
  }));
  let index = 0;
  for (let y = 0; y < total && index < 40; y += step) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(250);
    await page.screenshot({
      path: `artifacts/${prefix}-${String(index).padStart(2, '0')}.png`,
    });
    index += 1;
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
};

const checkLinks = async (label) => {
  const bad = await page.locator('a[href]').evaluateAll((links) =>
    links
      .map((a) => a.getAttribute('href'))
      .filter((href) => href && !/^(https?:|mailto:|tel:|#)/.test(href))
      .map((href) => href.split(/[?#]/)[0]),
  );
  const unknown = [...new Set(bad)].filter(
    (href) => !ROUTES.some((re) => re.test(href)),
  );
  assert.deepEqual(unknown, [], `${label}: every internal link needs a route`);

  const missingHashes = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .filter(
          (a) =>
            a.hash &&
            a.hash !== '#top' &&
            !document.getElementById(a.hash.slice(1)),
        )
        .map((a) => a.getAttribute('href')),
    );
  assert.deepEqual(
    missingHashes,
    [],
    `${label}: every hash link needs a target`,
  );
};

const checkOverflow = async (label) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.waitForTimeout(120);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `${label}: horizontal overflow at ${width}px`,
    );
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
};

try {
  // ---- Home
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  assert.match(await page.title(), /^Tazmify/);
  assert.equal(await page.locator('h1').count(), 1);
  await checkLinks('home');

  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(400);
  assert.equal(
    await page
      .locator('header.nav')
      .evaluate((el) => el.classList.contains('is-compact')),
    true,
    'Nav should switch to the compact state after scrolling',
  );
  await page.evaluate(() => window.scrollTo(0, 0));

  const acc = page.locator('.acc-row').nth(2);
  await acc.scrollIntoViewIfNeeded();
  await acc.locator('button').click();
  assert.equal(
    await acc.evaluate((el) => el.classList.contains('is-active')),
    true,
  );

  const prices = page.locator('.plan-price strong');
  await prices.first().scrollIntoViewIfNeeded();
  assert.deepEqual(
    (await prices.allInnerTexts()).map((t) => t.replace(/\s/g, '')),
    ['₹99', '₹249', '₹699'],
    'Pricing should list the three Connects packs from the app',
  );

  const faq = page.locator('.faq-item').nth(1);
  await faq.scrollIntoViewIfNeeded();
  await faq.locator('button').click();
  await page.waitForTimeout(400);
  assert.equal(
    await faq.evaluate((el) => el.classList.contains('is-open')),
    true,
  );
  await faq.locator('button').click();
  await page.waitForTimeout(400);
  assert.equal(
    await faq.evaluate((el) => el.classList.contains('is-open')),
    false,
  );

  await checkOverflow('home');
  await scrollThrough();
  await page.screenshot({ path: 'artifacts/desktop-hero.png' });
  await captureSequence('desktop');

  // ---- Client-side navigation from the nav
  await page.evaluate(() => window.scrollTo(0, 0));
  await page
    .locator('#site-menu')
    .getByRole('link', { name: 'About', exact: true })
    .click();
  await page.waitForURL(/\/about$/);
  await page.waitForTimeout(400);
  assert.match(await page.locator('h1').innerText(), /About Tazmify/i);
  assert.equal(
    await page.evaluate(() => window.scrollY),
    0,
    'Route change should scroll to top',
  );

  // ---- Every page
  for (const [path, h1] of PAGES) {
    await page.goto(baseURL + path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    assert.equal(
      await page.locator('h1').count(),
      1,
      `${path}: exactly one h1`,
    );
    assert.match(await page.locator('h1').innerText(), h1, `${path}: h1 text`);
    await checkLinks(path);
    await checkOverflow(path);
    await scrollThrough();
    await page.screenshot({
      path: `artifacts/page${path.replace(/\//g, '-') || '-home'}.png`,
    });
  }

  // Detail pages reached from their indexes
  await page.goto(`${baseURL}/blog`, { waitUntil: 'networkidle' });
  const firstPost = page.locator('.featured h2 a');
  const postTitle = await firstPost.innerText();
  await firstPost.click();
  await page.waitForURL(/\/blog\/.+/);
  await page.waitForTimeout(300);
  assert.equal(
    (await page.locator('h1').innerText()).toLowerCase(),
    postTitle.toLowerCase(),
  );
  await checkOverflow('blog post');

  await page.goto(`${baseURL}/careers`, { waitUntil: 'networkidle' });
  const firstJob = page.locator('.job h3 a').first();
  const jobTitle = await firstJob.innerText();
  await firstJob.click();
  await page.waitForURL(/\/careers\/.+/);
  await page.waitForTimeout(300);
  assert.equal(
    (await page.locator('h1').innerText()).toLowerCase(),
    jobTitle.toLowerCase(),
  );
  await checkOverflow('job post');

  // Blog filter and contact form
  await page.goto(`${baseURL}/blog`, { waitUntil: 'networkidle' });
  const before = await page.locator('.blog-grid-3 .post').count();
  await page.getByRole('tab', { name: 'Brands' }).click();
  await page.waitForTimeout(200);
  const after = await page.locator('.blog-grid-3 .post').count();
  assert.ok(after > 0 && after < before, 'Blog filter should narrow the list');

  await page.goto(`${baseURL}/contact`, { waitUntil: 'networkidle' });
  await page.fill('#first-name', 'Alex');
  await page.fill('#last-name', 'Rivera');
  await page.fill('#email', 'alex@example.com');
  await page.fill('#message', 'Hello');
  await page.click('.contact-submit');
  await page.waitForTimeout(100);
  assert.match(await page.locator('.contact-submit').innerText(), /Thanks/);

  // ---- Mobile
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: 'Open menu' }).click();
  assert.equal(
    await page
      .getByRole('button', { name: 'Close menu' })
      .getAttribute('aria-expanded'),
    'true',
  );
  await page
    .locator('#site-menu')
    .getByRole('link', { name: 'Features', exact: true })
    .click();
  await page.waitForURL(/\/features$/);
  await page.waitForTimeout(300);
  assert.equal(
    await page
      .getByRole('button', { name: 'Open menu' })
      .getAttribute('aria-expanded'),
    'false',
    'Menu should close after navigating',
  );
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await scrollThrough();
  await page.screenshot({ path: 'artifacts/mobile-hero.png' });
  await captureSequence('mobile');

  const brokenImages = await page.locator('img').evaluateAll((images) =>
    images
      .filter((img) => img.getClientRects().length > 0)
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.src),
  );
  assert.deepEqual(brokenImages, [], 'All images should load');
  assert.deepEqual(errors, [], 'No browser runtime errors');
  console.log(
    `Passed: home interactions, nav collapse, client-side navigation, ${PAGES.length} pages, blog post, job post, blog filter, contact form, mobile menu, images, links and overflow at five widths.`,
  );
} finally {
  await browser.close();
}
