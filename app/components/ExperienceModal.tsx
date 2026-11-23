"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    HiXMark,
    HiCalendar,
    HiMapPin,
    HiChevronLeft,
    HiChevronRight,
} from "react-icons/hi2";
import { experiences, Experience } from "../data/experience_data";

interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Reset to first slide when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            setDirection(0);
        }
    }, [isOpen]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Handle ESC key and arrow keys to navigate slides
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowLeft") {
                setDirection(-1);
                setCurrentIndex((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
            } else if (e.key === "ArrowRight") {
                setDirection(1);
                setCurrentIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
    };

    const currentExp: Experience | undefined = experiences[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#111111]/85 backdrop-blur-md"
                    />

                    {/* Simple & Clean Modal with Slide Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-xl bg-[#141414] border border-[#f3eee3]/15 rounded-3xl shadow-2xl z-10 text-[#f3eee3] overflow-hidden my-auto flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background Subtle Accent */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(243,238,227,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(243,238,227,0.02)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#f3eee3]/10 hover:bg-[#f3eee3]/20 text-[#f3eee3]/80 hover:text-[#f3eee3] border border-[#f3eee3]/10 transition-all duration-200 cursor-pointer"
                            aria-label="Tutup modal pengalaman"
                        >
                            <HiXMark size={18} />
                        </button>

                        {/* Header */}
                        <div className="relative z-10 p-5 sm:p-6 pb-4 border-b border-[#f3eee3]/10 text-left">
                            <h2 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#f3eee3]">
                                Pengalaman Saya
                            </h2>
                            <p className="text-[#f3eee3]/70 text-xs sm:text-sm mt-1 leading-relaxed font-light">
                                Rekam jejak pengalaman industri, magang, dan peran profesional yang telah saya lalui.
                            </p>
                        </div>

                        {/* Slide Content Area */}
                        <div className="relative z-10 p-5 sm:p-6 text-left overflow-hidden">
                            {!currentExp ? (
                                <p className="text-[#f3eee3]/50 text-sm text-center py-8">
                                    Belum ada data pengalaman kerja.
                                </p>
                            ) : (
                                <div className="relative">
                                    <AnimatePresence mode="wait" custom={direction}>
                                        <motion.div
                                            key={currentExp.id}
                                            custom={direction}
                                            initial={{ opacity: 0, x: direction >= 0 ? 30 : -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: direction >= 0 ? -30 : 30 }}
                                            transition={{ duration: 0.22, ease: "easeInOut" }}
                                            className="bg-[#1c1c1c] border border-[#f3eee3]/10 rounded-2xl p-4 sm:p-5 flex flex-col gap-3.5 shadow-lg"
                                        >
                                            {/* Top Info */}
                                            <div className="flex items-start gap-3.5">
                                                {/* Company Logo */}
                                                <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-[#f3eee3]/5 border border-[#f3eee3]/15 p-2 flex items-center justify-center overflow-hidden">
                                                    <Image
                                                        src={currentExp.logo}
                                                        alt={currentExp.company}
                                                        fill
                                                        sizes="56px"
                                                        className="object-contain p-1"
                                                    />
                                                </div>

                                                {/* Role & Company */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-[#f3eee3] font-bold text-sm sm:text-base leading-tight">
                                                        {currentExp.role}
                                                    </h3>

                                                    {/* Badge Type under Role */}
                                                    <div className="mt-1.5 flex items-center">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#d9541e] text-white font-mono text-[10px] sm:text-[11px] font-bold shrink-0 shadow-sm">
                                                            {currentExp.type || "Magang / Internship"}
                                                        </span>
                                                    </div>

                                                    <p className="text-[#d9541e] font-medium text-xs sm:text-[13px] mt-1.5">
                                                        {currentExp.company}
                                                    </p>

                                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-[11px] text-[#f3eee3]/60 font-mono">
                                                        <span className="inline-flex items-center gap-1">
                                                            <HiCalendar className="text-[#d9541e]" />
                                                            {currentExp.period}
                                                        </span>
                                                        {(currentExp.locationShort || currentExp.location) && (
                                                            <span className="inline-flex items-center gap-1">
                                                                <HiMapPin className="text-[#d9541e]" />
                                                                {currentExp.locationShort || currentExp.location}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-[#f3eee3]/75 text-xs sm:text-[13px] leading-relaxed font-light">
                                                {currentExp.description}
                                            </p>

                                            {/* Responsibilities */}
                                            {currentExp.responsibilities && currentExp.responsibilities.length > 0 && (
                                                <div className="pt-2 border-t border-[#f3eee3]/10">
                                                    <p className="text-[10px] sm:text-[11px] font-mono text-[#f3eee3]/60 uppercase tracking-wider mb-1.5">
                                                        Tanggung Jawab Utama
                                                    </p>
                                                    <ul className="space-y-1">
                                                        {currentExp.responsibilities.map((item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start gap-2 text-xs text-[#f3eee3]/75 leading-snug"
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#d9541e] mt-1.5 shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Technologies */}
                                            {currentExp.technologies && currentExp.technologies.length > 0 && (
                                                <div className="pt-2 border-t border-[#f3eee3]/10">
                                                    <p className="text-[10px] sm:text-[11px] font-mono text-[#f3eee3]/60 uppercase tracking-wider mb-1.5">
                                                        Teknologi
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {currentExp.technologies.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-[#f3eee3]/5 border border-[#f3eee3]/15 text-[#f3eee3]/90"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Navigation Footer with Slide Dots & Arrow Buttons */}
                        {experiences.length > 1 && (
                            <div className="relative z-10 px-5 sm:px-6 py-3.5 border-t border-[#f3eee3]/10 flex items-center justify-between bg-[#161616]/70">
                                <button
                                    onClick={handlePrev}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f3eee3]/5 hover:bg-[#d9541e] text-[#f3eee3]/70 hover:text-[#f3eee3] border border-[#f3eee3]/10 hover:border-[#d9541e] text-xs font-mono transition-all duration-200 cursor-pointer"
                                    aria-label="Pengalaman sebelumnya"
                                >
                                    <HiChevronLeft size={16} />
                                    <span className="hidden sm:inline">Sebelumnya</span>
                                </button>

                                {/* Slide Dots Indicator */}
                                <div className="flex items-center gap-2">
                                    {experiences.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                setDirection(idx > currentIndex ? 1 : -1);
                                                setCurrentIndex(idx);
                                            }}
                                            aria-label={`Buka slide pengalaman ${idx + 1}`}
                                            className={`transition-all duration-300 rounded-full cursor-pointer ${
                                                currentIndex === idx
                                                    ? "w-6 h-2 bg-[#d9541e] shadow-[0_0_10px_rgba(217,84,30,0.5)]"
                                                    : "w-2 h-2 bg-[#f3eee3]/25 hover:bg-[#f3eee3]/50"
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f3eee3]/5 hover:bg-[#d9541e] text-[#f3eee3]/70 hover:text-[#f3eee3] border border-[#f3eee3]/10 hover:border-[#d9541e] text-xs font-mono transition-all duration-200 cursor-pointer"
                                    aria-label="Pengalaman selanjutnya"
                                >
                                    <span className="hidden sm:inline">Selanjutnya</span>
                                    <HiChevronRight size={16} />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
