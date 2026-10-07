export type Project = {
  slug: string;
  title: string;
  summary: string;
  description?: string;

  technologies: string[];

  featured: boolean;
  year?: number;

  github?: string;
  liveUrl?: string;

  role?: string;
  focus?: string;
  responsibilities?: string[];
  highlights?: string[];

  type?: "case-study" | "project";
};