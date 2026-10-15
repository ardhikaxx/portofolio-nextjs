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
          glitchSpeed={75}
          centerVignette={false}
          outerVignette={true}
        />
      </div>

      {/* Black Overlay 70% */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/70"></div>

      {/* Main Content (Title, Subtitle, Buttons) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl my-auto lg:my-0">
        <div className="mb-2 sm:mb-3 lg:mb-4">
          <PageMascot />
        </div>

        <Link
          href="/jasa-pembuatan-website"
          className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-emerald-500/40 hover:border-emerald-400 text-white font-mono text-[11px] sm:text-xs backdrop-blur-md transition-all mb-3 sm:mb-4 shadow-lg shadow-emerald-950/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-emerald-400">Jasa Web & Mobile:</span>
          <span className="text-neutral-200">Mulai 400rb (Free Hosting + Domain)</span>
          <span className="text-neutral-400 group-hover:translate-x-0.5 group-hover:text-white transition-transform">→</span>
        </Link>

        <h1
          className="font-jaro text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight text-white leading-none select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
        >
          {'</Yanuar Ardhika>'}
        </h1>

        {/* Semantic Crawler Context for Search Engines & Accessibility */}
        <div className="sr-only">
          <h2>Jasa Pembuatan Website Murah & Jasa Pembuatan Aplikasi Mobile — Yanuar Ardhika</h2>
          <p>
            Melayani jasa pembuatan website profesional murah mulai Rp400.000 (sudah include hosting 1 tahun dan domain .web.id) serta jasa pembuatan aplikasi mobile Android dan Flutter mulai Rp300.000.
          </p>
          <h3>Layanan Unggulan Kami:</h3>
          <ul>
            <li>Jasa Pembuatan Sistem Penjualan (POS / Kasir) untuk UMKM, toko ritel, dan bisnis apapun.</li>
            <li>Jasa Pembuatan Website Toko Online, Katalog Produk, dan Landing Page Promosi.</li>
            <li>Jasa Pembuatan Website Company Profile instansi dan perusahaan.</li>
            <li>Jasa Tugas dan Projek IT Mahasiswa untuk semua jurusan Teknik Informatika dan Sistem Informasi.</li>
            <li>Jasa Pembuatan Web & Aplikasi Skripsi / Tugas Akhir (Laravel, Flutter, Next.js, MySQL).</li>
          </ul>
          <p>
            Hubungi langsung via WhatsApp atau telepon: 085933648537. Portofolio lengkap dapat diakses di https://yanuar-ardhika.vercel.app/. Berlokasi di Jember, Jawa Timur dan melayani klien secara online dari seluruh Indonesia.
          </p>
        </div>

        <p
          className="font-poppins text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed text-center mt-3 sm:mt-4 mb-6 sm:mb-8 max-w-xl"
        >
          Software Engineer yang membangun sistem
          <br />
          digital efisien dan berdampak
        </p>

        <div className="w-full max-w-xs sm:max-w-md lg:max-w-none grid grid-cols-2 lg:flex lg:flex-row gap-2.5 sm:gap-4 justify-center items-center">
          <Link
            href="/about"
            className="group col-span-1 lg:w-auto bg-white text-black px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-mono font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 border-2 border-white hover:bg-neutral-200 transition-all duration-300 shadow-lg shadow-black/50"
          >
            <HiUser className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Tentang Saya</span>
          </Link>
          <Link
            href="/cv"
            className="group col-span-1 lg:w-auto bg-black/40 backdrop-blur-md text-white border-2 border-white/80 px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-mono font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-black/50"
          >
            <HiDocument className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Lihat CV</span>
          </Link>
          <a
            href="https://page-reviews.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group col-span-2 lg:w-auto bg-black/40 backdrop-blur-md text-white border-2 border-white/80 px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-mono font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-black/50"
          >
            <HiStar className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Testimoni & Ulasan</span>
          </a>
        </div>
      </div>

      {/* Mascot Laptop - LCP element with eager priority, fetchPriority high, and unoptimized 24KB direct edge CDN delivery */}
      <div className="relative z-10 mt-auto lg:mt-0 w-[240px] sm:w-[290px] md:w-[340px] lg:w-[340px] xl:w-[430px] 2xl:w-[500px] max-h-[26vh] sm:max-h-[30vh] lg:max-h-[44vh] xl:max-h-[50vh] 2xl:max-h-[56vh] pb-20 sm:pb-24 lg:pb-0 flex justify-center items-end lg:absolute lg:bottom-3 lg:right-3 xl:bottom-4 xl:right-6 2xl:right-8 pointer-events-none select-none">
        <Image
          src="/img/sticker.webp"
          alt="Laptop Mascot Yanuar Ardhika"
          width={600}
          height={522}
          priority
          loading="eager"
          fetchPriority="high"
          unoptimized
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 500px"
          className="w-full h-auto max-h-[inherit] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        />
      </div>
    </section>
  );
}
