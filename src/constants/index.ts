import type {
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  Achievement,
  NavLink,
} from '@/types';

/** Route for the in-app resume preview page (opened in a new tab). */
export const RESUME_PREVIEW_PATH = '/resume';

export const PERSONAL_INFO = {
  name: 'Arpit Kumar Singh',
  title: 'Full-Stack Developer',
  subtitle: 'AI-Native Applications · Data Science Student · Mechanical Engineering Student',
  email: 'arpitkumarsingh930@gmail.com',
  phone: '+91 9304423152',
  linkedin: 'https://linkedin.com/in/arpitkumarsingh',
  github: 'https://github.com/arpitkumarsingh930',
  leetcode: 'https://leetcode.com/arpitkumarsingh',
  resumeUrl: '/Arpit_Kumar_Singh_Resume.pdf',
  resumeFileName: 'Arpit_Kumar_Singh_Resume.pdf',
  avatarUrl: '/profile.jpg',
  location: 'New Delhi, India',
  tagline:
    'Full-stack developer building AI-native applications — RAG pipelines, vector search, and LLM-integrated systems — on a foundation of MERN, REST APIs, DSA, and system design.',
  bio: [
    "I'm an engineering student pursuing a dual degree — B.Tech at NSUT and a BS in Data Science and Applications at IIT Madras. I care about writing clean code, learning deeply, and building products that hold up under real-world use.",
    'My work spans full-stack development and applied AI — from hybrid retrieval systems that fuse vector search with knowledge graphs, to production React dashboards and the SQL schemas behind them. I have a genuine interest in agentic AI and where software engineering goes next, and I enjoy the parts of the job that are unglamorous but essential: data consistency, edge cases, and code that other people can maintain.',
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  { title: 'Languages', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'JWT'] },
  { title: 'Databases', skills: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  {
    title: 'AI & LLM',
    skills: [
      'RAG Pipelines',
      'LLM Integration',
      'Embeddings',
      'ChromaDB',
      'Neo4j',
      'Prompt Engineering',
      'FastAPI',
      'Sentence-Transformers',
    ],
  },
  { title: 'DevOps & Tools', skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'VS Code'] },
  {
    title: 'Concepts',
    skills: ['DSA', 'System Design', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'realityscale',
    role: 'Software Engineer',
    organization: 'RealityScale',
    duration: 'Nov 2025 – Jan 2026',
    points: [
      'Built reusable React components, dynamic dashboards, and secure authentication flows, improving user experience while reducing frontend development time through a modular component architecture.',
      'Designed and optimized SQL database schemas and backend APIs, improving query performance.',
      'Collaborated with cross-functional teams to ship production features end-to-end, contributing to code reviews, debugging, and performance tuning across the stack.',
    ],
    type: 'work',
  },
  {
    id: 'ieee-nsut',
    role: 'Joint Secretary',
    organization: 'IEEE NSUT',
    duration: 'Dec 2023 – Present',
    points: [
      "Coordinated TENSYMP'24 — Asia-Pacific conference for researchers, improving cross-team communication and execution.",
      'Conducted Web Development and DSA bootcamps, mentoring students on coding practices and project-based learning.',
      'Directed a 40+ member team, streamlining workflows and supporting junior contributors.',
    ],
    type: 'leadership',
  },
  {
    id: 'moksha',
    role: 'Sponsorship Coordinator',
    organization: 'Moksha Innovation 2024',
    duration: 'Jan 2024 – Mar 2024',
    points: [
      'Collaborated with brands including SPARKS, Decathlon, Vision IAS, and Storia to drive sponsor engagement.',
      'Facilitated sponsorship negotiations and MOU workflows, achieving 6K+ app downloads for the co-title sponsor.',
    ],
    type: 'leadership',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'industrial-knowledge-ai',
    title: 'Industrial Knowledge AI',
    description:
      'A RAG + knowledge graph platform that answers natural-language questions over heterogeneous industrial PDFs, fusing semantic vector search with graph-based cross-document reasoning to keep every answer grounded in its source.',
    techStack: ['Python', 'FastAPI', 'Spring Boot', 'React', 'ChromaDB', 'Neo4j', 'Google Gemini'],
    highlights: [
      'Hybrid retrieval fusing ChromaDB vector search (all-MiniLM-L6-v2 embeddings) with a Neo4j knowledge graph for source-grounded answers',
      'End-to-end ingestion pipeline — PDFBox extraction, 1000/200 overlap chunking, embedding and vector indexing, with spaCy entity extraction populating the graph',
      'Google Gemini generation constrained to retrieved context, with the AI layer decoupled into a FastAPI microservice separate from the Spring Boot backend',
      'REST APIs across a three-tier architecture: React frontend, Spring Boot ingestion backend, Python AI service',
    ],
    featured: true,
  },
  {
    id: 'hostel-complaint-system',
    title: 'Hostel Complaint & Application Management',
    description:
      'A full-stack system for managing hostel complaints and administrative applications across a residential campus, built around a complete complaint lifecycle and role-separated access.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Role-based access control for students and administrators using secure authentication and session-based flows',
      'Complaint lifecycle with real-time status tracking — Pending, In-Progress, Resolved',
      'Admin dashboard to review complaints, view uploaded images, add remarks, and update resolution status',
    ],
    featured: true,
  },
  {
    id: 'stayin',
    title: 'StayIn.com',
    description:
      'A full-stack booking platform inspired by Airbnb, focused on reliability and data consistency across listings, search, booking workflows, and user dashboards, with 90% feature parity to the original.',
    techStack: ['MongoDB', 'JWT Auth', 'REST APIs', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/arpitkumarsingh/stayin',
    liveUrl: undefined,
    highlights: [
      'Concurrency-safe booking availability engine with transaction checks preventing race-condition conflicts',
      '99% successful bookings across 200+ tests',
      'Built with MVC architecture for modularity and separation of concerns',
    ],
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with a redesigned database schema and query structure, built for performance at scale and real-time behavioral insight.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/arpitkumarsingh/ecommerce-platform',
    highlights: [
      '20% lower query latency via normalization and indexing strategies',
      'Real-time cart and wishlist activity logging for retention analysis',
    ],
    featured: true,
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    description:
      'A machine learning system that classifies legitimate and fraudulent credit card transactions using Logistic Regression, built end-to-end from raw data to real-time prediction.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/arpitkumarsingh/credit-card-fraud-detection',
    highlights: [
      'Trained on a balanced dataset of 37,721 transactions across 30 predictive features',
      '97.48% training accuracy, 98.32% testing accuracy',
      'Addressed severe class imbalance through undersampling and EDA',
    ],
    featured: true,
  },
  {
    id: 'ai-chatbot',
    title: 'AI Portfolio Chatbot',
    description:
      'An AI-powered chatbot embedded in a developer portfolio, capable of answering visitor questions about experience, projects, and skills in natural language.',
    techStack: ['React', 'TypeScript', 'OpenAI API'],
    githubUrl: 'https://github.com/arpitkumarsingh/ai-portfolio-chatbot',
    featured: false,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'nsut',
    institution: 'Netaji Subhas University of Technology (NSUT)',
    degree: 'B.Tech in Mechanical Engineering',
    duration: '2023 – 2027',
    location: 'New Delhi, India',
    score: 'CGPA: 7.0',
  },
  {
    id: 'iitm',
    institution: 'Indian Institute of Technology Madras (IIT Madras)',
    degree: 'BS in Data Science and Applications',
    duration: '2024 – 2027',
    location: 'Tamil Nadu, India',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'hackathon',
    title: 'Hackathon Winner — 24 Hours',
    description:
      'Won a 24-hour hackathon by building a full-stack AI chatbot for a coffee shop, letting customers browse products, get personalized recommendations, and talk to an intelligent virtual assistant.',
    icon: 'trophy',
  },
  {
    id: 'ms-linkedin',
    title: 'Career Essentials in Software Development',
    description: 'Microsoft + LinkedIn Learning certification.',
    icon: 'certificate',
  },
  {
    id: 'iitm-design',
    title: 'Design Thinking — Elite Certificate',
    description: 'Indian Institute of Technology Madras (IITM).',
    icon: 'award',
  },
  {
    id: 'iitm-softskills',
    title: 'Soft Skills & Personality Development — Elite Certificate',
    description: 'Indian Institute of Technology Madras (IITM).',
    icon: 'award',
  },
  {
    id: 'competitive-programming',
    title: '350+ DSA Problems Solved',
    description:
      'Solved 350+ data structures and algorithms problems in C++ across LeetCode, CodeForces, and CodeChef.',
    icon: 'code',
    link: PERSONAL_INFO.leetcode,
  },
  {
    id: 'ieee-leadership',
    title: 'IEEE NSUT — Joint Secretary',
    description: 'Directed a 40+ member team and coordinated an Asia-Pacific research conference.',
    icon: 'users',
  },
];

export const GITHUB_USERNAME = 'arpitkumarsingh930';
