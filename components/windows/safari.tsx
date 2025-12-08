'use client';

import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
import { BLOG_POSTS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

function Safari() {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='safari' />
        <PanelLeft className='ml-10 icon' />

        <div className='flex items-center gap-1 ml-5'>
          <ChevronLeft className='icon' />
          <ChevronRight className='icon' />
        </div>

        <div className='flex-1 flex-center'>
          <ShieldHalf className='icon' />
          <div className='search'>
            <Search className='icon' />
            <input placeholder='Search or enter website name' className='flex-1' />
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Share className='icon' />
          <Plus className='icon' />
          <Copy className='icon' />
        </div>
      </div>

      <div className='blog'>
        <h2>My Developer Blog</h2>
        <div className='space-y-8'>
          {BLOG_POSTS.map(({ id, image, title, date, link }) => (
            <div key={id} className='blog-post'>
              <div className='col-span-2 aspect-square'>
                <Image src={image} alt={title} width={100} height={100} />
              </div>
              <div className='content'>
                <p>{date}</p>
                <h3>{title}</h3>
                <Link href={link} target='_blank' rel='noopener noreferrer'>
                  Check out full post <MoveRight className='icon-hover' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;
