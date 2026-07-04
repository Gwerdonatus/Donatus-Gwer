export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  challenges: string[];
  decisions: string[];
  lessons: string[];
  github?: string;
  liveDemo?: string;
  timeline: string;
  category: string;
  featured: boolean;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  tags: string[];
  category: string;
  content: string;
  featured: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  date: string;
  duration: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SpeakingEvent {
  id: string;
  title: string;
  event: string;
  date: string;
  type: "talk" | "podcast" | "workshop";
  description: string;
  link?: string;
}
