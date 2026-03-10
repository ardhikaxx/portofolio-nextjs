'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/projects_data';
import { HiArrowLeft, HiLink, HiCalendar, HiCode, HiEye, HiDesktopComputer, HiChip, HiCube } from 'react-icons/hi';
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
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                        <HiCube className="w-12 h-12 text-white/50" />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4 font-mono">404</h1>
                    <p className="text-gray-400 mb-6">Project not found</p>
                    <Link href="/project" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-mono font-bold hover:bg-gray-200 transition-colors">
                        <HiArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    const prevProject = projects.find(p => p.id === id - 1);
    const nextProject = projects.find(p => p.id === id + 1);

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/2 rounded-full blur-[200px]" />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
                
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
            </div>

            {/* Navigation */}
            <div className="relative z-10 pt-6 px-4 md:px-8">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link 
                        href="/project"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-mono text-sm group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                        <span className="hidden sm:inline">BACK TO PROJECTS</span>
                    </Link>
                    
                    <div className="flex items-center gap-2 text-white/50 font-mono text-xs">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        {project.year}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8">
                {/* Header Section */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-mono">
                            <HiCube className="w-3 h-3" />
                            PROJECT
                        </div>
                        <span className="text-white/30 font-mono text-sm">#{project.id.toString().padStart(2, '0')}</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                        {project.name}
                    </h1>
                    
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
                        {project.description}
                    </p>
                </div>

                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-white/10 bg-white/5 group">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Image Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                                <HiDesktopComputer className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-white/60 text-xs font-mono uppercase tracking-wider">Project Type</p>
                                <p className="text-white font-semibold">Web Application</p>
                            </div>
                        </div>
                        
                        {/* Recording Indicator */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/30">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-400 text-xs font-mono">LIVE</span>
                        </div>
                    </div>
                    
                    {/* Corner Decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg" />
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <HiCalendar className="w-5 h-5 text-white/70" />
                        </div>
                        <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-1">Year</p>
                        <p className="text-2xl font-bold text-white">{project.year}</p>
                    </div>
                    
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <HiCode className="w-5 h-5 text-white/70" />
                        </div>
                        <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-1">Tech Stack</p>
                        <p className="text-2xl font-bold text-white">{project.languages.length}</p>
                    </div>
                    
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <HiEye className="w-5 h-5 text-white/70" />
                        </div>
                        <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-1">Views</p>
                        <p className="text-2xl font-bold text-white">1.2K</p>
                    </div>
                    
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-5 rounded-2xl bg-white text-black hover:bg-gray-200 transition-all duration-300 group cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <HiLink className="w-5 h-5" />
                        </div>
                        <p className="text-black/60 text-xs font-mono uppercase tracking-wider mb-1">Visit</p>
                        <p className="text-2xl font-bold flex items-center gap-2">
                            Live Demo 
                            <HiLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </p>
                    </a>
                </div>

                {/* Technologies */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <HiChip className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Technologies Used</h2>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.languages.map((lang, index) => (
                            <div
                                key={lang}
                                className="group px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono text-sm hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                                {lang}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Between Projects */}
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                    {prevProject ? (
                        <Link 
                            href={`/project/${prevProject.id}`}
                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <HiArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-white/50 text-xs font-mono">PREVIOUS</p>
                                <p className="text-white font-medium group-hover:text-gray-200 transition-colors line-clamp-1 max-w-[200px]">{prevProject.name}</p>
                            </div>
                        </Link>
                    ) : (
                        <div />
                    )}
                    
                    {nextProject && (
                        <Link 
                            href={`/project/${nextProject.id}`}
                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors text-right"
                        >
                            <div className="hidden sm:block">
                                <p className="text-white/50 text-xs font-mono">NEXT</p>
                                <p className="text-white font-medium group-hover:text-gray-200 transition-colors line-clamp-1 max-w-[200px]">{nextProject.name}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <HiArrowLeft className="w-5 h-5 text-white rotate-180 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    )}
                </div>

                {/* Decorative Line */}
                <div className="flex items-center gap-4 mt-12">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        <div className="w-1 h-1 rounded-full bg-white/50" />
                        <div className="w-1 h-1 rounded-full bg-white/70" />
                        <div className="w-1 h-1 rounded-full bg-white" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
            </div>
        </div>
    );
}
