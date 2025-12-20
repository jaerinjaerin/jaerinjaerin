'use client';
import { LOCATIONS } from '@/constants';
import { useMobileWindowStore } from '@/store/mobile-window';
import clsx from 'clsx';
import Image from 'next/image';

const projects = LOCATIONS.work?.children ?? [];

export function MobileHome() {
  const { openMobileWindow } = useMobileWindowStore();
  return (
    <ul className='p-7 container mx-auto grid grid-cols-4'>
      <li onClick={() => openMobileWindow('resume')}>
        <Image
          src={'/images/mobile-resume.png'}
          alt={'resume'}
          width={56}
          height={56}
          className='object-contain mx-auto '
        />
        <p className='font-medium text-xs mt-1.5 text-white text-center backdrop-blur-lg'>
          Resume
        </p>
      </li>
      {projects.map((project) => (
        <li
          key={project.id}
          className={clsx('group folder')}
          // onClick={() => handleOpenProjectFinder(project)}
        >
          <Image
            src={'/images/folder.png'}
            alt={project.name}
            width={56}
            height={56}
            className='object-contain mx-auto aspect-square '
          />

          <p className='font-medium text-xs mt-1.5 text-white text-center backdrop-blur-lg line-clamp-1'>
            {project.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
