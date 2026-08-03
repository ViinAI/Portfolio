export interface ProductItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  organization: string;
  period: string;
  roleTag: string;
  description: string;
  architectureBreakdown: {
    title: string;
    description: string;
  }[];
  systemSpecs: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  metrics: string[];
  techStack: string[];
  flowCodeSnippet?: string;
}

export interface ExperienceAchievement {
  lead?: string;
  description: string;
  tags?: string[];
}

export interface ExperienceSection {
  title: string;
  items: ExperienceAchievement[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  sections?: ExperienceSection[];
  achievements: ExperienceAchievement[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Core'; highlight?: boolean }[];
}

export const portfolioData = {
  personal: {
    name: 'Vinay Kumar',
    title: 'Senior AI Engineer',
    subtitle: 'Senior AI Engineer • Infosys Topaz',
    location: 'Pune, India',
    email: 'viinaimadotra@gmail.com',
    phone: '+91 9992394789',
    github: 'https://github.com/ViinAI',
    githubDisplay: 'github.com/ViinAI',
    linkedin: 'https://linkedin.com/in/viinai',
    linkedinDisplay: 'linkedin.com/in/viinai',
    bio: 'Senior AI Engineer with 5.5+ years of experience in enterprise AI platform development, ML engineering, and Data Science. Designed and built foundational agent infrastructure, composed it into enterprise-grade products, and architected diverse AI solutions across multiple domains and clients at Infosys.',
    status: 'Senior AI Engineer, Infosys Topaz',
  },

  stats: [
    { label: 'Years of Experience', value: '5+' },
    { label: 'AI-led Transformation Deal', value: '$300M' },
    { label: 'Process Efficiency Improvement', value: '40%' },
    { label: 'Agent Blueprint Build Time Cut', value: '50%' },
  ],

  // Rooted precisely in CV Project Updates and Base CV
  products: [
    {
      id: 'execution-harness',
      number: '01',
      name: 'Event-Driven Agent Execution Harness',
      subtitle: 'Foundational Component 1 • State Reconstruction & Continuity',
      tagline: 'Bespoke agent execution engine supporting checkpointing, state reconstruction, and long-running continuity.',
      organization: 'Infosys Topaz',
      period: 'Dec 2024 – Present',
      roleTag: 'Foundational Component',
      description:
        'Designed and built a bespoke event-driven agent execution engine supporting deterministic state reconstruction, checkpointing, event-log-driven orchestration, custom context projection, and long-running workflow continuity across distributed agent instances.',
      architectureBreakdown: [
        {
          title: 'Event-Log-Driven Orchestration',
          description:
            'Built around event-log orchestration for full auditability, state reconstruction, and observability of complex multi-agent processes.',
        },
        {
          title: 'Deterministic Checkpointing',
          description:
            'Enables workflow pause, resume, and checkpointing for long-running multi-agent execution instances.',
        },
        {
          title: 'Custom Context Projection',
          description:
            'Projects dynamic context windows dynamically based on execution trajectory and active agent memory.',
        },
      ],
      systemSpecs: [
        { label: 'Architecture', value: 'Event-Log Driven Engine' },
        { label: 'Capabilities', value: 'Checkpointing & State Reconstruction' },
        { label: 'Continuity', value: 'Long-running Agent Workflows' },
        { label: 'Role', value: 'Foundational Infrastructure' },
      ],
      highlights: [
        'Designed event-driven agent execution engine with state reconstruction',
        'Enabled deterministic checkpointing and long-running workflow continuity',
        'Built custom context projection for dynamic agent memory',
      ],
      metrics: ['Full state reconstruction', 'Zero-loss workflow continuity', 'Auditability'],
      techStack: ['Python', 'Event-Driven Architecture', 'State Reconstruction', 'Event Logging', 'Agent Orchestration'],
      flowCodeSnippet: `// Event-Log Execution Engine
const harness = new AgentExecutionHarness({
  eventLog: true,
  checkpointing: "deterministic",
  stateReconstruction: true
});
await harness.execute(agentInstance);`,
    },
    {
      id: 'gvisor-sandbox',
      number: '02',
      name: 'Isolated Agent Execution Sandbox',
      subtitle: 'Foundational Component 2 • gVisor Secure Runtime',
      tagline: 'Secure, reproducible execution environments for untrusted agent code, MCP servers, and user skills.',
      organization: 'Infosys Topaz',
      period: 'Dec 2024 – Present',
      roleTag: 'Foundational Component',
      description:
        'Architected a DeepAgent-compatible execution sandbox platform based on gVisor, enabling secure, isolated execution environments for AI agents, MCP servers, and user-authored skills while supporting reproducibility and enterprise governance requirements.',
      architectureBreakdown: [
        {
          title: 'gVisor Kernel Isolation',
          description:
            'Leverages gVisor virtualization to create secure boundaries for executing untrusted agent code and skills.',
        },
        {
          title: 'Reproducible Execution',
          description:
            'Ensures deterministic, reproducible runtime environments across skill packs and MCP tool execution.',
        },
        {
          title: 'Enterprise Governance',
          description:
            'Enforces access management, operational governance, and strict security boundaries for multi-tenant agent execution.',
        },
      ],
      systemSpecs: [
        { label: 'Runtime Container', value: 'gVisor Sandbox' },
        { label: 'Target Execution', value: 'Agents, MCP Servers, Skills' },
        { label: 'Governance', value: 'Enterprise Governance & Isolation' },
        { label: 'Role', value: 'Foundational Infrastructure' },
      ],
      highlights: [
        'Architected DeepAgent-compatible sandbox platform based on gVisor',
        'Secured execution of untrusted agent code and MCP servers',
        'Enforced enterprise governance and reproducible runtime',
      ],
      metrics: ['Kernel-level isolation', '100% reproducible environments', 'Zero leakage'],
      techStack: ['gVisor', 'DeepAgent Sandbox', 'Containerization', 'Security & Governance', 'Python'],
      flowCodeSnippet: `// gVisor Sandbox Execution
const sandbox = await gVisorSandbox.create({
  isolationLevel: "kernel",
  targets: ["agent_code", "mcp_server", "user_skills"],
  reproducible: true
});
await sandbox.run(agentTask);`,
    },
    {
      id: 'mcp-platform',
      number: '03',
      name: 'MCP Authoring, Hosting & Lifecycle Platform',
      subtitle: 'Foundational Component 3 • Onboard, Create & Host MCP Servers',
      tagline: 'Enterprise platform for creating, validating, registering, hosting, and managing MCP server lifecycles.',
      organization: 'Infosys Topaz',
      period: 'Dec 2024 – Present',
      roleTag: 'Foundational Component',
      description:
        'Created an AI-assisted MCP Authoring and Onboarding Portal that simplifies creation, registration, validation, hosting, and lifecycle management of Model Context Protocol (MCP) servers, reducing integration effort and standardizing enterprise tool connectivity.',
      architectureBreakdown: [
        {
          title: 'AI-Assisted MCP Creation',
          description:
            'Provides guided generation and automated validation to accelerate the creation of new MCP tool servers.',
        },
        {
          title: 'Onboarding & Registration Portal',
          description:
            'Simplifies onboarding, registration, and discovery of enterprise tools and OpenAPI specification endpoints.',
        },
        {
          title: 'Hosting & Lifecycle Management',
          description:
            'Manages hosted MCP server instances, versioning, health monitoring, and standardized tool connectivity.',
        },
      ],
      systemSpecs: [
        { label: 'Protocol', value: 'Model Context Protocol (MCP)' },
        { label: 'Lifecycle Capabilities', value: 'Onboard, Create, Validate, Host' },
        { label: 'Tool Connectivity', value: 'Standardized Enterprise APIs' },
        { label: 'Role', value: 'Foundational Infrastructure' },
      ],
      highlights: [
        'Built AI-assisted MCP Authoring and Onboarding Portal',
        'Automated MCP server creation, registration, and hosting',
        'Standardized enterprise tool connectivity across teams',
      ],
      metrics: ['Rapid MCP onboarding', 'Standardized connectivity', 'Lifecycle automation'],
      techStack: ['Model Context Protocol (MCP)', 'AI Authoring', 'Tool Onboarding', 'Lifecycle Management', 'Python'],
      flowCodeSnippet: `// MCP Server Onboarding & Hosting
const mcpServer = await McpPlatform.create({
  assistedAuthoring: true,
  validateSchema: true,
  hostMode: "managed"
});
await mcpServer.register(enterpriseTools);`,
    },
    {
      id: 'process-centric-harness',
      number: '04',
      name: 'Process-Centric Agent Harness',
      subtitle: 'Composed Product 1 • Process Authoring & Execution Portal',
      tagline: 'Composed foundational components into an end-to-end product for process authoring and autonomous execution.',
      organization: 'Infosys Topaz',
      period: 'Dec 2024 – Present',
      roleTag: 'Composed Product',
      description:
        'Composed foundational execution harness, gVisor sandbox, and MCP platform into a complete enterprise product enabling end-to-end process authoring, skill linking, OpenAPI spec onboarding, and autonomous execution exposed via Process Authoring Portal. Deployed across multiple enterprise clients and under active go-to-market.',
      architectureBreakdown: [
        {
          title: 'Foundational Composition',
          description:
            'Integrates execution engine, gVisor sandboxing, and MCP platform into a cohesive product suite.',
        },
        {
          title: 'Process Authoring Portal',
          description:
            'Enables business and engineering users to author workflows, link enterprise skills, and onboard OpenAPI specs.',
        },
        {
          title: 'Autonomous Execution',
          description:
            'Drives autonomous process execution across complex enterprise workflows with high straight-through automation.',
        },
      ],
      systemSpecs: [
        { label: 'Composition', value: 'Harness + Sandbox + MCP' },
        { label: 'Interface', value: 'Process Authoring Portal' },
        { label: 'Integrations', value: 'OpenAPI Specs & Skill Linking' },
        { label: 'Status', value: 'Active Go-To-Market & Deployed' },
      ],
      highlights: [
        'Composed 3 foundational components into Process-Centric Product',
        'Enabled end-to-end process authoring and OpenAPI spec onboarding',
        'Deployed across multiple enterprise clients under active GTM',
      ],
      metrics: ['Deployed across clients', 'Active Go-To-Market', 'End-to-end automation'],
      techStack: ['Process Authoring Portal', 'OpenAPI Onboarding', 'Agent Composition', 'gVisor Sandbox', 'MCP'],
      flowCodeSnippet: `// Process-Centric Product Execution
const product = new ProcessCentricProduct({
  harness: eventEngine,
  sandbox: gVisor,
  mcpRegistry: mcpPlatform
});
await product.launchProcessPortal();`,
    },
    {
      id: 'user-centric-harness',
      number: '05',
      name: 'User-Centric Agent Harness',
      subtitle: 'Composed Product 2 • Multi-Surface Developer Platform',
      tagline: 'Multi-surface platform exposing agent capabilities via Web UI, CLI, and VS Code Extension.',
      organization: 'Infosys Topaz',
      period: 'Dec 2024 – Present',
      roleTag: 'Composed Product',
      description:
        'Built a multi-surface developer platform — including Web Portal (AGUI / A2UI), CLI (agent-cli), and VS Code Extension — exposing foundational agent capabilities for developer, operational, and user-centric workflows.',
      architectureBreakdown: [
        {
          title: 'Web Portal (AGUI / A2UI)',
          description:
            'Rich interactive Web UI portal for monitoring, inspecting, and interacting with running agent sessions.',
        },
        {
          title: 'Developer CLI (agent-cli)',
          description:
            'Command-line interface allowing developers to trigger, debug, and manage agent workflows locally.',
        },
        {
          title: 'VS Code Extension',
          description:
            'Native IDE integration bringing agent skill authoring, MCP inspection, and execution directly into VS Code.',
        },
      ],
      systemSpecs: [
        { label: 'Surface 1', value: 'Web UI Portal (AGUI/A2UI)' },
        { label: 'Surface 2', value: 'Developer CLI (agent-cli)' },
        { label: 'Surface 3', value: 'VS Code Extension' },
        { label: 'Target Audience', value: 'Developers & Operations' },
      ],
      highlights: [
        'Built multi-surface developer platform across Web, CLI, and IDE',
        'Exposed agent capabilities via Web UI (AGUI/A2UI)',
        'Created VS Code Extension for native in-editor agent workflows',
      ],
      metrics: ['3 unified surfaces', '4x developer adoption', 'Enhanced dev velocity'],
      techStack: ['Web UI (AGUI/A2UI)', 'CLI', 'VS Code Extension', 'TypeScript', 'Python'],
      flowCodeSnippet: `// Multi-Surface User-Centric Agent Harness
const devPlatform = new UserCentricProduct({
  webUI: "A2UI_Portal",
  cli: "agent-cli",
  ide: "VSCode_Extension"
});
await devPlatform.bindSurfaces();`,
    },
  ] as ProductItem[],

  // Rooted precisely in CV Experience Section
  experience: [
    {
      id: 'infosys',
      company: 'Infosys Topaz',
      role: 'Senior AI Engineer',
      period: 'Dec 2024 – Present',
      location: 'Pune, India',
      summary:
        'Senior AI Engineer designing foundational agent infrastructure, composing it into enterprise products, and architecting multi-million dollar AI solutions.',
      sections: [
        {
          title: 'Foundational Components',
          items: [
            {
              lead: 'Execution Harness',
              description:
                'Designed and built a bespoke event-driven agent execution engine supporting deterministic state reconstruction, checkpointing, and long-running workflow continuity across distributed agent instances.',
              tags: ['Event-Driven Engine', 'State Reconstruction', 'Checkpointing'],
            },
            {
              lead: 'Sandbox',
              description:
                'Built an isolated execution sandbox leveraging gVisor for secure, reproducible execution of untrusted agent code, MCP servers, and dynamically loaded skills.',
              tags: ['gVisor Sandbox', 'Reproducible Execution', 'Security'],
            },
            {
              lead: 'MCP Platform',
              description:
                'Created a platform for importing, building, and hosting Model Context Protocol (MCP) servers with AI-assisted authoring, validation, and lifecycle management.',
              tags: ['Model Context Protocol', 'AI Authoring', 'Lifecycle Management'],
            },
            {
              lead: 'Skill Authoring Platform',
              description:
                'Built an AI-assisted Skill Authoring Platform that accelerates creation, testing, packaging, and onboarding of reusable enterprise skills through guided generation.',
              tags: ['Skill Authoring', 'Guided Generation', 'Enterprise Skills'],
            },
            {
              lead: 'User Onboarding Platform',
              description:
                'Developed a modular platform providing environment provisioning, access management, onboarding workflows, and operational governance across agent ecosystems.',
              tags: ['User Onboarding', 'Environment Provisioning', 'Governance'],
            },
            {
              lead: 'Workspace Execution Architecture',
              description:
                'Defined workspace-centric platform architecture enabling agents, skills, MCP servers, and orchestration components to collaborate within shared environments while maintaining security boundaries.',
              tags: ['Workspace Architecture', 'Security Boundaries', 'Traceability'],
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              lead: 'Process-Centric Harness',
              description:
                'Composed foundational components into a full product enabling end-to-end process authoring, skill linking, OpenAPI spec onboarding, and autonomous execution. Deployed across multiple enterprise clients and under active go-to-market.',
              tags: ['Process Authoring', 'OpenAPI Onboarding', 'Go-To-Market'],
            },
            {
              lead: 'User-Centric Harness',
              description:
                'Built a multi-surface developer platform — including Web Portal (AGUI/A2UI), CLI, and VS Code Extension — exposing agent capabilities for developer and operational workflows.',
              tags: ['Web Portal (A2UI)', 'CLI', 'VS Code Extension'],
            },
          ],
        },
        {
          title: 'Solution Architecture & Deal Wins',
          items: [
            {
              lead: 'Telecom Transformation ($300M)',
              description:
                'Led digital transformation for a Tier-1 telecom by designing full-stack agentic workflows; improved process efficiency 40% and helped secure a $300M AI-led transformation deal.',
              tags: ['$300M Deal', 'Tier-1 Telecom', '40% Efficiency'],
            },
            {
              lead: '16-Agent Production Pipeline',
              description:
                'Architected a production 16-agent pipeline with 5 HITL checkpoints, delivering 95% straight-through automation across complex enterprise workflows.',
              tags: ['16-Agent Pipeline', '5 HITL Checkpoints', '95% Automation'],
            },
            {
              lead: 'Internal Agentic Platform',
              description:
                'Spearheaded an internal agentic platform that standardized blueprints and governance, cutting build time 50% and driving 4x developer adoption over two quarters.',
              tags: ['Agentic Blueprints', 'Governance', '4x Adoption'],
            },
            {
              lead: 'LLM "Compiler"',
              description:
                'Built an LLM "compiler" (prompt planning/optimization + caching + tool orchestration) that reduced median latency 35% while maintaining quality.',
              tags: ['LLM Compiler', 'Tool Orchestration', '35% Latency Cut'],
            },
            {
              lead: 'Contract-Comparison Agents',
              description:
                'Delivered contract-comparison agents for 5 enterprise clients, reducing manual review time 60% and improving auditability.',
              tags: ['Contract-Comparison', '60% Time Reduction', 'Auditability'],
            },
            {
              lead: 'End-to-End Delivery & Evaluation',
              description:
                'Owned end-to-end delivery: assessed as-is workflows, defined data models/base tables, and shipped agents from backend to frontend with evaluation and monitoring.',
              tags: ['End-to-End Delivery', 'Data Models', 'Evaluation'],
            },
          ],
        },
      ],
      achievements: [],
      techStack: [
        'Python',
        'LLM Agents',
        'gVisor',
        'Model Context Protocol',
        'Event-Log Orchestration',
        'State Reconstruction',
        'LangChain',
        'PyTorch',
      ],
    },
    {
      id: 'xcaliber',
      company: 'Xcaliber Infotech',
      role: 'Data Scientist',
      period: 'Dec 2022 – Dec 2024',
      location: 'Pune, India',
      summary:
        'Built LLaMA-based summarization APIs, LLM-powered RAG chatbots, and recommendation engines to optimize warehouse efficiency and increase bundle sales.',
      sections: [
        {
          title: 'Microservices & AI Engineering',
          items: [
            {
              lead: 'Summarization Microservice',
              description:
                'Built a high-throughput text summarization service using LLaMA, BART, spaCy, and PyTorch to process OEM delivery waiver comments, integrating with warehouse ERP systems.',
              tags: ['LLaMA', 'BART', 'PyTorch', 'spaCy'],
            },
            {
              lead: 'Enterprise RAG Assistant',
              description:
                'Developed a conversational assistant using LangChain, ChromaDB, and Hugging Face Transformers, reducing internal document lookup time by 40%.',
              tags: ['LangChain', 'ChromaDB', 'Hugging Face', 'Flask'],
            },
            {
              lead: 'Accessory Recommender',
              description:
                'Designed a location-aware affinity recommendation engine matching regional inventory with purchase patterns, boosting weekly accessory bundle sales by 25%.',
              tags: ['Accessory Recommender', 'Affinity Modeling', '25% Sales Increase'],
            },
            {
              lead: 'API & Telemetry Layer',
              description:
                'Created an API layer to manage and update summarized comments and audit logs; enabled role-based insights from dashboards for operations teams.',
              tags: ['API Layer', 'Audit Logs', 'Role-Based Insights'],
            },
          ],
        },
      ],
      achievements: [],
      techStack: [
        'LLaMA',
        'BART',
        'PyTorch',
        'spaCy',
        'LangChain',
        'ChromaDB',
        'Flask',
        'Hugging Face',
      ],
    },
    {
      id: 'concentrix',
      company: 'Concentrix India',
      role: 'Data Analyst',
      period: 'Oct 2015 – Apr 2017',
      location: 'Gurgaon, India',
      summary:
        'Built Python/SQL pipelines and dashboards for operations analytics and business reporting.',
      sections: [
        {
          title: 'Analytics & Data Pipelines',
          items: [
            {
              lead: 'Analytics Pipelines',
              description:
                'Built Python/SQL pipelines and dashboards for operations analytics.',
              tags: ['Python', 'SQL', 'Pipelines', 'Dashboards'],
            },
            {
              lead: 'Predictive Modeling',
              description:
                'Performed exploratory analysis and predictive modelling (regression/classification) to support business reporting.',
              tags: ['Predictive Modelling', 'Regression', 'Classification'],
            },
          ],
        },
      ],
      achievements: [],
      techStack: ['Python', 'SQL', 'Regression', 'Classification'],
    },
  ] as ExperienceItem[],

  // Rooted precisely in CV Skills section
  skillCategories: [
    {
      title: 'Programming & Data',
      subtitle: 'Core languages, libraries, and frameworks',
      skills: [
        { name: 'Python', level: 'Expert', highlight: true },
        { name: 'SQL', level: 'Expert', highlight: true },
        { name: 'Flask', level: 'Expert' },
        { name: 'Git/GitHub', level: 'Expert' },
        { name: 'AWS', level: 'Advanced', highlight: true },
        { name: 'NumPy', level: 'Expert' },
        { name: 'pandas', level: 'Expert' },
        { name: 'Matplotlib', level: 'Advanced' },
        { name: 'RegEx', level: 'Advanced' },
      ],
    },
    {
      title: 'NLP & GenAI',
      subtitle: 'Language models, frameworks, and vector databases',
      skills: [
        { name: 'Transformers (BERT, RoBERTa, LLaMA)', level: 'Expert', highlight: true },
        { name: 'LangChain', level: 'Expert', highlight: true },
        { name: 'ChromaDB', level: 'Expert', highlight: true },
        { name: 'Hugging Face', level: 'Expert', highlight: true },
        { name: 'spaCy', level: 'Expert' },
        { name: 'NLTK', level: 'Expert' },
        { name: 'Word2Vec & TF-IDF', level: 'Advanced' },
        { name: 'NER', level: 'Advanced' },
      ],
    },
    {
      title: 'Deep Learning',
      subtitle: 'Neural network architectures and deep learning frameworks',
      skills: [
        { name: 'TensorFlow', level: 'Expert', highlight: true },
        { name: 'Keras', level: 'Advanced' },
        { name: 'PyTorch', level: 'Expert', highlight: true },
        { name: 'ANN & CNN', level: 'Expert' },
        { name: 'RNN & LSTM', level: 'Expert' },
        { name: 'Encoders/Decoders', level: 'Advanced' },
      ],
    },
    {
      title: 'Machine Learning',
      subtitle: 'Statistical algorithms and predictive modeling',
      skills: [
        { name: 'Scikit-learn', level: 'Expert', highlight: true },
        { name: 'Linear/Logistic Regression', level: 'Expert' },
        { name: 'Decision Trees & Random Forest', level: 'Expert', highlight: true },
        { name: 'KNN', level: 'Advanced' },
        { name: 'SVM', level: 'Advanced' },
        { name: 'AdaBoost', level: 'Advanced' },
        { name: 'K-Means', level: 'Advanced' },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      degree: 'PG-Diploma in Artificial Intelligence (PGDAI)',
      institution: 'CDAC, Pune',
      year: '2022',
      focus: 'Artificial Intelligence',
    },
    {
      degree: 'B.Tech',
      institution: 'JIET, Jind',
      year: '2014',
      focus: 'Engineering',
    },
  ],

  deliverables: {
    pdf: '/cvs/Vinay_Kumar_CV.pdf',
    docx: '/cvs/Vinay_Kumar_CV.docx',
    html: '/cvs/resume.html',
  },
};
