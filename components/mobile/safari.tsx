import { BLOG_POSTS } from '@/constants';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { MobileControls } from './controls';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, ChevronLeft, ChevronRight, MoveRight, Search, Share, SquaresExclude } from 'lucide-react';

function Safari() {
  return (
    <>
      <div id='window-header'>
        <MobileControls />
        <h2>Safari</h2>
      </div>
      <div className='blog'>
        <h2>My Developer Blog</h2>
        <div className='space-y-8'>
          {BLOG_POSTS.map(({ id, title, image, date, link }) => (
            <div key={id} className='blog-post'>
              <div className='col-span-2 aspect-square'>
                <Image src={image} alt={title} width={77} height={77} />
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

      <div className='px-5 pt-3 w-full absolute bottom-0 pb-[30px] border-t-[0.5px] border-t-black/10'>
        <div className='flex items-center px-3 py-2 rounded-lg shadow-[0px_0px_30px_rgba(0,0,0,0.15)]'>
          <Search className='icon' />
          <input
            placeholder='Search or enter website name'
            className='flex-1 text-black/40 rounded-md text-center disabled:text-black/50 text-sm'
            disabled
          />
          <img src={'/icons/mic.svg'} alt='microphone' className='size-4 text-black/40' />
        </div>
        <div className='flex items-center justify-between pt-5'>
          <ChevronLeft className='text-black/50' />
          <ChevronRight className='text-black/50' />
          <Share className='text-primary' />
          <BookOpen className='text-primary' />
          <SquaresExclude className='text-primary' />
        </div>
      </div>
    </>
  );
}

const SafariMobileWindow = MobileWindowWrapper(Safari, 'safari');
export default SafariMobileWindow;
