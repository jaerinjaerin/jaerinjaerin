'use client';
import { useMobileWindowStore } from '@/store/mobile-window';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { MobileControls } from './controls';
import Image from 'next/image';

interface FolderChild {
  id: number;
  name: string;
  icon: string;
  kind: string;
  fileType?: string;
  href?: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string[];
  description_detail?: string[];
  image?: string;
  position?: string;
}

interface FolderData {
  id: number;
  name: string;
  icon: string;
  kind: string;
  children?: FolderChild[];
}

function Folder() {
  const { mobileWindows, openMobileWindow } = useMobileWindowStore();
  const folderData = mobileWindows.folder.data as FolderData | null;

  const handleFileClick = (file: FolderChild) => {
    switch (file.fileType) {
      case 'txt':
        openMobileWindow('txtfile', file);
        break;
      case 'img':
        openMobileWindow('imgfile', file);
        break;
      case 'url':
        if (file.href) {
          window.open(file.href, '_blank', 'noopener,noreferrer');
        }
        break;
      case 'fig':
        if (file.href) {
          window.open(file.href, '_blank', 'noopener,noreferrer');
        }
        break;
      default:
        break;
    }
  };

  if (!folderData) {
    return (
      <>
        <div id='window-header' className='bg-white'>
          <MobileControls />
          <h2>Folder</h2>
        </div>
        <div className='flex-1 flex items-center justify-center bg-white'>
          <p className='text-gray-500'>No folder selected</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div id='window-header' className='bg-white rounded-none'>
        <MobileControls />
        <h2>{folderData.name}</h2>
      </div>
      <ul className='p-7 flex-1 overflow-auto bg-white grid grid-cols-3 gap-y-6 content-start'>
        {folderData.children?.map((file) => (
          <li key={file.id} onClick={() => handleFileClick(file)} className='flex flex-col items-center cursor-pointer active:opacity-70'>
            <div className='w-14 h-14 flex items-center justify-center'>
              <Image src={file.icon} alt={file.name} width={56} height={56} className='object-contain max-h-14' />
            </div>
            <p className='font-medium text-xs mt-1.5 text-gray-900 text-center line-clamp-1'>{file.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

const FolderMobileWindow = MobileWindowWrapper(Folder, 'folder');
export default FolderMobileWindow;
