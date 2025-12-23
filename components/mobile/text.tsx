'use client';

import { useMobileWindowStore } from '@/store/mobile-window';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { MobileControls } from './controls';
import Image from 'next/image';

function parseMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

interface TextData {
  name: string;
  image?: string;
  subtitle?: string;
  description?: string[];
  description_detail?: string[];
}

function Text() {
  const { mobileWindows } = useMobileWindowStore();
  const data = mobileWindows.txtfile?.data as TextData | null;

  if (!data) {
    return (
      <>
        <div id='window-header' className='bg-white rounded-none'>
          <MobileControls />
          <h2>Text</h2>
        </div>
        <div className='flex-1 flex items-center justify-center bg-white'>
          <p className='text-gray-500'>No file selected</p>
        </div>
      </>
    );
  }

  const { name, image, subtitle, description, description_detail } = data;

  return (
    <>
      <div id='window-header' className='bg-white rounded-none'>
        <MobileControls />
        <h2>{name}</h2>
      </div>

      <div className='flex-1 overflow-y-auto bg-white p-5 space-y-5'>
        {image ? (
          <div className='h-[200px] w-full relative'>
            <Image src={image} alt={name} fill className='object-contain' />
          </div>
        ) : null}

        {subtitle ? <h3 className='text-base font-semibold'>{subtitle}</h3> : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className='space-y-3 leading-relaxed text-sm text-gray-800 whitespace-pre-line'>
            {description.map((para, idx) => (
              <p key={idx}>{parseMarkdown(para)}</p>
            ))}
          </div>
        ) : null}

        {Array.isArray(description_detail) && description_detail.length > 0 ? (
          <ul className='text-sm space-y-2'>
            {description_detail.map((para, idx) => (
              <li key={idx} className='list-disc ml-4'>
                {parseMarkdown(para)}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

const TextMobileWindow = MobileWindowWrapper(Text, 'txtfile');
export default TextMobileWindow;
