const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('=== Starting Master Deliverables Export ===');

  if (!fs.existsSync('cvs')) {
    fs.mkdirSync('cvs');
  }

  // 1. Lock in clean download toolbar
  let rawHtml = fs.readFileSync('resume.html', 'utf8');
  rawHtml = rawHtml.replace(
    /<div class="top-toolbar">[\s\S]*?<\/div>/,
    `<div class="top-toolbar">
    <a href="Vinay_Kumar_CV.pdf" download="Vinay_Kumar_CV.pdf" class="btn">⬇️ Download PDF</a>
    <a href="Vinay_Kumar_CV.docx" download="Vinay_Kumar_CV.docx" class="btn btn-secondary">⬇️ Download Word (.docx)</a>
  </div>`
  );
  fs.writeFileSync('resume.html', rawHtml);
  fs.writeFileSync('cvs/resume.html', rawHtml);

  // 2. Generate PDF
  console.log('Generating pixel-perfect PDF...');
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
  await browser.close();
  console.log('✓ PDF generated successfully in root and cvs/');

  console.log('=== Master Export Complete ===');
})();
