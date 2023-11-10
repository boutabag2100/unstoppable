const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to a web page
  await page.goto('https://example.com');

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
