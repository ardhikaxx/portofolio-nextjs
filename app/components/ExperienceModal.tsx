"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCalendarAlt, FaCode, FaTasks, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Experience } from "../data/experience_data";
import Image from "next/image";
import { useEffect } from "react";

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

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl lg:max-w-4xl h-[85vh] sm:h-[80vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl lg:rounded-3xl shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px]"></div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 z-30 w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110"
                            >
                                <FaTimes className="w-3 h-3" />
                            </button>

                            {/* Header Section - Fixed */}
                            <div className="relative z-10 p-4 sm:p-6 border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                                    {/* Company Logo */}
                                    <motion.div
                                        key={`logo-${currentExperience.id}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="shrink-0"
                                    >
                                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-2 shadow-lg">
                                            <Image
                                                src={currentExperience.logo}
                                                alt={`${currentExperience.company} Logo`}
                                                fill
                                                className="object-contain p-1"
                                                sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 80px"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Company Info */}
                                    <div className="flex-1 min-w-0 text-center sm:text-left">
                                        <motion.h2
                                            key={`company-${currentExperience.id}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-white break-words leading-tight"
                                        >
                                            {currentExperience.company}
                                        </motion.h2>
                                        <motion.p
                                            key={`role-${currentExperience.id}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-sm sm:text-base lg:text-lg text-gray-300 mb-2 font-medium"
                                        >
                                            {currentExperience.role}
                                        </motion.p>
                                        
                                        {/* Period and Location */}
                                        <div className="flex flex-col gap-1 text-xs sm:text-sm">
                                            <motion.div
                                                key={`period-${currentExperience.id}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center justify-center sm:justify-start gap-2 text-gray-400"
                                            >
                                                <FaCalendarAlt className="w-3 h-3 flex-shrink-0" />
                                                <span className="break-words">{currentExperience.period}</span>
                                            </motion.div>
                                            {currentExperience.location && (
                                                <motion.div
                                                    key={`location-${currentExperience.id}`}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center justify-center sm:justify-start gap-2 text-gray-400"
                                                >
                                                    <FaMapMarkerAlt className="w-3 h-3 flex-shrink-0" />
                                                    <span className="break-words line-clamp-1">{currentExperience.location}</span>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="p-4 sm:p-6 lg:p-8">
                                    {/* Description */}
                                    <motion.div
                                        key={`desc-${currentExperience.id}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 sm:mb-8"
                                    >
                                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                                            {currentExperience.description}
                                        </p>
                                    </motion.div>

                                    {/* Technologies and Responsibilities */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                        {/* Technologies */}
                                        <motion.div
                                            key={`tech-${currentExperience.id}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="space-y-3 sm:space-y-4"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                                    <FaCode className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                                                </div>
                                                <h3 className="font-semibold text-base sm:text-lg text-white">Technologies Used</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {currentExperience.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-xs sm:text-sm text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 break-words shadow-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>

                                        {/* Responsibilities */}
                                        <motion.div
                                            key={`resp-${currentExperience.id}`}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="space-y-3 sm:space-y-4"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                                    <FaTasks className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                                                </div>
                                                <h3 className="font-semibold text-base sm:text-lg text-white">Key Responsibilities</h3>
                                            </div>
                                            <ul className="space-y-3">
                                                {currentExperience.responsibilities.map((responsibility, index) => (
                                                    <li 
                                                        key={index} 
                                                        className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                                                    >
                                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                                                        <span className="flex-1 text-sm sm:text-base text-gray-300 leading-relaxed">
                                                            {responsibility}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation - Fixed at Bottom */}
                            {experiences.length > 1 && (
                                <div className="relative z-10 p-4 border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col items-center gap-3"
                                    >
                                        {/* Navigation Buttons */}
                                        <div className="flex items-center gap-3 sm:gap-4 w-full max-w-xs">
                                            <button
                                                onClick={prevExperience}
                                                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer flex-1"
                                                aria-label="Previous experience"
                                            >
                                                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>
                                            
                                            {/* Page Counter */}
                                            <div className="flex flex-col items-center gap-1 flex-1">
                                                <div className="text-center text-white text-sm font-medium">
                                                    {currentIndex + 1} / {experiences.length}
                                                </div>
                                                {/* Dots Indicator */}
                                                <div className="flex items-center gap-1">
                                                    {experiences.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => onNavigate(index)}
                                                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                                                index === currentIndex
                                                                    ? 'bg-white scale-125'
                                                                    : 'bg-white/30 hover:bg-white/50'
                                                            }`}
                                                            aria-label={`Go to experience ${index + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <button
                                                onClick={nextExperience}
                                                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer flex-1"
                                                aria-label="Next experience"
                                            >
                                                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>
                            )}

                            {/* Border Corners */}
                            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/50 sm:top-3 sm:left-3 sm:w-4 sm:h-4"></div>
                            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/50 sm:top-3 sm:right-3 sm:w-4 sm:h-4"></div>
                            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/50 sm:bottom-3 sm:left-3 sm:w-4 sm:h-4"></div>
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/50 sm:bottom-3 sm:right-3 sm:w-4 sm:h-4"></div>

                            {/* Scroll Indicator */}
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/50 text-xs animate-bounce">
                                <div className="flex flex-col items-center">
                                    <span>Scroll</span>
                                    <FaChevronLeft className="w-3 h-3 rotate-90" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}