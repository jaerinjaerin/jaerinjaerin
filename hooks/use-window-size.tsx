import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useWindowSize() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 초기값 설정
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // 최초 실행
    checkMobile();

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', checkMobile);

    // cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return { isMobile };
}
