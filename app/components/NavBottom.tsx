'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
    currentPath?: string;
    onOpenContact?: () => void;
};

const NavBottom = ({ currentPath }: NavBottomProps) => {
    const pathname = usePathname();
    const [optimisticPath, setOptimisticPath] = useState(currentPath || pathname || '/');

    useEffect(() => {
        if (pathname) {
            setOptimisticPath(pathname);
        }
    }, [pathname]);

    useEffect(() => {
        if (currentPath) {
            setOptimisticPath(currentPath);
        }
    }, [currentPath]);

    // Jangan tampilkan NavBottom di halaman detail proyek (/project/[id])
    if (pathname && pathname.startsWith('/project/') && pathname !== '/project') {
        return null;
    }

    const navItems: NavItem[] = [
        { name: 'Beranda', icon: HiHome, path: '/' },
        { name: 'Tentang', icon: HiUser, path: '/about' },
        { name: 'Proyek', icon: HiFolder, path: '/project' },
        { name: 'Penghargaan', icon: HiTrophy, path: '/awards' },
        { name: 'Publikasi', icon: HiBookOpen, path: '/publications' },
    ];

    const isItemActive = (path: string) => {
        const target = optimisticPath || currentPath || pathname || '/';
        if (path === '/') {
            return target === '/';
        }
        return target.startsWith(path);
    };

    return (
        <nav
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 max-w-[95vw] lg:bottom-auto lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-none transition-all duration-300"
            aria-label="Primary navigation"
        >
            <div className="bg-[#161616]/90 backdrop-blur-xl rounded-full border border-[#f3eee3]/15 p-1.5 sm:p-2 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_0_1px_rgba(243,238,227,0.06)_inset]">
                <div className="relative flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 overflow-x-auto">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        aria-label="Yanuar Ardhika - Beranda"
                        title="Yanuar Ardhika"
                        prefetch={true}
                        onClick={(e) => {
                            if (pathname === '/') {
                                e.preventDefault();
                                return;
                            }
                            setOptimisticPath('/');
                        }}
                        className="relative flex items-center justify-center pl-1 sm:pl-1.5 pr-0.5 sm:pr-1 select-none shrink-0 cursor-pointer"
                    >
                        <Image
                            src="/img/sticker.webp"
                            alt="Logo Yanuar Ardhika"
                            width={40}
                            height={40}
                            className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 object-contain"
                            priority
                        />
                    </Link>

                    {/* Vertical Divider */}
                    <div className="w-px h-5 sm:h-6 bg-[#f3eee3]/15 mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />

                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isItemActive(item.path);

                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                aria-label={item.name}
                                title={item.name}
                                aria-current={active ? 'page' : undefined}
                                prefetch={true}
                                onClick={(e) => {
                                    if (pathname === item.path) {
                                        e.preventDefault();
                                        return;
                                    }
                                    setOptimisticPath(item.path);
                                }}
                                className={`group relative flex items-center justify-center px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full select-none transition-all duration-200 ${
                                    active
                                        ? 'bg-[#d9541e] text-[#f3eee3] font-semibold shadow-[0_2px_16px_rgba(217,84,30,0.4)]'
                                        : 'text-[#f3eee3]/75 hover:text-[#f3eee3] hover:bg-[#f3eee3]/10'
                                }`}
                            >
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
                                    <span
                                        className={`font-mono text-xs sm:text-sm whitespace-nowrap transition-colors duration-150 ${
                                            active
                                                ? 'font-bold text-[#f3eee3] pr-0.5'
                                                : 'sr-only lg:not-sr-only lg:inline font-medium text-[#f3eee3]/75 group-hover:text-[#f3eee3]'
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavBottom;
