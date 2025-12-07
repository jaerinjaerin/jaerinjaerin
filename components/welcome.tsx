'use client';
import { FONT_WEIGHTS } from '@/constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMemo, useRef } from 'react';

const renderText = (text: string, className: string, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `"wght" ${baseWeight}`,
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

// RAF throttle에 cancel 기능 추가
const throttleRAF = <T extends (...args: Parameters<T>) => void>(callback: T) => {
  let rafId: number | null = null;

  const throttled = (...args: Parameters<T>) => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      callback(...args);
      rafId = null;
    });
  };

  // cancel 메서드 추가
  throttled.cancel = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  return throttled;
};

const setupTextHover = (container: HTMLElement | null, type: 'subtitle' | 'title') => {
  if (!container) return;

  const letters = Array.from(container.querySelectorAll('span'));
  const { min, max, default: base } = FONT_WEIGHTS[type];

  // 위치 정보를 미리 캐싱
  const letterCenters = letters.map((letter) => {
    const rect = letter.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return rect.left - containerRect.left + rect.width / 2;
  });

  const handleMouseMove = throttleRAF((e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letterCenters.forEach((center, index) => {
      const distance = Math.abs(mouseX - center);
      const intensity = Math.exp(-(distance ** 2) / 2000);
      const weight = min + (max - min) * intensity;

      gsap.to(letters[index], {
        fontVariationSettings: `"wght" ${weight}`,
        duration: 0.1,
        ease: 'none',
        overwrite: true, // 이전 애니메이션 즉시 덮어쓰기
      });
    });
  });

  const handleMouseLeave = () => {
    // RAF 취소
    handleMouseMove.cancel();

    // 모든 글자를 부드럽게 base로 리셋
    letters.forEach((letter) => {
      gsap.to(letter, {
        fontVariationSettings: `"wght" ${base}`,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: true,
      });
    });
  };

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  // 클린업 함수 반환
  return () => {
    handleMouseMove.cancel(); // RAF 취소
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
  };
};

export function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const subtitleText = useMemo(() => renderText("Hey, I'm Jaerin! Welcome to my", 'text-3xl italic font-pretendard', 100), []);

  const titleText = useMemo(() => renderText('portfolio.', 'text-9xl italic font-playwrite', 400), []);

  useGSAP(() => {
    const cleanupTitle = setupTextHover(titleRef.current, 'title');
    const cleanupSubtitle = setupTextHover(subtitleRef.current, 'subtitle');

    return () => {
      cleanupTitle?.();
      cleanupSubtitle?.();
    };
  }, []);

  return (
    <section id='welcome'>
      <p ref={subtitleRef}>{subtitleText}</p>
      <h1 ref={titleRef} className='mt-14'>
        {titleText}
      </h1>

      <div className='small-screen'>This Portfolio is designed for desktop</div>
    </section>
  );
}
