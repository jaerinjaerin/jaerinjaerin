import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  About,
  Experience,
  Education,
  Skills,
  ProjectMetadata,
  ProjectDetail,
  PortfolioData,
} from '@/types/portfolio';

const dataDirectory = path.join(process.cwd(), 'data/portfolio');
const projectsDirectory = path.join(process.cwd(), 'data/projects');

// JSON 파일 읽기 헬퍼
function readJsonFile<T>(filename: string): T {
  const filePath = path.join(dataDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

// About 데이터 가져오기
export function getAbout(): About {
  return readJsonFile<About>('about.json');
}

// Experiences 데이터 가져오기
export function getExperiences(): Experience[] {
  return readJsonFile<Experience[]>('experiences.json');
}

// Education 데이터 가져오기
export function getEducation(): Education[] {
  return readJsonFile<Education[]>('education.json');
}

// Skills 데이터 가져오기
export function getSkills(): Skills {
  return readJsonFile<Skills>('skills.json');
}

// Projects 메타데이터 가져오기
export function getProjectsMetadata(): ProjectMetadata[] {
  const projects = readJsonFile<ProjectMetadata[]>('projects.json');
  // featured가 true인 것을 먼저, 그 다음 order 순으로 정렬
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (a.order || 999) - (b.order || 999);
  });
}

// Featured 프로젝트만 가져오기
export function getFeaturedProjects(): ProjectMetadata[] {
  return getProjectsMetadata().filter((project) => project.featured);
}

// 모든 프로젝트 slug 가져오기 (동적 라우팅용)
export function getAllProjectSlugs(): string[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

// 특정 프로젝트 상세 정보 가져오기
export async function getProjectBySlug(
  slug: string
): Promise<ProjectDetail | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter로 frontmatter와 content 분리
    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<ProjectDetail, 'content'>),
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

// 모든 포트폴리오 데이터 한 번에 가져오기
export function getAllPortfolioData(): PortfolioData {
  return {
    about: getAbout(),
    experiences: getExperiences(),
    education: getEducation(),
    skills: getSkills(),
    projects: getProjectsMetadata(),
  };
}

// 프로젝트 목록 페이지네이션
export function getProjectsWithPagination(
  page: number = 1,
  perPage: number = 9
): {
  projects: ProjectMetadata[];
  totalPages: number;
  currentPage: number;
} {
  const allProjects = getProjectsMetadata();
  const totalPages = Math.ceil(allProjects.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const projects = allProjects.slice(start, end);

  return {
    projects,
    totalPages,
    currentPage: page,
  };
}
