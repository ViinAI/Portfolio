const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

if (!fs.existsSync('cvs')) {
  fs.mkdirSync('cvs');
}

(async () => {
  console.log('Generating exact pixel-perfect 1-page PDF...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  const resumeHtmlPath = 'file:///' + path.resolve('resume.html').replace(/\\/g, '/');
  console.log('Loading:', resumeHtmlPath);
  
  await page.goto(resumeHtmlPath, { waitUntil: 'networkidle' });
  
  // Wait for all embedded fonts to be active
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await page.waitForTimeout(500);

  // Render to root and cvs/
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: {
      top: '0mm',
      bottom: '0mm',
      left: '0mm',
      right: '0mm'
    }
  });

  fs.writeFileSync('Vinay_Kumar_CV.pdf', pdfBuffer);
  fs.writeFileSync('cvs/Vinay_Kumar_CV.pdf', pdfBuffer);
  fs.copyFileSync('resume.html', 'cvs/resume.html');

  console.log('✓ Vinay_Kumar_CV.pdf and cvs/ deliverables generated successfully!');
  await browser.close();
})();
