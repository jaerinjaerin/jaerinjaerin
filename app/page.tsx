import { Dock, Navbar, Welcome } from '@/components';
import { FinderWindow, ImageContentWindow, ResumeWindow, SafariWindow, TerminalWindow, TextWindow } from '@/components/windows';

export default function Page() {
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
    </main>
  );
}
