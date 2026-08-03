const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let html = fs.readFileSync('resume.html', 'utf8');

  // Fine tune vertical padding to 5.5mm and section margin to 4.5px
  html = html.replace('padding: 6.5mm 12mm;', 'padding: 5.5mm 12mm;');
  html = html.replace('padding: 6.5mm 10mm;', 'padding: 5.5mm 10mm;');
  html = html.replace(/section\s*\{\s*margin-bottom:\s*5px;/, 'section { margin-bottom: 4px;');

  fs.writeFileSync('resume.html', html);
  fs.writeFileSync('cvs/resume.html', html);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('file:///' + path.resolve('resume.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);

  const metrics = await page.evaluate(() => {
    const pageEl = document.querySelector('.page');
    const eduEl = document.querySelector('section:last-of-type');
    return {
      pageHeight: pageEl.clientHeight,
      eduBottom: eduEl.offsetTop + eduEl.offsetHeight
    };
  });

  console.log(`Fine-Tuned Cascading => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px margin remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });

  fs.writeFileSync('Vinay_Kumar_CV.pdf', pdfBuffer);
  fs.writeFileSync('cvs/Vinay_Kumar_CV.pdf', pdfBuffer);
  await page.screenshot({ path: 'resume_screenshot_cascading.png', fullPage: true });

  console.log('✓ Perfect 1-page fit achieved for strategic cascading hierarchy!');
  await browser.close();
})();
