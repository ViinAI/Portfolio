const fs = require('fs');

let rawHtml = fs.readFileSync('resume.html', 'utf8');

// Extract embedded fonts
const embeddedMatch = rawHtml.match(/@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}\s*@font-face\s*\{[\s\S]*?\}/);
const embeddedFonts = embeddedMatch ? embeddedMatch[0] : '';

const interactiveHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinay Kumar - Senior AI Engineer (Interactive Resume)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:ital,wght@0,400;0,700;1,300;1,400&family=Lora:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <style>
${embeddedFonts}

    :root {
      --font-family: "EB Garamond", "Times New Roman", serif;
      --base-size: 10.15pt;
      --line-height: 1.26;
      --h1-size: 23pt;
      --subtitle-size: 11.8pt;
      --h2-size: 11.1pt;
      --job-size: 10.2pt;
      --subhead-size: 9.6pt;
      --contact-size: 9.7pt;
      --pad-v: 6mm;
      --pad-h: 12mm;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #0f172a;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #111;
      padding: 20px 10px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    /* Floating Interactive Controls */
    .control-panel {
      position: sticky;
      top: 15px;
      z-index: 100;
      background: rgba(30, 41, 59, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      padding: 10px 18px;
      margin-bottom: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
      max-width: 900px;
    }

    .control-group {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .control-label {
      color: #94a3b8;
      font-size: 11.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-right: 2px;
    }

    .toggle-group {
      display: inline-flex;
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 2px;
    }

    .toggle-btn {
      background: transparent;
      border: none;
      color: #cbd5e1;
      font-size: 12px;
      font-weight: 500;
      padding: 5px 10px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .toggle-btn:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.06);
    }

    .toggle-btn.active {
      background: #3b82f6;
      color: #fff;
      font-weight: 600;
      box-shadow: 0 1px 4px rgba(59, 130, 246, 0.4);
    }

    .actions-group {
      display: flex;
      gap: 8px;
      margin-left: auto;
    }

    .action-btn {
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 6px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      border: none;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .action-btn-primary {
      background: #2563eb;
      color: #fff;
    }
    .action-btn-primary:hover { background: #1d4ed8; }

    .action-btn-secondary {
      background: #334155;
      color: #e2e8f0;
    }
    .action-btn-secondary:hover { background: #475569; }

    /* The Resume Sheet */
    .page-container {
      perspective: 1000px;
    }

    .page {
      background: #fff;
      width: 210mm;
      min-height: 297mm;
      padding: var(--pad-v) var(--pad-h);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
      border-radius: 2px;
      font-family: var(--font-family);
      color: #111;
      line-height: var(--line-height);
      font-size: var(--base-size);
      transition: font-size 0.12s ease, line-height 0.12s ease, padding 0.12s ease;
    }

    header { text-align: center; margin-bottom: 5px; }
    h1 { font-size: var(--h1-size); font-weight: 700; letter-spacing: -0.3px; margin-bottom: 1px; }
    .subtitle { font-size: var(--subtitle-size); font-weight: 600; color: #222; margin-bottom: 2px; }
    .contact-line { font-size: var(--contact-size); color: #333; }
    .contact-line a { color: #0000ee; text-decoration: underline; }
    .divider { margin: 0 4px; }
    section { margin-bottom: 5px; page-break-inside: avoid; }
    h2 {
      font-size: var(--h2-size);
      font-weight: 700;
      border-bottom: 1px solid #111;
      padding-bottom: 1px;
      margin-bottom: 3px;
    }
    .summary-p {
      text-align: justify;
      margin-bottom: 4px;
      font-size: var(--base-size);
      line-height: var(--line-height);
    }
    .company-block { margin-bottom: 2px; }
    .company-block-sep { margin-top: 5px; }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      margin-top: 4px;
      margin-bottom: 2px;
      font-size: var(--job-size);
      padding-bottom: 1.5px;
      border-bottom: 0.75px solid #9ca3af;
    }
    .sub-heading {
      font-weight: 700;
      font-size: var(--subhead-size);
      font-style: italic;
      color: #333;
      margin-top: 3px;
      margin-bottom: 1px;
    }
    ul { list-style-type: disc; margin-left: 16px; margin-bottom: 2px; }
    li {
      margin-bottom: 1.8px;
      text-align: justify;
      font-size: var(--base-size);
      line-height: var(--line-height);
    }
    .skills-section li { margin-bottom: 2px; }
    .education-item { margin-bottom: 1px; font-size: var(--base-size); }

    @media print {
      body { background: transparent; padding: 0; }
      .control-panel { display: none !important; }
      .page { width: 100%; box-shadow: none; padding: var(--pad-v) 10mm; margin: 0; min-height: auto; }
      @page { size: A4; margin: 0; }
    }
  </style>
</head>
<body>

  <!-- Floating Interactive Control Bar -->
  <div class="control-panel">
    
    <!-- Font Size Scaling Toggle -->
    <div class="control-group">
      <span class="control-label">Size:</span>
      <div class="toggle-group" id="size-toggles">
        <button class="toggle-btn" onclick="setSize('standard')">Standard</button>
        <button class="toggle-btn" onclick="setSize('plus25')">+2.5%</button>
        <button class="toggle-btn active" onclick="setSize('plus50')">+5.0%</button>
        <button class="toggle-btn" onclick="setSize('plus75')">+7.5%</button>
      </div>
    </div>

    <!-- Font Family Toggle -->
    <div class="control-group">
      <span class="control-label">Font:</span>
      <div class="toggle-group" id="font-toggles">
        <button class="toggle-btn active" onclick="setFont('garamond')">EB Garamond</button>
        <button class="toggle-btn" onclick="setFont('lora')">Lora</button>
        <button class="toggle-btn" onclick="setFont('merriweather')">Merriweather</button>
        <button class="toggle-btn" onclick="setFont('inter')">Modern Inter</button>
      </div>
    </div>

    <!-- Quick Download Action Buttons -->
    <div class="actions-group">
      <a href="Vinay_Kumar_CV.pdf" download="Vinay_Kumar_CV.pdf" class="action-btn action-btn-primary">⬇️ PDF</a>
      <a href="Vinay_Kumar_CV.docx" download="Vinay_Kumar_CV.docx" class="action-btn action-btn-secondary">⬇️ DOCX</a>
    </div>
  </div>

  <div class="page-container">
    <div class="page" id="resume-page">
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
  </div>

  <script>
    const sizePresets = {
      standard: {
        '--base-size': '9.65pt',
        '--line-height': '1.285',
        '--h1-size': '22pt',
        '--subtitle-size': '11.3pt',
        '--h2-size': '10.6pt',
        '--job-size': '9.7pt',
        '--subhead-size': '9.1pt',
        '--contact-size': '9.3pt',
        '--pad-v': '8mm'
      },
      plus25: {
        '--base-size': '9.9pt',
        '--line-height': '1.28',
        '--h1-size': '22.5pt',
        '--subtitle-size': '11.5pt',
        '--h2-size': '10.8pt',
        '--job-size': '9.9pt',
        '--subhead-size': '9.3pt',
        '--contact-size': '9.5pt',
        '--pad-v': '7mm'
      },
      plus50: {
        '--base-size': '10.15pt',
        '--line-height': '1.26',
        '--h1-size': '23pt',
        '--subtitle-size': '11.8pt',
        '--h2-size': '11.1pt',
        '--job-size': '10.2pt',
        '--subhead-size': '9.6pt',
        '--contact-size': '9.7pt',
        '--pad-v': '6mm'
      },
      plus75: {
        '--base-size': '10.35pt',
        '--line-height': '1.25',
        '--h1-size': '23.5pt',
        '--subtitle-size': '12pt',
        '--h2-size': '11.3pt',
        '--job-size': '10.4pt',
        '--subhead-size': '9.8pt',
        '--contact-size': '9.8pt',
        '--pad-v': '4.5mm'
      }
    };

    const fontPresets = {
      garamond: '"EB Garamond", "Times New Roman", serif',
      lora: '"Lora", serif',
      merriweather: '"Merriweather", serif',
      inter: '"Inter", -apple-system, sans-serif'
    };

    function setSize(presetKey) {
      const preset = sizePresets[presetKey];
      if (!preset) return;
      
      const root = document.documentElement;
      for (const [prop, val] of Object.entries(preset)) {
        root.style.setProperty(prop, val);
      }

      // Update active toggle button
      document.querySelectorAll('#size-toggles .toggle-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(presetKey)) {
          btn.classList.add('active');
        }
      });
    }

    function setFont(fontKey) {
      const font = fontPresets[fontKey];
      if (!font) return;

      document.documentElement.style.setProperty('--font-family', font);

      // Update active toggle button
      document.querySelectorAll('#font-toggles .toggle-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(fontKey)) {
          btn.classList.add('active');
        }
      });
    }
  </script>
</body>
</html>
`;

fs.writeFileSync('resume.html', interactiveHtml);
fs.writeFileSync('cvs/resume.html', interactiveHtml);
console.log('✓ Interactive font & size toggle bar deployed successfully!');
