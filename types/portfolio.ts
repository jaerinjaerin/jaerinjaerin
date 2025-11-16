// About Section
export interface About {
  name: string;
  title: string;
  description: string[];
  bio: string[];
  location?: string;
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  image?: string;
}

// Experience Section
export interface Experience {
  id: string;
  company: string;
  companyDescription?: string;
  position: string;
  period: {
    start: string;
    end: string | 'Present';
  };
  description: string[];
  technologies: string[];
  location?: string;
  companyUrl?: string;
}

// Education Section
export interface Education {
  id: string;
  institution: string;
  degree: string;
  major?: string;
  period: {
    start: string;
    end: string | 'Present';
  };
  description?: string[];
  gpa?: string;
  achievements?: string[];
}

// Skills Section
export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

// Project Section (for cards/list)
export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  period: {
    start: string;
    end: string;
  };
  featured?: boolean;
  order?: number;
}

// Project Detail (from MDX frontmatter + content)
export interface ProjectDetail extends ProjectMetadata {
  role: string;
  team?: {
    size: number;
    members?: string[];
  };
  overview: string;
  problem?: string;
  solution?: string;
  results?: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
    tools?: string[];
  };
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  images?: string[];
  content?: string; // MDX content
}

// Portfolio Data Structure
export interface PortfolioData {
  about: About;
  experiences: Experience[];
  education: Education[];
  skills: Skills;
  projects: ProjectMetadata[];
}
