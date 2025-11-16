'use client';

import { motion } from 'framer-motion';
import { Experience, Education } from '@/types/portfolio';
import { SiLeanpub } from 'react-icons/si';
import { SiEducative } from 'react-icons/si';

interface ExperienceSectionProps {
  experiences: Experience[];
  education: Education[];
}

export default function ExperienceSection({
  experiences,
  education,
}: ExperienceSectionProps) {
  return (
    <section className='px-4 py-10'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-4xl md:text-5xl font-bold mb-16 font-bungee'
      >
        Experience & Education
      </motion.h2>
      <TitleH3WithIcon title='Work Experience' icon={<SiEducative />} />
      <div className='space-y-4 font-hahmlet'>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className='rounded-lg border p-6 text-card-foreground'
          >
            <div className='flex flex-col space-y-1.5 mb-3'>
              <div className='flex flex-col items-start justify-between gap-1 gap-x-2 text-base sm:flex-row sm:items-center'>
                <h4 className='inline-flex items-center justify-center gap-x-1 text-lg font-semibold leading-none'>
                  <a
                    href={experience.companyUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'
                  >
                    {experience.company}
                  </a>
                </h4>
                <div className='text-sm tabular-nums text-gray-500'>
                  {experience.period.start} - {experience.period.end}
                </div>
              </div>
            </div>
            <div className='text-muted-foreground text-pretty text-sm'>
              {experience.companyDescription}
            </div>
            <div className='mt-7 font-semibold leading-none print:text-[12px]'>
              {experience.position}
            </div>
            <ul className='mt-4 list-disc space-y-2 text-sm'>
              {experience.description.map((description, index) => (
                <li
                  key={index}
                  className='ml-5 text-muted-foreground text-pretty'
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='mt-10'>
        <TitleH3WithIcon title='Education' icon={<SiLeanpub />} />
        <div className='space-y-4 font-hahmlet'>
          {education
            .sort((a, b) => b.period.start.localeCompare(a.period.start))
            .map((education) => (
              <div
                key={education.id}
                className='rounded-lg border p-6 text-card-foreground'
              >
                <div className='flex flex-col space-y-1.5 mb-3'>
                  <div className='flex flex-col items-start justify-between gap-1 gap-x-2 text-base sm:flex-row sm:items-center'>
                    <h4 className='inline-flex items-center justify-center gap-x-1 text-lg font-semibold leading-none'>
                      <a>{education.institution}</a>
                    </h4>
                    <div className='text-sm tabular-nums text-gray-500'>
                      {education.period.start} - {education.period.end}
                    </div>
                  </div>
                </div>

                <ul className='mt-4 list-disc space-y-2 text-sm'>
                  {education.description &&
                    education.description.map((description, index) => (
                      <li
                        key={index}
                        className='ml-5 text-muted-foreground text-pretty'
                      >
                        {description}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

interface TitleH3WithIconProps {
  title: string;
  icon: React.ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scaleX: 1 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function TitleH3WithIcon({ title, icon }: TitleH3WithIconProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='mb-4'
    >
      <div className='flex items-center gap-3 md:gap-4 mb-4'>
        <motion.div
          variants={itemVariants}
          className='p-2 rounded-xl border border-slate-300  origin-left'
        >
          {icon}
        </motion.div>
        <motion.h3
          variants={textVariants}
          className='text-nowrap text-2xl lg:text-3xl font-bold bg-gradient-to-r from-black via-gray-600 to-gray-400 bg-clip-text text-transparent font-ibm overflow-hidden'
        >
          {title}
        </motion.h3>
      </div>
      <motion.div
        variants={dividerVariants}
        className='h-px bg-gradient-to-r from-transparent via-black/60 to-transparent origin-left'
      />
    </motion.div>
  );
}
