const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  const rawHtml = fs.readFileSync('resume.html', 'utf8');

  // Extract embedded fonts
  const embeddedMatch = rawHtml.match(/@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}/);
  const embeddedFonts = embeddedMatch ? embeddedMatch[0] : '';

  const scales = [
    {
      name: "Standard Hierarchy: Base 9.8pt",
      bodySize: "9.8pt",
      h1Size: "22pt",
      subtitleSize: "11.5pt",
      h2Size: "11pt",
      jobSize: "10pt",
      subHeadSize: "9.5pt",
      contactSize: "9.5pt",
      lineHeight: "1.28",
      padV: "7mm"
    },
    {
      name: "Standard Hierarchy: Base 10.0pt",
      bodySize: "10pt",
      h1Size: "23pt",
      subtitleSize: "12pt",
      h2Size: "11.2pt",
      jobSize: "10.2pt",
      subHeadSize: "9.8pt",
      contactSize: "9.8pt",
      lineHeight: "1.27",
      padV: "6mm"
    },
    {
      name: "Standard Hierarchy: Base 10.2pt",
      bodySize: "10.2pt",
      h1Size: "24pt",
      subtitleSize: "12pt",
      h2Size: "11.5pt",
      jobSize: "10.5pt",
      subHeadSize: "10pt",
      contactSize: "10pt",
      lineHeight: "1.26",
      padV: "5mm"
    }
  ];

  for (let s of scales) {
    const css = `
${embeddedFonts}
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f4f4f6;
      font-family: "EB Garamond", "Times New Roman", Times, serif;
      color: #111;
      line-height: ${s.lineHeight};
      font-size: ${s.bodySize};
      padding: 15px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .actions-bar { margin-bottom: 14px; display: flex; gap: 12px; }
    .btn {
      padding: 8px 16px;
      font-family: system-ui, sans-serif;
      font-size: 13px;
      font-weight: 600;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.12);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn:hover { background: #0052a3; }
    .btn-secondary { background: #4b5563; }
    .btn-secondary:hover { background: #374151; }
    .page {
      background: #fff;
      width: 210mm;
      min-height: 297mm;
      padding: ${s.padV} 12mm;
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
      page-break-inside: avoid;
    }
    header { text-align: center; margin-bottom: 5px; }
    h1 { font-size: ${s.h1Size}; font-weight: 700; letter-spacing: -0.3px; margin-bottom: 1px; }
    .subtitle { font-size: ${s.subtitleSize}; font-weight: 600; color: #222; margin-bottom: 2px; }
    .contact-line { font-size: ${s.contactSize}; color: #333; }
    .contact-line a { color: #0000ee; text-decoration: underline; }
    .divider { margin: 0 4px; }
    section { margin-bottom: 5px; page-break-inside: avoid; }
    h2 {
      font-size: ${s.h2Size};
      font-weight: 700;
      border-bottom: 1px solid #111;
      padding-bottom: 1px;
      margin-bottom: 3px;
    }
    .summary-p {
      text-align: justify;
      margin-bottom: 4px;
      font-size: ${s.bodySize};
      line-height: ${s.lineHeight};
    }
    .company-block { margin-bottom: 2px; }
    .company-block-sep { margin-top: 5.5px; }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      margin-top: 4.5px;
      margin-bottom: 2px;
      font-size: ${s.jobSize};
      padding-bottom: 1.5px;
      border-bottom: 0.75px solid #9ca3af;
    }
    .sub-heading {
      font-weight: 700;
      font-size: ${s.subHeadSize};
      font-style: italic;
      color: #333;
      margin-top: 3px;
      margin-bottom: 1px;
    }
    ul { list-style-type: disc; margin-left: 16px; margin-bottom: 2px; }
    li {
      margin-bottom: 1.8px;
      text-align: justify;
      font-size: ${s.bodySize};
      line-height: ${s.lineHeight};
    }
    .skills-section li { margin-bottom: 2px; }
    .education-item { margin-bottom: 1px; font-size: ${s.bodySize}; }
    @media print {
      body { background: transparent; padding: 0; }
      .actions-bar { display: none; }
      .page { width: 100%; box-shadow: none; padding: ${s.padV} 10mm; margin: 0; min-height: auto; }
      @page { size: A4; margin: 0; }
    }
    `;

    let testHtml = rawHtml.replace(/<style>[\s\S]*?<\/style>/, `<style>${css}</style>`);
    fs.writeFileSync('resume_test_scale.html', testHtml);

    await page.goto('file:///' + path.resolve('resume_test_scale.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
    await page.evaluate(async () => await document.fonts.ready);

    const metrics = await page.evaluate(() => {
      const pageEl = document.querySelector('.page');
      const eduEl = document.querySelector('section:last-of-type');
      return {
        pageHeight: pageEl.clientHeight,
        eduBottom: eduEl.offsetTop + eduEl.offsetHeight
      };
    });

    console.log(`${s.name} => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px margin remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);
  }

  await browser.close();
})();
