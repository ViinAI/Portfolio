const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Generating exact pixel-perfect 1-page PDF from screen layout...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  const resumeHtmlPath = 'file:///' + path.resolve('resume.html').replace(/\\/g, '/');
  console.log('Loading:', resumeHtmlPath);
  
  await page.goto(resumeHtmlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000); // Ensure Google Fonts are fully rendered

  // Render the exact page element without artificial print margins
  await page.pdf({
    path: 'Vinay_Kumar_CV.pdf',
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

  console.log('✓ Vinay_Kumar_CV.pdf (exact 1-page) generated successfully!');
  await browser.close();
})();
