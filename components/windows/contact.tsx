'use client';
import { SOCIALS } from '@/constants';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
import Link from 'next/link';
import Image from 'next/image';
import { Globe } from 'lucide-react';

function Contact() {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='contact' />
        <h2>Contact Me</h2>
      </div>
      <div className='p-5 space-y-5'>
        <img src='/images/jaerin-2.png' className='w-30 rounded-full' />

        <h3>Let's Contact</h3>
        <p className='flex items-center gap-1 text-md text-gray-800'>
          <Globe /> 대한민국 경기도 의정부시 (한국 표준시)
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
