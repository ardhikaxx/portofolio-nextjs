'use client';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./cv-viewer'), { ssr: false });

export default function CVPageClient() {
  return <PDFViewer />;
}
