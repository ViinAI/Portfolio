export interface ProjectOrPillar {
  id: string;
  title: string;
  category: 'Platform Core' | 'Enterprise Product' | 'Solution Architecture' | 'GenAI & ML';
  roleTag: string;
  organization: string;
  description: string;
  highlights: string[];
  metrics: string[];
  techStack: string[];
  architectureDiagram?: string;
  featured?: boolean;
}

export interface ExperienceItem {
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
    subtitle: 'Enterprise AI Platforms • Agent Execution Systems • MCP Ecosystems • Production GenAI',
    location: 'Pune, India',
    email: 'viinaimadotra@gmail.com',
    phone: '+91 9992394789',
    github: 'https://github.com/ViinAI',
    githubDisplay: 'github.com/ViinAI',
    linkedin: 'https://linkedin.com/in/viinai',
    linkedinDisplay: 'linkedin.com/in/viinai',
    bio: 'Senior AI Engineer with 5.5+ years of hands-on experience building foundational agent execution harnesses, secure gVisor sandboxes, Model Context Protocol (MCP) ecosystems, and deal-winning enterprise AI architectures across multi-million dollar transformations.',
    status: 'Available for Senior AI & Agent Platform Roles',
  },

  stats: [
    { label: 'Years of AI/ML Experience', value: '5.5+' },
    { label: 'Enterprise Transformation', value: '$300M+' },
    { label: 'Platform Surfaces Shipped', value: '3' },
    { label: 'Latency & Lookup Gain', value: '40%' },
  ],

  pillars: [
    {
      id: 'agent-execution-harness',
      title: 'Bespoke Agent Execution Engine',
      category: 'Platform Core',
      roleTag: 'Foundational Infrastructure',
      organization: 'Infosys',
      featured: true,
      description:
        'Architected and engineered a high-reliability, event-driven agent execution runtime supporting deterministic state reconstruction, step-level checkpointing, and uninterrupted workflow continuity across distributed agent clusters.',
      highlights: [
        'Deterministic state reconstruction with crash-resilient event sourcing',
        'Fine-grained checkpointing for long-running autonomous workflows',
        'State-machine abstraction decoupling LLM reasoning loops from execution environments',
      ],
      metrics: ['Zero state loss during crash recovery', 'Distributed multi-agent orchestration'],
      techStack: ['Event-Driven Architecture', 'State Reconstruction', 'Python', 'TypeScript', 'Docker', 'Distributed Systems'],
    },
    {
      id: 'gvisor-sandbox',
      title: 'Isolated Multi-Tenant Execution Sandbox',
      category: 'Platform Core',
      roleTag: 'Security & Isolation',
      organization: 'Infosys',
      featured: true,
      description:
        'Engineered a secure microVM-level execution sandbox leveraging gVisor for safe, multi-tenant execution of arbitrary untrusted agent code, external MCP servers, and runtime-loaded skill packs.',
      highlights: [
        'Strict kernel syscall filtering via gVisor sandbox boundary',
        'Dynamic ephemeral container lifecycle management with microsecond cold starts',
        'Secure socket proxying for controlled agent tool invocation',
      ],
      metrics: ['Sub-second cold starts', '100% untrusted code containment'],
      techStack: ['gVisor', 'Linux Kernel Namespaces', 'Docker', 'Security Sandboxing', 'Go / Python'],
    },
    {
      id: 'mcp-platform',
      title: 'Model Context Protocol (MCP) Platform',
      category: 'Platform Core',
      roleTag: 'Ecosystem Infrastructure',
      organization: 'Infosys',
      featured: true,
      description:
        'Built an end-to-end enterprise platform for importing, generating, validating, and hosting Model Context Protocol (MCP) servers with automated schema discovery and tool lifecycle management.',
      highlights: [
        'AI-assisted MCP server authoring and automated tool schema validation',
        'Dynamic tool routing and policy enforcement across heterogeneous agent runtimes',
        'One-click OpenAPI to MCP converter pipeline',
      ],
      metrics: ['Enterprise MCP Server Registry', 'Automated Tool Spec Validation'],
      techStack: ['Model Context Protocol (MCP)', 'TypeScript', 'Python', 'OpenAPI', 'FastAPI'],
    },
    {
      id: 'process-harness-product',
      title: 'Process-Centric Autonomous Harness',
      category: 'Enterprise Product',
      roleTag: 'Product Engineering',
      organization: 'Infosys',
      featured: true,
      description:
        'Composed foundational agent runtime and MCP systems into a turnkey enterprise product enabling visual process authoring, OpenAPI onboarding, and autonomous business workflow execution.',
      highlights: [
        'Visual workflow canvas bridging business analysts and autonomous agents',
        'Dynamic OpenAPI spec ingestion and automatic tool linking',
        'Active enterprise GTM (Go-To-Market) deployment across Fortune 500 clients',
      ],
      metrics: ['Enterprise Client Deployments', 'Active Go-To-Market Phase'],
      techStack: ['React / Next.js', 'FastAPI', 'Autonomous Agents', 'OpenAPI Spec', 'Redis', 'PostgreSQL'],
    },
    {
      id: 'user-centric-harness',
      title: 'Multi-Surface Developer Platform',
      category: 'Enterprise Product',
      roleTag: 'Developer Experience',
      organization: 'Infosys',
      featured: false,
      description:
        'Built a cohesive multi-surface developer ecosystem consisting of a Web Portal (AGUI / A2UI), unified CLI tool, and VS Code IDE extension exposing full agent capabilities to developer workflows.',
      highlights: [
        'Web Portal (AGUI/A2UI) for visual agent monitoring, evaluation, and telemetry',
        'VS Code IDE Extension for inline agent copilot and MCP tool testing',
        'High-performance CLI for CI/CD automation and local agent debugging',
      ],
      metrics: ['3 unified developer interfaces', 'Single backend runtime'],
      techStack: ['VS Code API', 'Next.js', 'TypeScript CLI', 'WebSockets', 'AGUI/A2UI'],
    },
    {
      id: 'deal-wins-solutions',
      title: '$300M Telecom Transformation & AI Solutions',
      category: 'Solution Architecture',
      roleTag: 'Principal Solutions',
      organization: 'Infosys',
      featured: true,
      description:
        'Independently architected mission-critical enterprise AI solutions that secured pivotal multi-million dollar client contracts for Infosys.',
      highlights: [
        'Architected $300M Telecom digital transformation powered by autonomous agent workflows',
        'Designed Digital Tutor AI platform for interactive, adaptive knowledge mastery',
        'Created CMDB AI intelligence engine for automated IT asset discovery and configuration mapping',
      ],
      metrics: ['$300M contract won', '3 Major Enterprise Solutions Delivered'],
      techStack: ['Enterprise Solution Architecture', 'RAG', 'Agent Workflows', 'Multi-Agent Systems', 'AWS'],
    },
    {
      id: 'summarization-microservice',
      title: 'OEM Delivery Text Summarization Engine',
      category: 'GenAI & ML',
      roleTag: 'Production GenAI',
      organization: 'Xcaliber Infotech',
      featured: false,
      description:
        'Built a high-throughput text summarization microservice utilizing fine-tuned LLaMA, BART, spaCy, and PyTorch to digest voluminous OEM delivery waiver comments and feed warehouse ERP systems.',
      highlights: [
        'Fine-tuned open-source LLMs (LLaMA, BART) for domain-specific industrial terminology',
        'Automated real-time extraction pipeline directly linked to enterprise warehouse ERPs',
      ],
      metrics: ['High-throughput streaming', 'Sub-second parsing latency'],
      techStack: ['LLaMA', 'BART', 'PyTorch', 'spaCy', 'FastAPI', 'ERP Integration'],
    },
    {
      id: 'rag-assistant',
      title: 'Enterprise Conversational RAG Assistant',
      category: 'GenAI & ML',
      roleTag: 'Information Retrieval',
      organization: 'Xcaliber Infotech',
      featured: false,
      description:
        'Designed and deployed an enterprise retrieval-augmented generation (RAG) assistant using LangChain, ChromaDB, and Hugging Face Transformers.',
      highlights: [
        'Semantic chunking and hybrid retrieval algorithms over corporate document repositories',
        'Reduced internal document lookup duration by 40% across engineering and operations teams',
      ],
      metrics: ['40% lookup time reduction', 'High retrieval precision'],
      techStack: ['LangChain', 'ChromaDB', 'Hugging Face', 'Sentence-Transformers', 'Python'],
    },
    {
      id: 'accessory-recommender',
      title: 'Location-Aware Affinity Recommender',
      category: 'GenAI & ML',
      roleTag: 'Machine Learning',
      organization: 'Xcaliber Infotech',
      featured: false,
      description:
        'Engineered an intelligent affinity recommendation engine correlating regional inventory distributions with historical customer purchasing patterns.',
      highlights: [
        'Collaborative filtering and geospatial inventory matching',
        'Boosted weekly accessory bundle attachment rates by 25% across regional retail outlets',
      ],
      metrics: ['+25% accessory bundle sales', 'Real-time inference'],
      techStack: ['Scikit-Learn', 'Pandas', 'PostgreSQL', 'FastAPI', 'Affinity Modeling'],
    },
  ] as ProjectOrPillar[],

  experience: [
    {
      company: 'Infosys',
      role: 'Senior AI Engineer',
      period: 'Dec 2024 – Present',
      location: 'Pune, India',
      summary:
        'Designing foundational agent infrastructure, composing it into enterprise products, and architecting strategic AI solutions across domains.',
      achievements: [
        {
          lead: 'Execution Harness',
          description:
            'Designed and built a bespoke event-driven agent execution engine supporting deterministic state reconstruction, checkpointing, and long-running workflow continuity across distributed agent instances.',
          tags: ['Event-Driven', 'State Reconstruction', 'Agent Runtime'],
        },
        {
          lead: 'Sandbox',
          description:
            'Built an isolated execution sandbox leveraging gVisor for secure, reproducible execution of untrusted agent code, MCP servers, and dynamically loaded skills.',
          tags: ['gVisor', 'Sandboxing', 'Security', 'Isolation'],
        },
        {
          lead: 'MCP Platform',
          description:
            'Created a platform for importing, building, and hosting Model Context Protocol (MCP) servers with AI-assisted authoring, validation, and lifecycle management.',
          tags: ['Model Context Protocol', 'Tool Discovery', 'FastAPI'],
        },
        {
          lead: 'Process-Centric Harness',
          description:
            'Composed foundational components into a full product enabling end-to-end process authoring, skill linking, OpenAPI spec onboarding, and autonomous execution. Deployed across multiple enterprise clients and under active go-to-market.',
          tags: ['Product Development', 'OpenAPI', 'Enterprise GTM'],
        },
        {
          lead: 'User-Centric Harness',
          description:
            'Built a multi-surface developer platform — including Web Portal (AGUI/A2UI), CLI, and VS Code Extension — exposing agent capabilities for developer and operational workflows.',
          tags: ['VS Code Extension', 'AGUI/A2UI', 'Developer Tools'],
        },
        {
          lead: 'Solution Architecture & Deal Wins',
          description:
            'Independently architected diverse AI solutions — including a $300M Telecom transformation, Digital Tutor platform, and CMDB platform — driving multiple deal wins for Infosys.',
          tags: ['$300M Transformation', 'Digital Tutor', 'CMDB AI'],
        },
      ],
      techStack: [
        'Agent Systems',
        'gVisor',
        'MCP',
        'Python',
        'TypeScript',
        'FastAPI',
        'Next.js',
        'Docker',
        'Kubernetes',
        'AWS',
      ],
    },
    {
      company: 'Xcaliber Infotech',
      role: 'AI Engineer',
      period: 'Dec 2022 – Dec 2024',
      location: 'Pune, India',
      summary:
        'Spearheaded production GenAI microservices, RAG conversational pipelines, and ML recommendation systems for enterprise clients.',
      achievements: [
        {
          lead: 'Summarization Microservice',
          description:
            'Built a high-throughput text summarization service using LLaMA, BART, spaCy, and PyTorch to process OEM delivery waiver comments, integrating with warehouse ERP systems.',
          tags: ['LLaMA', 'BART', 'PyTorch', 'ERP Integration'],
        },
        {
          lead: 'Enterprise RAG Assistant',
          description:
            'Developed a conversational assistant using LangChain, ChromaDB, and Hugging Face Transformers, reducing internal document lookup time by 40%.',
          tags: ['LangChain', 'ChromaDB', 'Hugging Face', 'RAG'],
        },
        {
          lead: 'Accessory Recommender',
          description:
            'Designed a location-aware affinity recommendation engine matching regional inventory with purchase patterns, boosting weekly accessory bundle sales by 25%.',
          tags: ['Affinity Modeling', 'Scikit-Learn', '+25% Sales'],
        },
        {
          lead: 'API & Telemetry Layer',
          description:
            'Developed REST APIs and real-time operations dashboards for role-based analytics and audit tracking.',
          tags: ['FastAPI', 'Telemetry', 'Dashboards'],
        },
      ],
      techStack: [
        'LLaMA',
        'BART',
        'LangChain',
        'ChromaDB',
        'PyTorch',
        'spaCy',
        'FastAPI',
        'Docker',
        'PostgreSQL',
      ],
    },
    {
      company: 'Concentrix India',
      role: 'Data Analyst',
      period: 'Oct 2015 – Apr 2017',
      location: 'Gurgaon, India',
      summary:
        'Developed end-to-end data analytics pipelines, automated ETL workflows, and predictive business forecasting models.',
      achievements: [
        {
          lead: 'Analytics Pipelines',
          description:
            'Built automated Python and SQL ETL pipelines and executive reporting dashboards.',
          tags: ['Python', 'SQL ETL', 'Executive Dashboards'],
        },
        {
          lead: 'Predictive Modeling',
          description:
            'Performed regression and classification modeling for business forecasting and workforce planning.',
          tags: ['Regression', 'Classification', 'Workforce Modeling'],
        },
      ],
      techStack: ['Python', 'SQL', 'Pandas', 'NumPy', 'Tableau', 'Excel Modeling'],
    },
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: 'AI Platform & Agent Systems',
      subtitle: 'Execution runtimes, sandboxes, protocol layers & orchestration',
      skills: [
        { name: 'Event-Driven Architecture', level: 'Expert', highlight: true },
        { name: 'Agent Execution Harnesses', level: 'Expert', highlight: true },
        { name: 'gVisor Sandboxing', level: 'Expert', highlight: true },
        { name: 'Model Context Protocol (MCP)', level: 'Expert', highlight: true },
        { name: 'Process Orchestration', level: 'Expert', highlight: true },
        { name: 'Multi-Agent Systems', level: 'Expert', highlight: true },
        { name: 'Deterministic State Reconstruction', level: 'Expert' },
        { name: 'Semantic Caching', level: 'Advanced' },
        { name: 'LLM Compilers & State Machines', level: 'Advanced' },
      ],
    },
    {
      title: 'GenAI & LLM Stack',
      subtitle: 'Open-source models, retrieval systems, fine-tuning & prompt frameworks',
      skills: [
        { name: 'LLaMA & Mistral', level: 'Expert', highlight: true },
        { name: 'GPT-4 & Azure OpenAI', level: 'Expert', highlight: true },
        { name: 'Hugging Face Transformers', level: 'Expert', highlight: true },
        { name: 'LangChain & LlamaIndex', level: 'Expert', highlight: true },
        { name: 'Advanced RAG Architectures', level: 'Expert', highlight: true },
        { name: 'Vector DBs (ChromaDB, Pinecone, FAISS)', level: 'Expert' },
        { name: 'BERT, BART, RoBERTa', level: 'Advanced' },
        { name: 'Embeddings & Rerankers', level: 'Advanced' },
      ],
    },
    {
      title: 'Machine Learning & Data Science',
      subtitle: 'Deep learning frameworks, NLP libraries & predictive statistical algorithms',
      skills: [
        { name: 'PyTorch', level: 'Expert', highlight: true },
        { name: 'TensorFlow', level: 'Advanced' },
        { name: 'Scikit-Learn', level: 'Expert' },
        { name: 'spaCy & NLTK', level: 'Expert' },
        { name: 'Named Entity Recognition (NER)', level: 'Expert' },
        { name: 'Recommendation Engines', level: 'Expert', highlight: true },
        { name: 'Regression & Classification', level: 'Expert' },
        { name: 'Time-Series & Forecasting', level: 'Advanced' },
      ],
    },
    {
      title: 'Languages & Infrastructure',
      subtitle: 'Backend services, cloud orchestration, databases & developer tooling',
      skills: [
        { name: 'Python', level: 'Expert', highlight: true },
        { name: 'TypeScript / JavaScript', level: 'Expert', highlight: true },
        { name: 'FastAPI & Flask', level: 'Expert', highlight: true },
        { name: 'Docker & MicroVMs', level: 'Expert', highlight: true },
        { name: 'Kubernetes', level: 'Advanced' },
        { name: 'AWS (EC2, S3, SageMaker, Lambda)', level: 'Advanced', highlight: true },
        { name: 'PostgreSQL & MySQL', level: 'Expert' },
        { name: 'Next.js & React', level: 'Expert' },
        { name: 'Git & CI/CD Pipelines', level: 'Expert' },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      degree: 'PG-Diploma in Artificial Intelligence (PGDAI)',
      institution: 'C-DAC, Pune',
      year: '2022',
      focus: 'Advanced Machine Learning, Deep Learning, Natural Language Processing, Computer Vision',
    },
    {
      degree: 'B.Tech in Mechanical Engineering',
      institution: 'Jind Institute of Engineering & Technology (JIET), Jind',
      year: '2014',
      focus: 'Computational Systems, Mathematical Analysis, Engineering Mechanics',
    },
  ],

  deliverables: {
    pdf: '/cvs/Vinay_Kumar_CV.pdf',
    docx: '/cvs/Vinay_Kumar_CV.docx',
    html: '/cvs/resume.html',
  },
};
