import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { MobileControls } from './controls';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { SOCIALS } from '@/constants';

function Contact() {
  return (
    <>
      <div id='window-header'>
        <MobileControls />
        <h2>Contact Me</h2>
      </div>
      <div className='p-5 flex flex-col items-center'>
        <img src='/images/jaerin-2.png' className='w-30 rounded-full mb-5' />

        <h3>이재린 | Lee Jaerin</h3>
        <p className='mb-3 px-3 text-sm text-black/60 mx-au'>
          프론트엔드 개발자
        </p>
        <p className='px-3 flex items-center gap-1 text-md text-black/80'>
          <Globe size={20} className='text-black/80' /> 대한민국 경기도 (한국
          표준시)
        </p>
      </div>
      <ul>
        {SOCIALS.map(({ id, icon, bg, link, text }) => (
          <li key={id} style={{ backgroundColor: bg }}>
            <Link
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              title={text}
            >
              <img src={icon} alt={text} className='size-5' />
              <p>{text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

const ContactMobileWindow = MobileWindowWrapper(Contact, 'contact');
export default ContactMobileWindow;
