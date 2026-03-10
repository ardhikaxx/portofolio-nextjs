'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/projects_data';
import { HiArrowLeft, HiLink, HiCalendar, HiCode } from 'react-icons/hi';
import { useEffect, useState } from 'react';

export default function ProjectDetailPage() {
    const params = useParams();
    const id = Number(params.id);
    const project = projects.find(p => p.id === id);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/project" className="text-cyan-400 hover:underline">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Navigation */}
            <div className="relative z-10 pt-6 px-6">
                <Link 
                    href="/project"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm group"
                >
                    <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    BACK TO PROJECTS
                </Link>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
                        <HiLink className="w-3 h-3" />
                        PROJECT #{project.id.toString().padStart(2, '0')}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {project.name}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        {project.description}
                    </p>
                </div>

                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 bg-white/5">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500 animate-ping" style={{ animationDelay: '0.5s' }} />
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" style={{ animationDelay: '1s' }} />
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Year Card */}
                    <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                    <HiCalendar className="w-5 h-5 text-cyan-400" />
                                </div>
                                <span className="text-gray-400 font-mono text-sm">YEAR</span>
                            </div>
                            <p className="text-3xl font-bold text-white">{project.year}</p>
                        </div>
                    </div>

                    {/* Link Card */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                    <HiLink className="w-5 h-5 text-purple-400" />
                                </div>
                                <span className="text-gray-400 font-mono text-sm">VIEW PROJECT</span>
                            </div>
                            <HiLink className="w-6 h-6 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </a>
                </div>

                {/* Technologies */}
                <div className="mb-12">
                    <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                        <HiCode className="w-6 h-6 text-cyan-400" />
                        TECHNOLOGIES
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.languages.map((lang, index) => (
                            <span
                                key={lang}
                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {lang.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Decorative Line */}
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                    <div className="w-2 h-2 rotate-45 bg-cyan-500" />
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                </div>
            </div>
        </div>
    );
}
