'use client';

import { useMobileWindowStore } from '@/store/mobile-window';
import { ChevronLeft } from 'lucide-react';

export function MobileControls() {
  const { goBack } = useMobileWindowStore();

  return (
    <div className='flex gap-1 items-center' onClick={goBack}>
      <ChevronLeft /> Go back
    </div>
  );
}
