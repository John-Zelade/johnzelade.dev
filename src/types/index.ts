export type ProjectCategory = "Web" | "Mobile" | "Full Stack";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  problem: string;
  solution: string;
  features: string[];
  thumbnail?: string;
  liveUrl?: string;
  sourceUrl?: string;
  imageFolder?: string;
  videoUrl?: string;
  videoEmbedUrl?: string;
  documentationUrl?: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  tag: string;
  coverImage: string;
  publishedAt: string;
  readMinutes: number;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  tech: string[];
  type: "work" | "education";
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
