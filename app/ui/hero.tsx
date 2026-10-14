import Link from 'next/link';
import Image from 'next/image';
import { HiDocument, HiUser, HiStar } from 'react-icons/hi2';
import PageMascot from '../components/PageMascot';
import LetterGlitch from '../components/LetterGlitch';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between lg:justify-center items-center overflow-hidden bg-black pt-16 sm:pt-24 lg:pt-0">
      {/* Letter Glitch Background (Subtle Muted Monochrome) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LetterGlitch
          glitchColors={['#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a']}
          glitchSpeed={55}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Black Overlay 70% */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/70"></div>

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

        {/* Semantic Crawler Context for Search Engines */}
        <div className="sr-only">
          <h2>Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. - Full Stack Web & Mobile Developer</h2>
          <p>
            Portofolio resmi Yanuar Ardhika, Software Engineer dan Full Stack Developer lulusan Teknik Informatika Politeknik Negeri Jember (Polije). Berpengalaman dalam merancang dan mengembangkan lebih dari 27 sistem informasi web enterprise (Laravel, Next.js, React, Tailwind CSS, PHP, MySQL), aplikasi mobile Android (Flutter, Dart), serta integrasi Internet of Things (IoT). Melayani pembuatan website, aplikasi mobile, dan sistem informasi di Jember, Jawa Timur, Indonesia.
          </p>
        </div>

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
            className="group w-full lg:w-auto bg-white text-black px-7 py-3 rounded-full font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 border-2 border-white hover:bg-neutral-200 transition-all duration-300 shadow-lg shadow-black/50"
          >
            <HiUser className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Tentang Saya</span>
          </Link>
          <Link
            href="/cv"
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

      {/* Mascot Laptop - Larger and prominent on mobile and desktop */}
      <div className="relative z-10 mt-auto lg:mt-0 w-[240px] sm:w-[290px] md:w-[340px] lg:w-[340px] xl:w-[430px] 2xl:w-[500px] max-h-[26vh] sm:max-h-[30vh] lg:max-h-[44vh] xl:max-h-[50vh] 2xl:max-h-[56vh] pb-20 sm:pb-24 lg:pb-0 flex justify-center items-end lg:absolute lg:bottom-3 lg:right-3 xl:bottom-4 xl:right-6 2xl:right-8 pointer-events-none select-none">
        <Image
          src="/img/sticker.webp"
          alt="Laptop Mascot"
          width={600}
          height={522}
          priority
          className="w-full h-auto max-h-[inherit] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        />
      </div>
    </section>
  );
}
