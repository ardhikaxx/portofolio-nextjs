"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Experience } from "../data/experience_data";
import Image from "next/image";

interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
    experiences: Experience[];
    currentIndex: number;
    onNavigate: (index: number) => void;
}

export default function ExperienceModal({
    isOpen,
    onClose,
    experiences,
    currentIndex,
    onNavigate
}: ExperienceModalProps) {
    const currentExperience = experiences[currentIndex];

    const nextExperience = () => {
        const nextIndex = (currentIndex + 1) % experiences.length;
        onNavigate(nextIndex);
    };

    const prevExperience = () => {
        const prevIndex = (currentIndex - 1 + experiences.length) % experiences.length;
        onNavigate(prevIndex);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 16 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden text-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 z-30 w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                            >
                                <FaTimes className="w-4 h-4" />
                            </button>

                            <div className="relative z-10 p-6 sm:p-8 overflow-y-auto max-h-[80vh] md:max-h-none text-left">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row items-start text-left gap-5 mb-6 pb-6 border-b border-white/15 w-full">
                                    <motion.div
                                        key={`logo-${currentExperience.id}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="shrink-0 text-left"
                                    >
                                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl p-3 flex items-center justify-center shadow-lg">
                                            <Image
                                                src={currentExperience.logo}
                                                alt={currentExperience.company}
                                                fill
                                                className="object-contain p-2"
                                                sizes="96px"
                                            />
                                        </div>
                                    </motion.div>

                                    <div className="flex-1 min-w-0 text-left">
                                        <motion.h2
                                            key={`role-${currentExperience.id}`}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-2xl sm:text-3xl font-bold mb-1 text-white tracking-tight text-left"
                                        >
                                            {currentExperience.role}
                                        </motion.h2>
                                        <motion.p
                                            key={`company-${currentExperience.id}`}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-base sm:text-lg font-medium text-white/90 mb-2 text-left"
                                        >
                                            {currentExperience.company}
                                        </motion.p>
                                        <motion.p
                                            key={`period-${currentExperience.id}`}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-xs sm:text-sm font-mono text-white/60 text-left"
                                        >
                                            {currentExperience.period} · {currentExperience.location}
                                        </motion.p>
                                    </div>
                                </div>

                                {/* Description */}
                                <motion.div
                                    key={`desc-${currentExperience.id}`}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 bg-white/[0.05] border border-white/10 p-4 sm:p-5 rounded-2xl text-left"
                                >
                                    <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light text-left">
                                        {currentExperience.description}
                                    </p>
                                </motion.div>

                                {/* Responsibilities & Technologies Grid */}
                                <div className="grid md:grid-cols-2 gap-6 mb-4 text-left">
                                    <motion.div
                                        key={`resp-${currentExperience.id}`}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-left"
                                    >
                                        <h3 className="font-semibold text-sm uppercase tracking-wider text-white/90 mb-3 text-left">
                                            Tanggung Jawab Utama
                                        </h3>
                                        <ul className="space-y-2.5 text-left">
                                            {currentExperience.responsibilities.map((responsibility, index) => (
                                                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-white/75 text-left">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                                                    <span className="leading-relaxed text-left">{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.div
                                        key={`tech-${currentExperience.id}`}
                                        initial={{ opacity: 0, x: 16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-left"
                                    >
                                        <h3 className="font-semibold text-sm uppercase tracking-wider text-white/90 mb-3 text-left">
                                            Teknologi
                                        </h3>
                                        <div className="flex flex-wrap gap-2 justify-start text-left">
                                            {currentExperience.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg font-mono text-xs text-white/85 text-left"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Navigation */}
                            {experiences.length > 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center gap-3 pb-6 px-6 border-t border-white/10 pt-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={prevExperience}
                                            className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                                        >
                                            <FaChevronLeft className="w-4 h-4" />
                                        </button>
                                        <div className="flex items-center gap-2">
                                            {experiences.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => onNavigate(index)}
                                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                                            ? 'bg-white scale-125'
                                                            : 'bg-white/30 hover:bg-white/50'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={nextExperience}
                                            className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                                        >
                                            <FaChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="text-center text-white/50 text-xs font-mono">
                                        {currentIndex + 1} / {experiences.length}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
