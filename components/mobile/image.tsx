'use client';

import Image from 'next/image';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { useMobileWindowStore } from '@/store/mobile-window';
import { MobileControls } from './controls';

interface ImageData {
  name: string;
  imageUrl: string;
}

function ImageContent() {
  const { mobileWindows } = useMobileWindowStore();
  const data = mobileWindows.imgfile?.data as ImageData | null;

  if (!data) {
    return (
      <>
        <div id='window-header' className='bg-white rounded-none'>
          <MobileControls />
          <h2>Image</h2>
        </div>
        <div className='flex-1 flex items-center justify-center bg-white'>
          <p className='text-gray-500'>No image selected</p>
        </div>
      </>
    );
  }

  const { name, imageUrl } = data;

  return (
    <>
      <div id='window-header' className='bg-white rounded-none'>
        <MobileControls />
        <h2>{name}</h2>
      </div>

      <div className='flex-1 overflow-auto bg-white p-5 flex items-center justify-center'>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={0}
            height={0}
            sizes='100vw'
            className='w-auto h-auto max-w-full max-h-[70vh] object-contain'
          />
        ) : null}
      </div>
    </>
  );
}

const ImageContentMobileWindow = MobileWindowWrapper(ImageContent, 'imgfile');
export default ImageContentMobileWindow;
