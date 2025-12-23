'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { MOBILE_DOCK_APPS } from '@/constants/mobile-index';
import { gsap } from '@/lib/gsap';
import { Search } from 'lucide-react';
import { MobileKey, useMobileWindowStore } from '@/store/mobile-window';

export function MobileDock() {
  const dockRef = useRef<HTMLDivElement>(null);
  const { mobileWindows, openMobileWindow, closeMobileWindow } = useMobileWindowStore();

  const toggleApp = (app: { id: MobileKey; canOpen: boolean }, e: React.MouseEvent) => {
    if (!app.canOpen) return;

    // 클릭된 버튼 요소에 애니메이션 적용
    const button = e.currentTarget as HTMLElement;

    // transform: scale() 사용으로 리플로우 없이 애니메이션
    gsap.fromTo(
      button,
      { scale: 0.85 },
      {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)', // 튕기는 효과
      }
    );

    const mobileWindow = mobileWindows[app.id];
    if (!mobileWindow) {
      console.error(`Window not found for app: ${app.id}`);
      return;
    }

    if (mobileWindow.isOpen) {
      closeMobileWindow(app.id);
    } else {
      openMobileWindow(app.id);
    }
  };

  return (
    <section id='dock'>
      <div ref={dockRef} className='dock-container'>
        {MOBILE_DOCK_APPS.map(({ id, name, icon, canOpen }) => (
          <div key={id} className='flex justify-center relative'>
            <button
              type='button'
              className='dock-icon'
              disabled={!canOpen}
              onClick={(e) => toggleApp({ id, canOpen }, e)}
              style={{ willChange: 'transform' }}
            >
              <Image src={`/images/${icon}`} alt={name} width={60} height={60} className={canOpen ? '' : 'opacity-60'} />
            </button>
          </div>
        ))}
      </div>
      <div className='flex items-center absolute -top-1/2 left-1/2 -translate-x-1/2 text-white bg-white/20 backdrop-blur-md px-[11px] py-[7px] rounded-full font-semibold text-xs gap-1'>
        <Search size={15} /> Search
      </div>
    </section>
  );
}
