import Link from 'next/link';
import { HiDocument, HiUser } from 'react-icons/hi2';
import HeroEffects from './hero-effects';
import NavBottomClient from './nav-bottom-client';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <HeroEffects />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(80%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.8)_60%)]"></div>
      <div className="relative z-40 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-9xl">
          <h1 className="text-3xl md:text-6xl font-black text-white font-mono">
            {'</Hello, I\'m Yanuar Ardhika>'}
          </h1>
        </div>
        <div className="mb-2">
          <p className="max-w-2xl text-lg md:text-2xl text-shadow-white font-medium font-mono">
            A Junior Web & Mobile Developer developing efficient and impactful digital systems
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
            <span className="relative z-10">About Me</span>
          </Link>
          <div
            className="w-full lg:w-auto group bg-white/10 backdrop-blur-lg text-white px-6 py-3 border-2 border-white rounded-full font-bold text-center font-mono flex items-center justify-center relative overflow-hidden"
            aria-disabled="true"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <HiDocument className="me-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10" size={24} />
            <span className="relative z-10">CV Coming Soon</span>
          </div>
        </div>
      </div>
      <NavBottomClient />
    </section>
  );
}
