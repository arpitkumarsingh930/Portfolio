export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location?: string;
  points: string[];
  type: 'work' | 'leadership';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'award' | 'certificate' | 'trophy' | 'users';
  link?: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface NavLink {
  label: string;
  href: string;
}
