'use client';

import { useMemo, useState } from 'react';
import { penghargaanData } from '../data/awards_data';
import { HiFolderOpen } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

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
        <section className="min-h-screen bg-black text-white py-16 px-4">
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
                            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-white/40 focus:bg-white/15"
                        />
                    </div>

                    {/* Clear button */}
                    {isFilterActive && (
                        <button
                            onClick={handleClearFilter}
                            className="flex shrink-0 items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/20 hover:border-white/40 active:scale-95"
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
                                ? 'border-white bg-white text-black'
                                : 'border-white/20 bg-white/10 text-gray-300 hover:border-white/40 hover:bg-white/15'
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
                                    ? 'border-white bg-white text-black'
                                    : 'border-white/20 bg-white/10 text-gray-300 hover:border-white/40 hover:bg-white/15'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Counter */}
                <p className="mt-4 text-sm text-gray-400">
                    Menampilkan {totalFiltered} dari {penghargaanData.length} penghargaan
                </p>
            </div>

            {/* Results */}
            {filteredYears.length === 0 ? (
                <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center text-gray-300">
                    <div className="mb-4 flex justify-center">
                        <div className="rounded-full border border-white/10 bg-white/5 p-4">
                            <HiFolderOpen className="h-10 w-10 text-white/60" />
                        </div>
                    </div>
                    <p className="mb-4">Tidak ada penghargaan yang cocok dengan pencarian.</p>
                    <button
                        onClick={handleClearFilter}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
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

            {/* Stats */}
            <div className="max-w-7xl mx-auto mt-24 mb-16">
                <div className="border-t border-white pt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <StatBox number={penghargaanData.length} label="Total Awards" />
                        <StatBox number={years.length} label="Active Years" />
                        <StatBox number={Math.max(...penghargaanData.map(a => parseInt(a.tahun)))} label="Latest Year" />
                        <StatBox number={Math.min(...penghargaanData.map(a => parseInt(a.tahun)))} label="Starting Year" />
                    </div>
                </div>
            </div>
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
        <div className="group">
            <div className="flex items-center mb-12">
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <div className="w-4 h-4 bg-white transform rotate-45"></div>
                        <div className="absolute inset-0 w-4 h-4 bg-white transform rotate-45 animate-ping opacity-20"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white transition-all duration-500">
                        {year}
                    </h2>
                    <div className="h-0.5 bg-white flex-row max-w-24 group-hover:max-w-48 transition-all duration-700"></div>
                    <span className="text-sm font-mono text-gray-400">
                        {isFiltered ? `${awards.length} / ${totalInYear}` : `${totalInYear}`} awards
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

function AwardCard({ award, index }: AwardCardProps) {
    const getTierColor = (index: number) => {
        const tiers = [
            'border-white',
            'border-gray-400',
            'border-gray-600',
        ];
        return tiers[index % tiers.length];
    };

    return (
        <div className={`group cursor-pointer bg-white/10 backdrop-blur-lg p-6 relative overflow-hidden`}>
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white opacity-50"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white opacity-50"></div>

            <div className="relative z-10">
                <div className="text-xs text-gray-400 mb-4 font-mono tracking-wider">
                    AWARD #{String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-lg font-bold mb-4 leading-tight text-white">
                    {award.namaPenghargaan}
                </h3>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    {award.penyelenggara}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-300 transition-colors duration-300">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1.5 h-1.5 border ${i < getAchievementLevel(index)
                                        ? 'bg-white border-white'
                                        : 'border-white'
                                        } group-hover:border-white transition-all duration-300`}
                                ></div>
                            ))}
                        </div>
                        <span className="text-xs text-gray-200 font-mono">
                            TIER {getAchievementLevel(index)}
                        </span>
                    </div>

                    <div className="text-xs font-mono px-2 py-1 bg-white text-black transition-all duration-300">
                        {award.tahun}
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        </div>
    );
}

function StatBox({ number, label }: { number: number; label: string }) {
    return (
        <div className="group">
            <div className="text-3xl md:text-4xl font-bold mb-2 relative">
                {number}
            </div>
            <div className="text-sm text-gray-400 tracking-wider">{label}</div>
        </div>
    );
}

function getAchievementLevel(index: number): number {
    if (index % 3 === 0) return 3;
    if (index % 2 === 0) return 2;
    return 1;
}
