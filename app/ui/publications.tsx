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
        <section className="min-h-screen bg-black py-16 px-4">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-10">
                <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">Research & Writing</p>
                <h1 className="text-4xl md:text-5xl font-black text-white font-mono tracking-tight mb-4">
                    Publications
                </h1>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
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
                        className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-white/40 focus:bg-white/15"
                    />

                    {/* Year chips */}
                    <div className="flex shrink-0 flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedYear('all')}
                            className={`rounded-full border px-4 py-1.5 text-sm font-mono transition active:scale-95 ${
                                selectedYear === 'all'
                                    ? 'border-white bg-white text-black'
                                    : 'border-white/20 bg-white/10 text-gray-300 hover:border-white/40 hover:bg-white/15'
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
                                        ? 'border-white bg-white text-black'
                                        : 'border-white/20 bg-white/10 text-gray-300 hover:border-white/40 hover:bg-white/15'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {isFilterActive && (
                        <button
                            onClick={handleClearFilter}
                            className="flex shrink-0 items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/20 hover:border-white/40 active:scale-95"
                        >
                            <HiX className="h-4 w-4" />
                            Reset
                        </button>
                    )}
                </div>

                <p className="mt-3 text-sm text-gray-500">
                    Menampilkan {filteredPublications.length} dari {publications.length} publikasi
                </p>
            </div>

            {/* List */}
            {filteredPublications.length === 0 ? (
                <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center text-gray-300">
                    <div className="mb-4 flex justify-center">
                        <div className="rounded-full border border-white/10 bg-white/5 p-4">
                            <HiFolderOpen className="h-10 w-10 text-white/60" />
                        </div>
                    </div>
                    <p className="mb-4">Tidak ada publikasi yang cocok dengan pencarian.</p>
                    <button
                        onClick={handleClearFilter}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
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

            {/* Stats */}
            <div className="max-w-4xl mx-auto mt-8 mb-16">
                <div className="border-t border-white/10 pt-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        <StatBox number={publications.length} label="Total Publikasi" />
                        <StatBox number={availableYears.length} label="Tahun Aktif" />
                        <StatBox
                            number={Math.max(...publications.map((p) => p.year))}
                            label="Tahun Terbaru"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

interface PublicationCardProps {
    pub: {
        id: number;
        title: string;
        year: number;
        link: string;
        authors: string[];
        abstract: string;
    };
    index: number;
}

function PublicationCard({ pub, index }: PublicationCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/8">
            {/* Top row */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <span className="shrink-0 text-xs font-mono text-gray-500 mt-1">
                    #{String(index + 1).padStart(2, '0')}
                </span>
                <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-0.5 text-xs font-mono text-gray-300">
                    {pub.year}
                </span>
            </div>

            {/* Title */}
            <h2 className="text-base md:text-lg font-bold text-white leading-snug mb-3 group-hover:text-gray-100 transition-colors">
                {pub.title}
            </h2>

            {/* Authors */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {pub.authors.map((author) => (
                    <span
                        key={author}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-400"
                    >
                        {author}
                    </span>
                ))}
            </div>

            {/* Abstract */}
            <div className="mb-5">
                <p className={`text-sm text-gray-400 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
                    {pub.abstract}
                </p>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2 flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors"
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
            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
                    Artikel Ilmiah
                </span>
                <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/20 hover:border-white/30"
                    onClick={(e) => e.stopPropagation()}
                >
                    Lihat Publikasi
                    <HiArrowUpRight className="h-3.5 w-3.5" />
                </a>
            </div>
        </div>
    );
}

function StatBox({ number, label }: { number: number; label: string }) {
    return (
        <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{number}</div>
            <div className="text-sm text-gray-500 tracking-wider">{label}</div>
        </div>
    );
}
