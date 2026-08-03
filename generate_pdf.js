const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Generating exact 1-page PDF from Latin Modern Roman LaTeX template...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const resumeHtmlPath = 'file:///' + path.resolve('resume.html').replace(/\\/g, '/');
  console.log('Loading:', resumeHtmlPath);
  
  await page.goto(resumeHtmlPath, { waitUntil: 'networkidle' });

  // Render strictly page 1
  await page.pdf({
    path: 'Vinay_Kumar_CV.pdf',
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: {
      top: '10mm',
      bottom: '10mm',
      left: '12mm',
      right: '12mm'
    }
  });

  console.log('✓ Vinay_Kumar_CV.pdf (exact 1-page) generated successfully!');
  await browser.close();
})();
