import { useSyncExternalStore, useEffect, useState } from 'react';

const BREAKPOINTS = {
  desktop: 1024,
} as const;

export function useWindowWidth() {
  const [isClient, setIsClient] = useState(false);

  const width = useSyncExternalStore(
    (callback) => {
      window.addEventListener('resize', callback);
      return () => window.removeEventListener('resize', callback);
    },
    () => window.innerWidth,
    () => 0
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    width,
    isDesktop: width >= BREAKPOINTS.desktop,
    isClient, // 클라이언트에서 마운트 완료 여부
    isReady: isClient && width > 0, // 윈도우 크기 체크 완료 여부
  };
}
