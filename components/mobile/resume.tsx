'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { WindowWrapper } from '../hoc/window-wrapper';
import { WindowControls } from '../window-controlls';
import { Download } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { MobileWindowWrapper } from '../hoc/mobile-wrapper';
import { MobileControls } from './controls';

const PDFViewer = dynamic(
  () =>
    import('react-pdf').then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;

      return function PDFViewerComponent() {
        const [numPages, setNumPages] = useState<number>(0);

        return (
          <mod.Document
            file='/files/resume.pdf'
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            className='pointer-events-none'
          >
            {Array.from({ length: numPages }, (_, i) => (
              <mod.Page
                key={i + 1}
                pageNumber={i + 1}
                renderTextLayer
                renderAnnotationLayer
              />
            ))}
          </mod.Document>
        );
      };
    }),
  { ssr: false, loading: () => <div>Loading PDF...</div> }
);

function Resume() {
  return (
    <div className='flex flex-col h-full'>
      <div id='window-header'>
        <MobileControls />
        <h2>Resume.pdf</h2>
        <div className='ml-auto'>
          <Link href={'/files/resume.pdf'} download className='cursor-pointer'>
            <Download className='icon text-gray-400' />
          </Link>
        </div>
      </div>
      <div className='overflow-auto'>
        <PDFViewer />
      </div>
    </div>
  );
}

const ResumeMobileWindow = MobileWindowWrapper(Resume, 'resume');
export default ResumeMobileWindow;
