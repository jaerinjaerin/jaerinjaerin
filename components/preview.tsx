'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Lottie를 동적으로 import (lazy loading)
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => null,
});

// Lottie JSON을 동적으로 import
const loadAnimation = () =>
  import('@/public/lottie/working-cat-animation.json');

export default function Preview() {
  const [showPreview, setShowPreview] = useState<boolean | null>(null);
  const [startTextShrink, setStartTextShrink] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [textOffsetY, setTextOffsetY] = useState(0);

  // 텍스트 스타일 메모이제이션
  const textStyle: React.CSSProperties = useMemo(
    () => ({
      position: 'relative',
      margin: 0,
      padding: 0,
      fontWeight: 400,
      textAlign: 'center',
      textShadow: `-1px 0 green, 0 1px green, 1px 0 green, 0 -1px green, -8px 8px green, -7px 7px green, -6px 6px green, -5px 5px green, -4px 4px green, -3px 3px green, -2px 2px green, -1px 1px green`,
    }),
    []
  );

  // 애니메이션 완료 콜백 메모이제이션
  const handleTextAnimationComplete = useCallback(() => {
    if (startTextShrink) {
      setShowPreview(false);
      // localStorage에 방문 기록 저장
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, [startTextShrink]);

  const handleLottieAnimationComplete = useCallback(() => {
    setStartTextShrink(true);
  }, []);

  // 최초 방문 확인 및 Preview 표시 여부 결정
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    setShowPreview(!hasVisited);
  }, []);

  // viewport에 따라 텍스트 오프셋 계산
  useEffect(() => {
    const calculateOffset = () => {
      // viewport height의 25%를 오프셋으로 사용
      const offset = window.innerHeight * 0.95;
      setTextOffsetY(offset);
    };

    calculateOffset();

    // 화면 크기 변경 시 재계산
    window.addEventListener('resize', calculateOffset);

    return () => {
      window.removeEventListener('resize', calculateOffset);
    };
  }, []);

  // 폰트 로딩 대기
  useEffect(() => {
    const checkFonts = async () => {
      try {
        await document.fonts.ready;
        // 추가 여유 시간 (폰트 적용 완료 보장)
        setTimeout(() => setFontsLoaded(true), 100);
      } catch (error) {
        // 폰트 로딩 실패 시에도 진행
        setFontsLoaded(true);
      }
    };

    checkFonts();
  }, []);

  // 컴포넌트 마운트 시 Lottie 데이터 로드
  useEffect(() => {
    loadAnimation().then((data) => setAnimationData(data.default || data));
  }, []);

  // localStorage 확인 중에는 검은 화면 표시 (깜빡임 방지)
  if (showPreview === null) {
    return <div className='fixed inset-0 bg-black z-30' />;
  }

  return (
    <AnimatePresence mode='wait'>
      {showPreview && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='fixed inset-0 bg-black z-30 flex justify-center items-center'
        >
          {fontsLoaded && (
            <motion.div
              initial={{ scale: 7, y: textOffsetY }}
              animate={
                startTextShrink
                  ? { scale: 1, y: 0 }
                  : { scale: 7, y: textOffsetY }
              }
              transition={{ duration: 2, ease: 'easeOut' }}
              onAnimationComplete={handleTextAnimationComplete}
              className='font-bungee text-white text-[clamp(18px,8vw,220px)] uppercase font-bold relative z-20'
              style={textStyle}
            >
              <div>portfolio</div>
              <div>leejaerin</div>
            </motion.div>
          )}

          {animationData && fontsLoaded && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: -100, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              onAnimationComplete={handleLottieAnimationComplete}
              className='absolute size-64 z-10'
            >
              <Lottie
                animationData={animationData}
                loop={true}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid slice',
                  progressiveLoad: true,
                }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
