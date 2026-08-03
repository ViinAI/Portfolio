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

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: {
    lead?: string;
    description: string;
    tags?: string[];
  }[];
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
    bio: 'Senior AI Engineer with 5+ years of experience building enterprise-scale GenAI and multi-agent systems. Skilled in end-to-end design, optimization, and deployment of LLM-powered automation with a strong focus on governance and scalability.',
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
      id: 'agentic-platform',
      number: '01',
      name: 'Internal Agentic Platform',
      subtitle: 'Standardized Blueprints & 16-Agent Pipeline',
      tagline: 'Standardized blueprints and governance, driving 4x developer adoption.',
      organization: 'Infosys',
      period: 'Dec 2024 – Present',
      roleTag: 'Agent Platform',
      description:
        'Spearheaded an internal agentic platform that standardized blueprints and governance. Architected a production 16-agent pipeline with 5 HITL checkpoints, delivering 95% straight-through automation across complex enterprise workflows.',
      architectureBreakdown: [
        {
          title: 'Agentic Execution Harness',
          description:
            'Designed and evolved a full agentic execution harness built around event-log-driven orchestration, custom context projection, state reconstruction, and long-running workflow continuity.',
        },
        {
          title: 'LLM "Compiler"',
          description:
            'Built an LLM compiler (prompt planning/optimization + caching + tool orchestration) that reduced median latency 35% while maintaining quality.',
        },
        {
          title: 'Skill Authoring Platform',
          description:
            'Led development of an AI-assisted Skill Authoring Platform that accelerates creation, testing, packaging, and onboarding of reusable enterprise skills.',
        },
      ],
      systemSpecs: [
        { label: 'Pipeline Scale', value: '16-agent pipeline' },
        { label: 'Automation Rate', value: '95% straight-through' },
        { label: 'Latency Reduction', value: '35% reduction' },
        { label: 'Build Time Reduction', value: '50% cut' },
      ],
      highlights: [
        'Architected a production 16-agent pipeline with 5 HITL checkpoints',
        'Spearheaded an internal agentic platform cutting build time 50%',
        'Built an LLM compiler reducing median latency 35%',
      ],
      metrics: ['95% automation', '50% faster build time', '4x developer adoption'],
      techStack: ['Python', 'LLM Agents', 'Event-Log Orchestration', 'Caching', 'Tool Orchestration'],
      flowCodeSnippet: `// Event-Log Driven Execution Harness
await harness.execute({
  workflow: "16_agent_pipeline",
  hitl_checkpoints: 5,
  context_projection: true,
  state_reconstruction: true
});`,
    },
    {
      id: 'gvisor-sandbox',
      number: '02',
      name: 'DeepAgent-Compatible Sandbox',
      subtitle: 'gVisor-based Secure Execution Environment',
      tagline: 'Secure execution environments for AI agents and MCP servers.',
      organization: 'Infosys',
      period: 'Dec 2024 – Present',
      roleTag: 'Security & Infrastructure',
      description:
        'Architected a DeepAgent-compatible sandbox platform based on gVisor, enabling secure execution environments for AI agents, MCP servers, and user-authored skills while supporting isolation, reproducibility, and enterprise governance requirements.',
      architectureBreakdown: [
        {
          title: 'gVisor Isolation',
          description:
            'Platform based on gVisor to enable secure, isolated execution environments for AI components.',
        },
        {
          title: 'Enterprise Governance',
          description:
            'Supports reproducibility and strict enterprise governance requirements for user-authored skills.',
        },
        {
          title: 'Modular User Onboarding',
          description:
            'Developed a modular User Onboarding Platform capable of operating independently or integrating with sandbox infrastructure, providing environment provisioning and access management.',
        },
      ],
      systemSpecs: [
        { label: 'Runtime Environment', value: 'gVisor Sandbox' },
        { label: 'Execution Targets', value: 'Agents, MCP, Skills' },
        { label: 'Compliance Focus', value: 'Enterprise Governance' },
        { label: 'Integration', value: 'Modular Onboarding Platform' },
      ],
      highlights: [
        'Architected a DeepAgent-compatible sandbox platform based on gVisor',
        'Enabled secure execution environments for MCP servers and skills',
        'Developed a modular User Onboarding Platform for access management',
      ],
      metrics: ['Secure isolation', 'Enterprise reproducibility'],
      techStack: ['gVisor', 'DeepAgent Sandbox', 'Access Management', 'Environment Provisioning'],
      flowCodeSnippet: `// Sandbox Execution Context
const sandbox = new gVisorSandbox({
  mode: "DeepAgent-compatible",
  isolation: "strict",
  targets: ["agent", "mcp_server", "user_skill"]
});
await sandbox.provision();`,
    },
    {
      id: 'mcp-platform',
      number: '03',
      name: 'MCP Authoring & Onboarding Portal',
      subtitle: 'AI-assisted Tooling Connectivity',
      tagline: 'Simplifies creation, validation, and lifecycle management of MCP servers.',
      organization: 'Infosys',
      period: 'Dec 2024 – Present',
      roleTag: 'Platform Ecosystem',
      description:
        'Built an AI-assisted MCP Authoring and Onboarding Portal that simplifies creation, registration, validation, and lifecycle management of MCP servers, reducing integration effort and standardizing enterprise tool connectivity.',
      architectureBreakdown: [
        {
          title: 'AI-Assisted Authoring',
          description:
            'Provides guided generation and lifecycle management to simplify the creation of MCP servers.',
        },
        {
          title: 'Enterprise Standardization',
          description:
            'Standardizes enterprise tool connectivity and reduces overall integration effort across the organization.',
        },
        {
          title: 'Workspace-Centric Architecture',
          description:
            'Defined platform architecture for workspace-centric execution, enabling agents, skills, and MCP servers to collaborate within shared execution environments.',
        },
      ],
      systemSpecs: [
        { label: 'Portal Type', value: 'Authoring & Onboarding' },
        { label: 'Protocol', value: 'Model Context Protocol (MCP)' },
        { label: 'Lifecycle', value: 'Creation, Registration, Validation' },
        { label: 'Architecture', value: 'Workspace-centric execution' },
      ],
      highlights: [
        'Built an AI-assisted MCP Authoring and Onboarding Portal',
        'Defined platform architecture for workspace-centric agent execution',
        'Standardized enterprise tool connectivity',
      ],
      metrics: ['Reduced integration effort', 'Standardized connectivity'],
      techStack: ['Model Context Protocol', 'AI-assisted Code Generation', 'Enterprise Tooling'],
      flowCodeSnippet: `// Workspace-Centric MCP Execution
await workspace.collaborate({
  components: ["orchestrator", "mcp_server", "skill_pack"],
  shared_environment: true,
  traceability: "enabled"
});`,
    },
    {
      id: 'telecom-transformation',
      number: '04',
      name: '$300M Telecom AI Transformation',
      subtitle: 'Full-stack Agentic Workflows & Contract Agents',
      tagline: 'Led digital transformation securing a $300M AI-led deal.',
      organization: 'Infosys',
      period: 'Dec 2024 – Present',
      roleTag: 'End-to-End Delivery',
      description:
        'Led digital transformation for a Tier-1 telecom by designing full-stack agentic workflows; improved process efficiency 40% and helped secure a $300M AI-led transformation deal. Owned end-to-end delivery from base tables to frontend evaluation.',
      architectureBreakdown: [
        {
          title: 'End-to-End Delivery',
          description:
            'Assessed as-is workflows, defined data models/base tables, and shipped agents from backend to frontend with evaluation and monitoring.',
        },
        {
          title: 'Contract-Comparison Agents',
          description:
            'Delivered contract-comparison agents for 5 enterprise clients, reducing manual review time 60% and improving auditability.',
        },
        {
          title: 'Process Efficiency',
          description:
            'Designed full-stack agentic workflows that directly improved overall process efficiency by 40% for a Tier-1 telecom client.',
        },
      ],
      systemSpecs: [
        { label: 'Client Industry', value: 'Tier-1 Telecom' },
        { label: 'Contract Value', value: '$300M' },
        { label: 'Review Time Reduction', value: '60%' },
        { label: 'Delivery Scope', value: 'Backend to Frontend' },
      ],
      highlights: [
        'Led digital transformation for a Tier-1 telecom improving efficiency 40%',
        'Helped secure a $300M AI-led transformation deal',
        'Delivered contract-comparison agents reducing manual review time 60%',
      ],
      metrics: ['$300M deal secured', '60% less manual review time', '40% process efficiency gain'],
      techStack: ['Full-stack Agent Workflows', 'Data Modeling', 'Evaluation & Monitoring'],
      flowCodeSnippet: `// Contract-Comparison Agent Evaluation
const comparison = await contractAgent.compare({
  documents: ["contract_A.pdf", "contract_B.pdf"],
  clients: 5,
  auditability_mode: true
});
frontend.render(comparison.insights);`,
    },
    {
      id: 'text-summarization-rag',
      number: '05',
      name: 'OEM Summarization & RAG Services',
      subtitle: 'LLaMA API & Conversational Chatbot',
      tagline: 'High-throughput summarization API and enterprise RAG systems.',
      organization: 'Xcaliber Infotech',
      period: 'Dec 2022 – Dec 2024',
      roleTag: 'Data Scientist',
      description:
        'Built a LLaMA-based text-summarization service to process OEM comments and an LLM-powered chatbot for data retrieval, accelerating stakeholder Q&A and reducing manual lookups.',
      architectureBreakdown: [
        {
          title: 'Text-Summarization Service',
          description:
            'Built a LLaMA-based service (spaCy, BART, PyTorch) to process OEM comments for inventory-delivery waivers; exposed it as a secure API.',
        },
        {
          title: 'LLM-Powered Chatbot (RAG)',
          description:
            'Developed and deployed an LLM-powered chatbot (Hugging Face Transformers, LangChain, ChromaDB, Flask) for data retrieval and analysis.',
        },
        {
          title: 'Accessory Recommender',
          description:
            'Designed an Accessory Recommender suggesting three add-ons using phone-accessory affinity and location-aware inventory, increasing sales 25%.',
        },
      ],
      systemSpecs: [
        { label: 'Models Used', value: 'LLaMA, BART, Hugging Face' },
        { label: 'Vector Store', value: 'ChromaDB' },
        { label: 'Integration', value: 'Secure API & Flask' },
        { label: 'Sales Increase', value: '25% (Accessory Bundles)' },
      ],
      highlights: [
        'Built a LLaMA-based text-summarization service for OEM comments',
        'Developed an LLM-powered chatbot accelerating stakeholder Q&A',
        'Designed an Accessory Recommender that increased sales 25%',
      ],
      metrics: ['25% bundle sales increase', 'Reduced manual lookups', 'Secure API integration'],
      techStack: ['LLaMA', 'BART', 'PyTorch', 'spaCy', 'LangChain', 'ChromaDB', 'Flask'],
      flowCodeSnippet: `// Text Summarization & RAG Pipeline
const summary = await llamaService.summarize({
  input: oemComments,
  model: "BART+LLaMA",
  pipeline: "spaCy"
});
const ragResponse = await langChainBot.query(summary);`,
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
        'Led digital transformation for a Tier-1 telecom, architected a 16-agent pipeline, built internal agentic platforms, gVisor sandboxes, and MCP authoring tools.',
      achievements: [
        {
          description:
            'Led digital transformation for a Tier-1 telecom by designing full-stack agentic workflows; improved process efficiency 40% and helped secure a $300M AI-led transformation deal.',
          tags: ['$300M Deal', 'Tier-1 Telecom', 'Agentic Workflows'],
        },
        {
          description:
            'Architected a production 16-agent pipeline with 5 HITL checkpoints, delivering 95% straight-through automation across complex enterprise workflows.',
          tags: ['16-Agent Pipeline', 'HITL Checkpoints', '95% Automation'],
        },
        {
          description:
            'Spearheaded an internal agentic platform that standardized blueprints and governance, cutting build time 50% and driving 4x developer adoption over two quarters.',
          tags: ['Agentic Platform', 'Standardized Blueprints', 'Governance'],
        },
        {
          description:
            'Built an LLM "compiler" (prompt planning/optimization + caching + tool orchestration) that reduced median latency 35% while maintaining quality.',
          tags: ['LLM Compiler', 'Tool Orchestration', 'Latency Optimization'],
        },
        {
          description:
            'Delivered contract-comparison agents for 5 enterprise clients, reducing manual review time 60% and improving auditability.',
          tags: ['Contract-Comparison', 'Auditability', 'Client Delivery'],
        },
        {
          description:
            'Owned end-to-end delivery: assessed as-is workflows, defined data models/base tables, and shipped agents from backend to frontend with evaluation and monitoring.',
          tags: ['End-to-End Delivery', 'Data Models', 'Evaluation'],
        },
        {
          description:
            'Architected a DeepAgent-compatible sandbox platform based on gVisor, enabling secure execution environments for AI agents, MCP servers, and user-authored skills while supporting isolation, reproducibility, and enterprise governance requirements.',
          tags: ['gVisor Sandbox', 'Isolation', 'Enterprise Governance'],
        },
        {
          description:
            'Designed and evolved a full agentic execution harness built around event-log-driven orchestration, custom context projection, state reconstruction, and long-running workflow continuity, improving observability and auditability of complex multi-agent processes.',
          tags: ['Event-Log Harness', 'State Reconstruction', 'Observability'],
        },
        {
          description:
            'Led development of an AI-assisted Skill Authoring Platform that accelerates creation, testing, packaging, and onboarding of reusable enterprise skills through guided generation, dependency management, and deployment workflows.',
          tags: ['Skill Authoring', 'Guided Generation', 'Enterprise Skills'],
        },
        {
          description:
            'Built an AI-assisted MCP Authoring and Onboarding Portal that simplifies creation, registration, validation, and lifecycle management of MCP servers, reducing integration effort and standardizing enterprise tool connectivity.',
          tags: ['MCP Portal', 'Lifecycle Management', 'Tool Connectivity'],
        },
        {
          description:
            'Developed a modular User Onboarding Platform capable of operating independently or integrating with sandbox infrastructure, providing environment provisioning, access management, onboarding workflows, and operational governance across agent ecosystems.',
          tags: ['User Onboarding', 'Environment Provisioning', 'Access Management'],
        },
        {
          description:
            'Defined platform architecture for workspace-centric agent execution, enabling agents, skills, MCP servers, and orchestration components to collaborate within shared execution environments while maintaining security boundaries and traceability.',
          tags: ['Workspace Architecture', 'Security Boundaries', 'Traceability'],
        },
      ],
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
      achievements: [
        {
          description:
            'Built a LLaMA-based text-summarization service (spaCy, BART, PyTorch) to process OEM comments for inventory-delivery waivers; exposed it as a secure API and integrated with internal apps, improving warehouse efficiency and charge management.',
          tags: ['LLaMA', 'BART', 'PyTorch', 'spaCy'],
        },
        {
          description:
            'Developed and deployed an LLM-powered chatbot (Hugging Face Transformers, LangChain, ChromaDB, Flask) for data retrieval and analysis; accelerated stakeholder Q&A and reduced manual lookups.',
          tags: ['LangChain', 'ChromaDB', 'Hugging Face', 'Flask'],
        },
        {
          description:
            'Created an API layer to manage and update summarized comments and audit logs; enabled role-based insights from dashboards for operations teams.',
          tags: ['API Layer', 'Audit Logs', 'Role-Based Insights'],
        },
        {
          description:
            'Designed an Accessory Recommender that suggests three add-ons using phone-accessory affinity and location-aware inventory; launched a weekly bundle recommendation that increased sales 25%.',
          tags: ['Accessory Recommender', 'Affinity Modeling', '25% Sales Increase'],
        },
      ],
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
      achievements: [
        {
          description:
            'Built Python/SQL pipelines and dashboards for operations analytics.',
          tags: ['Python', 'SQL', 'Pipelines', 'Dashboards'],
        },
        {
          description:
            'Performed exploratory analysis and predictive modelling (regression/classification) to support business reporting.',
          tags: ['Predictive Modelling', 'Regression', 'Classification'],
        },
      ],
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
