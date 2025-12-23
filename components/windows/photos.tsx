'use client';

import Image from 'next/image';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
import { PHOTOS } from '@/constants';
import { useWindowStore } from '@/store/window';

function Photos() {
  const { openWindow } = useWindowStore();

  const handleImageClick = (image: string, index: number) => {
    openWindow('imgfile', {
      name: `Photo ${index + 1}`,
      imageUrl: image,
    });
  };

  return (
    <>
      <div id='window-header'>
        <WindowControls target='photos' />
      </div>
      <div className='bg-white flex h-full'>
        <div className='sidebar'>
          <div>
            <h3>Library</h3>
            <ul>
              <li>
                <Image src='/icons/photo.svg' alt='photos' width={16} height={16} />
                <p>All Photos</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='content gallery'>
          <ul>
            {PHOTOS.map(({ id, image }, index) => (
              <li
                key={id}
                onClick={() => handleImageClick(image, index)}
                className='relative cursor-pointer hover:opacity-80 transition-opacity'
              >
                <Image src={image} fill alt={image} className='object-cover rounded-lg' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const PhotosWindow = WindowWrapper(Photos, 'photos');
export default PhotosWindow;
