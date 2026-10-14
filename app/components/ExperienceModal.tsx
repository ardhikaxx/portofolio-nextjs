"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiXMark, HiBriefcase, HiCalendar, HiMapPin } from "react-icons/hi2";
import { experiences, Experience } from "../data/experience_data";

interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
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

    // Handle ESC key to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

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
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Simple & Clean Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-xl max-h-[85vh] sm:max-h-[80vh] bg-[#141414] border border-white/15 rounded-3xl shadow-2xl z-10 text-white overflow-hidden my-auto flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background Subtle Accent */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white border border-white/10 transition-all duration-200 cursor-pointer"
                            aria-label="Tutup modal pengalaman"
                        >
                            <HiXMark size={18} />
                        </button>

                        {/* Header */}
                        <div className="relative z-10 p-5 sm:p-6 pb-4 border-b border-white/10 text-left">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-neutral-300 text-xs font-mono mb-2">
                                <HiBriefcase className="text-white text-xs" />
                                <span>Riwayat Karier & Pekerjaan</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white">
                                Pengalaman Saya
                            </h2>
                            <p className="text-neutral-400 text-xs sm:text-sm mt-1 leading-relaxed font-light">
                                Rekam jejak pengalaman industri, magang, dan peran profesional yang telah saya lalui.
                            </p>
                        </div>

                        {/* Scrollable Content */}
                        <div className="relative z-10 p-5 sm:p-6 overflow-y-auto space-y-4 text-left">
                            {experiences.length === 0 ? (
                                <p className="text-neutral-400 text-sm text-center py-8">
                                    Belum ada data pengalaman kerja.
                                </p>
                            ) : (
                                experiences.map((exp: Experience) => (
                                    <div
                                        key={exp.id}
                                        className="bg-[#1c1c1c] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col gap-3.5 transition-all duration-200"
                                    >
                                        {/* Top Info */}
                                        <div className="flex items-start gap-3.5">
                                            {/* Company Logo */}
                                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-white/10 border border-white/15 p-2 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    fill
                                                    sizes="56px"
                                                    className="object-contain p-1"
                                                />
                                            </div>

                                            {/* Role & Company */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center justify-between gap-1">
                                                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                                                        {exp.role}
                                                    </h3>
                                                    <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white font-mono text-[10px] sm:text-[11px] font-medium shrink-0">
                                                        {exp.type || "Magang / Internship"}
                                                    </span>
                                                </div>

                                                <p className="text-neutral-300 font-medium text-xs sm:text-[13px] mt-1">
                                                    {exp.company}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-[11px] text-neutral-400 font-mono">
                                                    <span className="inline-flex items-center gap-1">
                                                        <HiCalendar className="text-neutral-400" />
                                                        {exp.period}
                                                    </span>
                                                    {(exp.locationShort || exp.location) && (
                                                        <span className="inline-flex items-center gap-1">
                                                            <HiMapPin className="text-neutral-400" />
                                                            {exp.locationShort || exp.location}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-neutral-300 text-xs sm:text-[13px] leading-relaxed font-light">
                                            {exp.description}
                                        </p>

                                        {/* Responsibilities */}
                                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                                            <div className="pt-2 border-t border-white/10">
                                                <p className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                                                    Tanggung Jawab Utama
                                                </p>
                                                <ul className="space-y-1">
                                                    {exp.responsibilities.map((item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-xs text-neutral-300 leading-snug"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-white/80 mt-1.5 shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        {exp.technologies && exp.technologies.length > 0 && (
                                            <div className="pt-2 border-t border-white/10">
                                                <p className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                                                    Teknologi
                                                </p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {exp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-white/5 border border-white/15 text-neutral-200"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
