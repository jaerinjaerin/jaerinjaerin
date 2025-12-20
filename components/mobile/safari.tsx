import { BLOG_POSTS } from '@/constants';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { MobileControls } from './controls';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

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
    </>
  );
}

const SafariMobileWindow = MobileWindowWrapper(Safari, 'safari');
export default SafariMobileWindow;
