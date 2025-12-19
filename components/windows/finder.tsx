'use client';

import { Search } from 'lucide-react';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
import { LOCATIONS } from '@/constants';
import useLocationStore, { Location, LocationItem } from '@/store/location';
import Image from 'next/image';
import clsx from 'clsx';
import { useWindowStore } from '@/store/window';

export function Finder() {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow, windows } = useWindowStore();

  const openItem = (item: LocationItem) => {
    if ('fileType' in item && item.fileType === 'pdf') return openWindow('resume');
    if (item.kind === 'folder' && 'children' in item) return setActiveLocation(item as Location);
    if ('fileType' in item && 'href' in item && item.href && ['fig', 'url'].includes(item.fileType)) return window.open(item.href, '_blank');
    if ('fileType' in item && item.fileType === 'txt') return openWindow('txtfile', item);
    if ('fileType' in item && item.fileType === 'img') return openWindow('imgfile', item);
  };

  const renderList = (name: string, items: Location[]) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? 'active' : 'not-active')}>
            <Image src={item.icon} alt={item.name} width={16} height={16} />
            <p className='text-sm font-medium truncate'>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id='window-header'>
        <WindowControls target='finder' />
        <Search className='icon' />
      </div>
      <div className='bg-white flex h-full'>
        <div className='sidebar'>
          {renderList('Favorites', Object.values(LOCATIONS))}
          {renderList('Work', LOCATIONS.work.children)}
        </div>
        <ul className='content'>
          {activeLocation.children.map((item) => (
            <li key={item.id} className={'position' in item ? item.position : ''} onClick={() => openItem(item)}>
              <Image src={item.icon} alt={item.name} width={64} height={64} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
const FinderWindow = WindowWrapper(Finder, 'finder');
export default FinderWindow;
