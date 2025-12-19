import type { Metadata } from 'next';
import { Georama, Edu_NSW_ACT_Hand_Pre, IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: '이재린 | Lee Jaerin',
  description: 'Welcome to my portfolio!',
};

const georama = Georama({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--georama',
});
const playwrite = Edu_NSW_ACT_Hand_Pre({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--playwrite',
});
const sansCode = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--sansCode',
});
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--pretendard',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`h-dvh w-dvw overflow-hidden ${pretendard.className} ${georama.variable} ${playwrite.variable} ${sansCode.variable}`}
        style={{
          backgroundImage: 'url(/images/wallpaper.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </body>
    </html>
  );
}
