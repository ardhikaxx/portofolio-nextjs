'use client';

import { useMemo, useState } from 'react';
import { penghargaanData } from '../data/awards_data';
import { HiFolderOpen, HiX } from 'react-icons/hi';
import {
    HiTrophy,
    HiAcademicCap,
    HiSparkles,
    HiBuildingLibrary,
    HiCalendar,
} from 'react-icons/hi2';

export default function Awards() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');

    const awardsByYear = useMemo(() =>
        penghargaanData.reduce((acc, award) => {
            if (!acc[award.tahun]) acc[award.tahun] = [];
            acc[award.tahun].push(award);
            return acc;
        }, {} as Record<string, typeof penghargaanData>),
        []
    );

    const years = useMemo(
        () => Object.keys(awardsByYear).sort((a, b) => parseInt(b) - parseInt(a)),
        [awardsByYear]
    );

    const filteredAwardsByYear = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        const result: Record<string, typeof penghargaanData> = {};

        for (const year of years) {
            if (selectedYear !== 'all' && year !== selectedYear) continue;

            const filtered = awardsByYear[year].filter((award) => {
                if (normalizedQuery.length === 0) return true;
                return (
                    award.namaPenghargaan.toLowerCase().includes(normalizedQuery) ||
                    award.penyelenggara.toLowerCase().includes(normalizedQuery)
                );
            });

            if (filtered.length > 0) result[year] = filtered;
        }

        return result;
    }, [searchQuery, selectedYear, awardsByYear, years]);

    const filteredYears = Object.keys(filteredAwardsByYear).sort((a, b) => parseInt(b) - parseInt(a));
    const totalFiltered = filteredYears.reduce((sum, y) => sum + filteredAwardsByYear[y].length, 0);
    const isFilterActive = searchQuery.trim().length > 0 || selectedYear !== 'all';

    const handleClearFilter = () => {
        setSearchQuery('');
        setSelectedYear('all');
    };

    return (
        <section className="min-h-screen bg-[#111111] text-[#f3eee3] pt-16 pb-32 sm:pb-32 lg:pt-36 lg:pb-28 px-4 sm:px-6">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10">
                <p className="text-xs font-mono text-[#d9541e] tracking-widest uppercase mb-2">Prestasi & Rekognisi</p>
                <h1 className="text-4xl md:text-5xl font-black text-[#f3eee3] font-mono tracking-tight mb-3">
                    Penghargaan & Prestasi
                </h1>
                <p className="text-[#f3eee3]/75 text-sm leading-relaxed max-w-xl font-light">
                    Rekam jejak penghargaan, rekognisi inovasi, dan prestasi kompetisi teknologi Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.
                </p>
            </div>
            {/* Search & Filter */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    {/* Search input */}
                    <div className="w-full md:flex-1">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari nama penghargaan atau penyelenggara..."
                            className="w-full rounded-2xl border border-[#f3eee3]/15 bg-[#161616] px-4 py-3 text-sm text-[#f3eee3] placeholder:text-[#f3eee3]/40 outline-none transition focus:border-[#d9541e] focus:bg-[#1c1c1c]"
                        />
                    </div>

                    {/* Clear button */}
                    {isFilterActive && (
                        <button
                            onClick={handleClearFilter}
                            className="flex shrink-0 items-center gap-2 rounded-2xl border border-[#d9541e] bg-[#d9541e] px-5 py-3 text-sm text-[#f3eee3] transition hover:bg-[#bd471a] active:scale-95"
                        >
                            <HiX className="h-4 w-4" />
                            Reset filter
                        </button>
                    )}
                </div>

                {/* Year chips */}
                <div className="mt-4 flex flex-wrap gap-2">
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
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year === selectedYear ? 'all' : year)}
                            className={`rounded-full border px-4 py-1.5 text-sm font-mono transition active:scale-95 ${
                                selectedYear === year
                                    ? 'border-[#d9541e] bg-[#d9541e] text-[#f3eee3]'
                                    : 'border-[#f3eee3]/20 bg-[#161616] text-[#f3eee3]/75 hover:border-[#d9541e]/50 hover:bg-[#202020]'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Counter */}
                <p className="mt-4 text-sm text-[#f3eee3]/60">
                    Menampilkan {totalFiltered} dari {penghargaanData.length} penghargaan
                </p>
            </div>

            {/* Results */}
            {filteredYears.length === 0 ? (
                <div className="max-w-7xl mx-auto rounded-3xl border border-[#f3eee3]/10 bg-[#161616] px-6 py-12 text-center text-[#f3eee3]/70">
                    <div className="mb-4 flex justify-center">
                        <div className="rounded-full border border-[#f3eee3]/15 bg-[#f3eee3]/5 p-4">
                            <HiFolderOpen className="h-10 w-10 text-[#d9541e]" />
                        </div>
                    </div>
                    <p className="mb-4">Tidak ada penghargaan yang cocok dengan pencarian.</p>
                    <button
                        onClick={handleClearFilter}
                        className="inline-flex items-center gap-2 rounded-xl border border-[#d9541e] bg-[#d9541e] px-4 py-2 text-sm text-[#f3eee3] transition hover:bg-[#bd471a]"
                    >
                        <HiX className="h-4 w-4" />
                        Reset filter
                    </button>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto space-y-20">
                    {filteredYears.map((year) => (
                        <YearSection
                            key={year}
                            year={year}
                            awards={filteredAwardsByYear[year]}
                            totalInYear={awardsByYear[year].length}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}

interface YearSectionProps {
    year: string;
    awards: typeof penghargaanData;
    totalInYear: number;
}

function YearSection({ year, awards, totalInYear }: YearSectionProps) {
    const isFiltered = awards.length < totalInYear;

    return (
        <div className="relative pl-0 md:pl-10">
            {/* Timeline Vertical Track Line on Desktop */}
            <div className="hidden md:block absolute left-2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#d9541e]/50 via-[#f3eee3]/10 to-transparent pointer-events-none" />

            {/* Year Header with Timeline Node */}
            <div className="flex items-center mb-8 sm:mb-10">
                <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Glowing Node Marker */}
                    <div className="relative">
                        <div className="w-4 h-4 bg-[#d9541e] transform rotate-45 rounded-[2px] shadow-[0_0_12px_rgba(217,84,30,0.6)]"></div>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-mono tracking-tighter text-[#f3eee3]">
                        {year}
                    </h2>
                    <div className="h-0.5 bg-[#d9541e] w-12 sm:w-20"></div>
                    <span className="text-xs sm:text-sm font-mono text-[#f3eee3]/60 px-2.5 py-1 rounded-full bg-[#f3eee3]/5 border border-[#f3eee3]/10">
                        {isFiltered ? `${awards.length} / ${totalInYear}` : `${totalInYear}`} penghargaan
                    </span>
                </div>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {awards.map((award, index) => (
                    <AwardCard
                        key={index}
                        award={award}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

interface AwardCardProps {
    award: {
        namaPenghargaan: string;
        tahun: string;
        penyelenggara: string;
    };
    index: number;
}

function getAwardMeta(namaPenghargaan: string) {
    const titleLower = namaPenghargaan.toLowerCase();

    // 1. Badge Peringkat
    let rankBadge = {
        label: "Penghargaan",
        isFirstPlace: false,
        icon: HiTrophy,
    };

    if (titleLower.includes("juara 1")) {
        rankBadge = { label: "Juara 1", isFirstPlace: true, icon: HiTrophy };
    } else if (titleLower.includes("juara 2")) {
        rankBadge = { label: "Juara 2", isFirstPlace: false, icon: HiTrophy };
    } else if (titleLower.includes("juara 3")) {
        rankBadge = { label: "Juara 3", isFirstPlace: false, icon: HiTrophy };
    } else if (titleLower.includes("pendanaan") || titleLower.includes("pkm")) {
        rankBadge = { label: "Lolos Pendanaan", isFirstPlace: true, icon: HiAcademicCap };
    } else if (titleLower.includes("siswa terbaik") || titleLower.includes("terbaik")) {
        rankBadge = { label: "Terbaik", isFirstPlace: true, icon: HiSparkles };
    }

    // 2. Kategori Bidang
    let category = "Teknologi";
    if (titleLower.includes("website") || titleLower.includes("mobile") || titleLower.includes("aplikasi")) {
        category = "Web & Mobile";
    } else if (titleLower.includes("poster") || titleLower.includes("design") || titleLower.includes("desain")) {
        category = "Desain Grafis";
    } else if (titleLower.includes("video")) {
        category = "Media & Video";
    } else if (titleLower.includes("inovasi") || titleLower.includes("pemuda pelopor") || titleLower.includes("wic")) {
        category = "Inovasi";
    } else if (titleLower.includes("pkm") || titleLower.includes("pengabdian")) {
        category = "Hibah PKM";
    } else if (titleLower.includes("elektronika")) {
        category = "Elektronika";
    }

    return { rankBadge, category };
}

function AwardCard({ award, index }: AwardCardProps) {
    const { rankBadge, category } = getAwardMeta(award.namaPenghargaan);
    const RankIcon = rankBadge.icon;

    return (
        <div className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181818] via-[#141414] to-[#121212] border border-[#f3eee3]/10 p-5 sm:p-6 overflow-hidden text-left cursor-default">
            {/* Top Border Sheen Highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f3eee3]/25 to-transparent z-10" />

            {/* Bagian Atas: Badge Peringkat, Kategori, & Judul */}
            <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-3.5">
                    {/* Badge Peringkat */}
                    <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                            rankBadge.isFirstPlace
                                ? 'bg-[#d9541e] text-white shadow-sm'
                                : 'bg-[#d9541e]/15 border border-[#d9541e]/40 text-[#d9541e]'
                        }`}
                    >
                        <RankIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>{rankBadge.label}</span>
                    </div>

                    {/* Kategori Bidang */}
                    <span className="text-[11px] font-mono text-[#f3eee3]/60 px-2.5 py-0.5 rounded-full bg-[#f3eee3]/5 border border-[#f3eee3]/10">
                        {category}
                    </span>
                </div>

                {/* Judul Penghargaan */}
                <h3 className="text-[15px] sm:text-base md:text-lg font-bold font-sans text-[#f3eee3] leading-snug line-clamp-3">
                    {award.namaPenghargaan}
                </h3>
            </div>

            {/* Bagian Bawah: Penyelenggara & Meta Tahun */}
            <div className="relative z-10 pt-4 mt-4 border-t border-[#f3eee3]/10 flex flex-col gap-2.5">
                {/* Penyelenggara */}
                <div className="flex items-start gap-2 text-xs sm:text-[13px] text-[#f3eee3]/75 font-light">
                    <HiBuildingLibrary className="w-4 h-4 text-[#d9541e] shrink-0 mt-0.5" />
                    <span className="leading-relaxed line-clamp-2">{award.penyelenggara}</span>
                </div>

                {/* Meta Tahun & Index */}
                <div className="flex items-center justify-between pt-2 border-t border-[#f3eee3]/5 text-[11px] font-mono text-[#f3eee3]/50">
                    <span className="inline-flex items-center gap-1">
                        <HiCalendar className="text-[#d9541e] text-xs" />
                        <span>Tahun {award.tahun}</span>
                    </span>
                    <span className="text-[#f3eee3]/40 font-mono">
                        #{String(index + 1).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </div>
    );
}


