const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('Generating exact pixel-perfect 1-page PDF with embedded fonts...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  const resumeHtmlPath = 'file:///' + path.resolve('resume.html').replace(/\\/g, '/');
  console.log('Loading:', resumeHtmlPath);
  
  await page.goto(resumeHtmlPath, { waitUntil: 'networkidle' });
  
  // Wait for all embedded fonts to be active in the rendering engine
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await page.waitForTimeout(500);

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

  console.log('✓ Vinay_Kumar_CV.pdf generated with exact font matching!');
  await browser.close();
})();
