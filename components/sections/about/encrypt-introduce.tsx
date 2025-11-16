'use client';

import { motion } from 'framer-motion';
import { About } from '@/types/portfolio';
import { useEffect, useRef, useState } from 'react';
import {
  CHARS,
  CYCLES_PER_LETTER,
  LIST_ICON,
  PAUSE_DURATION,
  SHUFFLE_TIME,
} from '@/constants/about';
import { useWindowSize } from '@/hooks/use-window-size';

export function EncryptIntroduce({
  description,
}: {
  description: About['description'];
}) {
  const { isMobile } = useWindowSize();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(description[0]);
  const [showList, setShowList] = useState(false);
  const [_, setCompletedTexts] = useState<string[]>([]);

  // 현재 목표 텍스트
  const targetText = description[currentIndex];

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join('');

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(targetText);

    // 완료된 텍스트를 리스트에 추가
    setCompletedTexts((prev) => {
      const newTexts = [...prev, targetText];

      // 모든 description을 다 보여줬는지 확인
      if (newTexts.length === description.length) {
        // 리스트 모드로 전환
        setTimeout(() => {
          setShowList(true);
        }, PAUSE_DURATION);
        return newTexts;
      }

      return newTexts;
    });

    // 아직 보여줄 문장이 남았다면 다음 문장으로
    if (currentIndex < description.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, PAUSE_DURATION);
    }
  };

  // 인덱스가 변경될 때마다 scramble 애니메이션 실행
  useEffect(() => {
    scramble();

    // cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  // 리스트 모드로 표시
  if (showList || isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='overflow-hidden'
      >
        <ul className='space-y-2 px-2 py-4 font-hahmlet'>
          {description.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className='overflow-hidden'
            >
              {LIST_ICON[index]} {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  }

  return <span className='font-hahmlet'>{text}</span>;
}
