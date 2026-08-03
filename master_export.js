const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('=== Compiling Official Deliverables to cvs/ ===');

  if (!fs.existsSync('cvs')) {
    fs.mkdirSync('cvs');
  }

  // 1. Sync resume.html to cvs/resume.html
  const liveHtml = fs.readFileSync('resume.html', 'utf8');
  fs.writeFileSync('cvs/resume.html', liveHtml);
  console.log('✓ cvs/resume.html synchronized');

  // 2. Generate PDF using Playwright
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('file:///' + path.resolve('resume.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);
  await page.waitForTimeout(500);

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });

  fs.writeFileSync('Vinay_Kumar_CV.pdf', pdfBuffer);
  fs.writeFileSync('cvs/Vinay_Kumar_CV.pdf', pdfBuffer);
  await page.screenshot({ path: 'resume_screenshot.png', fullPage: true });
  console.log('✓ cvs/Vinay_Kumar_CV.pdf generated');

  await browser.close();
})();
