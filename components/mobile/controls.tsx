'use client';

import { useMobileWindowStore } from '@/store/mobile-window';
import { ChevronLeft } from 'lucide-react';

export function MobileControls() {
  const { goBack } = useMobileWindowStore();

  return (
    <div className='flex items-center ' onClick={goBack}>
      <ChevronLeft /> Go back
    </div>
  );
}
