import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectDetail } from '@/types/project';

const projectsDirectory = path.join(process.cwd(), 'data/projects');

// 특정 프로젝트 상세 정보 가져오기
export async function getProjectBySlug(slug: string): Promise<ProjectDetail | null> {
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

// 모든 프로젝트 slug 가져오기 (동적 라우팅용)
export function getAllProjectSlugs(): string[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.filter((fileName) => fileName.endsWith('.mdx')).map((fileName) => fileName.replace(/\.mdx$/, ''));
}
