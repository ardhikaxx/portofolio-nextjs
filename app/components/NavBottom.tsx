'use client'

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiHome,
    HiUser,
    HiFolder,
    HiTrophy,
    HiBookOpen
} from 'react-icons/hi2';

interface NavItem {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    path: string;
}

type NavBottomProps = {
    currentPath: string;
};

const NavBottom = ({ currentPath }: NavBottomProps) => {
    const navItems: NavItem[] = [
        { name: 'Beranda', icon: HiHome, path: '/' },
        { name: 'Tentang', icon: HiUser, path: '/about' },
        { name: 'Proyek', icon: HiFolder, path: '/project' },
        { name: 'Penghargaan', icon: HiTrophy, path: '/awards' },
        { name: 'Publikasi', icon: HiBookOpen, path: '/publications' },
    ];

    const isActive = (path: string) => {
        if (path === '/') {
            return currentPath === '/';
        }
        return currentPath.startsWith(path);
    };

    return (
        <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2" aria-label="Primary navigation">
            <div className="bg-white/10 backdrop-blur-lg rounded-full border border-gray-100 shadow-2xl">
                <div className="relative flex items-center justify-center p-2 gap-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                aria-current={active ? 'page' : undefined}
                                prefetch={false}
                                className="relative flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-colors duration-300"
                            >
                                {active && (
                                    <motion.div
                                        layoutId="active-bg"
                                        className="absolute inset-0 bg-white/20 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <motion.div
                                    className="relative z-10 flex items-center gap-2"
                                    animate={{ scale: active ? 1.1 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Icon className="w-5 h-5" />
                                    <AnimatePresence mode="wait">
                                        {active && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -8, width: 0 }}
                                                animate={{ opacity: 1, x: 0, width: 'auto' }}
                                                exit={{ opacity: 0, x: -8, width: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="text-sm font-bold whitespace-nowrap font-mono overflow-hidden"
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavBottom;
