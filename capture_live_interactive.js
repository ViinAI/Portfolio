const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('http://localhost:3000/resume.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'resume_interactive_live.png', fullPage: true });
  console.log('✓ Captured live screenshot of interactive resume toolbar!');
  await browser.close();
})();
