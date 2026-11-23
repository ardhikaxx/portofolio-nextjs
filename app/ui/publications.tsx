'use client';

import { useMemo, useState } from 'react';
import { publications } from '../data/publications_data';
import { HiArrowUpRight } from 'react-icons/hi2';
import { HiChevronDown, HiChevronUp, HiFolderOpen, HiX } from 'react-icons/hi';

export default function Publications() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');

    const availableYears = useMemo(
        () => [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a),
        []
    );

    const filteredPublications = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();
        return publications
            .filter((pub) => {
                const matchesYear = selectedYear === 'all' || pub.year === Number(selectedYear);
                const matchesSearch =
                    normalizedQuery.length === 0 ||
                    pub.title.toLowerCase().includes(normalizedQuery) ||
                    pub.abstract.toLowerCase().includes(normalizedQuery) ||
                    pub.authors.some((a) => a.toLowerCase().includes(normalizedQuery));
                return matchesYear && matchesSearch;
            })
            .sort((a, b) => b.year - a.year);
    }, [searchQuery, selectedYear]);

    const isFilterActive = searchQuery.trim().length > 0 || selectedYear !== 'all';

    const handleClearFilter = () => {
        setSearchQuery('');
        setSelectedYear('all');
    };

    return (
        <section className="min-h-screen bg-[#111111] pt-16 pb-32 sm:pb-32 lg:pt-36 lg:pb-28 px-4 sm:px-6">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f3eee3] font-mono tracking-tight mb-4">
                    Publikasi Ilmiah & Penelitian
                </h1>
                <p className="text-[#f3eee3]/75 text-sm leading-relaxed max-w-xl">
                    Karya ilmiah dan artikel penelitian yang telah dipublikasikan.
                </p>
            </div>

            {/* Search & Filter */}
            <div className="max-w-4xl mx-auto mb-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari judul, penulis, atau abstrak..."
                        className="w-full rounded-2xl border border-[#f3eee3]/15 bg-[#161616] px-4 py-3 text-sm text-[#f3eee3] placeholder:text-[#f3eee3]/40 outline-none transition focus:border-[#d9541e] focus:bg-[#1c1c1c]"
                    />

                    {/* Year chips */}
                    <div className="flex shrink-0 flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedYear('all')}
                            className={`rounded-full border px-4 py-1.5 text-sm font-mono transition active:scale-95 ${
                                selectedYear === 'all'
                                    ? 'border-[#d9541e] bg-[#d9541e] text-[#f3eee3]'
                                    : 'border-[#f3eee3]/20 bg-[#161616] text-[#f3eee3]/75 hover:border-[#d9541e]/50 hover:bg-[#202020]'
                            }`}
                        >
                            Semua
                        </button>
                        {availableYears.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year === Number(selectedYear) ? 'all' : String(year))}
                                className={`rounded-full border px-4 py-1.5 text-sm font-mono transition active:scale-95 ${
                                    selectedYear === String(year)
                                        ? 'border-[#d9541e] bg-[#d9541e] text-[#f3eee3]'
                                        : 'border-[#f3eee3]/20 bg-[#161616] text-[#f3eee3]/75 hover:border-[#d9541e]/50 hover:bg-[#202020]'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {isFilterActive && (
                        <button
                            onClick={handleClearFilter}
                            className="flex shrink-0 items-center gap-2 rounded-2xl border border-[#d9541e] bg-[#d9541e] px-5 py-3 text-sm text-[#f3eee3] transition hover:bg-[#bd471a] active:scale-95"
                        >
                            <HiX className="h-4 w-4" />
                            Reset
                        </button>
                    )}
                </div>

                <p className="mt-3 text-sm text-[#f3eee3]/60">
                    Menampilkan {filteredPublications.length} dari {publications.length} publikasi
                </p>
            </div>

            {/* List */}
            {filteredPublications.length === 0 ? (
                <div className="max-w-4xl mx-auto rounded-3xl border border-[#f3eee3]/10 bg-[#161616] px-6 py-12 text-center text-[#f3eee3]/75">
                    <div className="mb-4 flex justify-center">
                        <div className="rounded-full border border-[#f3eee3]/15 bg-[#f3eee3]/5 p-4">
                            <HiFolderOpen className="h-10 w-10 text-[#d9541e]" />
                        </div>
                    </div>
                    <p className="mb-4">Tidak ada publikasi yang cocok dengan pencarian.</p>
                    <button
                        onClick={handleClearFilter}
                        className="inline-flex items-center gap-2 rounded-xl border border-[#d9541e] bg-[#d9541e] px-4 py-2 text-sm text-[#f3eee3] transition hover:bg-[#bd471a]"
                    >
                        <HiX className="h-4 w-4" />
                        Reset filter
                    </button>
                </div>
            ) : (
                <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-24">
                    {filteredPublications.map((pub, index) => (
                        <PublicationCard key={pub.id} pub={pub} index={index} />
                    ))}
                </div>
            )}
        </section>
    );
}

interface PublicationCardProps {
    pub: {
        id: number;
        title: string;
        year: number;
        links: { label: string; url: string }[];
        authors: string[];
        abstract: string;
    };
    index: number;
}

function PublicationCard({ pub, index }: PublicationCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="group rounded-3xl border border-[#f3eee3]/10 bg-[#161616] p-6 transition-all duration-300 hover:border-[#d9541e]/40 hover:bg-[#181818]">
            {/* Top row */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <span className="shrink-0 text-xs font-mono text-[#d9541e] font-semibold mt-1">
                    #{String(index + 1).padStart(2, '0')}
                </span>
                <span className="shrink-0 rounded-full border border-[#f3eee3]/15 bg-[#f3eee3]/10 px-3 py-0.5 text-xs font-mono text-[#f3eee3]/80">
                    {pub.year}
                </span>
            </div>

            {/* Title */}
            <h2 className="text-base md:text-lg font-bold text-[#f3eee3] leading-snug mb-3 group-hover:text-[#d9541e] transition-colors">
                {pub.title}
            </h2>

            {/* Authors */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {pub.authors.map((author) => (
                    <span
                        key={author}
                        className="rounded-full border border-[#f3eee3]/10 bg-[#f3eee3]/5 px-2.5 py-0.5 text-xs text-[#f3eee3]/75"
                    >
                        {author}
                    </span>
                ))}
            </div>

            {/* Abstract */}
            <div className="mb-5">
                <p className={`text-sm text-[#f3eee3]/75 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
                    {pub.abstract}
                </p>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2 flex items-center gap-1 text-xs text-[#d9541e] hover:text-[#f3eee3] transition-colors"
                >
                    {expanded ? (
                        <>
                            <HiChevronUp className="h-3.5 w-3.5" />
                            Sembunyikan abstrak
                        </>
                    ) : (
                        <>
                            <HiChevronDown className="h-3.5 w-3.5" />
                            Baca abstrak lengkap
                        </>
                    )}
                </button>
            </div>

            {/* Footer */}
            <div className="border-t border-[#f3eee3]/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-mono text-[#f3eee3]/50 uppercase tracking-wider shrink-0">
                    Artikel Ilmiah
                </span>
                <div className="flex flex-wrap gap-2 justify-end">
                    {pub.links.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-[#d9541e] bg-[#d9541e] px-4 py-2 text-xs text-[#f3eee3] font-medium transition hover:bg-[#bd471a]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {link.label}
                            <HiArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

