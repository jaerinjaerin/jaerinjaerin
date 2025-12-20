'use client';

import Image from 'next/image';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { useMobileWindowStore } from '@/store/mobile-window';
import { MobileControls } from './controls';
import { PHOTOS } from '@/constants';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import gsap from 'gsap';

function Photos() {
  const { mobileWindows } = useMobileWindowStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [clickedImageRect, setClickedImageRect] = useState<DOMRect | null>(
    null
  );
  const imageRefs = useRef<(HTMLElement | null)[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);
  const popupImageRef = useRef<HTMLDivElement>(null);
  console.log('➡️➡️➡️ mboile', mobileWindows);

  const handleImageClick = (
    index: number,
    e: React.MouseEvent<HTMLElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickedImageRect(rect);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    if (!popupRef.current || !popupImageRef.current || !clickedImageRect) {
      setSelectedIndex(null);
      return;
    }

    // 닫을 때 애니메이션
    const timeline = gsap.timeline({
      onComplete: () => {
        setSelectedIndex(null);
        setClickedImageRect(null);
      },
    });

    timeline.to(popupRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });

    timeline.to(
      popupImageRef.current,
      {
        width: clickedImageRect.width,
        height: clickedImageRect.height,
        top: clickedImageRect.top,
        left: clickedImageRect.left,
        duration: 0.3,
        ease: 'power2.in',
      },
      0
    );
  };

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + PHOTOS.length) % PHOTOS.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % PHOTOS.length);
  };

  // 팝업 열릴 때 애니메이션
  useEffect(() => {
    if (
      selectedIndex !== null &&
      popupRef.current &&
      popupImageRef.current &&
      clickedImageRect
    ) {
      // 초기 상태 설정
      gsap.set(popupRef.current, { opacity: 0 });
      gsap.set(popupImageRef.current, {
        position: 'fixed',
        width: clickedImageRect.width,
        height: clickedImageRect.height,
        top: clickedImageRect.top,
        left: clickedImageRect.left,
      });

      // 애니메이션
      const timeline = gsap.timeline();

      timeline.to(popupRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      timeline.to(
        popupImageRef.current,
        {
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          duration: 0.3,
          ease: 'power2.out',
        },
        0
      );
    }
  }, [selectedIndex, clickedImageRect]);

  // 스와이프 감지
  const minSwipeDistance = 50;
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEndY(null);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !touchStartY || !touchEndY) return;

    const distanceX = touchStart - touchEnd;
    const distanceY = touchStartY - touchEndY;

    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    const isDownSwipe = distanceY < -minSwipeDistance;

    // 아래로 스와이프 시 팝업 닫기
    if (isDownSwipe && Math.abs(distanceY) > Math.abs(distanceX)) {
      handleClose();
      return;
    }

    // 좌우 스와이프 (세로 스와이프보다 가로 스와이프가 더 클 때만)
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      if (isLeftSwipe) {
        handleNext();
      }
      if (isRightSwipe) {
        handlePrevious();
      }
    }
  };

  return (
    <div className='flex flex-col h-full'>
      <div id='window-header' className='shrink-0'>
        <MobileControls />
        <h2>All Photos</h2>
      </div>
      <div className='gallery overflow-y-auto flex-1 pb-4'>
        <ul>
          {PHOTOS.map(({ id, image }, index) => (
            <li
              key={id}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              onClick={(e) => handleImageClick(index, e)}
              className='cursor-pointer'
            >
              <Image src={image} width={100} height={100} alt={image} />
            </li>
          ))}
        </ul>
      </div>

      {/* 이미지 확대 팝업 */}
      {selectedIndex !== null && (
        <div
          ref={popupRef}
          className='fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center'
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={handleClose}
            className='absolute top-4 left-4 text-white p-2 border-slate-200/30 border hover:bg-white/10 rounded-full transition-colors z-10'
          >
            <ChevronLeft size={16} />
          </button>

          {/* 이미지 */}
          <div
            ref={popupImageRef}
            className='relative w-full h-full flex items-center justify-center p-4'
          >
            <Image
              src={PHOTOS[selectedIndex].image}
              alt={PHOTOS[selectedIndex].image}
              fill
              className='object-contain'
            />
          </div>
        </div>
      )}
    </div>
  );
}

const PhotosMobileWindow = MobileWindowWrapper(Photos, 'photos');
export default PhotosMobileWindow;
