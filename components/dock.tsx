'use client';
import { DOCK_APPS } from '@/constants';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import gsap from 'gsap';
import { useWindowStore, type WindowKey } from '@/store/window';

export function Dock() {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll('.dock-icon');

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2) / 2000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: 'power1.out',
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () => icons.forEach((icon) => gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: 'power1.out' }));

    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener('mouseleave', resetIcons);

    return () => {
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener('mouseleave', resetIcons);
    };
  }, []);

  const toggleApp = (app: { id: WindowKey; canOpen: boolean }) => {
    if (!app.canOpen) return;

    const window = windows[app.id];
    if (!window) {
      console.error(`Window not found for app: ${app.id}`);
      return;
    }

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }

    console.log(windows);
  };

  return (
    <section id='dock'>
      <div ref={dockRef} className='dock-container'>
        {DOCK_APPS.map(({ id, name, icon, canOpen }) => (
          <div key={id} className='flex justify-center relative'>
            <button
              type='button'
              className='dock-icon'
              aria-label={name}
              data-tooltip-id='dock-tooltip'
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image src={`/images/${icon}`} alt={name} width={141} height={142} loading='lazy' className={canOpen ? '' : 'opacity-60'} />
            </button>
          </div>
        ))}
        <Tooltip id='dock-tooltip' place='top' className='tooltip'></Tooltip>
      </div>
    </section>
  );
}
