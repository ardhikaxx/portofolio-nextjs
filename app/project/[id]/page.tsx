'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/projects_data';
import {
    HiArrowLeft,
    HiArrowRight,
    HiArrowUpRight,
    HiCodeBracket,
    HiCube,
    HiMagnifyingGlassPlus
} from 'react-icons/hi2';
import { useEffect, useState, useMemo } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function getProjectCategory(project: { languages: string[]; name: string }): string {
    const langs = project.languages.map((l) => l.toLowerCase());
    const nameLower = project.name.toLowerCase();

    if (langs.includes('flutter') || langs.includes('dart') || nameLower.includes('mobile') || nameLower.includes('aplikasi mobile')) {
        return 'Mobile Application';
    }
    if (langs.includes('iot') || nameLower.includes('iot') || nameLower.includes('smart')) {
        return 'IoT & Embedded';
    }
    if (langs.includes('naive bayes') || langs.includes('machine learning') || langs.includes('promethee') || nameLower.includes('spk')) {
        return 'AI & Decision Support';
    }
    if (nameLower.includes('travel') || nameLower.includes('kopi') || nameLower.includes('korporat') || nameLower.includes('landing page')) {
        return 'Corporate & Profile';
    }
    if (langs.includes('laravel') || langs.includes('php') || langs.includes('mysql')) {
        return 'Web System & ERP';
    }
    return 'Web Application';
}

export default function ProjectDetailPage() {
    const params = useParams();
    const id = Number(params?.id);
    const project = projects.find((p) => p.id === id);
    const [mounted, setMounted] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentIndex = useMemo(() => {
        return projects.findIndex((p) => p.id === id);
    }, [id]);

    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
    const nextProject = currentIndex !== -1 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

    // 4 Proyek Terbaru untuk kolom samping (seperti "Latest post" pada referensi)
    const latestProjects = useMemo(() => {
        return [...projects]
            .reverse()
            .filter((p) => p.id !== id)
            .slice(0, 4);
    }, [id]);

    // Pool proyek untuk section bawah (seperti "Founders corner" pada referensi)
    const otherProjectsPool = useMemo(() => {
        return projects.filter((p) => p.id !== id);
    }, [id]);

    const displayedBottomProjects = useMemo(() => {
        const total = otherProjectsPool.length;
        if (total <= 3) return otherProjectsPool;
        const start = ((bottomOffset % total) + total) % total;
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(otherProjectsPool[(start + i) % total]);
        }
        return items;
    }, [otherProjectsPool, bottomOffset]);

    if (!mounted) return null;

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                        <HiCube className="w-10 h-10 text-white/50" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-3 font-mono">Proyek Tidak Ditemukan</h1>
                    <p className="text-gray-400 text-sm mb-6">
                        Proyek dengan ID #{params?.id} tidak ditemukan dalam database karya.
                    </p>
                    <Link
                        href="/project"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-mono font-bold text-sm hover:bg-gray-200 transition-colors"
                    >
                        <HiArrowLeft className="w-4 h-4" />
                        Kembali ke Semua Proyek
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white py-6 sm:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Ambient Lighting Background */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-white/[0.02] rounded-full blur-[140px]" />
            <div className="pointer-events-none absolute top-1/3 -right-40 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[160px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Navigation & Breadcrumb Bar */}
                <header className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/project"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-neutral-300 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all duration-300 group"
                        >
                            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Kembali ke Proyek</span>
                        </Link>
                        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500">
                            <span>/</span>
                            <span>Proyek #{project.id.toString().padStart(2, '0')}</span>
                        </div>
                    </div>

                    {/* Quick Prev / Next Navigation */}
                    <div className="flex items-center gap-2">
                        {prevProject ? (
                            <Link
                                href={`/project/${prevProject.id}`}
                                title={`Sebelumnya: ${prevProject.name}`}
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/15 flex items-center justify-center transition-all duration-300"
                            >
                                <HiArrowLeft className="w-4 h-4" />
                            </Link>
                        ) : (
                            <div className="w-9 h-9 rounded-full border border-white/5 text-neutral-700 flex items-center justify-center cursor-not-allowed">
                                <HiArrowLeft className="w-4 h-4" />
                            </div>
                        )}
                        <span className="text-xs font-mono text-neutral-400 px-1">
                            {currentIndex + 1} / {projects.length}
                        </span>
                        {nextProject ? (
                            <Link
                                href={`/project/${nextProject.id}`}
                                title={`Berikutnya: ${nextProject.name}`}
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/15 flex items-center justify-center transition-all duration-300"
                            >
                                <HiArrowRight className="w-4 h-4" />
                            </Link>
                        ) : (
                            <div className="w-9 h-9 rounded-full border border-white/5 text-neutral-700 flex items-center justify-center cursor-not-allowed">
                                <HiArrowRight className="w-4 h-4" />
                            </div>
                        )}
                    </div>
                </header>

                {/* Main 2-Column Section (Sesuai Referensi Gambar Top Section) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Kolom Kiri: Featured Project Card (Gambar Besar di Atas, Judul & Penjelasan di Bawah) */}
                    <article className="lg:col-span-8 flex flex-col rounded-[28px] sm:rounded-3xl bg-neutral-950/70 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
                        {/* 1. Gambar Utama di Bagian Atas */}
                        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-900 group/img">
                            <PhotoProvider>
                                <PhotoView src={project.image}>
                                    <div
                                        className="w-full h-full relative cursor-zoom-in"
                                        title="Klik untuk memperbesar gambar"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            priority
                                            sizes="(max-width: 1024px) 100vw, 68vw"
                                            className="object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                                        />
                                        {/* Subtle Dark Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent pointer-events-none opacity-85" />

                                        {/* Zoom Hint Badge */}
                                        <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/80 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5">
                                            <HiMagnifyingGlassPlus className="w-3.5 h-3.5" />
                                            <span>Perbesar Gambar</span>
                                        </div>
                                    </div>
                                </PhotoView>
                            </PhotoProvider>
                        </div>

                        {/* 2. Judul, Deskripsi & Penjelasan di Bawah Gambar Secara Simple */}
                        <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-1 justify-between bg-neutral-950/80">
                            <div>
                                {/* Badge Kategori (Tema Hitam Putih Bersih Tanpa Dot) */}
                                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white/10 border border-white/15 text-white shadow-sm">
                                        {getProjectCategory(project)}
                                    </span>
                                    <span className="text-xs font-mono text-neutral-400">
                                        Tahun {project.year}
                                    </span>
                                    <span className="text-xs font-mono text-neutral-600">•</span>
                                    <span className="text-xs font-mono text-neutral-400">
                                        {project.languages.length} Teknologi
                                    </span>
                                </div>

                                {/* Judul Proyek */}
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                                    {project.name}
                                </h1>

                                {/* Deskripsi Proyek */}
                                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                                    {project.description}
                                </p>
                            </div>

                            {/* Penjelasan Teknologi & Tombol Aksi */}
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                                    <HiCodeBracket className="w-4 h-4 text-white/70" />
                                    Teknologi yang Digunakan
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.languages.map((lang) => (
                                        <span
                                            key={lang}
                                            className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs sm:text-sm capitalize flex items-center gap-2 hover:bg-white/10 hover:border-white/25 transition-all"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                            {lang}
                                        </span>
                                    ))}
                                </div>

                                {/* Tombol Aksi */}
                                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                                        >
                                            <span>Buka Live Demo / Repositori</span>
                                            <HiArrowUpRight className="w-4 h-4" />
                                        </a>
                                    )}
                                    <Link
                                        href="/project"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/15 text-white font-medium text-xs sm:text-sm hover:bg-white/20 transition-all duration-300 font-mono"
                                    >
                                        <HiArrowLeft className="w-4 h-4" />
                                        <span>Semua Proyek</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Kolom Kanan: Latest Post / Proyek Terbaru (Sesuai Referensi Sisi Kanan) */}
                    <aside className="lg:col-span-4 flex flex-col">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                                Proyek Terbaru
                            </h2>
                            <span className="text-xs font-mono text-neutral-500">
                                Rekomendasi
                            </span>
                        </div>

                        <div className="flex flex-col gap-3.5">
                            {latestProjects.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/project/${p.id}`}
                                    className="group flex items-center gap-4 p-3 rounded-2xl bg-neutral-950/60 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 shadow-sm"
                                >
                                    <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden shrink-0 bg-neutral-900 border border-white/10">
                                        <Image
                                            src={p.image}
                                            alt={p.name}
                                            fill
                                            sizes="90px"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0 pr-1">
                                        <h3 className="text-xs sm:text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                                            {p.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-neutral-400">
                                            <span>{p.year}</span>
                                            <span>•</span>
                                            <span className="truncate">{getProjectCategory(p)}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>
                </div>

                {/* Section Bawah: Eksplorasi Proyek Lainnya (Sesuai Bagian "Founders corner" pada Referensi) */}
                <section className="mt-16 sm:mt-20 pt-10 border-t border-white/10">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                                Eksplorasi Proyek Lainnya
                            </h2>
                            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
                                Karya web, mobile, dan sistem informasi pilihan dari portofolio
                            </p>
                        </div>

                        {/* Navigation Arrows (Sesuai Tombol Panah Kanan/Kiri pada Referensi) */}
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setBottomOffset((prev) => prev - 1)}
                                aria-label="Proyek sebelumnya"
                                className="w-10 h-10 rounded-full border border-white/20 bg-neutral-900/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                            >
                                <HiArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setBottomOffset((prev) => prev + 1)}
                                aria-label="Proyek berikutnya"
                                className="w-10 h-10 rounded-full border border-white/20 bg-neutral-900/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                            >
                                <HiArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* 3-Column Card Grid (Sesuai Referensi Gambar Bagian Bawah) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedBottomProjects.map((item) => (
                            <Link
                                key={item.id}
                                href={`/project/${item.id}`}
                                className="group flex flex-col rounded-2xl bg-neutral-950/60 border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg"
                            >
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                                </div>
                                <div className="p-5 flex flex-col flex-1 justify-between bg-neutral-950/80">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2.5">
                                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-300">
                                                {getProjectCategory(item)}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-neutral-200 text-base line-clamp-1 group-hover:text-white transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mt-2 mb-4 font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                                        <span>Tahun {item.year}</span>
                                        <span>{item.languages.length} Teknologi</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
