import { Dock, Navbar, Welcome } from '@/components';
import { ResumeWindow, SafariWindow, TerminalWindow } from '@/components/windows';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
    </main>
  );
}
