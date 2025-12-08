import { Dock, Navbar, Welcome } from '@/components';
import { TerminalWindow } from '@/components/windows';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
    </main>
  );
}
