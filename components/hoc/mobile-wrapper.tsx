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

      el.style.display = 'block';
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? 'block' : 'none';
    }, [isOpen]);

    return (
      <section
        id={mobileKey}
        ref={ref}
        style={{ zIndex, display: isOpen ? 'block' : 'none' }}
        className='absolute w-dvw h-dvh inset-0'
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
