import type { Metadata } from 'next';
import {
  Bungee,
  Hahmlet,
  Gowun_Dodum,
  IBM_Plex_Sans_KR,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const bungee = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--bungee',
  display: 'block',
});
const hahmlet = Hahmlet({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--hahmlet',
  display: 'swap',
});
const gowunDodum = Gowun_Dodum({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--gowunDodum',
  display: 'swap',
});
const ibm = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--ibm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '포트폴리오 | 이재린',
  description: '프론트엔드 개발자 이재린의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          bungee.variable,
          hahmlet.variable,
          gowunDodum.variable,
          ibm.variable,
          'overflow-y-auto overflow-x-hidden h-svh'
        )}
      >
        {children}
      </body>
    </html>
  );
}
