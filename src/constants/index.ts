import type {
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  Achievement,
  NavLink,
} from '@/types';

export const PERSONAL_INFO = {
  name: 'Arpit Kumar Singh',
  title: 'Software Engineer',
  subtitle: 'Data Science Student · Mechanical Engineering Student',
  email: 'arpitkumarsingh930@gmail.com',
  phone: '+91 9304423152',
  linkedin: 'https://linkedin.com/in/arpitkumarsingh',
  github: 'https://github.com/arpitkumarsingh',
  leetcode: 'https://leetcode.com/arpitkumarsingh',
  resumeUrl: '/Arpit_Kumar_Singh_Resume.pdf',
  location: 'New Delhi, India',
  tagline:
    'Engineering student with hands-on experience designing reliable, scalable web systems, grounded in strong data structures, algorithms, and system design fundamentals.',
  bio: [
    "I'm an engineering student pursuing a dual degree — B.Tech in Mechanical Engineering at NSUT and a BS in Data Science and Applications at IIT Madras. I care about writing clean code, learning deeply, and building products that hold up under real-world use.",
    'My work spans full-stack development, machine learning, and systems design — from building booking platforms with concurrency-safe transaction logic to training fraud-detection models that perform reliably at scale. I enjoy the parts of engineering that are unglamorous but essential: data consistency, edge cases, and code that other people can maintain.',
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
  { title: 'Frontend', skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'Backend', skills: ['Node.js', 'Express'] },
  { title: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel'] },
  { title: 'Concepts', skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'] },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'cae-intern',
    role: 'CAE Design Intern',
    organization: 'Engineering Internship',
    duration: 'May 2026 – Jun 2026',
    points: [
      'Developed detailed 3D CAD models and performed FEA simulations including static structural, modal, thermal, fatigue, and dynamic analysis using ANSYS and SolidWorks.',
      'Validated simulation results through stress, deformation, strain, temperature, and safety factor evaluation to ensure design reliability and performance.',
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
    title: '24-Hour Hackathon',
    description:
      'Developed and deployed a full-stack product in a 24-hour hackathon, demonstrating rapid prototyping and collaborative problem solving.',
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
    id: 'leetcode',
    title: 'LeetCode',
    description: 'Consistent problem solving across data structures and algorithms.',
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

export const GITHUB_USERNAME = 'arpitkumarsingh';
