"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    HiXMark,
    HiEnvelope,
    HiClipboardDocumentCheck,
    HiClipboardDocument,
    HiPaperAirplane,
    HiSparkles,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const email = "yanuarardhika@gmail.com";
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

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

                    {/* Compact & Simple Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md max-h-[75vh] sm:max-h-[80vh] bg-gray-950/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl z-10 text-white overflow-hidden my-auto flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background Grid Accent */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10 transition-all duration-200 cursor-pointer"
                            aria-label="Tutup modal"
                        >
                            <HiXMark size={18} />
                        </button>

                        {/* Scrollable Simple Content */}
                        <div className="relative z-10 p-5 sm:p-6 overflow-y-auto max-h-[75vh] sm:max-h-[80vh] text-left space-y-5">
                            {/* Header */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    Available for Hire
                                </div>

                                <h2 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white flex items-center gap-2">
                                    Hubungi Saya <HiSparkles className="text-yellow-400 text-lg" />
                                </h2>
                                <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed font-light">
                                    Silakan hubungi saya secara langsung melalui email atau platform media sosial di bawah.
                                </p>
                            </div>

                            {/* Direct Email Card */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                                        <HiEnvelope size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">Email Utama</p>
                                        <p className="text-xs sm:text-sm font-semibold font-mono text-white truncate">{email}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 pt-1">
                                    <button
                                        onClick={handleCopyEmail}
                                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-semibold border border-white/20 transition-all duration-200 cursor-pointer"
                                    >
                                        {copied ? (
                                            <>
                                                <HiClipboardDocumentCheck className="text-emerald-400 text-sm" />
                                                <span>Tersalin!</span>
                                            </>
                                        ) : (
                                            <>
                                                <HiClipboardDocument className="text-sm" />
                                                <span>Salin Email</span>
                                            </>
                                        )}
                                    </button>

                                    <a
                                        href={`mailto:${email}`}
                                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white text-black hover:bg-gray-200 font-mono text-xs font-bold transition-all duration-200"
                                    >
                                        <HiPaperAirplane className="rotate-45" size={14} />
                                        <span>Kirim Email</span>
                                    </a>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div>
                                <p className="text-[10px] font-mono text-gray-400 mb-2.5 uppercase tracking-wider text-center">Media Sosial & Profesional</p>
                                <div className="grid grid-cols-3 gap-2">
                                    <a
                                        href="https://www.linkedin.com/in/yanuar-ardhika-rahmadhani-ubaidillah/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all duration-200"
                                    >
                                        <FaLinkedin size={15} className="text-blue-400 shrink-0" />
                                        <span>LinkedIn</span>
                                    </a>
                                    <a
                                        href="https://github.com/ardhikaxx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all duration-200"
                                    >
                                        <FaGithub size={15} className="shrink-0" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/ardhxkaa_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all duration-200"
                                    >
                                        <FaInstagram size={15} className="text-pink-400 shrink-0" />
                                        <span>Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-white/40 pointer-events-none"></div>
                        <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white/40 pointer-events-none"></div>
                        <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-white/40 pointer-events-none"></div>
                        <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-white/40 pointer-events-none"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
