"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="relative w-[750px] max-h-[460px] bg-white/10 backdrop-blur-lg border rounded-3xl p-8 shadow-2xl transition-all duration-700 group"
            >
                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>

                <div className="relative z-10 flex flex-col items-center text-center text-white h-200">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative w-[180px] h-[180px] mb-3 group/avatar"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/img/photo.png"
                                alt="Holographic Avatar"
                                fill
                                className="object-cover rounded-full p-2 mix-blend-lighten"
                            />
                        </div>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold mb-4 text-white"
                    >
                        Yanuar Ardhika Rahmadhani Ubaidillah
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-300 text-sm leading-6 mb-6 max-w-lg font-light tracking-wide"
                    >
                        Passionate about combining technology and creativity to solve real-world challenges.
                        Currently sharpening my skills in Information Technology at Politeknik Negeri Jember.
                        I enjoy designing intuitive experiences and building efficient systems.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="w-full grid grid-cols-2 gap-4 mb-6"
                    >
                        {/* social media dengan bg rounded full instagram, github, email */}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="w-full border-t border-gray-800/50 pt-4 mt-auto"
                    >
                        <div className="flex justify-between items-center text-xs">
                            <div className="text-gray-500">
                                <p>Status: <span className="text-green-400 font-semibold">Available</span></p>
                            </div>
                            <div className="text-gray-500 flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Online</span>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 text-[10px] mt-2 tracking-wider">
                        © 2025 YANUAR ARDHIKA
                        </p>
                    </motion.div>
                </div>
                <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 rounded-xs border-white"></div>
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 rounded-xs border-white"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 rounded-xs border-white"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 rounded-xs border-white"></div>
            </motion.div>
        </section>
    );
}