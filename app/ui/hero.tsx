import Link from 'next/link';
import Image from 'next/image';
import { HiDocument, HiUser, HiStar } from 'react-icons/hi2';
import HeroEffects from './hero-effects';
import NavBottom from '../components/NavBottom';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between lg:justify-center items-center overflow-hidden bg-black pt-16 sm:pt-24 lg:pt-0">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap');
            .font-jaro {
              font-family: 'Jaro', sans-serif !important;
            }
          `,
        }}
      />
      <HeroEffects />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(80%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.8)_60%)]"></div>

      {/* Main Content (Title, Subtitle, Buttons) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl my-auto lg:my-0">
        <h1
          style={{ fontFamily: "'Jaro', sans-serif" }}
          className="font-jaro text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight text-white leading-none select-none"
        >
          {'</Yanuar Ardhika>'}
        </h1>

        <p
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="font-poppins text-white text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed text-center mt-3 sm:mt-4 mb-6 sm:mb-8 max-w-xl"
        >
          Software Engineer yang membangun sistem
          <br />
          digital efisien dan berdampak
        </p>

        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/about"
            prefetch={false}
            className="group w-full lg:w-auto bg-white text-black px-7 py-3 rounded-full font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 border-2 border-white hover:bg-neutral-200 transition-all duration-300"
          >
            <HiUser className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Tentang Saya</span>
          </Link>
          <Link
            href="/cv"
            prefetch={false}
            className="group w-full lg:w-auto bg-transparent text-white border-2 border-white px-7 py-3 rounded-full font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:bg-white hover:text-black transition-all duration-300"
          >
            <HiDocument className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Lihat CV</span>
          </Link>
          <a
            href="https://page-reviews.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full lg:w-auto bg-transparent text-white border-2 border-white px-7 py-3 rounded-full font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:bg-white hover:text-black transition-all duration-300"
          >
            <HiStar className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Testimoni & Ulasan</span>
          </a>
        </div>
      </div>

      {/* Mascot Laptop */}
      <div className="relative z-10 mt-auto lg:mt-0 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none lg:w-[480px] xl:w-[560px] 2xl:w-[640px] flex justify-center items-end lg:absolute lg:bottom-0 lg:right-0 pointer-events-none select-none">
        <Image
          src="/img/sticker.webp"
          alt="Laptop Mascot"
          width={600}
          height={522}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      <NavBottom currentPath="/" />
    </section>
  );
}
