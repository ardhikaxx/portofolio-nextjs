'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import Link from 'next/link';
import { HiArrowLeft, HiArrowDownTray, HiMinus, HiPlus } from 'react-icons/hi2';
import NavBottom from '../components/NavBottom';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

export default function CVViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prev) => Math.min(Math.max(1, prev + offset), numPages));
  }

  function zoomIn() {
    setScale((prev) => Math.min(prev + 0.25, 3));
  }

  function zoomOut() {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-6 pb-24">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-mono text-sm"
          >
            <HiArrowLeft size={20} />
            <span>Kembali</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-2 text-white/70 hover:text-white disabled:opacity-30 transition-colors"
              title="Perkecil"
            >
              <HiMinus size={20} />
            </button>
            <span className="text-white/60 text-sm font-mono min-w-[4rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= 3}
              className="p-2 text-white/70 hover:text-white disabled:opacity-30 transition-colors"
              title="Perbesar"
            >
              <HiPlus size={20} />
            </button>

            <a
              href="/CV_Yanuar_Ardhika.pdf"
              download
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-mono transition-colors"
            >
              <HiArrowDownTray size={18} />
              <span>Download</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Document
            file="/CV_Yanuar_Ardhika.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white/40" />
              </div>
            }
            error={
              <div className="text-center py-20 text-white/60 font-mono">
                Gagal memuat CV. Silakan{' '}
                <a href="/CV_Yanuar_Ardhika.pdf" download className="text-blue-400 underline">
                  download langsung
                </a>
                .
              </div>
            }
            className="bg-white/5 rounded-2xl p-4 shadow-2xl"
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="rounded-lg overflow-hidden shadow-lg"
            />
          </Document>

          {numPages > 1 && (
            <div className="flex items-center gap-4 mt-6 mb-10">
              <button
                onClick={() => changePage(-1)}
                disabled={pageNumber <= 1}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-mono disabled:opacity-30 transition-colors"
              >
                Sebelumnya
              </button>
              <span className="text-white/70 text-sm font-mono">
                {pageNumber} / {numPages}
              </span>
              <button
                onClick={() => changePage(1)}
                disabled={pageNumber >= numPages}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-mono disabled:opacity-30 transition-colors"
              >
                Selanjutnya
              </button>
            </div>
          )}
        </div>
      </div>

      <NavBottom currentPath="/" />
    </main>
  );
}
