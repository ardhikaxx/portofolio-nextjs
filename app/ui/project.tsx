'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '../data/projects_data';
import { HiArrowUpRight, HiArrowRight, HiMagnifyingGlass } from 'react-icons/hi2';
import { HiChevronDown, HiFolderOpen, HiX } from 'react-icons/hi';
import Link from 'next/link';
import BlurImage from '../components/BlurImage';

const latestProjectsFirst = [...projects].reverse();

export default function Project() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');

    const availableYears = useMemo(
        () => [...new Set(latestProjectsFirst.map((project) => project.year))].sort((a, b) => b - a),
        []
    );

    const filteredProjects = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        return latestProjectsFirst.filter((project) => {
            const matchesYear = selectedYear === 'all' || project.year === Number(selectedYear);
            const matchesSearch =
                normalizedQuery.length === 0 ||
                project.name.toLowerCase().includes(normalizedQuery) ||
                project.description.toLowerCase().includes(normalizedQuery) ||
                project.languages.some((language) => language.toLowerCase().includes(normalizedQuery));

            return matchesYear && matchesSearch;
        });
    }, [searchQuery, selectedYear]);

    const isFilterActive = searchQuery.trim().length > 0 || selectedYear !== 'all';

    const handleClearFilter = () => {
        setSearchQuery('');
        setSelectedYear('all');
    };

    return (
        <section className="min-h-screen bg-black py-16 px-4 sm:px-6 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-[140px]" />
            <div className="pointer-events-none absolute top-1/3 -right-40 w-[450px] h-[450px] bg-white/[0.015] rounded-full blur-[160px]" />

            {/* Header Bento Title Banner */}
            <div className="max-w-6xl xl:max-w-7xl mx-auto mb-10 sm:mb-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-mono">
                            Koleksi Proyek
                        </h1>
                        <div className="sr-only">
                            <h2>Portofolio Proyek Web, Mobile, dan IoT Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.</h2>
                            <p>
                                Daftar lengkap 27 karya perangkat lunak oleh Yanuar Ardhika: Website Profil Resmi PPAk FEB UNESA + CMS, Aplikasi Label Gizi MBG Makanan Bergizi Gratis, Holong Siregar & Co Law Office Tangerang, Aurora Vet & Petcare Klinik Hewan, SPK Beasiswa KIP-K PROMETHEE, SI-BESTI Siklus Tidur Ibu, APOCARE Farmasi POS ERP, SIPKES Poli Gigi Politeknik Negeri Jember, RSPD Klaten, Analisis Sentimen Naive Bayes OSS NARA, Profil SMK Muhammadiyah 1 Berbek, Perpustakaan MAN 2 Payakumbuh, JasaMarga Pemeliharaan Jalan Tol, UMKM Batik Sesa Bojonegoro, Rahmad HandyCraft, Rezti's Batik Jember, AITeC VII 2025 Polije, GlucoWise Diabetes Mobile & Web, Casim Coffee Jember, PutraKJ Trans, dan Sistem Informasi Posyandu PKM-PM Kemendikbudristek.
                            </p>
                        </div>
                        <p className="text-sm sm:text-base text-gray-400 max-w-xl font-light">
                            Eksplorasi karya sistem informasi, aplikasi mobile, dan website dengan sentuhan arsitektur modern.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <div className="px-3.5 py-2 rounded-2xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md">
                            <span className="text-white font-bold">{projects.length}</span> Total Proyek
                        </div>
                        <div className="px-3.5 py-2 rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-md">
                            <span className="font-bold">2024 - 2026</span> Timeline
                        </div>
                    </div>
                </div>
            </div>

            {/* Bento Filter & Search Control Bar */}
            <div className="max-w-6xl xl:max-w-7xl mx-auto mb-8 p-2.5 sm:p-3 rounded-3xl border border-white/10 bg-neutral-950/70 backdrop-blur-xl flex flex-col md:flex-row gap-3 relative z-10 shadow-2xl">
                <div className="relative flex-1">
                    <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                        id="project-search"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari nama project, deskripsi, atau teknologi..."
                        className="w-full rounded-2xl border border-white/10 bg-white/5 pl-11 pr-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-white/30 focus:bg-white/10"
                    />
                </div>

                <div className="relative w-full md:w-60 shrink-0">
                    <select
                        id="project-year-filter"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-sm text-white outline-none transition hover:border-white/25 focus:border-white/30 cursor-pointer"
                    >
                        <option value="all" className="bg-gray-950 text-white">Semua Tahun</option>
                        {availableYears.map((year) => (
                            <option key={year} value={year} className="bg-gray-950 text-white">
                                Tahun {year}
                            </option>
                        ))}
                    </select>
                    <HiChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>

                {isFilterActive && (
                    <button
                        onClick={handleClearFilter}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/20 active:scale-95 shrink-0"
                    >
                        <HiX className="h-4 w-4" />
                        Reset Filter
                    </button>
                )}
            </div>

            {/* Results Counter */}
            <div className="max-w-6xl xl:max-w-7xl mx-auto mb-8 flex items-center justify-between text-xs sm:text-sm text-gray-400 font-mono relative z-10 px-1">
                <p>
                    Menampilkan <span className="text-white font-semibold">{filteredProjects.length}</span> dari {latestProjectsFirst.length} proyek
                </p>
                {selectedYear !== 'all' && (
                    <span className="text-xs text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        Filter: Tahun {selectedYear}
                    </span>
                )}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 ? (
                <div className="max-w-6xl xl:max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center text-gray-300 relative z-10">
                    <div className="mb-4 flex justify-center">
                        <div className="rounded-full border border-white/10 bg-white/5 p-4">
                            <HiFolderOpen className="h-10 w-10 text-white/60" />
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Tidak Ada Proyek Ditemukan</h3>
                    <p className="mb-6 text-sm text-gray-400 max-w-md mx-auto">
                        Tidak ada proyek yang sesuai dengan kata kunci pencarian atau filter tahun yang dipilih.
                    </p>
                    <button
                        onClick={handleClearFilter}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm text-white transition hover:bg-white/20 active:scale-95"
                    >
                        <HiX className="h-4 w-4" />
                        Reset Filter
                    </button>
                </div>
            ) : (
                /* Bento Grid Container */
                <div className="max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 relative z-10">
                    {filteredProjects.map((project, index) => {
                        const patternIndex = index % 7;
                        // Bento pattern for 3-col desktop & 2-col tablet:
                        // Index 0: Hero wide card (spans 2 on tablet & desktop)
                        // Index 6: Showcase wide card (spans 1 on tablet, 2 on desktop)
                        const isMdSpan2 = patternIndex === 0;
                        const isLgSpan2 = patternIndex === 0 || patternIndex === 6;

                        return (
                            <BentoCard
                                key={project.id}
                                project={project}
                                priority={index === 0}
                                isMdSpan2={isMdSpan2}
                                isLgSpan2={isLgSpan2}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
}

interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    languages: string[];
    link: string;
    year: number;
}

interface BentoCardProps {
    project: Project;
    priority: boolean;
    isMdSpan2: boolean;
    isLgSpan2: boolean;
}

function BentoCard({ project, priority, isMdSpan2, isLgSpan2 }: BentoCardProps) {
    const router = useRouter();

    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleCardClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a[target="_blank"]') || target.closest('button')) {
            return;
        }
        router.push(`/project/${project.id}`);
    };

    // Card styling variants
    if (isLgSpan2) {
        // Wide Bento Card (Horizontal Split on large screens)
        return (
            <div
                onClick={handleCardClick}
                className={`group relative flex flex-col ${
                    isMdSpan2 ? 'md:flex-row md:col-span-2' : 'lg:flex-row md:col-span-1'
                } lg:col-span-2 rounded-[28px] sm:rounded-3xl bg-gradient-to-b from-neutral-900/60 via-neutral-950/80 to-black/95 border border-white/10 hover:border-white/30 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer`}
            >
                {/* Top Border Sheen Highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent z-10" />

                {/* Subtle Ambient Hover Glow */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 bg-white/[0.03] rounded-full blur-3xl group-hover:bg-white/[0.08] transition-all duration-700" />

                {/* Media Section */}
                <div
                    className={`relative block w-full ${
                        isMdSpan2 ? 'md:w-7/12' : 'lg:w-7/12'
                    } min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] overflow-hidden shrink-0`}
                >
                    <Link
                        href={`/project/${project.id}`}
                        className="absolute inset-0 block cursor-pointer"
                        aria-label={`Lihat detail ${project.name}`}
                    >
                        <BlurImage
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 800px"
                            className="object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            priority={priority}
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none md:bg-gradient-to-r md:from-transparent md:to-neutral-950" />
                    </Link>

                    {/* Badge Tahun */}
                    <div className="absolute top-4 left-4 z-10 pointer-events-none">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/70 backdrop-blur-md text-white/90 border border-white/15 shadow-sm">
                            {project.year}
                        </span>
                    </div>

                    {/* Live Demo Icon */}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            title="Buka live demo proyek"
                            aria-label={`Buka tautan ${project.name}`}
                            className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-md"
                        >
                            <HiArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                </div>

                {/* Content Section */}
                <div
                    className={`relative w-full ${
                        isMdSpan2 ? 'md:w-5/12' : 'lg:w-5/12'
                    } flex flex-col justify-between p-6 sm:p-7 lg:p-8 bg-neutral-950/80`}
                >
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-gray-100 transition-colors line-clamp-2">
                            <Link href={`/project/${project.id}`}>
                                {project.name}
                            </Link>
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3 sm:line-clamp-4 font-light mt-3 mb-5">
                            {project.description}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.languages.slice(0, 5).map((lang) => (
                                <span
                                    key={lang}
                                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-300 capitalize"
                                >
                                    {lang}
                                </span>
                            ))}
                            {project.languages.length > 5 && (
                                <span className="px-2 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-500">
                                    +{project.languages.length - 5}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                        <Link
                            href={`/project/${project.id}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md group/btn"
                        >
                            <span>Lihat Detail</span>
                            <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </Link>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-mono py-2 px-3 rounded-lg hover:bg-white/5"
                            >
                                <span>Live Demo</span>
                                <HiArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Standard Bento Card (Compact)
    return (
        <div
            onClick={handleCardClick}
            className="group relative flex flex-col h-full col-span-1 rounded-[28px] sm:rounded-3xl bg-gradient-to-b from-neutral-900/50 via-neutral-950/80 to-black/95 border border-white/10 hover:border-white/30 overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
        >
            {/* Top Border Sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

            {/* Subtle Ambient Hover Glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.06] transition-all duration-700" />

            {/* Image Preview */}
            <div className="relative block w-full h-52 sm:h-56 overflow-hidden shrink-0">
                <Link
                    href={`/project/${project.id}`}
                    className="absolute inset-0 block cursor-pointer"
                    aria-label={`Lihat detail ${project.name}`}
                >
                    <BlurImage
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={priority}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent pointer-events-none" />
                </Link>

                {/* Badge Tahun */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/70 backdrop-blur-md text-white/90 border border-white/15 shadow-sm">
                        {project.year}
                    </span>
                </div>

                {/* External Link */}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        title="Buka live demo proyek"
                        aria-label={`Buka tautan ${project.name}`}
                        className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-md"
                    >
                        <HiArrowUpRight className="w-4 h-4" />
                    </a>
                )}
            </div>

            {/* Content Details */}
            <div className="relative p-6 flex flex-col flex-1 justify-between bg-neutral-950/80">
                <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.languages.slice(0, 3).map((lang) => (
                            <span
                                key={lang}
                                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-400 capitalize"
                            >
                                {lang}
                            </span>
                        ))}
                        {project.languages.length > 3 && (
                            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-500">
                                +{project.languages.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-gray-100 transition-colors line-clamp-2">
                        <Link href={`/project/${project.id}`}>
                            {project.name}
                        </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3 font-light mt-2.5 mb-5">
                        {project.description}
                    </p>
                </div>

                {/* Action Footer */}
                <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-neutral-500">
                        {project.languages.length} teknologi
                    </span>
                    <Link
                        href={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 hover:border-transparent text-xs font-semibold transition-all duration-300 shadow-sm group/btn hover:scale-105 active:scale-95"
                    >
                        <span>Detail</span>
                        <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
