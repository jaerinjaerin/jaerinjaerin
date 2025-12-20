'use client';

import { Dock, Home, Navbar, Welcome } from '@/components';
import {
  ContactWindow,
  FinderWindow,
  ImageContentWindow,
  ResumeWindow,
  SafariWindow,
  TerminalWindow,
  TextWindow,
} from '@/components/windows';
import {
  ContactMobileWindow,
  MobileDock,
  PhotosMobileWindow,
  ResumeMobileWindow,
  SafariMobileWindow,
} from '@/components/mobile';

import { useWindowWidth } from '@/hooks/use-window-width';
import { MobileHome } from '@/components/mobile/home';

export default function Page() {
  const { isDesktop, isReady } = useWindowWidth();

  if (!isReady) {
    return;
  }

  if (isDesktop) {
    return (
      <main>
        <Navbar />
        <Welcome />
        <Dock />
        <TerminalWindow />
        <SafariWindow />
        <ResumeWindow />
        <FinderWindow />
        <TextWindow />
        <ImageContentWindow />
        <ContactWindow />
        <Home />
      </main>
    );
  }

  return (
    <main>
      <MobileDock />
      <SafariMobileWindow />
      <PhotosMobileWindow />
      <ImageContentWindow />
      <ContactMobileWindow />
      <ResumeMobileWindow />
      <MobileHome />
    </main>
  );
}
