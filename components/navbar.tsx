import { NAV_LINKS, NAV_ICONS } from '@/constants';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image src={'/images/logo.svg'} alt='애플 로고이미지' width={14} height={17} />
        <p className='font-bold'>Jaerin&apos;s portfolio</p>

        <ul>
          {NAV_LINKS.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {NAV_ICONS.map(({ id, img }) => (
            <li key={id}>
              <Image src={img} alt={`icon-${id}`} className='icon-hover' width={14} height={13} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format('ddd MMM D h:mm A ')}</time>
      </div>
    </nav>
  );
}
