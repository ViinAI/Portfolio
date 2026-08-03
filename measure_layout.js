const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function testLayout(fontSize, lineHeight, sectionMargin, liMargin, padTop, padBot) {
  let html = fs.readFileSync('resume.html', 'utf8');
  
  // Replace variables in CSS
  html = html.replace(/font-size:\s*[\d\.]+pt;/, `font-size: ${fontSize}pt;`);
  html = html.replace(/line-height:\s*[\d\.]+;/, `line-height: ${lineHeight};`);
  
  fs.writeFileSync('resume_test.html', html);
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'file:///' + path.resolve('resume_test.html').replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle' });
  
  const pageContentHeight = await page.evaluate(() => {
    const el = document.querySelector('.page');
    return el ? el.scrollHeight : 0;
  });
  
  // Also check PDF page count
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });
  
  await browser.close();
  return { pageContentHeight };
}

(async () => {
  console.log('Testing layout heights...');
  // A4 at 96 DPI is ~1123px height. Inside .page container with ~297mm, 1000-1080px is ideal.
})();
