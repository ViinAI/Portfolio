const docx = require('docx');
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } = docx;

const doc = new Document({
  sections: [{
    properties: {
      page: {
        margin: {
          top: 720,    // 0.5 inch
          bottom: 720,
          left: 800,
          right: 800,
        }
      }
    },
    children: [
      // Name
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Vinay Kumar",
            bold: true,
            size: 36, // 18pt
            font: "Times New Roman"
          })
        ]
      }),
      // Subtitle
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Senior AI Engineer & Agentic Systems Architect",
            bold: true,
            size: 24, // 12pt
            font: "Times New Roman"
          })
        ]
      }),
      // Contact
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 140 },
        children: [
          new TextRun({ text: "Pune, India  —  9992394789  —  ", size: 19, font: "Times New Roman" }),
          new TextRun({ text: "viinaimadotra@gmail.com", size: 19, color: "0000EE", underline: {}, font: "Times New Roman" }),
          new TextRun({ text: "  |  ", size: 19, font: "Times New Roman" }),
          new TextRun({ text: "LinkedIn: in/viinai", size: 19, color: "0000EE", underline: {}, font: "Times New Roman" }),
          new TextRun({ text: "  |  ", size: 19, font: "Times New Roman" }),
          new TextRun({ text: "GitHub: github.com/ViinAI", size: 19, color: "0000EE", underline: {}, font: "Times New Roman" })
        ]
      }),

      // Professional Summary Heading
      createSectionHeading("Professional Summary"),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Senior AI Engineer and Architect with 5.5+ years of experience across Data Science, Predictive Analytics, and Enterprise Agentic AI Platforms. Proven track record designing foundational AI infrastructure (gVisor secure sandboxes, event-log execution harnesses, and Model Context Protocol/MCP platforms) and scaling production products across Process Automation (driving a $300M Telecom transformation deal with a 16-agent HITL pipeline) and User-Centric Harnesses exposed via Web, CLI, VS Code Extension, and SDKs.",
            size: 19,
            font: "Times New Roman"
          })
        ]
      }),

      // Professional Experience Heading
      createSectionHeading("Professional Experience"),

      // Infosys Header
      createJobHeader("Infosys — Senior Data Scientist / AI Engineer", "Dec 2024 – Present"),
      createBullet("Foundational Sandbox Platform: ", "Architected a DeepAgent-compatible execution sandbox leveraging gVisor, enforcing microVM-level isolation, deterministic reproducibility, and strict security governance for untrusted agent code, MCP servers, and dynamic skills."),
      createBullet("Event-Driven Execution Harness: ", "Engineered a core agent execution runtime featuring event-log-driven state reconstruction, dynamic context projection, checkpointing, and long-running workflow continuity for complete observability and auditability."),
      createBullet("MCP Platform & Skill Engine: ", "Built an AI-assisted authoring, registration, validation, and lifecycle onboarding portal for Model Context Protocol (MCP) servers and reusable enterprise skills, standardizing multi-tool connectivity across ecosystems."),
      createBullet("User-Centric Harness Multi-Surface Product: ", "Designed and shipped a modular agent platform exposed across four primary interaction surfaces: Web Portal, Terminal CLI, VS Code Extension, and Client SDKs for workspace-centric agent execution and user onboarding."),
      createBullet("Process Automation Harness ($300M Deal): ", "Architected full-stack enterprise agentic workflows for a Tier-1 global telecom operator, boosting process efficiency by 40% and directly driving the acquisition of a $300M AI transformation deal."),
      createBullet("16-Agent Production Pipeline: ", "Engineered an autonomous 16-agent pipeline with 5 Human-in-the-Loop (HITL) checkpoints, delivering 95% straight-through automation across complex enterprise operations."),
      createBullet("Proprietary LLM Compiler: ", "Built an LLM execution optimizer (dynamic prompt planning, semantic caching, and tool routing) that slashed median query latency by 35% while preserving output accuracy."),
      createBullet("Contract Intelligence System: ", "Deployed automated contract comparison and clause-risk analysis agents across 5 enterprise clients, reducing manual legal review time by 60%."),

      // Xcaliber Header
      createJobHeader("Xcaliber Infotech — Data Scientist / AI-ML Engineer", "Dec 2022 – Dec 2024, Pune"),
      createBullet("Summarization Microservice: ", "Built a high-throughput text summarization microservice using LLaMA, BART, spaCy, and PyTorch to process OEM comments for delivery waivers, integrating with warehouse ERPs to improve inventory turnover."),
      createBullet("Enterprise RAG Chatbot: ", "Developed an enterprise conversational assistant using LangChain, Hugging Face Transformers, ChromaDB, and Flask, cutting internal document lookup times by 40%."),
      createBullet("Accessory Recommender: ", "Designed a collaborative affinity recommendation engine dynamically matching regional inventory with customer purchase patterns, boosting weekly accessory bundle sales by 25%."),
      createBullet("API & Telemetry Layer: ", "Developed secure REST APIs and real-time operations dashboards for role-based analytics, audit tracking, and LLM feedback ingestion."),

      // Concentrix Header
      createJobHeader("Concentrix India — Data Analyst", "Oct 2015 – Apr 2017, Gurgaon"),
      createBullet("Analytics Pipelines: ", "Built automated Python and SQL ETL pipelines and executive reporting dashboards for operational analytics."),
      createBullet("Predictive Modeling: ", "Conducted statistical exploratory analysis, regression, and classification modeling to support business forecasting and workforce planning."),

      // Skills Heading
      createSectionHeading("Skills"),
      createBullet("Foundations & Agentic Systems: ", "gVisor Agent Sandboxing, Event-Log State Reconstruction, Model Context Protocol (MCP), Skill Authoring Platforms, Multi-Agent Orchestration (CrewAI, LangGraph, AutoGen), LLM Compilers, Semantic Caching, HITL Governance."),
      createBullet("Exposure Surfaces & Tooling: ", "VS Code Extensions, CLI Tooling, Client SDKs, Web Portals, RESTful APIs, WebSocket Streaming."),
      createBullet("GenAI & LLMs: ", "LLaMA 2/3, Mistral, GPT-4/Azure OpenAI, Hugging Face Transformers, BERT, RoBERTa, BART, LangChain, RAG Systems, Vector DBs (ChromaDB, Pinecone, FAISS, Redis), Guardrails & LLM-as-a-judge."),
      createBullet("Machine Learning, NLP & Data Science: ", "Scikit-Learn, PyTorch, TensorFlow, Keras, spaCy, NLTK, Word2Vec, TF-IDF, NER, Regression, Classification, Clustering, Time-Series Modeling."),
      createBullet("Languages, Cloud & Infrastructure: ", "Python (NumPy, Pandas, Matplotlib), SQL (PostgreSQL, MySQL), FastAPI, Flask, Docker, Kubernetes, AWS (EC2, S3, SageMaker, Lambda), CI/CD Pipelines, Git/GitHub, Linux/gVisor."),

      // Education Heading
      createSectionHeading("Education"),
      new Paragraph({
        spacing: { before: 40, after: 20 },
        children: [
          new TextRun({ text: "PG-Diploma in Artificial Intelligence (PGDAI)", bold: true, size: 19, font: "Times New Roman" }),
          new TextRun({ text: " — CDAC, Pune, 2022", size: 19, font: "Times New Roman" })
        ]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "B.Tech in Mechanical Engineering", bold: true, size: 19, font: "Times New Roman" }),
          new TextRun({ text: " — JIET, Jind, 2014", size: 19, font: "Times New Roman" })
        ]
      })
    ]
  }]
});

function createSectionHeading(title) {
  return new Paragraph({
    spacing: { before: 100, after: 40 },
    border: {
      bottom: {
        color: "000000",
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 22, // 11pt
        font: "Times New Roman"
      })
    ]
  });
}

function createJobHeader(title, date) {
  return new Paragraph({
    spacing: { before: 80, after: 20 },
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 20, // 10pt
        font: "Times New Roman"
      }),
      new TextRun({
        text: "\t" + date,
        bold: true,
        size: 20,
        font: "Times New Roman"
      })
    ]
  });
}

function createBullet(lead, text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 20 },
    children: [
      new TextRun({
        text: lead,
        bold: true,
        size: 18.5, // 9.25pt
        font: "Times New Roman"
      }),
      new TextRun({
        text: text,
        size: 18.5,
        font: "Times New Roman"
      })
    ]
  });
}

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("Vinay_Kumar_CV.docx", buffer);
  console.log("✓ Vinay_Kumar_CV.docx generated successfully!");
});
