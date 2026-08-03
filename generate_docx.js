const docx = require('docx');
const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, TabStopType, TabStopPosition } = docx;

if (!fs.existsSync('cvs')) {
  fs.mkdirSync('cvs');
}

const doc = new Document({
  sections: [{
    properties: {
      page: {
        margin: { top: 600, bottom: 600, left: 720, right: 720 }
      }
    },
    children: [
      // Name
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 30 },
        children: [
          new TextRun({ text: "Vinay Kumar", bold: true, size: 36, font: "Times New Roman" })
        ]
      }),
      // Title
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 30 },
        children: [
          new TextRun({ text: "Senior AI Engineer", bold: true, size: 22, font: "Times New Roman" })
        ]
      }),
      // Contact
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Pune, India  —  9992394789  —  ", size: 18, font: "Times New Roman" }),
          new TextRun({ text: "viinaimadotra@gmail.com", size: 18, color: "0000EE", underline: {}, font: "Times New Roman" }),
          new TextRun({ text: "  |  ", size: 18, font: "Times New Roman" }),
          new TextRun({ text: "LinkedIn: in/viinai", size: 18, color: "0000EE", underline: {}, font: "Times New Roman" }),
          new TextRun({ text: "  |  ", size: 18, font: "Times New Roman" }),
          new TextRun({ text: "GitHub: github.com/ViinAI", size: 18, color: "0000EE", underline: {}, font: "Times New Roman" })
        ]
      }),

      // Professional Summary
      sectionHeading("Professional Summary"),
      new Paragraph({
        spacing: { after: 70 },
        children: [
          new TextRun({
            text: "Senior AI Engineer with 5.5+ years of experience in enterprise AI platform development, ML engineering, and Data Science. Designed and built foundational agent infrastructure, composed it into enterprise-grade products, and architected diverse AI solutions across multiple domains and clients at Infosys.",
            size: 18, font: "Times New Roman"
          })
        ]
      }),

      // Professional Experience
      sectionHeading("Professional Experience"),

      // Infosys
      companyHeader("Infosys — Senior AI Engineer", "Dec 2024 – Present"),

      subHeading("Foundational Components"),
      bullet("Execution Harness: ", "Designed and built a bespoke event-driven agent execution engine supporting deterministic state reconstruction, checkpointing, and long-running workflow continuity across distributed agent instances."),
      bullet("Sandbox: ", "Built an isolated execution sandbox leveraging gVisor for secure, reproducible execution of untrusted agent code, MCP servers, and dynamically loaded skills."),
      bullet("MCP Platform: ", "Created a platform for importing, building, and hosting Model Context Protocol (MCP) servers with AI-assisted authoring, validation, and lifecycle management."),

      subHeading("Products"),
      bullet("Process-Centric Harness: ", "Composed foundational components into a full product enabling end-to-end process authoring, skill linking, OpenAPI spec onboarding, and autonomous execution. Deployed across multiple enterprise clients and under active go-to-market."),
      bullet("User-Centric Harness: ", "Built a multi-surface developer platform — including Web Portal (AGUI/A2UI), CLI, and VS Code Extension — exposing agent capabilities for developer and operational workflows."),

      subHeading("Solution Architecture & Deal Wins"),
      bullet("", "Independently architected diverse AI solutions — including a $300M Telecom transformation, Digital Tutor platform, and CMDB platform — driving multiple deal wins for Infosys."),

      subHeading("Technical"),
      bullet("LLM Compiler: ", "Built a proprietary LLM execution optimizer with dynamic prompt planning and semantic caching, reducing median query latency by 35%."),

      // Xcaliber
      companyHeader("Xcaliber Infotech (A Phoenix Group Company) — Data Scientist / AI-ML Engineer", "Dec 2022 – Dec 2024, Pune", true),
      bullet("Summarization Microservice: ", "Built a high-throughput text summarization service using LLaMA, BART, spaCy, and PyTorch to process OEM delivery waiver comments, integrating with warehouse ERP systems."),
      bullet("Enterprise RAG Assistant: ", "Developed a conversational assistant using LangChain, ChromaDB, and Hugging Face Transformers, reducing internal document lookup time by 40%."),
      bullet("Accessory Recommender: ", "Designed a location-aware affinity recommendation engine matching regional inventory with purchase patterns, boosting weekly accessory bundle sales by 25%."),
      bullet("API & Telemetry Layer: ", "Developed REST APIs and real-time operations dashboards for role-based analytics and audit tracking."),

      // Concentrix
      companyHeader("Concentrix India — Data Analyst", "Oct 2015 – Apr 2017, Gurgaon", true),
      bullet("Analytics Pipelines: ", "Built automated Python and SQL ETL pipelines and executive reporting dashboards."),
      bullet("Predictive Modeling: ", "Performed regression and classification modeling for business forecasting and workforce planning."),

      // Skills
      sectionHeading("Skills"),
      bullet("AI Platform & Agent Systems: ", "Event-Driven Architecture, Agent Execution Harnesses, gVisor Sandboxing, Model Context Protocol (MCP), Process Orchestration, Multi-Agent Systems, Semantic Caching, LLM Compilers."),
      bullet("GenAI & LLM Engineering: ", "LLaMA, Mistral, GPT-4/Azure OpenAI, Hugging Face Transformers, BERT, BART, RoBERTa, LangChain, RAG Architectures, Vector DBs (ChromaDB, Pinecone, FAISS)."),
      bullet("Machine Learning & Data Science: ", "PyTorch, TensorFlow, Scikit-Learn, spaCy, NLTK, NER, Regression, Classification, Clustering, Time-Series, Recommendation Systems."),
      bullet("Languages & Infrastructure: ", "Python, TypeScript, SQL (PostgreSQL, MySQL), FastAPI, Flask, Docker, Kubernetes, AWS (EC2, S3, SageMaker, Lambda), Git, CI/CD, Linux."),

      // Education
      sectionHeading("Education"),
      new Paragraph({
        spacing: { before: 30, after: 15 },
        children: [
          new TextRun({ text: "PG-Diploma in Artificial Intelligence (PGDAI)", bold: true, size: 18, font: "Times New Roman" }),
          new TextRun({ text: " — C-DAC, Pune, 2022", size: 18, font: "Times New Roman" })
        ]
      }),
      new Paragraph({
        spacing: { after: 30 },
        children: [
          new TextRun({ text: "B.Tech in Mechanical Engineering", bold: true, size: 18, font: "Times New Roman" }),
          new TextRun({ text: " — JIET, Jind, 2014", size: 18, font: "Times New Roman" })
        ]
      })
    ]
  }]
});

function sectionHeading(title) {
  return new Paragraph({
    spacing: { before: 70, after: 25 },
    border: { bottom: { color: "000000", space: 1, style: BorderStyle.SINGLE, size: 6 } },
    children: [ new TextRun({ text: title, bold: true, size: 20, font: "Times New Roman" }) ]
  });
}

function companyHeader(title, meta, addSep = false) {
  return new Paragraph({
    spacing: { before: addSep ? 80 : 45, after: 15 },
    tabStops: [
      { type: TabStopType.RIGHT, position: TabStopPosition.MAX }
    ],
    children: [
      new TextRun({ text: title, bold: true, size: 18.5, font: "Times New Roman" }),
      new TextRun({ text: "\t" + meta, bold: true, size: 17, color: "333333", font: "Times New Roman" })
    ]
  });
}

function subHeading(title) {
  return new Paragraph({
    spacing: { before: 35, after: 10 },
    children: [
      new TextRun({ text: title, bold: true, italics: true, size: 17, font: "Times New Roman", color: "333333" })
    ]
  });
}

function bullet(lead, text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 15 },
    children: [
      ...(lead ? [new TextRun({ text: lead, bold: true, size: 17.5, font: "Times New Roman" })] : []),
      new TextRun({ text: text, size: 17.5, font: "Times New Roman" })
    ]
  });
}

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("Vinay_Kumar_CV.docx", buffer);
  fs.writeFileSync("cvs/Vinay_Kumar_CV.docx", buffer);
  console.log("✓ Vinay_Kumar_CV.docx generated in root and cvs/ successfully!");
});
