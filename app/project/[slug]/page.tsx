// import { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import { MDXRemote } from 'next-mdx-remote/rsc';
// import { getProjectBySlug, getAllProjectSlugs } from '@/lib/get-portfolio-data';

// interface ProjectPageProps {
//   params: {
//     slug: string;
//   };
// }

// // 동적 라우트를 위한 정적 경로 생성
// export async function generateStaticParams() {
//   const slugs = getAllProjectSlugs();
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

// // 메타데이터 생성
// export async function generateMetadata({
//   params,
// }: ProjectPageProps): Promise<Metadata> {
//   const project = await getProjectBySlug(params.slug);

//   if (!project) {
//     return {
//       title: 'Project Not Found',
//     };
//   }

//   return {
//     title: `${project.title} | Portfolio`,
//     description: project.description,
//   };
// }

// export default async function ProjectPage({ params }: ProjectPageProps) {
//   const project = await getProjectBySlug(params.slug);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className='min-h-screen bg-[#030014] text-white'>
//       <div className='container mx-auto px-4 py-20'>
//         {/* Header Section */}
//         <div className='mb-12'>
//           <h1 className='text-4xl md:text-6xl font-bold mb-4'>
//             {project.title}
//           </h1>
//           <p className='text-xl text-gray-400 mb-6'>{project.description}</p>

//           {/* Tags */}
//           <div className='flex flex-wrap gap-2 mb-6'>
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm'
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Meta Info */}
//           <div className='flex flex-wrap gap-6 text-gray-400'>
//             <div>
//               <span className='font-semibold'>Period:</span> {project.period.start} -{' '}
//               {project.period.end}
//             </div>
//             <div>
//               <span className='font-semibold'>Role:</span> {project.role}
//             </div>
//             {project.team && (
//               <div>
//                 <span className='font-semibold'>Team Size:</span> {project.team.size}
//               </div>
//             )}
//           </div>

//           {/* Links */}
//           {project.links && (
//             <div className='flex gap-4 mt-6'>
//               {project.links.github && (
//                 <a
//                   href={project.links.github}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors'
//                 >
//                   GitHub
//                 </a>
//               )}
//               {project.links.demo && (
//                 <a
//                   href={project.links.demo}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors'
//                 >
//                   Live Demo
//                 </a>
//               )}
//               {project.links.docs && (
//                 <a
//                   href={project.links.docs}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors'
//                 >
//                   Documentation
//                 </a>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Overview Section */}
//         {project.overview && (
//           <section className='mb-12'>
//             <h2 className='text-3xl font-bold mb-4'>Overview</h2>
//             <p className='text-gray-300 leading-relaxed'>{project.overview}</p>
//           </section>
//         )}

//         {/* Problem & Solution */}
//         {(project.problem || project.solution) && (
//           <div className='grid md:grid-cols-2 gap-8 mb-12'>
//             {project.problem && (
//               <section>
//                 <h2 className='text-2xl font-bold mb-4 text-red-400'>Problem</h2>
//                 <p className='text-gray-300 leading-relaxed'>{project.problem}</p>
//               </section>
//             )}
//             {project.solution && (
//               <section>
//                 <h2 className='text-2xl font-bold mb-4 text-green-400'>Solution</h2>
//                 <p className='text-gray-300 leading-relaxed'>{project.solution}</p>
//               </section>
//             )}
//           </div>
//         )}

//         {/* Results */}
//         {project.results && project.results.length > 0 && (
//           <section className='mb-12'>
//             <h2 className='text-3xl font-bold mb-4'>Results</h2>
//             <ul className='space-y-2'>
//               {project.results.map((result, index) => (
//                 <li key={index} className='flex items-start'>
//                   <span className='text-purple-400 mr-2'>✓</span>
//                   <span className='text-gray-300'>{result}</span>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}

//         {/* Technologies */}
//         {project.technologies && (
//           <section className='mb-12'>
//             <h2 className='text-3xl font-bold mb-4'>Technologies</h2>
//             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
//               {Object.entries(project.technologies).map(([category, techs]) => (
//                 <div key={category}>
//                   <h3 className='text-xl font-semibold mb-2 capitalize text-purple-300'>
//                     {category}
//                   </h3>
//                   <ul className='space-y-1'>
//                     {techs?.map((tech) => (
//                       <li key={tech} className='text-gray-400'>
//                         • {tech}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* MDX Content */}
//         {project.content && (
//           <section className='prose prose-invert prose-purple max-w-none'>
//             <MDXRemote source={project.content} />
//           </section>
//         )}
//       </div>
//     </main>
//   );
// }

export default function ProjectPage() {
  return <div>프로젝트 상세 페이지</div>;
}
