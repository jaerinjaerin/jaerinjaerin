'use client';

import { useWindowStore } from '@/store/window';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
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
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data as TextData | null;
  if (!data) return null;

  const { name, image, subtitle, description, description_detail } = data;
  return (
    <>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <h2>{name}</h2>
      </div>

      <div className='p-8 space-y-6 bg-white max-h-[70vh] overflow-y-auto'>
        {image ? (
          <div className='h-[300px] w-full relative '>
            <Image src={image} alt={name} fill className='object-contain' />
          </div>
        ) : null}

        {subtitle ? <h3 className='text-lg font-semibold '>{subtitle}</h3> : null}
        {Array.isArray(description) && description.length > 0 ? (
          <div
            className='space-y-4 leading-relaxed text-base text-gray-800 whitespace-pre-line
'
          >
            {description.map((para, idx) => (
              <p key={idx}>{parseMarkdown(para)}</p>
            ))}
          </div>
        ) : null}

        {Array.isArray(description_detail) && description_detail.length > 0 ? (
          <ul className='text-base'>
            {description_detail.map((para, idx) => (
              <li key={idx} className='list-disc ml-3'>
                {parseMarkdown(para)}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
