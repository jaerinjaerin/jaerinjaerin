import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/get-portfolio-data';
import Link from 'next/link';
import { Globe } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 동적 라우트를 위한 정적 경로 생성
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// 메타데이터 생성
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

const prettyCodeOptions = {
  theme: 'github-dark', // 또는 'one-dark-pro', 'dracula', 'nord' 등
  keepBackground: true,
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className='min-h-screen overflow-y-auto bg-white text-black/80'>
      <div className='container mx-auto px-4 py-[clamp(40px,7.8vw,80px)]'>
        {/* header */}
        <div className='mb-12'>
          <h1 className='text-[clamp(1.875rem,5.86vw,3.75rem)] font-bold'>{project.title}</h1>
          <p className='text-[clamp(0.875rem,1.75vw,1.25rem)] text-black/45 mb-6'>{project.description}</p>
          {project.tags && project.tags.length > 0 && (
            <div className='flex items-center flex-wrap gap-2 mb-4'>
              {project.tags.map((tag) => (
                <span key={tag} className='px-3 py-1 border border-black rounded-full text-[clamp(0.75rem,1.36vw,0.875rem)]'>
                  {tag}
                </span>
              ))}
            </div>
          )}
          {/* meta */}
          {(project.period || project.role || project.team) && (
            <div className='flex flex-col lg:flex-row gap-1 lg:gap-6 text-black/60 text-[clamp(0.75rem,1.36vw,0.875rem)]'>
              {project.period && (
                <div>
                  <span className='font-semibold'>Period:</span> {project.period.start} ~ {project.period.end}
                </div>
              )}
              {project.role && (
                <div className='hidden lg:block'>
                  <span className='font-semibold'>Role:</span> {project.role}
                </div>
              )}
              {project.team && (
                <div className='hidden lg:block'>
                  <span className='font-semibold'>Team Size:</span> {project.team.size}
                </div>
              )}
            </div>
          )}
          {/* link */}
          {project.links && (
            <div className='flex gap-3 mt-6 text-[clamp(0.875rem,1.75vw,1rem)]'>
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 px-4 py-2 bg-black text-white hover:bg-black/40 rounded-lg transition-colors'
                >
                  <img src={'/icons/github.svg'} alt='github' className='size-4' /> Source
                </Link>
              )}
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary/40 text-white rounded-lg transition-colors'
                >
                  <Globe size={16} />
                  Website
                </Link>
              )}
            </div>
          )}
        </div>
        {/* images */}
        {project.images && (
          <div className='mb-12 flex flex-col lg:flex-row gap-4 min-h-[400px]'>
            {/* 왼쪽 큰 이미지 (2/3 너비) */}
            <div className='w-full lg:w-2/3'>
              <img src={project.images[0]} alt='' className='w-full h-full object-cover rounded-xl' />
            </div>
            {/* 오른쪽 세로 두 개 (1/3 너비) */}
            <div className='w-full lg:w-1/3 flex flex-col gap-4'>
              {project.images[1] && <img src={project.images[1]} alt='' className='flex-1 w-full object-cover rounded-xl' />}
              {project.images[2] && <img src={project.images[2]} alt='' className='flex-1 w-full object-cover rounded-xl' />}
            </div>
          </div>
        )}
        {/* overview */}
        {project.overview && (
          <section className='mb-12'>
            <h2 className='text-[clamp(1.5rem,2.9vw,1.875rem)] mb-2 font-bold'>Overview</h2>
            <p className='text-[clamp(0.875rem,1.75vw,1rem)] leading-relaxed'>{project.overview}</p>
          </section>
        )}
        {(project.problem || project.solution) && (
          <div className='flex flex-col lg:flex-row gap-6 mb-6'>
            {project.problem && (
              <section className='border border-red-300/60 rounded-2xl px-6 py-4 flex gap-3 w-1/2'>
                <div className='text-[clamp(0.875rem,1.75vw,1.25rem)]'>⚠️</div>
                <div className='space-y-1'>
                  <span className='text-[clamp(0.875rem,1.75vw,1.25rem)] font-bold text-red-400'>Problem</span>
                  <p className='leading-relaxed text-[clamp(0.875rem,1.75vw,1rem)]'>{project.problem}</p>
                </div>
              </section>
            )}
            {project.solution && (
              <section className='border border-primary/60 rounded-2xl px-6 py-4 flex gap-3 w-1/2'>
                <div className='text-[clamp(0.875rem,1.75vw,1.25rem)]'>✅</div>
                <div className='space-y-1'>
                  <h2 className='text-[clamp(0.875rem,1.75vw,1.25rem)] font-bold text-primary'>Solution</h2>
                  <p className='leading-relaxed text-[clamp(0.875rem,1.75vw,1rem)]'>{project.solution}</p>
                </div>
              </section>
            )}
          </div>
        )}
        {project.results && project.results.length > 0 && (
          <section className='border border-green-700/60 rounded-2xl px-6 py-4 mb-14'>
            <div className='flex gap-3'>
              <div className='text-[clamp(0.875rem,1.75vw,1.25rem)]'>🎯</div>
              <div className='space-y-2'>
                <h2 className='text-[clamp(0.875rem,1.75vw,1.25rem)] font-bold'>Results</h2>
                <ul className='space-y-1.5'>
                  {project.results.map((result, index) => (
                    <li key={index} className='flex items-start gap-2'>
                      <span>•</span>
                      <span className='leading-relaxed text-[clamp(0.875rem,1.75vw,1rem)]'>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
        <div className='w-full h-1 border-t mb-12 border-black/20 border-dashed' />
        {project.content && (
          <section className='prose prose-slate max-w-none'>
            <MDXRemote source={project.content} options={{ mdxOptions: { rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]] } }} />
          </section>
        )}
      </div>
    </main>
  );
}
