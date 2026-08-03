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

  const cleanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinay Kumar - Senior AI Engineer</title>
  <style>
${embeddedFonts}

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f4f4f6;
      font-family: "EB Garamond", "Times New Roman", Times, serif;
      color: #111;
      line-height: 1.285;
      font-size: 9.65pt;
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
      padding: 8mm 12mm;
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
      font-size: 9.65pt;
      line-height: 1.285;
    }
    .company-block {
      margin-bottom: 2px;
    }
    .company-block-sep {
      margin-top: 6px;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      margin-top: 4px;
      margin-bottom: 2px;
      font-size: 9.7pt;
    }
    .sub-heading {
      font-weight: 700;
      font-size: 9.1pt;
      font-style: italic;
      color: #333;
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
      font-size: 9.65pt;
      line-height: 1.27;
    }
    .skills-section li {
      margin-bottom: 2.2px;
    }
    .education-item {
      margin-bottom: 1px;
      font-size: 9.65pt;
    }
    @media print {
      body { background: transparent; padding: 0; }
      .actions-bar { display: none; }
      .page { width: 100%; box-shadow: none; padding: 8mm 10mm; margin: 0; min-height: auto; }
      @page { size: A4; margin: 0; }
    }
  </style>
</head>
<body>

  <div class="actions-bar">
    <a href="Vinay_Kumar_CV.pdf" download="Vinay_Kumar_CV.pdf" class="btn">⬇️ Download PDF</a>
    <a href="Vinay_Kumar_CV.docx" download="Vinay_Kumar_CV.docx" class="btn btn-secondary">⬇️ Download Word (.docx)</a>
  </div>

  <div class="page">
    <header>
      <h1>Vinay Kumar</h1>
      <div class="subtitle">Senior AI Engineer</div>
      <div class="contact-line">
        Pune, India <span class="divider">—</span> 9992394789 <span class="divider">—</span> <a href="mailto:viinaimadotra@gmail.com">viinaimadotra@gmail.com</a><br>
        <a href="https://www.linkedin.com/in/viinai" target="_blank">LinkedIn</a> <span class="divider">|</span> <a href="https://github.com/ViinAI" target="_blank">GitHub</a>
      </div>
    </header>

    <section>
      <h2>Professional Summary</h2>
      <p class="summary-p">
        Senior AI Engineer with 5.5+ years of experience in enterprise AI platform development, ML engineering, and Data Science. Designed and built foundational agent infrastructure, composed it into enterprise-grade products, and architected diverse AI solutions across multiple domains and clients at Infosys.
      </p>
    </section>

    <section>
      <h2>Professional Experience</h2>

      <div class="company-block">
        <div class="job-header">
          <span>Infosys — Senior AI Engineer</span>
          <span>Dec 2024 – Present</span>
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
          <span>Xcaliber Infotech (A Phoenix Group Company) — Data Scientist / AI-ML Engineer</span>
          <span>Dec 2022 – Dec 2024, Pune</span>
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
          <span>Concentrix India — Data Analyst</span>
          <span>Oct 2015 – Apr 2017, Gurgaon</span>
        </div>
        <ul>
          <li><strong>Analytics Pipelines:</strong> Built automated Python and SQL ETL pipelines and executive reporting dashboards.</li>
          <li><strong>Predictive Modeling:</strong> Performed regression and classification modeling for business forecasting and workforce planning.</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Skills</h2>
      <ul class="skills-section">
        <li><strong>AI Platform &amp; Agent Systems:</strong> Event-Driven Architecture, Agent Execution Harnesses, gVisor Sandboxing, Model Context Protocol (MCP), Process Orchestration, Multi-Agent Systems, Semantic Caching, LLM Compilers.</li>
        <li><strong>GenAI &amp; LLM Engineering:</strong> LLaMA, Mistral, GPT-4/Azure OpenAI, Hugging Face Transformers, BERT, BART, RoBERTa, LangChain, RAG Architectures, Vector DBs (ChromaDB, Pinecone, FAISS).</li>
        <li><strong>Machine Learning &amp; Data Science:</strong> PyTorch, TensorFlow, Scikit-Learn, spaCy, NLTK, NER, Regression, Classification, Clustering, Time-Series, Recommendation Systems.</li>
        <li><strong>Languages &amp; Infrastructure:</strong> Python, TypeScript, SQL (PostgreSQL, MySQL), FastAPI, Flask, Docker, Kubernetes, AWS (EC2, S3, SageMaker, Lambda), Git, CI/CD, Linux.</li>
      </ul>
    </section>

    <section>
      <h2>Education</h2>
      <div class="education-item">
        <strong>PG-Diploma in Artificial Intelligence (PGDAI)</strong> — C-DAC, Pune, 2022
      </div>
      <div class="education-item">
        <strong>B.Tech in Mechanical Engineering</strong> — JIET, Jind, 2014
      </div>
    </section>
  </div>

</body>
</html>
`;

  fs.writeFileSync('resume.html', cleanHtml);
  fs.writeFileSync('cvs/resume.html', cleanHtml);

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

  console.log(`Clean Italic Layout => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });

  fs.writeFileSync('Vinay_Kumar_CV.pdf', pdfBuffer);
  fs.writeFileSync('cvs/Vinay_Kumar_CV.pdf', pdfBuffer);
  await page.screenshot({ path: 'resume_screenshot.png', fullPage: true });

  console.log('✓ Clean italic resume.html and Vinay_Kumar_CV.pdf updated!');
  await browser.close();
})();
