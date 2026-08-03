const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  const experienceHtml = `
    <section>
      <h2>Professional Experience</h2>

      <div class="company-block">
        <div class="job-header">
          <div><strong class="company-name">Infosys</strong> <span class="role-title">— Senior AI Engineer</span></div>
          <div class="job-meta">Dec 2024 – Present</div>
        </div>

        <div class="sub-heading">Foundational Components</div>
        <ul>
          <li><strong>Execution Harness:</strong> Designed and built a bespoke event-driven agent execution engine supporting deterministic state reconstruction, checkpointing, and long-running workflow continuity across distributed agent instances.</li>
          <li><strong>Sandbox:</strong> Built an isolated execution sandbox leveraging gVisor for secure, reproducible execution of untrusted agent code, MCP servers, and dynamically loaded skills.</li>
          <li><strong>MCP Platform:</strong> Created a platform for importing, building, and hosting Model Context Protocol (MCP) servers with AI-assisted authoring, validation, and lifecycle management.</li>
        </ul>

        <div class="sub-heading">Products</div>
        <ul>
          <li><strong>Process-Centric Harness:</strong> Composed foundational components into a full product enabling end-to-end process authoring, skill linking, OpenAPI spec onboarding, and autonomous execution. Deployed across multiple enterprise clients and under active go-to-market.</li>
          <li><strong>User-Centric Harness:</strong> Built a multi-surface developer platform — including Web Portal (AGUI/A2UI), CLI, and VS Code Extension — exposing agent capabilities for developer and operational workflows.</li>
        </ul>

        <div class="sub-heading">Solution Architecture &amp; Deal Wins</div>
        <ul>
          <li>Independently architected diverse AI solutions — including a $300M Telecom transformation, Digital Tutor platform, and CMDB platform — driving multiple deal wins for Infosys.</li>
        </ul>

        <div class="sub-heading">Technical</div>
        <ul>
          <li><strong>LLM Compiler:</strong> Built a proprietary LLM execution optimizer with dynamic prompt planning and semantic caching, reducing median query latency by 35%.</li>
        </ul>
      </div>

      <div class="company-block company-block-sep">
        <div class="job-header">
          <div><strong class="company-name">Xcaliber Infotech</strong> <span class="company-sub">(A Phoenix Group Company)</span> <span class="role-title">— Data Scientist / AI-ML Engineer</span></div>
          <div class="job-meta">Dec 2022 – Dec 2024 | Pune</div>
        </div>
        <ul>
          <li><strong>Summarization Microservice:</strong> Built a high-throughput text summarization service using LLaMA, BART, spaCy, and PyTorch to process OEM delivery waiver comments, integrating with warehouse ERP systems.</li>
          <li><strong>Enterprise RAG Assistant:</strong> Developed a conversational assistant using LangChain, ChromaDB, and Hugging Face Transformers, reducing internal document lookup time by 40%.</li>
          <li><strong>Accessory Recommender:</strong> Designed a location-aware affinity recommendation engine matching regional inventory with purchase patterns, boosting weekly accessory bundle sales by 25%.</li>
          <li><strong>API &amp; Telemetry Layer:</strong> Developed REST APIs and real-time operations dashboards for role-based analytics and audit tracking.</li>
        </ul>
      </div>

      <div class="company-block company-block-sep">
        <div class="job-header">
          <div><strong class="company-name">Concentrix India</strong> <span class="role-title">— Data Analyst</span></div>
          <div class="job-meta">Oct 2015 – Apr 2017 | Gurgaon</div>
        </div>
        <ul>
          <li><strong>Analytics Pipelines:</strong> Built automated Python and SQL ETL pipelines and executive reporting dashboards.</li>
          <li><strong>Predictive Modeling:</strong> Performed regression and classification modeling for business forecasting and workforce planning.</li>
        </ul>
      </div>
    </section>
  `;

  let rawHtml = fs.readFileSync('resume.html', 'utf8');
  
  // Replace the experience section
  let newHtml = rawHtml.replace(/<section>\s*<h2>Professional Experience<\/h2>[\s\S]*?<\/section>/, experienceHtml);

  // Clean, classic typography & hierarchy
  const refinedCss = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f4f4f6;
      font-family: "EB Garamond", "Times New Roman", Times, serif;
      color: #111;
      line-height: 1.28;
      font-size: 9.6pt;
      padding: 15px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .actions-bar {
      margin-bottom: 14px;
      display: flex;
      gap: 12px;
    }
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
      padding: 7.5mm 12mm;
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
      page-break-inside: avoid;
    }
    header { text-align: center; margin-bottom: 5.5px; }
    h1 { font-size: 22pt; font-weight: 700; letter-spacing: -0.3px; margin-bottom: 1px; }
    .subtitle { font-size: 11.3pt; font-weight: 600; color: #222; margin-bottom: 2px; }
    .contact-line { font-size: 9.3pt; color: #333; }
    .contact-line a { color: #0000ee; text-decoration: underline; }
    .divider { margin: 0 4px; }
    section { margin-bottom: 6px; page-break-inside: avoid; }
    h2 {
      font-size: 10.6pt;
      font-weight: 700;
      border-bottom: 1px solid #111;
      padding-bottom: 1.5px;
      margin-bottom: 3.5px;
    }
    .summary-p {
      text-align: justify;
      margin-bottom: 4.5px;
      font-size: 9.6pt;
      line-height: 1.28;
    }
    .company-block {
      margin-bottom: 3px;
    }
    .company-block-sep {
      margin-top: 6px;
      padding-top: 3px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: 4.5px;
      margin-bottom: 2px;
    }
    .company-name {
      font-size: 10.2pt;
      font-weight: 700;
      color: #000;
    }
    .company-sub {
      font-size: 8.8pt;
      color: #444;
      font-weight: 400;
    }
    .role-title {
      font-size: 9.6pt;
      font-weight: 600;
      color: #222;
    }
    .job-meta {
      font-size: 9.3pt;
      font-weight: 600;
      color: #333;
    }
    .sub-heading {
      font-weight: 700;
      font-size: 8.4pt;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #4b5563;
      margin-top: 3.5px;
      margin-bottom: 1.5px;
    }
    ul {
      list-style-type: disc;
      margin-left: 16px;
      margin-bottom: 2px;
    }
    li {
      margin-bottom: 2px;
      text-align: justify;
      font-size: 9.6pt;
      line-height: 1.27;
    }
    .skills-section li {
      margin-bottom: 2.2px;
    }
    .education-item {
      margin-bottom: 1px;
      font-size: 9.6pt;
    }
    @media print {
      body { background: transparent; padding: 0; }
      .actions-bar { display: none; }
      .page { width: 100%; box-shadow: none; padding: 7.5mm 10mm; margin: 0; min-height: auto; }
      @page { size: A4; margin: 0; }
    }
  `;

  // Preserve embedded fonts
  const embeddedMatch = newHtml.match(/@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}/);
  const embeddedFonts = embeddedMatch ? embeddedMatch[0] : '';

  newHtml = newHtml.replace(/<style>[\s\S]*?<\/style>/, `<style>\n${embeddedFonts}\n${refinedCss}\n</style>`);
  fs.writeFileSync('resume_candidate.html', newHtml);

  await page.goto('file:///' + path.resolve('resume_candidate.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);

  const metrics = await page.evaluate(() => {
    const pageEl = document.querySelector('.page');
    const eduEl = document.querySelector('section:last-of-type');
    return {
      pageHeight: pageEl.clientHeight,
      eduBottom: eduEl.offsetTop + eduEl.offsetHeight
    };
  });

  console.log(`Refined Candidate => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  await page.screenshot({ path: 'resume_screenshot_candidate.png', fullPage: true });
  await browser.close();
})();
