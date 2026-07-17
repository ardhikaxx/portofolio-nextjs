"use client";

import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { experiences } from "../data/experience_data";
import ExperienceTimeline from "./experience-timeline";

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 backdrop-blur-lg border border-white text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
            {children}
        </a>
    );
};

function generateContributionData() {
    const weeks: number[][] = [];
    const today = new Date();
    
    for (let i = 52; i >= 0; i--) {
        const week: number[] = [];
        for (let j = 0; j < 7; j++) {
            const date = new Date(today);
            date.setDate(date.getDate() - (i * 7 + (6 - j)));
            
            const random = Math.random();
            let count = 0;
            if (random > 0.7) count = Math.floor(Math.random() * 4) + 1;
            if (random > 0.9) count = Math.floor(Math.random() * 6) + 4;
            if (random > 0.95) count = Math.floor(Math.random() * 10) + 10;
            
            if (date.getTime() > today.getTime()) {
                count = -1;
            }
            
            week.push(count);
        }
        weeks.push(week);
    }
    
    return weeks;
}

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface YearData {
    year: number;
    contributions: ContributionDay[];
}

function ContributionGraph() {
    const [allYearData, setAllYearData] = useState<YearData[]>([]);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [contributionData, setContributionData] = useState<number[][]>([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch('https://github-contributions-api.jogruber.de/v4/ardhikaxx');
                const data = await response.json();
                
                const contributions = data.contributions || [];
                const totalByYear = data.total || {};
                
                const years = Object.keys(totalByYear).map(Number).sort((a, b) => b - a);
                setAllYearData(years.map(year => ({
                    year,
                    contributions: contributions.filter((c: ContributionDay) => c.date.startsWith(year.toString()))
                })));
                
                setSelectedYear(years[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contributions:', error);
                setAllYearData([{ year: new Date().getFullYear(), contributions: [] }]);
                setSelectedYear(new Date().getFullYear());
                setLoading(false);
            }
        };

        fetchContributions();
    }, []);

    useEffect(() => {
        if (!selectedYear || allYearData.length === 0) return;

        const yearData = allYearData.find(y => y.year === selectedYear);
        if (!yearData) return;

        const contributions = yearData.contributions;
        const weeks: number[][] = [];
        
        let total = 0;
        const startDate = new Date(`${selectedYear}-01-01`);
        const endDate = new Date(`${selectedYear}-12-31`);
        
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
        
        setContributionData(weeks.slice(0, 53));
        setTotalContributions(total);
    }, [selectedYear, allYearData]);

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
    
    if (contributionData.length > 0) {
        let lastMonth = -1;
        contributionData.forEach((week, i) => {
            const validDay = week.find(d => d !== -1);
            if (validDay !== undefined) {
                const weekDate = new Date(selectedYear!);
                weekDate.setMonth(Math.floor((i / 4.33)));
                const month = weekDate.getMonth();
                if (month !== lastMonth) {
                    monthLabels.push({ month: months[month], index: i });
                    lastMonth = month;
                }
            }
        });
    }

    if (loading) {
        return (
            <div className="w-full mt-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-semibold text-sm">Kontribusi GitHub</h3>
                    <span className="text-white/60 text-sm font-mono">Memuat...</span>
                </div>
                <div className="h-20 bg-white/5 rounded-lg animate-pulse"></div>
            </div>
        );
    }

    return (
        <div className="w-full mt-6">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                    <h3 className="text-white font-semibold text-sm">Kontribusi GitHub</h3>
                    {allYearData.length > 0 && (
                        <select
                            value={selectedYear || ''}
                            onChange={(e) => setSelectedYear(Number(e.target.value))}
                            className="bg-white/10 border border-white/20 text-white text-xs rounded-lg px-2 py-1 cursor-pointer outline-none hover:bg-white/20 transition-colors"
                        >
                            {allYearData.map((yearData) => (
                                <option key={yearData.year} value={yearData.year} className="bg-gray-900">
                                    {yearData.year}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
                <span className="text-white/60 text-sm font-mono">{totalContributions} kontribusi</span>
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
                            <span className="h-3">Sen</span>
                            <span className="h-3"></span>
                            <span className="h-3">Rab</span>
                            <span className="h-3"></span>
                            <span className="h-3">Jum</span>
                        </div>
                        
                        <div className="flex gap-[3px]">
                            {contributionData.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-[3px]">
                                    {week.map((day, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className={`w-3 h-3 rounded-sm ${getColor(day)} transition-all duration-300 hover:scale-125`}
                                            title={day >= 0 ? `${day} kontribusi` : ''}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-end gap-2 mt-2">
                <span className="text-[10px] text-gray-500">Jarang</span>
                <div className="flex gap-[3px]">
                    <div className="w-3 h-3 rounded-sm bg-gray-800"></div>
                    <div className="w-3 h-3 rounded-sm bg-gray-600"></div>
                    <div className="w-3 h-3 rounded-sm bg-gray-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-gray-400"></div>
                    <div className="w-3 h-3 rounded-sm bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-sm bg-white"></div>
                </div>
                <span className="text-[10px] text-gray-500">Sering</span>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-black w-full relative overflow-hidden px-4 py-8">
            <div
                className="relative w-full max-w-4xl bg-white/10 backdrop-blur-lg border rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-700 group mb-16"
            >
                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>

                <div className="relative z-10 flex flex-col items-center text-center text-white">
                    <div
                        className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-3 group/avatar"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/img/foto-profile.webp"
                                alt="Holographic Avatar"
                                fill
                                className="object-cover rounded-full p-1 sm:p-2 mix-blend-lighten"
                                priority
                            />
                        </div>
                    </div>

                    <h1
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white font-mono px-2"
                    >
                        Yanuar Ardhika Rahmadhani Ubaidillah
                    </h1>
                    <p
                        className="text-gray-300 text-xs sm:text-sm leading-5 sm:leading-6 mb-4 sm:mb-6 max-w-2xl font-light tracking-wide px-2 sm:px-7"
                    >
                        Saya adalah mahasiswa Teknik Informatika di Politeknik Negeri Jember yang bersemangat menciptakan solusi digital di bidang pengembangan website, aplikasi mobile, dan Internet of Things (IoT). Melalui berbagai proyek, saya telah mengasah kemampuan tidak hanya dalam membangun aplikasi yang fungsional, tetapi juga dalam mendorong inovasi dengan memanfaatkan perkembangan teknologi informasi terkini. Pengalaman saya mencakup pengembangan perangkat lunak end-to-end yang meliputi website, aplikasi mobile, dan sistem IoT. Dengan dedikasi untuk menghadirkan solusi teknologi yang inovatif, saya berupaya menciptakan sistem informasi yang efisien dan berdampak nyata.
                    </p>

                    <ContributionGraph />

                    <ExperienceTimeline />

                    <div
                        className="w-full max-w-xs sm:max-w-sm mb-4 sm:mb-6"
                    >
                        <div className="flex justify-center items-center gap-4 sm:gap-6">
                            <SocialIcon href="https://www.instagram.com/ardhxkaa_">
                                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                            </SocialIcon>
                            <SocialIcon href="https://github.com/ardhikaxx">
                                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                            </SocialIcon>
                            <SocialIcon href="https://www.linkedin.com/in/yanuar-ardhika-rahmadhani-ubaidillah/">
                                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </SocialIcon>
                        </div>
                    </div>

                    <div
                        className="w-full border-t border-gray-800/50 pt-3 sm:pt-4 mt-2 sm:mt-auto"
                    >
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-2 sm:gap-0 text-xs">
                            <div className="text-gray-500 text-center sm:text-left">
                                <p>Status: <span className="text-white font-semibold">IT Developer</span></p>
                            </div>
                            <div className="text-gray-500 flex items-center gap-1">
                                <p>Peran: <span className="text-white font-semibold">Web & Mobile Developer</span></p>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 text-[10px] sm:text-xs mt-2 tracking-wider">
                            © {new Date().getFullYear()} YANUAR ARDHIKA
                        </p>
                    </div>
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-4 h-4 border-t-3 border-l-3 border-white"></div>
                <div className="absolute top-3 sm:top-4 right-2 sm:right-4 w-4 h-4 border-t-3 border-r-3 border-white"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 h-4 border-b-3 border-l-3 border-white"></div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-4 h-4 border-b-3 border-r-3 border-white"></div>
            </div>

        </section>
    );
}
