'use client';

import { Dock, Home, Navbar, Welcome } from '@/components';
import { ContactWindow, FinderWindow, ImageContentWindow, PhotosWindow, ResumeWindow, SafariWindow, TerminalWindow, TextWindow } from '@/components/windows';
import {
  ContactMobileWindow,
  MobileDock,
  PhotosMobileWindow,
  ResumeMobileWindow,
  SafariMobileWindow,
  TerminalMobileWindow,
  FinderMobileWindow,
  FolderMobileWindow,
  TextMobileWindow,
  ImageContentMobileWindow,
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
        <PhotosWindow />
        <Home />
      </main>
    );
  }

  return (
    <main>
      <MobileDock />
      <SafariMobileWindow />
      <PhotosMobileWindow />
      <ImageContentMobileWindow />
      <ContactMobileWindow />
      <ResumeMobileWindow />
      <TerminalMobileWindow />
      <FinderMobileWindow />
      <FolderMobileWindow />
      <TextMobileWindow />
      <MobileHome />
    </main>
  );
}
