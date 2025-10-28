'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
    HiHome,
    HiUser,
    HiFolder,
    HiTrophy
} from 'react-icons/hi2';

interface NavItem {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    path: string;
}

const NavBottom = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const navItems: NavItem[] = [
        { name: 'Home', icon: HiHome, path: '/' },
        { name: 'About', icon: HiUser, path: '/about' },
        { name: 'Project', icon: HiFolder, path: '/project' },
        { name: 'Awards', icon: HiTrophy, path: '/awards' },
    ];

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    return (
        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/10 backdrop-blur-lg rounded-full border border-gray-100 shadow-2xl">
                <div className="flex items-center justify-center p-2 gap-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <div key={item.name} className="relative">
                                <button
                                    onClick={() => handleNavigation(item.path)}
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className={`
                    flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-300 cursor-target
                    ${active
                                            ? 'bg-white/20 text-white'
                                            : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }
                  `}
                                >
                                    <Icon className={`w-5 h-5 ${active ? 'scale-110' : ''} transition-transform duration-300 me-0 lg:me-1`} />

                                    <span className="hidden md:inline-block text-sm font-bold whitespace-nowrap font-mono">
                                        {item.name}
                                    </span>
                                </button>

                                <div className={`
                                                absolute -top-12 left-1/2 transform -translate-x-1/2
                                                bg-black/80 text-white text-xs py-2 px-3 rounded-lg
                                                transition-all duration-300 pointer-events-none
                                                ${hoveredItem === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                                md:hidden
                                                `}>
                                    {item.name}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavBottom;