// Renders scripts/og-card.html to public/og-image.jpg (1200x630), the image
// shown when the site is shared on WhatsApp, LinkedIn, X, Slack and others.
import { chromium } from 'playwright';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const browser = await chromium.launch({
  ...(existsSync('C:/Program Files/Google/Chrome/Application/chrome.exe')
    ? { channel: 'chrome' }
    : {}),
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(resolve('scripts/og-card.html')).href, {
  waitUntil: 'load',
});
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.screenshot({
  path: 'public/og-image.jpg',
  type: 'jpeg',
  quality: 86,
});
await browser.close();
console.log('wrote public/og-image.jpg');
