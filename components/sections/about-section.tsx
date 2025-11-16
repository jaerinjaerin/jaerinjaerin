'use client';

import { About } from '@/types/portfolio';
import { useEffect, useRef, useState } from 'react';
import { EncryptIntroduce } from './about/encrypt-introduce';
import { getGreeting } from '@/lib/get-greeting';
import Image from 'next/image';

interface AboutSectionProps {
  data: About;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const [greeting, setGreeting] = useState('좋은');

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <section className='min-h-[calc(100svh-72px)] px-4 py-10 flex flex-col md:flex-row md:gap-8 items-center'>
      {/* 텍스트영역 */}
      <div className='relative z-10 w-full md:w-1/2'>
        <div className='text-[clamp(18px,6vw,60px)] font-bold'>
          <span className='block'>{greeting}</span>
          <span className='inline-block text-nowrap bg-white'>
            안녕하세요. 이재린입니다.
          </span>
        </div>
        <div>
          <EncryptIntroduce description={data.description} />
        </div>
        <div className=' whitespace-pre-line max-w-[540px] px-2 text-justify'>
          {data.bio[0]}
        </div>
      </div>
      {/* gif */}
      <div className='relative w-full md:w-1/2 aspect-square rounded-full overflow-hidden hidden md:block'>
        <GreetingCharacter />
      </div>
    </section>
  );
}

function GreetingCharacter() {
  return (
    <Image
      src={'/about/greeting.gif'}
      fill
      alt='인사하는 움직이는 이미지'
      className='object-cover object-top'
    />
  );
}
