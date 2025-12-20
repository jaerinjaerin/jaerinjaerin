'use client';

import Image from 'next/image';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { useMobileWindowStore } from '@/store/mobile-window';

function ImageContent() {
  const { mobileWindows } = useMobileWindowStore();
  const data = mobileWindows.imgfile?.data;
  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id='window-header'>
        {/* <WindowControls target='imgfile' /> */}
        <h2>{name}</h2>
      </div>

      <div className='p-5 bg-white'>
        {imageUrl ? (
          <div className='w-full mx-auto'>
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes='100vw'
              className='w-auto h-auto max-w-full max-h-[70vh] object-contain mx-auto'
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

const ImageContentMobileWindow = MobileWindowWrapper(ImageContent, 'safari');
export default ImageContentMobileWindow;
