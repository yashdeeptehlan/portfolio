export const personalInfo = {
  name: 'Yashdeep Tehlan',
  title: 'AI/ML Developer & Blockchain Enthusiast',
  location: 'Toronto, Ontario, Canada',
  originalLocation: 'New Delhi, India',
  tagline: 'Recent AI Solutions Development graduate with practical experience in machine learning, data pipelines, and backend development',
  description: 'Skilled in Python, SQL, and building data-driven applications using modern frameworks. Completed co-op at Cambrian College working on RAG systems and SQL optimization, and remote internship developing blockchain applications. Quick learner with strong problem-solving abilities and hands-on experience with cloud platforms (AWS, GCP), databases (PostgreSQL, DuckDB), and ML tools (TensorFlow, PyTorch, LangChain).',
  email: 'tehlanyashdeep@gmail.com',
  phone: '+1 (437) 566 3594',
  linkedin: 'https://linkedin.com/in/yashdeeptehlan',
  address: 'Toronto, Ontario, Canada',
  github: 'https://github.com/yashdeeptehlan'
};

export const skills = {
  'Programming': [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'Solidity', level: 85 },
    { name: 'JavaScript', level: 80 }
  ],
  'ML & Data': [
    { name: 'TensorFlow', level: 88 },
    { name: 'PyTorch', level: 85 },
    { name: 'Scikit-learn', level: 90 },
    { name: 'Pandas', level: 92 },
    { name: 'NumPy', level: 90 },
    { name: 'LangChain', level: 82 },
    { name: 'Hugging Face', level: 80 }
  ],
  'Databases & Pipelines': [
    { name: 'PostgreSQL', level: 87 },
    { name: 'DuckDB', level: 85 },
    { name: 'PySpark', level: 88 },
    { name: 'MySQL', level: 85 },
    { name: 'ETL workflows', level: 88 }
  ],
  'Frameworks': [
    { name: 'FastAPI', level: 88 },
    { name: 'Flask', level: 82 },
    { name: 'Django', level: 80 },
    { name: 'REST APIs', level: 85 }
  ],
  'Cloud & Tools': [
    { name: 'AWS', level: 85 },
    { name: 'GCP Vertex AI', level: 80 },
    { name: 'Git/GitHub', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'Tableau', level: 90 }
  ],
  'Other': [
    { name: 'Blockchain (Ethereum)', level: 88 },
    { name: 'Smart Contracts', level: 85 },
    { name: 'RAG systems', level: 82 },
    { name: 'NLP', level: 80 }
  ]
};

export const education = [
  {
    id: 1,
    degree: 'Postgraduate Certificate – Applied AI Solutions Development',
    institution: 'George Brown College',
    location: 'Toronto, ON',
    duration: 'Sept 2024 - Sept 2025',
    status: 'Completed',
    focus: 'Machine learning models, data preprocessing, business insights through Tableau, AI solution development',
    type: 'postgraduate'
  },
  {
    id: 2,
    degree: 'Postgraduate Diploma – Backend & Blockchain Development',
    institution: 'York University',
    location: 'Toronto, ON',
    duration: 'Aug 2023 - May 2024',
    status: 'Completed',
    focus: 'Backend applications, blockchain solutions, smart contracts, decentralized applications',
    type: 'postgraduate'
  },
  {
    id: 3,
    degree: 'B.Tech – Computer Science (Big Data Analytics)',
    institution: 'PDM University',
    location: 'New Delhi, India',
    duration: 'Sept 2018 - May 2022',
    status: 'Completed',
    focus: 'Software development, database management, data structures, big data analytics',
    type: 'undergraduate'
  }
];

export const projects = [
  {
    id: 1,
    title: 'AI Interview Assistant',
    date: '2025 - Present',
    description: 'Full-stack AI-powered mock interview platform serving real users as alternative to Ribbon.ai with complete interview flow and AI scoring engine.',
    technologies: ['React', 'Node.js', 'FastAPI', 'OpenAI API', 'Vercel'],
    features: [
      'Complete interview flow: question generation, real-time response analysis',
      'AI scoring engine with structured feedback system and PDF export',
      'FastAPI backend with optimized prompt engineering to reduce inference costs',
      'Deployed React frontend on Vercel with responsive design',
      'Live production application serving real users'
    ],
    category: 'AI/ML',
    liveUrl: 'https://ai-interviewer-ytxk.vercel.app/'
  },
  {
    id: 2,
    title: 'The Dare Protocol',
    date: '2025 - Present',
    description: 'Backend infrastructure and smart contract architecture for Solana-based decentralized challenge/bounty marketplace.',
    technologies: ['Solana', 'Rust', 'Node.js', 'Smart Contracts'],
    features: [
      'On-chain program logic for dare creation, user verification, escrow management',
      'Automated reward distribution using Solana runtime',
      'RESTful APIs with Node.js for platform operations and blockchain interaction',
      'Transaction monitoring, error handling, and retry mechanisms',
      'Seamless frontend integration for optimal user experience'
    ],
    category: 'Blockchain',
    liveUrl: 'https://thedare.io'
  },
  {
    id: 3,
    title: 'ArbiGen – AI-Driven Crypto Arbitrage & Price Prediction',
    date: '2025',
    description: 'Trained LSTM models for cryptocurrency price prediction and built FastAPI deployment for real-time predictions.',
    technologies: ['Python', 'LSTM', 'FastAPI', 'TensorFlow'],
    features: [
      'LSTM models for cryptocurrency price prediction using live market data',
      'FastAPI backend deployment for real-time predictions',
      'Automated backtesting and monitoring pipelines',
      'Performance evaluation and model accuracy tracking'
    ],
    category: 'AI/ML'
  },
  {
    id: 4,
    title: 'Amazon Reviews Cross-Sell Analysis',
    date: '2025',
    description: 'Built ETL pipelines for 700K+ Amazon reviews with sentiment analysis and cross-sell recommendations.',
    technologies: ['PySpark', 'SQL', 'Python'],
    features: [
      'ETL pipelines for 700K+ Amazon reviews using PySpark & SQL',
      'Sentiment analysis and cross-sell scoring algorithms',
      'Targeted marketing recommendations based on customer patterns',
      'Scalable data processing and analysis workflows'
    ],
    category: 'Data Science'
  },
  {
    id: 5,
    title: 'HR Dashboard',
    date: '2025',
    description: 'Created interactive Tableau dashboards with SQL pipelines for comprehensive workforce analytics.',
    technologies: ['Tableau', 'SQL', 'Data Visualization'],
    features: [
      'Interactive Tableau dashboards with real-time SQL pipelines',
      'Comprehensive workforce analytics and reporting',
      'Employee performance and retention metrics',
      'Real-time data integration and automated reporting'
    ],
    category: 'Analytics'
  }
];

export const experience = [
  {
    id: 1,
    title: 'AI/ML Developer – Co-op',
    company: 'Cambrian College Applied Research',
    location: 'Sudbury, ON',
    duration: 'May 2025 - Sept 2025',
    type: 'co-op',
    achievements: [
      'Worked on developing RAG (retrieval-augmented generation) pipelines integrated with DuckDB and PostgreSQL for SQL query optimization project',
      'Helped build AI-powered SQL optimization modules using LLMs with validation using EXPLAIN/ANALYZE',
      'Contributed to cosmetics manufacturer matchmaking platform using RAG agents with embedding-based search and ranking',
      'Supported data engineering workflows and integration with cloud platforms',
      'Gained hands-on experience with prompt engineering and LLM application development'
    ]
  },
  {
    id: 2,
    title: 'Backend & Blockchain Developer – Intern (Part-Time, Remote)',
    company: 'TeBlox Labs',
    location: 'Dubai, UAE',
    duration: 'Jan 2024 - Dec 2024',
    type: 'internship',
    achievements: [
      'Developed smart contract features on Ethereum and Blast network (ERC-20/721 standards)',
      'Integrated AI components into decentralized exchange platforms using GraphQL and React',
      'Wrote automated test scripts using Selenium and Mocha for quality assurance',
      'Worked on blockchain security audits and performance optimization'
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