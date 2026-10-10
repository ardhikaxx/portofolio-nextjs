'use client';

import { useMemo, useState } from 'react';
import { projects } from '../data/projects_data';
import { HiArrowUpRight } from 'react-icons/hi2';
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
        <section className="min-h-screen bg-black py-16 px-4 sm:px-6">
            <div className="max-w-4xl xl:max-w-5xl mx-auto mb-10 flex flex-col gap-4 md:flex-row md:items-end">
                <div className="w-full md:flex-1">
                    <label htmlFor="project-search" className="mb-2 block text-sm font-medium text-gray-200">
                        Cari project
                    </label>
                    <input
                        id="project-search"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari nama, deskripsi, atau teknologi project..."
                        className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-white/40 focus:bg-white/15"
                    />
                </div>

                <div className="w-full md:w-64">
                    <label htmlFor="project-year-filter" className="mb-2 block text-sm font-medium text-gray-200">
                        Filter tahun
                    </label>
                    <div className="relative">
                        <select
                            id="project-year-filter"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full appearance-none rounded-2xl border border-white/15 bg-white/10 px-4 py-3 pr-11 text-sm text-white outline-none transition hover:border-white/25 focus:border-white/40 focus:bg-white/15"
                        >
                            <option value="all" className="bg-gray-950 text-white">
                                Semua tahun
                            </option>
                            {availableYears.map((year) => (
                                <option key={year} value={year} className="bg-gray-950 text-white">
                                    {year}
                                </option>
                            ))}
                        </select>
                        <HiChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                {isFilterActive && (
                    <div className="w-full md:w-auto md:pb-0.5">
                        <button
                            onClick={handleClearFilter}
                            className="flex w-full md:w-auto items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/20 hover:border-white/40 active:scale-95"
                        >
                            <HiX className="h-4 w-4" />
                            Reset filter
                        </button>
                    </div>
                )}
            </div>

            <div className="max-w-4xl xl:max-w-5xl mx-auto mb-8 flex items-center justify-between text-sm text-gray-400">
                <p>
                    Menampilkan {filteredProjects.length} dari {latestProjectsFirst.length} project
                </p>
            </div>

            {filteredProjects.length === 0 ? (
                <div className="max-w-4xl xl:max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center text-gray-300">
                    <div className="mb-4 flex justify-center">
                        <div className="rounded-full border border-white/10 bg-white/5 p-4">
                            <HiFolderOpen className="h-10 w-10 text-white/60" />
                        </div>
                    </div>
                    <p className="mb-4">Tidak ada project yang cocok dengan pencarian atau filter tahun.</p>
                    <button
                        onClick={handleClearFilter}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
                    >
                        <HiX className="h-4 w-4" />
                        Reset filter
                    </button>
                </div>
            ) : (
                <div className="max-w-4xl xl:max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14 mb-16">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} priority={index < 2} />
                    ))}
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

interface ProjectCardProps {
    project: Project;
    priority: boolean;
}

function ProjectCard({ project, priority }: ProjectCardProps) {
    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const techSubtitle =
        project.languages.slice(0, 3).join(', ') +
        (project.languages.length > 3 ? ` +${project.languages.length - 3}` : '');

    return (
        <div className="group relative flex flex-col h-full bg-neutral-950 rounded-3xl sm:rounded-[36px] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/25 hover:shadow-2xl hover:-translate-y-1.5">
            {/* Bagian Gambar dengan Overlay Pemisah */}
            <Link
                href={`/project/${project.id}`}
                className="relative block w-full h-64 sm:h-72 md:h-80 lg:h-[360px] xl:h-[400px] overflow-hidden shrink-0 cursor-pointer"
                aria-label={`Lihat detail ${project.name}`}
            >
                <BlurImage
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1024px"
                    className="object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={priority}
                />

                {/* Overlay gradasi pemisah gambar dari judul dan deskripsi */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 from-5% via-neutral-950/70 via-50% to-transparent pointer-events-none" />

                {/* Badge Tahun di pojok kiri atas */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-black/60 backdrop-blur-md text-white/90 border border-white/15 shadow-sm">
                        {project.year}
                    </span>
                </div>
            </Link>

            {/* External Demo Link di pojok kanan atas (lingkaran semi-transparan seperti di image.png) */}
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    title="Kunjungi tautan live/demo proyek"
                    aria-label={`Buka tautan ${project.name}`}
                    className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-md"
                >
                    <HiArrowUpRight className="w-4 h-4" />
                </a>
            )}

            {/* Konten: Judul, Subtitle, Deskripsi & Tombol Detail */}
            <div className="relative px-6 pb-6 pt-3 sm:px-8 sm:pb-8 sm:pt-4 md:px-10 md:pb-10 md:pt-5 flex flex-col flex-1 justify-between bg-neutral-950">
                <div>
                    {/* Nama Aplikasi / Judul Proyek */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-gray-100 transition-colors line-clamp-2">
                        <Link href={`/project/${project.id}`}>
                            {project.name}
                        </Link>
                    </h3>

                    {/* Subtitle (Teknologi & Kategori sesuai posisi 'Oromia, Ethiopia' di image.png) */}
                    <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-medium mt-1.5 mb-3.5 capitalize tracking-wide">
                        {techSubtitle}
                    </p>

                    {/* Deskripsi Aplikasi */}
                    <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed line-clamp-3 font-light">
                        {project.description}
                    </p>
                </div>

                {/* Tombol Lihat Detail (Pill Button di pojok kanan bawah seperti 'Visit right now' di image.png) */}
                <div className="mt-6 pt-2 flex items-center justify-end">
                    <Link
                        href={`/project/${project.id}`}
                        className="inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-[#f0f4f8] text-neutral-900 text-xs sm:text-sm md:text-base font-semibold hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
                    >
                        Lihat Detail
                    </Link>
                </div>
            </div>
        </div>
    );
}
