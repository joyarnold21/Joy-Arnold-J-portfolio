export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview?: string;
  technologies: string[];
  keyFeatures?: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  education: {
    degree: string;
    institution: string;
    currentStatus?: string;
  };
  internship: {
    role: string;
    company: string;
    companyUrl?: string;
    status: string;
    description: string;
  };
  email: string;
  about: {
    summary: string;
    appliedAiFocus: string;
    currentWork: string;
  };
  interests: string[];
  skills: {
    mastered: string[];
    learning: string[];
  };
  socialLinks: SocialLinks;
}
