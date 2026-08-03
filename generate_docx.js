const docx = require('docx');
const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, TabStopType, TabStopPosition } = docx;

if (!fs.existsSync('cvs')) {
  fs.mkdirSync('cvs');
}

// Exact styling matching resume.html
const FONT = 'EB Garamond';

function createSectionHeading(title) {
  return new Paragraph({
    spacing: { before: 180, after: 60 },
    border: {
      bottom: {
        color: '111111',
        space: 2,
        style: BorderStyle.SINGLE,
        size: 8,
      },
    },
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 28, // 14pt
        font: FONT,
        color: '111111',
      }),
    ],
  });
}

function createCompanyHeader(companyAndRole, dateLocation, isFirst = false) {
  return new Paragraph({
    spacing: { before: isFirst ? 60 : 200, after: 40 },
    tabStops: [
      {
        type: TabStopType.RIGHT,
        position: TabStopPosition.MAX,
      },
    ],
    children: [
      new TextRun({
        text: companyAndRole,
        bold: true,
        size: 24, // 12pt
        font: FONT,
        color: '111111',
      }),
      new TextRun({
        text: '\t' + dateLocation,
        bold: true,
        size: 20, // 10pt
        font: FONT,
        color: '333333',
      }),
    ],
  });
}

function createSubHeading(subTitle) {
  return new Paragraph({
    spacing: { before: 80, after: 30 },
    children: [
      new TextRun({
        text: subTitle,
        bold: true,
        italics: true,
        size: 20, // 10pt
        font: FONT,
        color: '222222',
      }),
    ],
  });
}

function createBullet(lead, text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 25, after: 25, line: 250 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
      ...(lead
        ? [
            new TextRun({
              text: lead + ': ',
              bold: true,
              size: 20, // 10pt
              font: FONT,
              color: '111111',
            }),
          ]
        : []),
      new TextRun({
        text: text,
        size: 20, // 10pt
        font: FONT,
        color: '111111',
      }),
    ],
  });
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: {
          font: FONT,
          size: 20, // 10pt base
          color: '111111',
        },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 540,    // ~9.5mm
            bottom: 540,
            left: 720,   // ~12.7mm
            right: 720,
          },
        },
      },
      children: [
        // Name
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 20 },
          children: [
            new TextRun({
              text: 'Vinay Kumar',
              bold: true,
              size: 48, // 24pt
              font: FONT,
              color: '111111',
            }),
          ],
        }),

        // Subtitle
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 30 },
          children: [
            new TextRun({
              text: 'Senior AI Engineer',
              bold: true,
              size: 24, // 12pt
              font: FONT,
              color: '222222',
            }),
          ],
        }),

        // Contact Info
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 60 },
          children: [
            new TextRun({
              text: 'Pune, India  —  9992394789  —  viinaimadotra@gmail.com',
              size: 20, // 10pt
              font: FONT,
              color: '333333',
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 100 },
          children: [
            new TextRun({
              text: 'LinkedIn: linkedin.com/in/viinai  |  GitHub: github.com/ViinAI',
              size: 20,
              font: FONT,
              color: '0000ee',
            }),
          ],
        }),

        // Professional Summary
        createSectionHeading('Professional Summary'),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { before: 40, after: 60, line: 250 },
          children: [
            new TextRun({
              text: 'Senior AI Engineer with 5.5+ years of experience in enterprise AI platform development, ML engineering, and Data Science. Designed and built foundational agent infrastructure, composed it into enterprise-grade products, and architected diverse AI solutions across multiple domains and clients at Infosys.',
              size: 20,
              font: FONT,
            }),
          ],
        }),

        // Professional Experience
        createSectionHeading('Professional Experience'),

        // Infosys
        createCompanyHeader('Infosys — Senior AI Engineer', 'Dec 2024 – Present', true),

        createSubHeading('Foundational Components'),
        createBullet('Execution Harness', 'Designed and built a bespoke event-driven agent execution engine supporting deterministic state reconstruction, checkpointing, and long-running workflow continuity across distributed agent instances.'),
        createBullet('Sandbox', 'Built an isolated execution sandbox leveraging gVisor for secure, reproducible execution of untrusted agent code, MCP servers, and dynamically loaded skills.'),
        createBullet('MCP Platform', 'Created a platform for importing, building, and hosting Model Context Protocol (MCP) servers with AI-assisted authoring, validation, and lifecycle management.'),

        createSubHeading('Products'),
        createBullet('Process-Centric Harness', 'Composed foundational components into a full product enabling end-to-end process authoring, skill linking, OpenAPI spec onboarding, and autonomous execution. Deployed across multiple enterprise clients and under active go-to-market.'),
        createBullet('User-Centric Harness', 'Built a multi-surface developer platform — including Web Portal (AGUI/A2UI), CLI, and VS Code Extension — exposing agent capabilities for developer and operational workflows.'),

        createSubHeading('Solution Architecture & Deal Wins'),
        createBullet('', 'Independently architected diverse AI solutions — including a $300M Telecom transformation, Digital Tutor platform, and CMDB platform — driving multiple deal wins for Infosys.'),

        // Xcaliber Infotech
        createCompanyHeader('Xcaliber Infotech — AI Engineer', 'Dec 2022 – Dec 2024, Pune'),
        createBullet('Summarization Microservice', 'Built a high-throughput text summarization service using LLaMA, BART, spaCy, and PyTorch to process OEM delivery waiver comments, integrating with warehouse ERP systems.'),
        createBullet('Enterprise RAG Assistant', 'Developed a conversational assistant using LangChain, ChromaDB, and Hugging Face Transformers, reducing internal document lookup time by 40%.'),
        createBullet('Accessory Recommender', 'Designed a location-aware affinity recommendation engine matching regional inventory with purchase patterns, boosting weekly accessory bundle sales by 25%.'),
        createBullet('API & Telemetry Layer', 'Developed REST APIs and real-time operations dashboards for role-based analytics and audit tracking.'),

        // Concentrix India
        createCompanyHeader('Concentrix India — Data Analyst', 'Oct 2015 – Apr 2017, Gurgaon'),
        createBullet('Analytics Pipelines', 'Built automated Python and SQL ETL pipelines and executive reporting dashboards.'),
        createBullet('Predictive Modeling', 'Performed regression and classification modeling for business forecasting and workforce planning.'),

        // Skills
        createSectionHeading('Skills'),
        createBullet('AI Platform & Agent Systems', 'Event-Driven Architecture, Agent Execution Harnesses, gVisor Sandboxing, Model Context Protocol (MCP), Process Orchestration, Multi-Agent Systems, Semantic Caching, LLM Compilers.'),
        createBullet('GenAI & LLM Engineering', 'LLaMA, Mistral, GPT-4/Azure OpenAI, Hugging Face Transformers, BERT, BART, RoBERTa, LangChain, RAG Architectures, Vector DBs (ChromaDB, Pinecone, FAISS).'),
        createBullet('Machine Learning & Data Science', 'PyTorch, TensorFlow, Scikit-Learn, spaCy, NLTK, NER, Regression, Classification, Clustering, Time-Series, Recommendation Systems.'),
        createBullet('Languages & Infrastructure', 'Python, TypeScript, SQL (PostgreSQL, MySQL), FastAPI, Flask, Docker, Kubernetes, AWS (EC2, S3, SageMaker, Lambda), Git, CI/CD, Linux.'),

        // Education
        createSectionHeading('Education'),
        new Paragraph({
          spacing: { before: 30, after: 20 },
          children: [
            new TextRun({
              text: 'PG-Diploma in Artificial Intelligence (PGDAI)',
              bold: true,
              size: 20,
              font: FONT,
            }),
            new TextRun({
              text: ' — C-DAC, Pune, 2022',
              size: 20,
              font: FONT,
            }),
          ],
        }),
        new Paragraph({
          spacing: { before: 15, after: 20 },
          children: [
            new TextRun({
              text: 'B.Tech in Mechanical Engineering',
              bold: true,
              size: 20,
              font: FONT,
            }),
            new TextRun({
              text: ' — JIET, Jind, 2014',
              size: 20,
              font: FONT,
            }),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('Vinay_Kumar_CV.docx', buffer);
  fs.writeFileSync('cvs/Vinay_Kumar_CV.docx', buffer);
  console.log('✓ Vinay_Kumar_CV.docx generated in root and cvs/ successfully!');
});
