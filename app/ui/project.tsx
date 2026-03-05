'use client';

import { projects } from '../data/projects_data';
import { HiArrowUpRight } from 'react-icons/hi2';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface YearData {
    year: number;
    contributions: ContributionDay[];
}

interface ProjectProps {
    contributionData: YearData[];
}

export default function Project({ contributionData }: ProjectProps) {
    return (
        <section className="min-h-screen bg-black py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <ContributionGraph contributionData={contributionData} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 mt-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
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
                <h3 className="text-lg font-bold text-white font-mono">{project.name}</h3>
                <p className="text-gray-300 text-sm mt-1 line-clamp-2">{project.description}</p>
            </div>

            <div className="relative mt-4 mb-5 mx-6 rounded-2xl overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full max-h-64 object-cover transition-transform duration-500 hover:scale-105"
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

interface ContributionGraphProps {
    contributionData: YearData[];
}

function ContributionGraph({ contributionData: allYearData }: ContributionGraphProps) {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    const { contributionData, totalContributions } = useMemo(() => {
        if (!allYearData || allYearData.length === 0) {
            return { contributionData: [], totalContributions: 0 };
        }

        const defaultYear = selectedYear || allYearData[0].year;
        const yearData = allYearData.find(y => y.year === defaultYear);
        
        if (!yearData) {
            return { contributionData: [], totalContributions: 0 };
        }

        const contributions = yearData.contributions;
        const weeks: number[][] = [];
        
        let total = 0;
        const startDate = new Date(`${defaultYear}-01-01`);
        const endDate = new Date(`${defaultYear}-12-31`);
        
        let currentWeek: number[] = [];
        const startDayOfWeek = startDate.getDay();
        
        for (let i = 0; i < startDayOfWeek; i++) {
            currentWeek.push(-1);
        }
        
        const dayMap = new Map<string, number>();
        contributions.forEach((day: ContributionDay) => {
            dayMap.set(day.date, day.count);
        });
        
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            const dayOfWeek = d.getDay();
            const count = dayMap.get(dateStr) || 0;
            
            while (currentWeek.length < dayOfWeek) {
                currentWeek.push(-1);
            }
            
            currentWeek.push(count);
            total += count;
            
            if (dayOfWeek === 6) {
                while (currentWeek.length < 7) {
                    currentWeek.push(-1);
                }
                weeks.push(currentWeek);
                currentWeek = [];
            }
        }
        
        if (currentWeek.length > 0) {
            while (currentWeek.length < 7) {
                currentWeek.push(-1);
            }
            weeks.push(currentWeek);
        }
        
        while (weeks.length < 53) {
            weeks.unshift([-1, -1, -1, -1, -1, -1, -1]);
        }
        
        return { contributionData: weeks.slice(0, 53), totalContributions: total };
    }, [allYearData, selectedYear]);

    const getColor = (count: number) => {
        if (count === -1) return "bg-transparent";
        if (count === 0) return "bg-gray-800";
        if (count <= 3) return "bg-gray-600";
        if (count <= 6) return "bg-gray-500";
        if (count <= 9) return "bg-gray-400";
        if (count <= 15) return "bg-gray-300";
        return "bg-white";
    };

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthLabels: { month: string; index: number }[] = [];
    
    if (contributionData.length > 0 && selectedYear) {
        let lastMonth = -1;
        contributionData.forEach((week, i) => {
            const validDay = week.find(d => d !== -1);
            if (validDay !== undefined) {
                const weekDate = new Date(selectedYear);
                weekDate.setMonth(Math.floor((i / 4.33)));
                const month = weekDate.getMonth();
                if (month !== lastMonth) {
                    monthLabels.push({ month: months[month], index: i });
                    lastMonth = month;
                }
            }
        });
    }

    const years = allYearData?.map(y => y.year) || [];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                    <h2 className="text-white font-semibold text-sm">GitHub Contributions</h2>
                    {years.length > 0 && (
                        <select
                            value={selectedYear || years[0]}
                            onChange={(e) => setSelectedYear(Number(e.target.value))}
                            className="bg-white/10 border border-white/20 text-white text-xs rounded-lg px-2 py-1 cursor-pointer outline-none hover:bg-white/20 transition-colors"
                        >
                            {years.map((year) => (
                                <option key={year} value={year} className="bg-gray-900">
                                    {year}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
                <span className="text-white/60 text-sm font-mono">{totalContributions} contributions</span>
            </div>
            
            <div className="overflow-x-auto pb-2">
                <div className="inline-flex flex-col gap-1">
                    <div className="flex">
                        <div className="w-8"></div>
                        <div className="flex">
                            {monthLabels.map((item, i) => (
                                <div 
                                    key={i} 
                                    className="text-[10px] text-gray-500"
                                    style={{ width: `${(monthLabels[i + 1]?.index - item.index) * 14}px` }}
                                >
                                    {item.month}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex gap-1">
                        <div className="flex flex-col gap-1 text-[10px] text-gray-500 pr-1">
                            <span className="h-3">Mon</span>
                            <span className="h-3"></span>
                            <span className="h-3">Wed</span>
                            <span className="h-3"></span>
                            <span className="h-3">Fri</span>
                        </div>
                        
                        <div className="flex gap-[3px]">
                            {contributionData.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-[3px]">
                                    {week.map((day, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className={`w-3 h-3 rounded-sm ${getColor(day)} transition-all duration-300 hover:scale-125`}
                                            title={day >= 0 ? `${day} contributions` : ''}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-end gap-2 mt-2">
                <span className="text-[10px] text-gray-500">Less</span>
                <div className="flex gap-[3px]">
                    <div className="w-3 h-3 rounded-sm bg-gray-800"></div>
                    <div className="w-3 h-3 rounded-sm bg-gray-600"></div>
                    <div className="w-3 h-3 rounded-sm bg-gray-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-gray-400"></div>
                    <div className="w-3 h-3 rounded-sm bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-sm bg-white"></div>
                </div>
                <span className="text-[10px] text-gray-500">More</span>
            </div>
        </motion.div>
    );
}
