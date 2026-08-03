const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  // We will test and adjust resume.html
  const url = 'file:///' + path.resolve('resume.html').replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle' });
  
  const metrics = await page.evaluate(() => {
    const pageEl = document.querySelector('.page');
    const eduEl = document.querySelector('section:last-of-type');
    return {
      pageHeight: pageEl.clientHeight,
      pageScrollHeight: pageEl.scrollHeight,
      eduBottom: eduEl.offsetTop + eduEl.offsetHeight
    };
  });

  console.log('Current layout metrics:', metrics);
  
  // Render PDF
  await page.pdf({
    path: 'Vinay_Kumar_CV.pdf',
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });

  await page.screenshot({ path: 'resume_screenshot.png', fullPage: true });
  console.log('Done rendering.');
  await browser.close();
})();
