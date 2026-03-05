'use client';

import { projects } from '../data/projects_data';
import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';

export default function Project() {
    return (
        <section className="min-h-screen bg-black py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} priority={index < 6} />
                ))}
            </div>
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
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.open(project.link, '_blank');
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 pb-0">
                <h3 className="text-lg font-bold text-white font-mono">{project.name}</h3>
                <p className="text-gray-300 text-sm mt-1 line-clamp-2">{project.description}</p>
            </div>

            <div className="relative mt-4 mb-5 mx-6 rounded-2xl overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={priority}
                    loading={priority ? "eager" : "lazy"}
                />

                <span className="absolute bottom-3 left-3 text-xs text-white font-semibold bg-black px-2 py-1 rounded-lg shadow-sm font-nokia">
                    {project.year}
                </span>
                <button
                    onClick={handleClick}
                    className="absolute bottom-3 right-3 bg-black rounded-full p-3 shadow-md"
                >
                    <HiArrowUpRight className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>
    );
}
