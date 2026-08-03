const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let html = fs.readFileSync('resume.html', 'utf8');

  // Extract embedded fonts
  const embeddedMatch = html.match(/@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}/);
  const embeddedFonts = embeddedMatch ? embeddedMatch[0] : '';

  const newCss = `
${embeddedFonts}

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f4f4f6;
      font-family: "EB Garamond", "Times New Roman", Times, serif;
      color: #111;
      padding: 16px 10px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    /* Top Actions Toolbar */
    .top-toolbar {
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .btn {
      padding: 7px 16px;
      font-family: system-ui, sans-serif;
      font-size: 13px;
      font-weight: 600;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0 2px 5px rgba(0,0,0,0.12);
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.15s ease;
    }
    .btn:hover { background: #0052a3; }
    .btn-secondary { background: #475569; }
    .btn-secondary:hover { background: #334155; }

    /* The Resume Sheet */
    .page {
      background: #fff;
      width: 210mm;
      min-height: 297mm;
      padding: 6mm 12mm;
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
      page-break-inside: avoid;
      font-family: "EB Garamond", "Times New Roman", Times, serif;
      color: #111;
    }

    /* CLEAR STEPPED TYPOGRAPHY HIERARCHY */

    /* 1. Header */
    header { text-align: center; margin-bottom: 4px; }
    h1 {
      font-size: 24pt;
      font-weight: 700;
      letter-spacing: -0.2px;
      margin-bottom: 1px;
    }
    .subtitle {
      font-size: 12pt;
      font-weight: 600;
      color: #222;
      margin-bottom: 2px;
    }
    .contact-line {
      font-size: 9.8pt;
      color: #333;
    }
    .contact-line a {
      color: #0000ee;
      text-decoration: underline;
    }
    .divider { margin: 0 4px; }

    section {
      margin-bottom: 5px;
      page-break-inside: avoid;
    }

    /* 2. SECTION HEADINGS (BIGGEST IN BODY) */
    h2 {
      font-size: 13.2pt;
      font-weight: 700;
      border-bottom: 1.2px solid #111;
      padding-bottom: 2px;
      margin-top: 5px;
      margin-bottom: 4px;
      letter-spacing: 0.1px;
    }

    /* 3. ORGANIZATION HEADINGS (SECOND BIGGEST IN BODY) */
    .company-block {
      margin-bottom: 0px;
    }
    .company-block-sep {
      margin-top: 14px;
      margin-bottom: 2px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      margin-top: 3px;
      margin-bottom: 3px;
      font-size: 11.2pt;
    }
    .job-meta {
      font-size: 10pt;
      color: #333;
      font-weight: 600;
    }

    /* 4. INTERNAL SUB-HEADINGS */
    .sub-heading {
      font-weight: 700;
      font-size: 10.2pt;
      font-style: italic;
      color: #222;
      margin-top: 4px;
      margin-bottom: 1.5px;
    }

    /* 5. BODY TEXT & BULLETS */
    .summary-p {
      text-align: justify;
      margin-bottom: 4px;
      font-size: 9.8pt;
      line-height: 1.27;
    }
    ul {
      list-style-type: disc;
      margin-left: 16px;
      margin-bottom: 2px;
    }
    li {
      margin-bottom: 1.8px;
      text-align: justify;
      font-size: 9.8pt;
      line-height: 1.26;
    }
    .skills-section li {
      margin-bottom: 2.2px;
      font-size: 9.8pt;
    }
    .education-item {
      margin-bottom: 1.5px;
      font-size: 9.8pt;
    }

    @media print {
      body { background: transparent; padding: 0; }
      .top-toolbar { display: none !important; }
      .page { width: 100%; box-shadow: none; padding: 6mm 10mm; margin: 0; min-height: auto; }
      @page { size: A4; margin: 0; }
    }
  `;

  html = html.replace(/<style>[\s\S]*?<\/style>/, `<style>${newCss}</style>`);

  fs.writeFileSync('resume.html', html);
  console.log('✓ Applied stepped hierarchy: Section Headings (13.2pt) > Org Headings (11.2pt) > Sub-headings (10.2pt) > Body (9.8pt)');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('http://localhost:3000/resume.html', { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);

  const metrics = await page.evaluate(() => {
    const pageEl = document.querySelector('.page');
    const eduEl = document.querySelector('section:last-of-type');
    return {
      pageHeight: pageEl.clientHeight,
      eduBottom: eduEl.offsetTop + eduEl.offsetHeight
    };
  });

  console.log(`Stepped Hierarchy => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  await page.screenshot({ path: 'resume_screenshot_stepped_hierarchy.png', fullPage: true });
  await browser.close();
})();
