'use client';

import { useWindowStore } from '@/store/window';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
import Image from 'next/image';

function ImageContent() {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2>{name}</h2>
      </div>

      <div className='p-5 bg-white h-[60vh]'>
        {imageUrl ? (
          <div className='w-full mx-auto h-full'>
            <Image src={imageUrl} alt={name} width={0} height={0} sizes='100vw' className='w-auto h-full max-w-full  object-contain mx-auto' />
          </div>
        ) : null}
      </div>
    </>
  );
}

const ImageContentWindow = WindowWrapper(ImageContent, 'imgfile');
export default ImageContentWindow;
