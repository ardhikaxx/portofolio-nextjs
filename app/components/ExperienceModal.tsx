"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCalendarAlt, FaCode, FaTasks, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px]"></div>

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 cursor-target"
                            >
                                <FaTimes className="w-4 h-4" />
                            </button>

                            <div className="relative z-10 p-6 sm:p-8 text-white lg:h-auto lg:overflow-visible md:overflow-visible overflow-y-auto max-h-[80vh] md:max-h-none">
                                <div className="flex justify-center items-center">
                                    <div className="flex flex-col mx-0 items-center text-center sm:flex-row gap-4 sm:gap-6 mb-6">
                                        <motion.div
                                            key={`logo-${currentExperience.id}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="shrink-0"
                                        >
                                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-3">
                                                <Image
                                                    src={currentExperience.logo}
                                                    alt={`${currentExperience.company} Logo`}
                                                    fill
                                                    className="object-contain p-1"
                                                    sizes="(max-width: 96px) 96px, 120px"
                                                />
                                            </div>
                                        </motion.div>

                                        <div className="text-center sm:text-start flex-1">
                                            <motion.h2
                                                key={`company-${currentExperience.id}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-2xl sm:text-3xl font-bold mb-2 text-white cursor-target"
                                            >
                                                {currentExperience.company}
                                            </motion.h2>
                                            <motion.p
                                                key={`role-${currentExperience.id}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-lg sm:text-xl text-gray-300 mb-3"
                                            >
                                                {currentExperience.role}
                                            </motion.p>
                                            <motion.div
                                                key={`period-${currentExperience.id}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-400 text-start mb-2"
                                            >
                                                <FaCalendarAlt className="w-4 h-4" />
                                                <span>{currentExperience.period}</span>
                                            </motion.div>
                                            {currentExperience.location && (
                                                <motion.div
                                                    key={`location-${currentExperience.id}`}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center justify-center sm:justify-start text-start gap-2 text-sm text-gray-400"
                                                >
                                                    <FaMapMarkerAlt className="w-4 h-4" />
                                                    <span className="max-w-xs">{currentExperience.location}</span>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <motion.p
                                    key={`desc-${currentExperience.id}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 text-center cursor-target"
                                >
                                    {currentExperience.description}
                                </motion.p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <motion.div
                                        key={`tech-${currentExperience.id}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <FaCode className="w-4 h-4 text-white" />
                                            <h3 className="font-semibold text-lg">Technologies</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {currentExperience.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-xs sm:text-sm text-white hover:bg-white/20 transition-all duration-300 cursor-target"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        key={`resp-${currentExperience.id}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <FaTasks className="w-4 h-4 text-white" />
                                            <h3 className="font-semibold text-lg">Responsibilities</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {currentExperience.responsibilities.map((responsibility, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-gray-300 cursor-target">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></span>
                                                    <span>{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Navigation - Always visible */}
                            {experiences.length > 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center gap-4 pb-6 px-6 sm:px-8"
                                >
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={prevExperience}
                                            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                                        >
                                            <FaChevronLeft className="w-5 h-5" />
                                        </button>
                                        <div className="flex items-center gap-2">
                                            {experiences.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => onNavigate(index)}
                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                                            ? 'bg-white scale-125'
                                                            : 'bg-white/30 hover:bg-white/50'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={nextExperience}
                                            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                                        >
                                            <FaChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="text-center text-gray-400 text-sm">
                                        {currentIndex + 1} / {experiences.length}
                                    </div>
                                </motion.div>
                            )}

                            {/* Border Corners */}
                            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}