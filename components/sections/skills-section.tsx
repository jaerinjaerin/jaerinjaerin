'use client';

import { motion } from 'framer-motion';
import { Skills } from '@/types/portfolio';

interface SkillsSectionProps {
  data: Skills;
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  const allSkills = data.categories.flatMap((category) => category.skills);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className='px-4 pt-10 pb-20'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-4xl md:text-5xl font-bold mb-10 font-bungee'
      >
        skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex flex-wrap items-center gap-3 font-ibm'
      >
        {allSkills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='inline-flex items-center rounded-md border px-2 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 print:text-[10px]'
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
