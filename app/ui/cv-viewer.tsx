'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import Link from 'next/link';
import { HiArrowLeft, HiArrowDownTray, HiMinus, HiPlus } from 'react-icons/hi2';

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
    <main className="min-h-screen bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-32 lg:pt-36 lg:pb-28">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#f3eee3]/70 hover:text-[#d9541e] transition-colors font-mono text-sm"
          >
            <HiArrowLeft size={20} />
            <span>Kembali</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-2 text-[#f3eee3]/70 hover:text-[#f3eee3] disabled:opacity-30 transition-colors"
              title="Perkecil"
            >
              <HiMinus size={20} />
            </button>
            <span className="text-[#f3eee3]/70 text-sm font-mono min-w-[4rem] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= 3}
              className="p-2 text-[#f3eee3]/70 hover:text-[#f3eee3] disabled:opacity-30 transition-colors"
              title="Perbesar"
            >
              <HiPlus size={20} />
            </button>

            <a
              href="/CV_Yanuar_Ardhika.pdf"
              download
              className="flex items-center gap-2 bg-[#d9541e] hover:bg-[#bd471a] text-[#f3eee3] px-4 py-2 rounded-full text-sm font-mono font-medium shadow-md transition-colors"
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
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d9541e]" />
              </div>
            }
            error={
              <div className="text-center py-20 text-[#f3eee3]/60 font-mono">
                Gagal memuat CV. Silakan{' '}
                <a href="/CV_Yanuar_Ardhika.pdf" download className="text-[#d9541e] underline">
                  download langsung
                </a>
                .
              </div>
            }
            className="bg-[#161616] border border-[#f3eee3]/10 rounded-2xl p-4 shadow-2xl"
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
                className="px-4 py-2 bg-[#f3eee3]/10 hover:bg-[#d9541e] text-[#f3eee3] rounded-full text-sm font-mono disabled:opacity-30 transition-colors"
              >
                Sebelumnya
              </button>
              <span className="text-[#f3eee3]/70 text-sm font-mono">
                {pageNumber} / {numPages}
              </span>
              <button
                onClick={() => changePage(1)}
                disabled={pageNumber >= numPages}
                className="px-4 py-2 bg-[#f3eee3]/10 hover:bg-[#d9541e] text-[#f3eee3] rounded-full text-sm font-mono disabled:opacity-30 transition-colors"
              >
                Selanjutnya
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
