'use client';

import { projects } from '../data/projects_data';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function Project() {
    return (
        <section className="min-h-screen bg-black py-16 px-6">
            <div className="max-w-lg mx-auto text-center mb-10">
                <h1 className="text-2xl md:text-4xl font-extrabold text-white font-nokia cursor-target">
                    PROJECTS
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
                    Exploring the intersection of technology and healthcare through innovative digital solutions
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
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
}

function ProjectCard({ project }: ProjectCardProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.open(project.link, '_blank');
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 pb-0">
                <h3 className="text-lg font-bold text-white font-nokia cursor-target">{project.name}</h3>
                <p className="text-gray-300 text-sm mt-1 line-clamp-2">{project.description}</p>
            </div>

            <div className="relative mt-4 mb-5 mx-6 rounded-2xl overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full max-h-64 object-cover transition-transform duration-500 hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 text-xs text-white font-semibold bg-black px-2 py-1 rounded-lg shadow-sm font-nokia cursor-target">
                    {project.year}
                </span>
                <button
                    onClick={handleClick}
                    className="absolute bottom-3 right-3 bg-black rounded-full p-3 shadow-md cursor-target"
                >
                    <HiArrowUpRight className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>
    );
}
