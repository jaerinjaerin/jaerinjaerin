import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='min-h-screen bg-[#030014] text-white flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-4'>404</h1>
        <h2 className='text-2xl mb-4'>Project Not Found</h2>
        <p className='text-gray-400 mb-8'>
          {`The project you're looking for doesn't exist.`}
        </p>
        <Link
          href='/'
          className='px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors inline-block'
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
