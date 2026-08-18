export interface ResumeProject {
  id?: string;
  name: string;
  category?: 'web' | 'ml' | 'graphics' | 'system' | 'other';
  description: string;
  bulletPoints?: string[];
  technologies: string[];
  githubUrl?: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface AcademicAchievement {
  id?: string;
  title: string;
  year?: string;
  position?: string;
  award?: string;
  description: string;
  date?: string;
  organization?: string;
  image?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  organization?: string;
  date: string;
  description: string;
  icon: string;
  isPlaceholder: boolean;
  image?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
  url?: string;
  description?: string;
  image?: string;
}

export interface EducationData {
  degree: string;
  department: string;
  institution: string;
  cgpa: string;
  period: string;
  location?: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  institution: string;
  email?: string;
  phone?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  subtitle?: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  portfolioUrl?: string;
  pdfPath: string;
  hasPdf: boolean;
  photoUrl?: string;
  showPhoto: boolean;
  education: EducationData;
  academicAchievements: AcademicAchievement[];
  skills: {
    programming: string[];
    frontend: string[];
    backend: string[];
    machineLearning: string[];
    tools: string[];
    otherAreas: string[];
  };
  projects: ResumeProject[];
  coursework: string[];
  certifications: Certification[];
  extraCurricular: AchievementItem[];
  references: ReferenceItem[];
  currentlyLearning: string[];
  certificationsNote?: string;
  experienceNote?: string;
}

export type ResumeTheme = 'classic' | 'navy' | 'emerald' | 'monochrome' | 'slate';
export type PageLayoutMode = 'fit-1page' | 'standard-2page';
