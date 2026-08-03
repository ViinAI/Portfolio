const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('http://localhost:3000/resume.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'resume_dropdown_live.png', fullPage: true });
  console.log('✓ Captured screenshot with clean 4-font dropdown!');
  await browser.close();
})();
