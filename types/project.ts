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
