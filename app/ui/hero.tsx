import Link from 'next/link';
import Image from 'next/image';
import { HiDocument, HiUser, HiStar } from 'react-icons/hi2';
import PageMascot from '../components/PageMascot';
import LetterGlitch from '../components/LetterGlitch';
import { SITE_URL } from '../config/site';

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

        {/* High-Intent Link Badge for Googlebot & Users */}
        <Link
          href="/jasa-pembuatan-website"
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs sm:text-sm hover:bg-emerald-500/25 transition-all duration-300 shadow-lg shadow-emerald-950/20 mb-3 hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-emerald-300">Jasa Website 400rb & Aplikasi 300rb</span>
          <span className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
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
            Selamat datang di website resmi Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. Melayani jasa pembuatan website profesional murah mulai Rp400.000 (sudah include hosting aktif 1 tahun dan domain resmi .web.id gratis) serta jasa pembuatan aplikasi mobile Android dan Flutter mulai Rp300.000.
          </p>
          <h3>Daftar Layanan & Jasa Unggulan:</h3>
          <ul>
            <li>
              <Link href="/jasa-pembuatan-website">
                Jasa Pembuatan Website Murah Mulai Rp400 Ribu Include Hosting 1 Tahun & Domain .web.id
              </Link>
            </li>
            <li>
              <Link href="/jasa-pembuatan-website">
                Jasa Sistem Penjualan & Kasir POS UMKM untuk toko retail, cafe, dan bisnis offline/online
              </Link>
            </li>
            <li>
              <Link href="/jasa-pembuatan-website">
                Jasa Pembuatan Aplikasi Mobile Android (Flutter & Dart) Mulai Rp300 Ribu
              </Link>
            </li>
            <li>
              <Link href="/jasa-pembuatan-website">
                Jasa Tugas IT Mahasiswa, Tugas Pemrograman Coding, Projek Semester, dan Skripsi Teknik Informatika
              </Link>
            </li>
            <li>
              <Link href="/project">
                Koleksi 27+ Portofolio Proyek Sistem Informasi Laravel, Next.js, Flutter, dan IoT
              </Link>
            </li>
            <li>
              <Link href="/about">
                Profil & Biodata Lengkap Yanuar Ardhika Lulusan D4 Teknik Informatika Polije
              </Link>
            </li>
            <li>
              <Link href="/cv">
                Curriculum Vitae (CV) & Resume Profesional Software Engineer Yanuar Ardhika
              </Link>
            </li>
          </ul>
          <p>
            Hubungi kontak WhatsApp kami di 085933648537. Website resmi: {SITE_URL}. Berdomisili di Jember, Jawa Timur dan siap melayani pesanan secara online dari seluruh wilayah Indonesia (Surabaya, Malang, Sidoarjo, Banyuwangi, Jakarta, Bandung, Yogyakarta, dan kota lainnya).
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
          alt="Yanuar Ardhika - Software Engineer & Jasa Pembuatan Website Murah Jember"
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
