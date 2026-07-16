'use client';

import { useMemo, useState } from 'react';
import { projects } from '../data/projects_data';
import { HiArrowUpRight } from 'react-icons/hi2';
import { HiFolderOpen } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

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

    return (
        <section className="min-h-screen bg-black py-16 px-6">
            <div className="max-w-6xl mx-auto mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:max-w-xl">
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

                <div className="w-full md:max-w-xs">
                    <label htmlFor="project-year-filter" className="mb-2 block text-sm font-medium text-gray-200">
                        Filter tahun
                    </label>
                    <select
                        id="project-year-filter"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40 focus:bg-white/15"
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
                </div>
            </div>

            <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between text-sm text-gray-400">
                <p>
                    Menampilkan {filteredProjects.length} dari {latestProjectsFirst.length} project
                </p>
            </div>

            {filteredProjects.length === 0 ? (
                <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center text-gray-300">
                    <div className="mb-4 flex justify-center">
                        <div className="rounded-full border border-white/10 bg-white/5 p-4">
                            <HiFolderOpen className="h-10 w-10 text-white/60" />
                        </div>
                    </div>
                    Tidak ada project yang cocok dengan pencarian atau filter tahun.
                </div>
            ) : (
                <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 mb-16 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} priority={index < 6} />
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
        e.preventDefault();
        window.open(project.link, '_blank');
    };

    return (
        <Link href={`/project/${project.id}`} className="block">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full cursor-pointer group border border-white/10 hover:border-white/30">
                <div className="p-6 pb-0">
                    <h3 className="text-lg font-bold text-white font-mono group-hover:text-gray-200 transition-colors">{project.name}</h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2 group-hover:text-gray-300 transition-colors">{project.description}</p>
                </div>

                <div className="relative mt-4 mb-5 mx-6 rounded-2xl overflow-hidden h-64">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={priority}
                    />

                    <span className="absolute bottom-3 left-3 text-xs text-white font-semibold bg-black px-2 py-1 rounded-lg shadow-sm font-nokia">
                        {project.year}
                    </span>
                    <button
                        onClick={handleLinkClick}
                        className="absolute bottom-3 right-3 bg-black rounded-full p-3 shadow-md"
                    >
                        <HiArrowUpRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </Link>
    );
}
