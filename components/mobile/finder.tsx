'use client';
import { LOCATIONS } from '@/constants';
import { useMobileWindowStore } from '@/store/mobile-window';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { MobileControls } from './controls';
import Image from 'next/image';

const projects = LOCATIONS.work?.children ?? [];

function Finder() {
  const { openMobileWindow } = useMobileWindowStore();

  const handleOpenFolder = (project: (typeof projects)[number]) => {
    openMobileWindow('folder', project);
  };

  return (
    <>
      <div id='window-header' className='bg-white rounded-none'>
        <MobileControls />
        <h2>Projects</h2>
      </div>
      <ul className='p-7 flex-1 overflow-auto bg-white grid grid-cols-3 gap-y-6 content-start'>
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => handleOpenFolder(project)}
            className='flex flex-col items-center cursor-pointer active:opacity-70'
          >
            <Image
              src={project.icon}
              alt={project.name}
              width={56}
              height={56}
              className='object-contain'
            />
            <p className='font-medium text-xs mt-1.5 text-gray-900 text-center line-clamp-1'>{project.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

const FinderMobileWindow = MobileWindowWrapper(Finder, 'finder');
export default FinderMobileWindow;
