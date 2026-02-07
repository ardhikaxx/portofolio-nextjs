import Link from 'next/link';
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

type NavBottomProps = {
    currentPath: string;
};

const NavBottom = ({ currentPath }: NavBottomProps) => {
    const navItems: NavItem[] = [
        { name: 'Home', icon: HiHome, path: '/' },
        { name: 'About', icon: HiUser, path: '/about' },
        { name: 'Project', icon: HiFolder, path: '/project' },
        { name: 'Awards', icon: HiTrophy, path: '/awards' },
    ];

    const isActive = (path: string) => {
        if (path === '/') {
            return currentPath === '/';
        }
        return currentPath.startsWith(path);
    };

    return (
        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/10 backdrop-blur-lg rounded-full border border-gray-100 shadow-2xl">
                <div className="flex items-center justify-center p-2 gap-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                aria-current={active ? 'page' : undefined}
                                prefetch={false}
                                className={`
                    flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-300
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
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavBottom;
