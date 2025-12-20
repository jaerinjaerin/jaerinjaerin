'use client';
import { SOCIALS } from '@/constants';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
import Link from 'next/link';
import { Globe } from 'lucide-react';

function Contact() {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='contact' />
        <h2>Contact Me</h2>
      </div>
      <div className='p-5'>
        <img src='/images/jaerin-2.png' className='w-30 mb-5 rounded-full' />

        <h3>이재린 | Lee Jaerin</h3>
        <p className='mb-3 px-3 text-sm text-black/60'>프론트엔드 개발자</p>
        <p className='px-3 flex items-center gap-1 text-md text-black/80'>
          <Globe size={20} className='text-black/80' /> 대한민국 경기도 (한국
          표준시)
        </p>

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
      </div>
    </>
  );
}

const ContactWindow = WindowWrapper(Contact, 'contact');
export default ContactWindow;
