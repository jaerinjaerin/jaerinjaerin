'use client';

import { LOCATIONS } from '@/constants';
import clsx from 'clsx';
import { Draggable, gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import { useWindowStore } from '@/store/window';
import useLocationStore, { Location } from '@/store/location';

const projects = LOCATIONS.work?.children ?? [];

export function Home() {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const handleOpenProjectFinder = (project: Location) => {
    setActiveLocation(project);
    openWindow('finder');
  };
  useGSAP(() => {
    Draggable.create('.folder');
  });
  return (
    <section id='home'>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className={clsx('group folder', project.windowPosition)} onClick={() => handleOpenProjectFinder(project)}>
            <img src={'/images/folder.png'} alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
