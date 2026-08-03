const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const scaledHtml = fs.readFileSync('resume_test__5_0__Bigger_Fonts.html', 'utf8');

  fs.writeFileSync('resume.html', scaledHtml);
  fs.writeFileSync('cvs/resume.html', scaledHtml);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('file:///' + path.resolve('resume.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });

  fs.writeFileSync('Vinay_Kumar_CV.pdf', pdfBuffer);
  fs.writeFileSync('cvs/Vinay_Kumar_CV.pdf', pdfBuffer);
  await page.screenshot({ path: 'resume_screenshot.png', fullPage: true });

  console.log('✓ +5% larger typography applied to resume.html and cvs/ deliverables!');
  await browser.close();
})();
