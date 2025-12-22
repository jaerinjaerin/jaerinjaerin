'use client';
import { MobileKey, useMobileWindowStore } from '@/store/mobile-window';
import { ComponentType, useLayoutEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';

export function MobileWindowWrapper<P extends object>(
  Component: ComponentType<P>,
  mobileKey: MobileKey
) {
  const Wrapped = (props: P) => {
    const ref = useRef<HTMLElement>(null);
    const { mobileWindows } = useMobileWindowStore();
    const { isOpen, zIndex } = mobileWindows[mobileKey];

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = 'flex';
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? 'flex' : 'none';
    }, [isOpen]);

    return (
      <section
        id={mobileKey}
        ref={ref}
        style={{ zIndex, display: isOpen ? 'flex' : 'none' }}
        className='absolute w-dvw h-dvh inset-0 flex flex-col'
      >
        <Component {...props} />
      </section>
    );
  };
  Wrapped.displayName = `MobileWindowWrapper(${
    Component.displayName || Component.name || 'Component'
  })`;

  return Wrapped;
}
