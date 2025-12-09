'use client';

import { useWindowStore } from '@/store/window';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
import Image from 'next/image';

interface TextData {
  name: string;
  image?: string;
  subtitle?: string;
  description?: string[];
}

function Text() {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data as TextData | null;
  if (!data) return null;

  const { name, image, subtitle, description } = data;
  return (
    <>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <h2>{name}</h2>
      </div>

      <div className='p-5 space-y-6 bg-white'>{image ? <Image src={image} alt={name} className='rounded-2xl w-full h-auto' fill /> : null}</div>

      {subtitle ? <h3 className='text-lg font-semibold'>{subtitle}</h3> : null}
      {Array.isArray(description) && description.length > 0 ? (
        <div className='space-y-3 leading-relaxed text-base text-gray-800'>
          {description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      ) : null}
    </>
  );
}

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
