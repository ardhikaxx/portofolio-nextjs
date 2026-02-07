"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaWhatsapp, FaBriefcase } from "react-icons/fa";
import { useState } from "react";
import ExperienceModal from "../components/ExperienceModal";
import { experiences } from "../data/experience_data";

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 backdrop-blur-lg border border-white text-white transition-all duration-300 hover:bg-white hover:text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.a>
    );
};

export default function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

    const openExperienceModal = (index: number = 0) => {
        setSelectedExperienceIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigateToExperience = (index: number) => {
        setSelectedExperienceIndex(index);
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-black w-full relative overflow-hidden px-4 py-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="relative w-full max-w-4xl bg-white/10 backdrop-blur-lg border rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-700 group mb-16"
            >
                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>

                <div className="relative z-10 flex flex-col items-center text-center text-white">
                    <motion.div
                        className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-3 group/avatar"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/img/photo.png"
                                alt="Holographic Avatar"
                                fill
                                className="object-cover rounded-full p-1 sm:p-2 mix-blend-lighten"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white font-mono px-2"
                    >
                        Yanuar Ardhika Rahmadhani Ubaidillah
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-300 text-xs sm:text-sm leading-5 sm:leading-6 mb-4 sm:mb-6 max-w-2xl font-light tracking-wide px-2 sm:px-7"
                    >
                        I am an Informatics Engineering student at Politeknik Negeri Jember, passionate about creating digital solutions in website development, mobile applications, and the Internet of Things (IoT). Through various projects, I have honed my skills—not only in building functional applications but also in driving innovation by leveraging the latest advancements in information technology. My experience spans end-to-end software development, encompassing websites, mobile apps, and IoT systems. Dedicated to delivering innovative technological solutions, I strive to create efficient and impactful information systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-4 sm:mb-6"
                    >
                        <motion.button
                            onClick={() => openExperienceModal(0)}
                            className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 group/btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaBriefcase className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                            <span className="text-sm sm:text-base">View Experience</span>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="w-full max-w-xs sm:max-w-sm mb-4 sm:mb-6"
                    >
                        <div className="flex justify-center items-center gap-4 sm:gap-6">
                            <SocialIcon href="https://www.instagram.com/ardhxkaa_">
                                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                            </SocialIcon>
                            <SocialIcon href="https://github.com/ardhikaxx">
                                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                            </SocialIcon>
                            <SocialIcon href="https://wa.me/6285933648537">
                                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                            </SocialIcon>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="w-full border-t border-gray-800/50 pt-3 sm:pt-4 mt-2 sm:mt-auto"
                    >
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-2 sm:gap-0 text-xs">
                            <div className="text-gray-500 text-center sm:text-left">
                                <p>Status: <span className="text-white font-semibold">Junior Developer</span></p>
                            </div>
                            <div className="text-gray-500 flex items-center gap-1">
                                <p>Role: <span className="text-white font-semibold">Web & Mobile Developer</span></p>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 text-[10px] sm:text-xs mt-2 tracking-wider">
                            © 2025 YANUAR ARDHIKA
                        </p>
                    </motion.div>
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-4 h-4 border-t-3 border-l-3 border-white"></div>
                <div className="absolute top-3 sm:top-4 right-2 sm:right-4 w-4 h-4 border-t-3 border-r-3 border-white"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 h-4 border-b-3 border-l-3 border-white"></div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-4 h-4 border-b-3 border-r-3 border-white"></div>
            </motion.div>

            <ExperienceModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                experiences={experiences}
                currentIndex={selectedExperienceIndex}
                onNavigate={navigateToExperience}
            />
        </section>
    );
}
