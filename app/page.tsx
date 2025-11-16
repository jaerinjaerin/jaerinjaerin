import AboutSection from '@/components/sections/about-section';
import ExperienceSection from '@/components/sections/experience-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import {
  getAbout,
  getExperiences,
  getEducation,
  getSkills,
  getFeaturedProjects,
} from '@/lib/get-portfolio-data';
import Image from 'next/image';
import { GithubIcon } from '@/components/icons/github';
import { LinkedinIcon } from '@/components/icons/linked-in';
import { XIcon } from '@/components/icons/x';
import { InstagramIcon } from '@/components/icons/instagram';

export default function Home() {
  // 데이터 가져오기
  const about = getAbout();
  const experiences = getExperiences();
  const education = getEducation();
  const skills = getSkills();
  const projects = getFeaturedProjects();

  return (
    <main className='h-full w-full'>
      <header className='py-4 px-4 w-full max-w-7xl mx-auto flex items-center justify-between sticky top-0 backdrop-blur-sm z-20'>
        <div className='font-bungee'>LOGO</div>
        <button className='font-bungee border-none outline-none bg-[#6c5ce7] px-5 py-2.5 text-[13px] font-bold text-white rounded-[5px] transition-all shadow-[0_5px_0_0_#a29bfe] active:translate-y-[5px] active:shadow-[0_0_0_0_#a29bfe]'>
          RESUME
        </button>
      </header>
      <div className='flex flex-col px-4 w-full max-w-7xl mx-auto font-gowunDodum'>
        <AboutSection data={about} />
        <ExperienceSection experiences={experiences} education={education} />
        <SkillsSection data={skills} />
        <ProjectsSection projects={projects} />
      </div>
      {/* <FloatingIndex /> */}
    </main>
  );
}

function FloatingIndex() {
  return (
    <div className='fixed right-8 top-1/2 -translate-y-1/2 z-50 rounded-full flex flex-col bg-red-400 px-2 py-4 gap-4'>
      <button className='border border-gray-300 rounded-sm'>dd</button>
      <button className='border border-gray-300 rounded-sm'>dd</button>
      <button className='border border-gray-300 rounded-sm'>dd</button>
      <button className='border border-gray-300 rounded-sm'>dd</button>
    </div>
  );
}
