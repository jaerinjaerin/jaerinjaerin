'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectMetadata } from '@/types/portfolio';

interface ProjectsSectionProps {
  projects: ProjectMetadata[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className='px-4 py-10'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-4xl md:text-5xl font-bold mb-16 font-bungee'
      >
        Featured Projects
      </motion.h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/project/${project.slug}`}>
              <div className='group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all h-full'>
                {/* Thumbnail */}
                <div className='relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden'>
                  <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all' />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-4xl opacity-50'>🚀</span>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  {/* Title */}
                  <h3 className='text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors'>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
                    {project.description}
                  </p>

                  {/* Period */}
                  <p className='text-xs text-gray-500 mb-4'>
                    {project.period.start} - {project.period.end}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs'
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className='px-2 py-1 bg-white/10 text-gray-400 rounded text-xs'>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className='absolute top-4 right-4'>
                      <span className='px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold'>
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover effect */}
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left' />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className='text-center mt-12'
      >
        <Link
          href='/projects'
          className='inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all font-semibold'
        >
          View All Projects →
        </Link>
      </motion.div>
    </section>
  );
}
