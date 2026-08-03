const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1700 } });
  
  const url = 'file:///' + path.resolve('resume.html').replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: 'resume_screenshot.png', fullPage: true });
  console.log('✓ Screenshot saved to resume_screenshot.png');
  await browser.close();
})();
