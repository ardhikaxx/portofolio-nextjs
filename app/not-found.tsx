'use client';

import Link from 'next/link';
import { HiArrowLeft, HiHome } from 'react-icons/hi2';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#111111] flex items-center justify-center px-4 relative overflow-hidden pt-16 pb-32 lg:pt-36 lg:pb-28">
            {/* Background blur blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d9541e]/[0.03] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d9541e]/[0.03] rounded-full blur-[120px]" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(243,238,227,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(243,238,227,0.02)_1px,transparent_1px)] bg-size-[80px_80px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-lg w-full">
                {/* Corner decorations */}
                <div className="absolute -top-6 -left-6 w-6 h-6 border-t-2 border-l-2 border-[#d9541e]/40" />
                <div className="absolute -top-6 -right-6 w-6 h-6 border-t-2 border-r-2 border-[#d9541e]/40" />
                <div className="absolute -bottom-6 -left-6 w-6 h-6 border-b-2 border-l-2 border-[#d9541e]/40" />
                <div className="absolute -bottom-6 -right-6 w-6 h-6 border-b-2 border-r-2 border-[#d9541e]/40" />

                {/* 404 number */}
                <div>
                    <p className="text-xs font-mono text-[#d9541e] tracking-widest uppercase mb-4">Error 404</p>
                    <h1 className="text-[8rem] md:text-[12rem] font-black text-[#f3eee3] font-mono leading-none tracking-tighter">
                        404
                    </h1>
                </div>

                {/* Divider line */}
                <div className="h-px bg-[#f3eee3]/15 my-6" />

                {/* Message */}
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#f3eee3] font-mono mb-3">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-[#f3eee3]/75 text-sm leading-relaxed mb-8">
                        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
                        Kembali ke beranda dan jelajahi konten lainnya.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#d9541e] text-[#f3eee3] rounded-full font-bold font-mono text-sm hover:bg-[#bd471a] transition-all duration-300 hover:-translate-y-0.5 shadow-md"
                    >
                        <HiHome className="w-4 h-4" />
                        Ke Beranda
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#f3eee3]/10 border border-[#f3eee3]/20 text-[#f3eee3] rounded-full font-bold font-mono text-sm hover:bg-[#f3eee3]/20 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <HiArrowLeft className="w-4 h-4" />
                        Kembali
                    </button>
                </div>

                {/* Footer note */}
                <p className="mt-10 text-xs font-mono text-[#f3eee3]/50 tracking-wider">
                    © YANUAR ARDHIKA
                </p>
            </div>
        </main>
    );
}