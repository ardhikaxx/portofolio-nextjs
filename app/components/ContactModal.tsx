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
    const [senderName, setSenderName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleSendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
            subject || "Tawaran Proyek / Kerjasama"
        )}&body=${encodeURIComponent(
            `Halo Yanuar,\n\nNama Saya: ${senderName || "-"}\n\nPesan:\n${message}\n\nSalam,`
        )}`;
        window.location.href = mailtoUrl;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-xl bg-gray-950/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white overflow-hidden my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background Grid Accent */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10 transition-all duration-200"
                            aria-label="Tutup modal"
                        >
                            <HiXMark size={20} />
                        </button>

                        {/* Header */}
                        <div className="relative z-10 mb-6 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Available for Freelance & Full-time
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white flex items-center gap-2">
                                Hubungi Saya <HiSparkles className="text-yellow-400 text-xl" />
                            </h2>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-relaxed font-light">
                                Tertarik bekerja sama, membuat proyek baru, atau ingin sekadar berdiskusi? Jangan ragu untuk menghubungi saya via email atau sosial media di bawah.
                            </p>
                        </div>

                        {/* Copy Email Box */}
                        <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 transition-all hover:border-white/20">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                                <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
                                    <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                                        <HiEnvelope size={22} />
                                    </div>
                                    <div className="min-w-0 text-left">
                                        <p className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">Email Direct</p>
                                        <p className="text-sm sm:text-base font-semibold font-mono text-white truncate">{email}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCopyEmail}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-semibold border border-white/20 transition-all duration-300 shrink-0"
                                >
                                    {copied ? (
                                        <>
                                            <HiClipboardDocumentCheck className="text-emerald-400 text-base" />
                                            <span>Tersalin!</span>
                                        </>
                                    ) : (
                                        <>
                                            <HiClipboardDocument className="text-base" />
                                            <span>Salin Email</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Quick Email Form */}
                        <form onSubmit={handleSendEmail} className="relative z-10 space-y-3 mb-6 text-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-mono text-gray-400 mb-1 uppercase tracking-wider">Nama Anda</label>
                                    <input
                                        type="text"
                                        value={senderName}
                                        onChange={(e) => setSenderName(e.target.value)}
                                        placeholder="Nama / Perusahaan"
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-white/40 font-mono transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-mono text-gray-400 mb-1 uppercase tracking-wider">Subjek</label>
                                    <input
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        placeholder="Tawaran Web/Mobile/IoT"
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-white/40 font-mono transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[11px] font-mono text-gray-400 mb-1 uppercase tracking-wider">Pesan Singkat</label>
                                <textarea
                                    rows={3}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tuliskan ringkasan kebutuhan atau ide proyek Anda..."
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-white/40 font-mono transition-colors resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-white text-black hover:bg-gray-200 font-mono text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all duration-300"
                            >
                                <HiPaperAirplane className="rotate-45" size={16} />
                                <span>Kirim via Email Client</span>
                            </button>
                        </form>

                        {/* Social Links */}
                        <div className="relative z-10 pt-4 border-t border-white/10">
                            <p className="text-[11px] font-mono text-gray-400 mb-3 uppercase tracking-wider text-center">Atau Hubungi Lewat Platform Lain</p>
                            <div className="flex items-center justify-center gap-3">
                                <a
                                    href="https://www.linkedin.com/in/yanuar-ardhika-rahmadhani-ubaidillah/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all duration-200"
                                >
                                    <FaLinkedin size={16} className="text-blue-400" />
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="https://github.com/ardhikaxx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all duration-200"
                                >
                                    <FaGithub size={16} />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/ardhxkaa_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all duration-200"
                                >
                                    <FaInstagram size={16} className="text-pink-400" />
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/40 pointer-events-none"></div>
                        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/40 pointer-events-none"></div>
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/40 pointer-events-none"></div>
                        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/40 pointer-events-none"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
