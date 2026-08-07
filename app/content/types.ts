export type ProjectContext = "employer" | "personal" | "research";
export type ProjectStatus = "live" | "completed" | "ongoing";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  period: string;
  role: string;
  context: ProjectContext;
  status: ProjectStatus;
  featured: boolean;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  credential: string;
  period: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
  url?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ContactLinks {
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface Profile {
  name: string;
  headline: string;
  location?: string;
  contact: ContactLinks;
}
