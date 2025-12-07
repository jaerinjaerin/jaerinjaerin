import { Dock, Navbar, Welcome } from '@/components';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
}
