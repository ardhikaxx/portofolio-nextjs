import Link from 'next/link';
import Image from 'next/image';
import { HiDocument, HiUser, HiStar } from 'react-icons/hi2';
import NavBottom from '../components/NavBottom';
import PageMascot from '../components/PageMascot';
import LetterGlitch from '../components/LetterGlitch';

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
      {/* Letter Glitch Background (Subtle Muted Monochrome) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LetterGlitch
          glitchColors={['#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b', '#3f3f46']}
          glitchSpeed={65}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Dark Overlay - Higher opacity and radial focus so background doesn't clash with content */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/80"></div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_65%)]"></div>

      {/* Main Content (Title, Subtitle, Buttons) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl my-auto lg:my-0">
        <div className="mb-2 sm:mb-3 lg:mb-4">
          <PageMascot />
        </div>

        <h1
          style={{ fontFamily: "'Jaro', sans-serif" }}
          className="font-jaro text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight text-white leading-none select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
        >
          {'</Yanuar Ardhika>'}
        </h1>

        <p
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="font-poppins text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed text-center mt-3 sm:mt-4 mb-6 sm:mb-8 max-w-xl"
        >
          Software Engineer yang membangun sistem
          <br />
          digital efisien dan berdampak
        </p>

        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/about"
            prefetch={false}
            className="group w-full lg:w-auto bg-white text-black px-7 py-3 rounded-full font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 border-2 border-white hover:bg-neutral-200 transition-all duration-300 shadow-lg shadow-black/50"
          >
            <HiUser className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Tentang Saya</span>
          </Link>
          <Link
            href="/cv"
            prefetch={false}
            className="group w-full lg:w-auto bg-black/40 backdrop-blur-md text-white border-2 border-white/80 px-7 py-3 rounded-full font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-black/50"
          >
            <HiDocument className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Lihat CV</span>
          </Link>
          <a
            href="https://page-reviews.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full lg:w-auto bg-black/40 backdrop-blur-md text-white border-2 border-white/80 px-7 py-3 rounded-full font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-black/50"
          >
            <HiStar className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Testimoni & Ulasan</span>
          </a>
        </div>
      </div>

      {/* Mascot Laptop - Fully responsive, scales down on smaller screens/laptops to avoid overlapping buttons */}
      <div className="relative z-10 mt-auto lg:mt-0 w-[170px] sm:w-[210px] md:w-[240px] lg:w-[260px] xl:w-[320px] 2xl:w-[380px] max-h-[20vh] sm:max-h-[24vh] lg:max-h-[32vh] xl:max-h-[38vh] flex justify-center items-end lg:absolute lg:bottom-2 lg:right-2 xl:right-4 2xl:right-8 pointer-events-none select-none">
        <Image
          src="/img/sticker.webp"
          alt="Laptop Mascot"
          width={600}
          height={522}
          priority
          className="w-full h-auto max-h-[inherit] object-contain drop-shadow-2xl"
        />
      </div>

      <NavBottom currentPath="/" />
    </section>
  );
}
