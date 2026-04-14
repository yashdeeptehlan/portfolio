export const personalInfo = {
  name: 'Yashdeep Tehlan',
  title: 'AI / Backend Engineer | LLM Systems, RAG Pipelines, FastAPI',
  location: 'Toronto, Ontario, Canada',
  originalLocation: 'New Delhi, India',
  tagline:
    'AI / Backend Engineer building production-grade LLM applications, RAG pipelines, and data-driven backend systems.',
  description:
    'Proven hands-on background in Python, SQL, FastAPI, PostgreSQL, and DuckDB with applied research experience in SQL optimization systems and real-world AI product deployments. Focused on scalable architecture, API design, and practical AI integration for business outcomes.',
  email: 'tehlanyashdeep@gmail.com',
  phone: '+1 (437) 566 3594',
  linkedin: 'https://linkedin.com/in/yashdeeptehlan',
  address: 'Toronto, Ontario, Canada',
  github: 'https://github.com/yashdeeptehlan',
  workAuthorization: 'Eligible to work full-time in Canada'
};

export const skills = {
  Programming: [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 92 },
    { name: 'JavaScript', level: 84 }
  ],
  'ML & Data': [
    { name: 'LLMs', level: 90 },
    { name: 'RAG Pipelines', level: 92 },
    { name: 'Prompt Engineering', level: 90 },
    { name: 'Embeddings', level: 88 },
    { name: 'Data Modeling', level: 86 }
  ],
  'Databases & Pipelines': [
    { name: 'PostgreSQL', level: 90 },
    { name: 'DuckDB', level: 89 },
    { name: 'Query Optimization', level: 90 },
    { name: 'ETL', level: 86 }
  ],
  Frameworks: [
    { name: 'FastAPI', level: 91 },
    { name: 'REST APIs', level: 90 },
    { name: 'API Integration', level: 88 },
    { name: 'System Design', level: 84 }
  ],
  'Cloud & Tools': [
    { name: 'Git / GitHub', level: 92 },
    { name: 'Docker', level: 82 },
    { name: 'Vercel', level: 88 },
    { name: 'Supabase', level: 84 },
    { name: 'GCP Vertex AI', level: 82 },
    { name: 'AWS Cloud Foundations', level: 80 }
  ],
  Other: [
    { name: 'Technical Documentation', level: 88 },
    { name: 'Backend Architecture', level: 87 },
    { name: 'Optimization Workflows', level: 88 }
  ]
};

export const education = [
  {
    id: 1,
    degree: 'Postgraduate Certificate - Applied AI Solutions Development',
    institution: 'George Brown College',
    location: 'Toronto, ON',
    duration: 'Sept 2024 - Sept 2025',
    status: 'Completed',
    focus: 'Applied AI solution development, model implementation, and business-focused AI workflows.',
    type: 'postgraduate'
  },
  {
    id: 2,
    degree: 'Postgraduate Diploma - Backend & Blockchain Development',
    institution: 'York University',
    location: 'Toronto, ON',
    duration: 'Aug 2023 - May 2024',
    status: 'Completed',
    focus: 'Backend systems, API development, and blockchain platform engineering.',
    type: 'postgraduate'
  },
  {
    id: 3,
    degree: 'Bachelor of Technology - Computer Science (Big Data Analytics)',
    institution: 'PDM University',
    location: 'New Delhi, India',
    duration: 'Sept 2018 - May 2022',
    status: 'Completed',
    focus: 'Computer science fundamentals, data analytics, and scalable software systems.',
    type: 'undergraduate'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Schemon - AI SQL Optimization System',
    date: '2025',
    inProduction: true,
    productionNote: 'Deployed for research workflows at Cambrian College Applied Research',
    description:
      'AI-assisted SQL optimization system leveraging LLMs, DuckDB, and PostgreSQL to improve query quality and execution efficiency.',
    technologies: ['Python', 'FastAPI', 'LLMs', 'DuckDB', 'PostgreSQL'],
    features: [
      'Implemented query analysis and optimization suggestions based on execution plans.',
      'Built LLM-powered workflow for SQL refinement and validation.',
      'Applied EXPLAIN ANALYZE benchmarking to evaluate output quality.',
      'Supported production-oriented optimization workflows for research applications.'
    ],
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Noun - AI Manufacturer Matching Platform',
    date: '2025',
    inProduction: true,
    productionNote: 'Live backend powering manufacturer discovery for real users',
    description:
      'Semantic search and ranking platform for manufacturer discovery using embeddings and backend recommendation workflows.',
    technologies: ['Python', 'Embeddings', 'RAG', 'FastAPI', 'PostgreSQL'],
    features: [
      'Developed embedding-based semantic search pipelines for discovery accuracy.',
      'Implemented ranking logic for AI-powered matching recommendations.',
      'Integrated backend APIs to support AI-driven product workflows.',
      'Collaborated on research-to-deployment backend integration.'
    ],
    category: 'AI/ML'
  },
  {
    id: 3,
    title: 'AI Interview Assistant',
    date: '2025 - Jan 2026',
    inProduction: true,
    productionNote: 'Shipped to production — actively used by interviewers & candidates',
    description:
      'Production AI interview platform with automated question generation, response analysis, and structured feedback delivery.',
    technologies: ['FastAPI', 'LLM APIs', 'Prompt Engineering', 'Vercel', 'PDF Export'],
    features: [
      'Built and deployed end-to-end backend services for interview workflows.',
      'Designed scoring and feedback pipelines with report generation.',
      'Optimized prompts and API orchestration to reduce inference costs.',
      'Delivered production release and supported ongoing platform improvements.'
    ],
    category: 'Backend'
  }
];

export const experience = [
  {
    id: 1,
    title: 'AI / ML Developer',
    company: 'Cambrian College Applied Research',
    location: 'Sudbury, ON',
    duration: 'May 2025 - Sept 2025',
    type: 'applied research',
    achievements: [
      'Designed and implemented RAG pipelines using DuckDB and PostgreSQL to support AI-driven SQL query optimization.',
      'Built and validated LLM-based SQL optimization workflows using EXPLAIN ANALYZE benchmarking.',
      'Contributed to an AI manufacturer matchmaking platform with embedding-based semantic search and ranking.',
      'Supported backend data engineering workflows, prompt evaluation, and cross-project system refinement.',
      'Collaborated with researchers and engineers to translate research requirements into deployable AI systems.'
    ]
  },
  {
    id: 2,
    title: 'Backend Engineer - AI Interview Assistant',
    company: 'Independent Product Deployment',
    location: 'Remote',
    duration: '2025 - Jan 2026',
    type: 'product engineering',
    achievements: [
      'Built and deployed a production AI interview platform for automated question generation and response analysis.',
      'Designed FastAPI backend services integrating LLM APIs with cost-efficient prompt strategies.',
      'Developed scoring logic, feedback pipelines, and PDF report export functionality.',
      'Managed end-to-end system delivery from architecture and backend build to production deployment.'
    ]
  },
  {
    id: 3,
    title: 'Backend Engineer - TeBlox Labs (Blockchain Platform)',
    company: 'TeBlox Labs',
    location: 'Remote',
    duration: '2024',
    type: 'backend engineering',
    achievements: [
      'Developed backend components and API integrations for a blockchain-based platform.',
      'Implemented automated test scripts and supported performance and security review cycles.',
      'Contributed to stable backend delivery across integration and validation phases.'
    ]
  }
];

export const certifications = [
  {
    id: 1,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2022',
    credentialId: 'AWS-CP-2022'
  },
  {
    id: 2,
    title: 'Tableau Essential Training',
    issuer: 'LinkedIn Learning',
    year: '2024',
    credentialId: 'TET-2024'
  },
  {
    id: 3,
    title: 'Python Web Development',
    issuer: 'Udemy',
    year: '2020',
    credentialId: 'PWD-2020'
  }
];
