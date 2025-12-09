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
      <ContactWindow />
      <Home />
    </main>
  );
}
