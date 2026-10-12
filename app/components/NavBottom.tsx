'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
        <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 max-w-[95vw]" aria-label="Primary navigation">
            <div className="bg-neutral-950/95 backdrop-blur-xl rounded-full border border-white/15 p-1.5 sm:p-2 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
                <div className="relative flex items-center justify-center gap-1 sm:gap-1.5 overflow-x-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isItemActive(item.path);

                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                aria-current={active ? 'page' : undefined}
                                prefetch={true}
                                onClick={(e) => {
                                    if (pathname === item.path) {
                                        e.preventDefault();
                                        return;
                                    }
                                    setOptimisticPath(item.path);
                                }}
                                className={`relative flex items-center justify-center px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full select-none transition-colors duration-150 ${
                                    active
                                        ? 'bg-white text-black font-semibold shadow-[0_2px_12px_rgba(255,255,255,0.25)]'
                                        : 'text-white/80 hover:text-white'
                                }`}
                            >
                                <div className="flex items-center gap-1.5">
                                    <Icon className="w-5 h-5 shrink-0" />
                                    {active && (
                                        <span className="text-xs sm:text-sm font-bold whitespace-nowrap font-mono text-black pr-0.5">
                                            {item.name}
                                        </span>
                                    )}
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
