"use client";

import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiEnvelope, HiBriefcase, HiChevronDown } from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";
import ContactModal from "../components/ContactModal";
import ExperienceModal from "../components/ExperienceModal";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface YearData {
    year: number;
    contributions: ContributionDay[];
    total: number;
}

interface DayCell {
    count: number;
    date: string | null;
}

function ContributionGraph() {
    const [allYearData, setAllYearData] = useState<YearData[]>([]);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [contributionWeeks, setContributionWeeks] = useState<DayCell[][]>([]);
    const [monthLabels, setMonthLabels] = useState<{ month: string; col: number }[]>([]);
    const [totalContributions, setTotalContributions] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch("https://github-contributions-api.jogruber.de/v4/ardhikaxx");
                const data = await response.json();

                const contributions: ContributionDay[] = data.contributions || [];
                const totalByYear: Record<string, number> = data.total || {};

                const years = Object.keys(totalByYear)
                    .map(Number)
                    .sort((a, b) => b - a);

                const mappedYears: YearData[] = years.map((year) => ({
                    year,
                    contributions: contributions.filter((c) => c.date.startsWith(year.toString())),
                    total: totalByYear[year.toString()] || 0,
                }));

                setAllYearData(mappedYears);
                setSelectedYear(years[0] || new Date().getFullYear());
                setLoading(false);
            } catch (error) {
                console.error("Error fetching GitHub contributions:", error);
                const currentYear = new Date().getFullYear();
                setAllYearData([{ year: currentYear, contributions: [], total: 0 }]);
                setSelectedYear(currentYear);
                setLoading(false);
            }
        };

        fetchContributions();
    }, []);

    useEffect(() => {
        if (!selectedYear || allYearData.length === 0) return;

        const yearData = allYearData.find((y) => y.year === selectedYear);
        if (!yearData) return;

        const contributions = yearData.contributions;
        const dayMap = new Map<string, number>();
        contributions.forEach((day: ContributionDay) => {
            dayMap.set(day.date, day.count);
        });

        const startDate = new Date(selectedYear, 0, 1);
        const endDate = new Date(selectedYear, 11, 31);
        const startDayOfWeek = startDate.getDay(); // 0: Sun, 1: Mon, ...

        const weeksList: DayCell[][] = [];
        let currentWeek: DayCell[] = [];

        // Pad start days before Jan 1
        for (let i = 0; i < startDayOfWeek; i++) {
            currentWeek.push({ count: -1, date: null });
        }

        let calculatedTotal = 0;

        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const yearStr = d.getFullYear();
            const monthStr = String(d.getMonth() + 1).padStart(2, "0");
            const dateDayStr = String(d.getDate()).padStart(2, "0");
            const dateStr = `${yearStr}-${monthStr}-${dateDayStr}`;

            const count = dayMap.get(dateStr) ?? 0;
            currentWeek.push({ count, date: dateStr });
            calculatedTotal += count;

            if (currentWeek.length === 7) {
                weeksList.push(currentWeek);
                currentWeek = [];
            }
        }

        if (currentWeek.length > 0) {
            while (currentWeek.length < 7) {
                currentWeek.push({ count: -1, date: null });
            }
            weeksList.push(currentWeek);
        }

        while (weeksList.length < 53) {
            weeksList.push(Array(7).fill({ count: -1, date: null }));
        }

        const trimmedWeeks = weeksList.slice(0, 53);
        setContributionWeeks(trimmedWeeks);
        setTotalContributions(yearData.total || calculatedTotal);

        // Compute month labels aligned with week columns
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const labels: { month: string; col: number }[] = [];
        let lastMonth = -1;

        trimmedWeeks.forEach((week, colIdx) => {
            const validDay = week.find((day) => day.date !== null);
            if (validDay && validDay.date) {
                const m = parseInt(validDay.date.split("-")[1], 10) - 1;
                if (m !== lastMonth) {
                    labels.push({ month: months[m], col: colIdx });
                    lastMonth = m;
                }
            }
        });

        setMonthLabels(labels);

        // On mobile, scroll container slightly to show current contributions if near the end of year
        setTimeout(() => {
            if (scrollContainerRef.current && window.innerWidth < 640) {
                const currentMonth = new Date().getMonth();
                const scrollRatio = currentMonth / 11;
                const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
                if (maxScroll > 0) {
                    scrollContainerRef.current.scrollLeft = maxScroll * Math.min(scrollRatio, 0.85);
                }
            }
        }, 100);
    }, [selectedYear, allYearData]);

    const getColor = (count: number) => {
        if (count === -1) return "bg-transparent";
        if (count === 0) return "bg-[#182029]";
        if (count <= 3) return "bg-[#243342]";
        if (count <= 6) return "bg-[#3d5670]";
        if (count <= 12) return "bg-[#7c9dbd]";
        return "bg-white";
    };

    if (loading) {
        return (
            <div className="w-full mt-6 sm:mt-7">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-semibold text-xs sm:text-sm">Kontribusi GitHub</h3>
                    <span className="text-neutral-500 text-xs font-mono">Memuat...</span>
                </div>
                <div className="h-24 sm:h-28 bg-white/5 rounded-2xl animate-pulse" />
            </div>
        );
    }

    return (
        <div className="w-full mt-6 sm:mt-7">
            {/* Header Kontribusi */}
            <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold text-xs sm:text-sm">Kontribusi GitHub</h3>
                    {allYearData.length > 0 && (
                        <div className="relative inline-flex items-center">
                            <select
                                value={selectedYear || ""}
                                onChange={(e) => setSelectedYear(Number(e.target.value))}
                                className="appearance-none bg-[#222222] hover:bg-[#282828] border border-neutral-700/80 text-neutral-200 text-xs font-mono rounded-md pl-2 pr-5 py-0.5 sm:py-1 cursor-pointer outline-none transition-colors"
                                aria-label="Pilih tahun kontribusi GitHub"
                            >
                                {allYearData.map((yearData) => (
                                    <option key={yearData.year} value={yearData.year} className="bg-neutral-900 text-white">
                                        {yearData.year}
                                    </option>
                                ))}
                            </select>
                            <HiChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none text-xs" />
                        </div>
                    )}
                </div>
                <span className="text-neutral-400 text-xs sm:text-sm font-mono shrink-0">
                    {totalContributions} kontribusi
                </span>
            </div>

            {/* Heatmap Matrix with Touch & Scroll for Mobile */}
            <div
                ref={scrollContainerRef}
                className="overflow-x-auto pb-1.5 scrollbar-none touch-pan-x -mx-1 px-1"
            >
                <div className="inline-flex flex-col min-w-[600px] select-none">
                    {/* Header Bulan */}
                    <div className="flex text-[10px] text-neutral-400 font-mono mb-1 h-3 relative">
                        <div className="w-6 shrink-0" />
                        <div className="relative flex-1 h-3">
                            {monthLabels.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="absolute text-[10px] text-neutral-400 font-mono leading-none"
                                    style={{ left: `${item.col * 11}px` }}
                                >
                                    {item.month}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Matriks Hari & Grid */}
                    <div className="flex items-start">
                        {/* Label Hari (Sen, Rab, Jum) */}
                        <div className="w-6 shrink-0 flex flex-col gap-[2.5px] text-[10px] text-neutral-400 font-mono pr-1 select-none">
                            <span className="h-2 leading-none"></span> {/* Min */}
                            <span className="h-2 leading-none flex items-center">Sen</span> {/* Sen */}
                            <span className="h-2 leading-none"></span> {/* Sel */}
                            <span className="h-2 leading-none flex items-center">Rab</span> {/* Rab */}
                            <span className="h-2 leading-none"></span> {/* Kam */}
                            <span className="h-2 leading-none flex items-center">Jum</span> {/* Jum */}
                            <span className="h-2 leading-none"></span> {/* Sab */}
                        </div>

                        {/* Kolom Minggu (53 Kolom) */}
                        <div className="flex gap-[2.5px]">
                            {contributionWeeks.map((week, wIdx) => (
                                <div key={wIdx} className="flex flex-col gap-[2.5px]">
                                    {week.map((day, dIdx) => (
                                        <div
                                            key={dIdx}
                                            className={`w-2 h-2 rounded-full ${getColor(day.count)} transition-transform duration-150 hover:scale-150`}
                                            title={day.date ? `${day.date}: ${day.count} kontribusi` : ""}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Legend Jarang - Sering */}
            <div className="flex items-center justify-end gap-1.5 sm:gap-2 mt-2.5 select-none">
                <span className="text-[10px] text-neutral-500 font-mono">Jarang</span>
                <div className="flex items-center gap-[2.5px]">
                    <div className="w-2 h-2 rounded-full bg-[#182029]" />
                    <div className="w-2 h-2 rounded-full bg-[#243342]" />
                    <div className="w-2 h-2 rounded-full bg-[#3d5670]" />
                    <div className="w-2 h-2 rounded-full bg-[#7c9dbd]" />
                    <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-[10px] text-neutral-500 font-mono">Sering</span>
            </div>
        </div>
    );
}

export default function About() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);

    return (
        <section className="flex items-center justify-center min-h-screen bg-black w-full relative px-4 py-8 pb-28 sm:py-12 sm:pb-28">
            {/* Main Profile Card - Compact on Desktop, Fully Responsive on Mobile */}
            <div className="relative w-full max-w-[750px] bg-[#141414] border border-[#262626] rounded-2xl sm:rounded-[28px] p-5 sm:p-7 md:p-8 shadow-2xl text-white transition-all duration-300">
                {/* Bagian Atas: Avatar Foto & Deskripsi Profil */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    {/* Avatar Foto Bulat */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-[124px] md:h-[124px] shrink-0 rounded-full overflow-hidden bg-neutral-800 border border-white/10 shadow-lg">
                        <Image
                            src="/img/foto-profile.webp"
                            alt="Foto Profil Yanuar Ardhika Rahmadhani Ubaidillah"
                            fill
                            sizes="(max-width: 640px) 96px, 124px"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Teks Nama & Biodata Singkat */}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                        <h1 className="text-base sm:text-base md:text-[17px] lg:text-[18.5px] font-bold text-white font-mono leading-snug mb-2 whitespace-normal sm:whitespace-nowrap">
                            Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.
                        </h1>

                        <div className="sr-only">
                            <h2>Biografi & Profil Profesional Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.</h2>
                            <p>
                                Yanuar Ardhika adalah Full Stack Web & Mobile Developer asal Jember, Jawa Timur, Indonesia. Lulusan Sarjana Terapan Komputer (S.Tr.Kom.) dari Program Studi D4 Teknik Informatika, Jurusan Teknologi Informasi, Politeknik Negeri Jember (Polije). Berpengalaman luas dalam pengembangan sistem informasi berbasis Laravel, Next.js, React, TypeScript, Flutter Android, basis data MySQL, integrasi mikrokontroler IoT (ESP32), dan arsitektur RESTful API.
                            </p>
                        </div>

                        <p className="text-neutral-400 text-xs sm:text-[13px] leading-relaxed font-normal text-left sm:text-left">
                            Saya lulusan Sarjana Terapan (S.Tr.Kom.) Program Studi D4 Teknik Informatika Politeknik Negeri Jember dengan spesialisasi pengembangan web dan mobile aplikasi. Memiliki rekam jejak dalam merancang serta membangun aplikasi end-to-end yang skalabel, efisien, dan ramah pengguna — mulai dari sistem informasi instansi, proyek riset terdanai, hingga pengalaman industri. Berorientasi pada clean code, pemecahan masalah nyata, dan siap memberikan kontribusi optimal dalam pengembangan produk digital.
                        </p>
                    </div>
                </div>

                {/* Bagian Tengah: Heatmap Kontribusi GitHub */}
                <ContributionGraph />

                {/* Bagian Bawah: Social Media Icons & Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 mt-6 sm:mt-7 pt-1">
                    {/* Media Sosial Kiri: Instagram, GitHub, LinkedIn */}
                    <div className="flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                        <a
                            href="https://www.instagram.com/ardhxkaa_"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Yanuar Ardhika"
                            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#202020] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 shadow-sm"
                        >
                            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                        <a
                            href="https://github.com/ardhikaxx"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Yanuar Ardhika"
                            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#202020] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 shadow-sm"
                        >
                            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yanuar-ardhika-rahmadhani-ubaidillah/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Yanuar Ardhika"
                            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#202020] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 shadow-sm"
                        >
                            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                    </div>

                    {/* Tombol Aksi Kanan: Hubungi Saya & Pengalaman */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
                        {/* Tombol Hubungi Saya / Hire Me (Pill Putih) */}
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 font-sans text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer w-full sm:w-auto"
                        >
                            <HiEnvelope size={17} />
                            <span>Hubungi Saya / Hire Me</span>
                        </button>

                        {/* Tombol Pengalaman (Pill Hitam Bergaris Putih dengan Icon Briefcase & Modal) */}
                        <button
                            onClick={() => setIsExperienceOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-transparent hover:bg-white/10 text-white font-sans text-xs sm:text-sm font-semibold border border-white transition-all duration-300 hover:scale-[1.02] cursor-pointer w-full sm:w-auto"
                        >
                            <HiBriefcase size={17} />
                            <span>Pengalaman</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Hubungi Saya */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            {/* Modal Pengalaman Saya */}
            <ExperienceModal isOpen={isExperienceOpen} onClose={() => setIsExperienceOpen(false)} />
        </section>
    );
}
