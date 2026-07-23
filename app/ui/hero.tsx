import Link from 'next/link';
import { HiDocument, HiUser, HiStar } from 'react-icons/hi2';
import HeroEffects from './hero-effects';
import NavBottom from '../components/NavBottom';
import { projects } from '../data/projects_data';
import { penghargaanData } from '../data/awards_data';
import { publications } from '../data/publications_data';

const stats = [
  { value: projects.length, label: 'Proyek', href: '/project' },
  { value: penghargaanData.length, label: 'Penghargaan', href: '/awards' },
  { value: publications.length, label: 'Publikasi', href: '/publications' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <HeroEffects />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(80%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.8)_60%)]"></div>
      <div className="relative z-40 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-9xl">
          <h1 className="text-3xl md:text-6xl font-bold text-white font-mono tracking-tight">
            {'</Hello, I\'m Yanuar Ardhika>'}
          </h1>
        </div>
        <div className="mb-2">
          <p className="max-w-2xl text-lg md:text-2xl text-shadow-white font-medium font-mono">
            IT / Developer yang membangun sistem digital efisien dan berdampak
          </p>
        </div>
        <div className="w-full max-w-md lg:max-w-none flex flex-col lg:flex-row gap-3 justify-center items-center">
          <Link
            href={'/about'}
            prefetch={false}
            className="w-full lg:w-auto group bg-white px-6 py-3 text-black rounded-full font-bold text-center hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 ease-in-out font-mono flex items-center justify-center hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <HiUser className="me-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10" size={24} />
            <span className="relative z-10">Tentang Saya</span>
          </Link>
          <Link
            href={'/cv'}
            prefetch={false}
            className="w-full lg:w-auto group bg-white/10 backdrop-blur-lg text-white px-6 py-3 border-2 border-white rounded-full font-bold text-center font-mono flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 ease-in-out relative overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <HiDocument className="me-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10" size={24} />
            <span className="relative z-10">Lihat CV</span>
          </Link>
          <a
            href="https://reviews-dhika.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto group bg-white/10 backdrop-blur-lg text-white px-6 py-3 border-2 border-white rounded-full font-bold text-center font-mono flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 ease-in-out relative overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <HiStar className="me-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10" size={24} />
            <span className="relative z-10">Review Jasa</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-8 flex items-center gap-6 sm:gap-10">
          {stats.map((stat, i) => (
            <Link
              key={stat.label}
              href={stat.href}
              prefetch={false}
              className="group flex flex-col items-center gap-0.5 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-2xl sm:text-3xl font-black text-white font-mono group-hover:text-gray-200 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 font-mono tracking-wider uppercase group-hover:text-gray-300 transition-colors">
                {stat.label}
              </span>
            </Link>
          )).reduce<React.ReactNode[]>((acc, el, i) => {
            if (i > 0) acc.push(
              <span key={`sep-${i}`} className="text-white/20 text-lg font-mono select-none">·</span>
            );
            acc.push(el);
            return acc;
          }, [])}
        </div>
      </div>
      <NavBottom currentPath="/" />
    </section>
  );
}
