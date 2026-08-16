export interface Project {
  id: string;
  title: string;
  category: 'web' | 'ml' | 'graphics' | 'academic' | 'other';
  categoryLabel: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  githubClient?: string;
  githubServer?: string;
  liveDemo?: string;
  featured?: boolean;
  highlights?: string[];
  badge?: string;
}

export interface SkillItem {
  name: string;
  level: 'Proficient' | 'Developing' | 'Currently Learning' | 'Familiar' | 'Advanced';
  tag: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface MLConcept {
  name: string;
  category: 'Supervised' | 'Evaluation' | 'Pipeline' | 'Algorithms';
  description: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  period: string;
  category: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location?: string;
  status: string;
  coursework: string[];
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  verified?: boolean;
  skills?: string[];
  isPlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Academic' | 'Competition' | 'Hackathon' | 'Workshop' | 'Technical Event' | 'Project Showcase' | 'Accomplishment';
  organization?: string;
  date: string;
  description: string;
  icon?: string;
  isPlaceholder?: boolean;
}

export interface DeveloperProfile {
  id: string;
  platform: string;
  username: string;
  url: string;
  description: string;
  icon: string;
  accentColor: string;
  stats?: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
  updatedAt: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}
