import type { Metadata } from 'next';
import Link from 'next/link';
import { FaWhatsapp, FaCheck, FaGlobe, FaMobileAlt, FaGraduationCap, FaRocket, FaShieldAlt, FaHeadset, FaServer } from 'react-icons/fa';
import { HiArrowLeft, HiSparkles } from 'react-icons/hi2';
import { SITE_URL, SITE_CONFIG } from '../config/site';

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Murah Mulai 400 Ribu Free Hosting & Domain | Yanuar Ardhika",
  description:
    "Jasa pembuatan website profesional murah mulai Rp400.000 include hosting 1 tahun & domain .web.id gratis. Jasa aplikasi mobile Android mulai Rp300.000. Melayani sistem penjualan UMKM, toko online, company profile, dan tugas/skripsi IT mahasiswa. Hubungi WhatsApp: 085933648537.",
  keywords: [
    ...SITE_CONFIG.keywords,
    "Jasa Pembuatan Website Termurah",
    "Jasa Bikin Website Toko",
    "Jasa Web 400rb",
    "Jasa Aplikasi 300rb",
    "Jasa Pembuatan Landing Page",
    "Jasa Web Jember Murah",
    "Jasa Web Surabaya Murah",
    "Jasa Web Malang Murah",
  ],
  alternates: {
    canonical: `${SITE_URL}/jasa-pembuatan-website`,
    languages: {
      "id-ID": `${SITE_URL}/jasa-pembuatan-website`,
      "x-default": `${SITE_URL}/jasa-pembuatan-website`,
    },
  },
  openGraph: {
    title: "Jasa Pembuatan Website Murah Mulai 400 Ribu & Aplikasi Mobile — Yanuar Ardhika",
    description:
      "Jasa pembuatan website murah mulai 400 ribu (free hosting 1 tahun + domain .web.id gratis) & aplikasi mobile mulai 300 ribu. Melayani sistem penjualan UMKM, toko online, dan tugas/skripsi IT mahasiswa. WhatsApp: 085933648537.",
    url: `${SITE_URL}/jasa-pembuatan-website`,
    type: "website",
    siteName: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Murah Mulai 400rb — Yanuar Ardhika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah Mulai 400 Ribu & Aplikasi Mobile — Yanuar Ardhika",
    description:
      "Jasa pembuatan website murah mulai 400 ribu include hosting 1 tahun + domain .web.id & aplikasi mobile mulai 300 ribu. Hubungi WhatsApp: 085933648537.",
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@ardhikaxx",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Jasa Pembuatan Website & Aplikasi Mobile",
          item: `${SITE_URL}/jasa-pembuatan-website`,
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/jasa-pembuatan-website#service`,
      name: "Jasa Pembuatan Website Murah & Aplikasi Mobile — Yanuar Ardhika",
      image: `${SITE_URL}/og-image.jpg`,
      url: `${SITE_URL}/jasa-pembuatan-website`,
      telephone: "+6285933648537",
      priceRange: "Rp300.000 - Rp2.500.000",
      currenciesAccepted: "IDR",
      paymentAccepted: "Cash, Bank Transfer, QRIS",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jember",
        addressRegion: "Jawa Timur",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.1724,
        longitude: 113.7007,
      },
      areaServed: [
        { "@type": "Country", name: "Indonesia" },
        { "@type": "City", name: "Jember" },
        { "@type": "City", name: "Surabaya" },
        { "@type": "City", name: "Malang" },
        { "@type": "City", name: "Sidoarjo" },
        { "@type": "City", name: "Banyuwangi" },
        { "@type": "City", name: "Jakarta" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paket Jasa Pembuatan Website & Aplikasi",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Website (Include Hosting 1 Tahun & Domain .web.id)",
              description:
                "Pembuatan website toko online, sistem penjualan UMKM, kasir POS, company profile, dan landing page modern.",
            },
            price: "400000",
            priceCurrency: "IDR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Aplikasi Mobile (Android / Flutter)",
              description:
                "Pembuatan aplikasi mobile Android berbasis Flutter untuk kasir toko, operasional UMKM, dan monitoring.",
            },
            price: "300000",
            priceCurrency: "IDR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Tugas & Projek IT / Skripsi Mahasiswa",
              description:
                "Bantuan pengerjaan projek IT kuliah, tugas pemrograman, dan program skripsi Teknik Informatika & Sistem Informasi.",
            },
            price: "300000",
            priceCurrency: "IDR",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/jasa-pembuatan-website#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa harga jasa pembuatan website di Yanuar Ardhika?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harga jasa pembuatan website mulai dari Rp400.000, sudah include hosting aktif 1 tahun dan domain .web.id gratis tanpa biaya tambahan tersembunyi.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah website sudah bisa untuk sistem penjualan UMKM dan kasir toko?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, sangat bisa. Kami melayani pembuatan sistem penjualan lengkap dengan pencatatan produk, keranjang belanja, kasir POS, cetak invoice, dan integrasi order WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa biaya pembuatan aplikasi mobile Android?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biaya jasa pembuatan aplikasi mobile Android mulai dari Rp300.000 menggunakan framework modern Flutter yang ringan dan responsif.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah menerima pengerjaan tugas koding dan skripsi mahasiswa IT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, kami melayani pengerjaan tugas pemrograman kuliah, projek semester, dan program skripsi/tugas akhir untuk mahasiswa Teknik Informatika dan Sistem Informasi dengan garansi bimbingan dan full source code.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara melakukan pemesanan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anda bisa langsung menghubungi WhatsApp di 085933648537 untuk konsultasi gratis mengenai kebutuhan sistem atau aplikasi Anda.",
          },
        },
      ],
    },
  ],
};

export default function JasaPembuatanWebsitePage() {
  const whatsappNumber = SITE_CONFIG.whatsappNumber;

  return (
    <main className="min-h-screen bg-black text-white relative px-4 py-8 pb-32 sm:py-12 sm:pb-32">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        {/* Navigation Bar / Back */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <HiArrowLeft size={16} />
            <span>Kembali ke Beranda</span>
          </Link>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Halo%20Mas%20Yanuar,%20saya%20mau%20konsultasi%20jasa%20pembuatan%20website/aplikasi`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs hover:bg-emerald-500/25 transition-all"
          >
            <FaWhatsapp size={15} />
            <span className="hidden sm:inline">WhatsApp Fast Respon:</span>
            <span>085933648537</span>
          </a>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-neutral-200 text-xs sm:text-sm font-mono shadow-sm">
            <HiSparkles className="text-yellow-400" />
            <span>Solusi Digital UMKM, Bisnis & Akademik Mahasiswa</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-mono text-white leading-tight">
            Jasa Pembuatan Website & Aplikasi Mobile Murah
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Layanan jasa pembuatan website profesional mulai <span className="text-white font-semibold">Rp400.000</span> (sudah include hosting cloud 1 tahun + domain .web.id gratis) dan aplikasi mobile Android mulai <span className="text-white font-semibold">Rp300.000</span>. Cepat, bergaransi, dan siap pakai.
          </p>
        </div>

        {/* Pricing & Service Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Card 1: Jasa Pembuatan Website */}
          <div className="relative bg-[#141414] border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl shadow-emerald-950/20 hover:border-emerald-400 transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-emerald-500 text-black text-[11px] font-mono font-bold tracking-wider uppercase">
              Paling Populer UMKM
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FaGlobe size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-mono text-white">Jasa Pembuatan Website</h2>
                  <p className="text-xs text-neutral-400">Toko Online, Kasir & Profile</p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800">
                <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Mulai Dari</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">Rp 400.000</span>
                  <span className="text-xs text-neutral-400 font-mono">/paket</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-neutral-300 pt-2">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                  <span><strong>Include Hosting 1 Tahun</strong> (Aman & Cepat)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                  <span><strong>Free Domain .web.id</strong> Aktif 1 Tahun</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                  <span>Sistem Penjualan / Kasir POS UMKM</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                  <span>Toko Online & Integrasi Order WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                  <span>Desain Modern, Cepat & Mobile Responsive</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-emerald-400 shrink-0 mt-0.5 text-xs" />
                  <span>SEO Friendly (Mudah Terindeks Google)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20Mas%20Yanuar,%20saya%20tertarik%20pesan%20Jasa%20Pembuatan%20Website%20Rp400rb`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black hover:bg-neutral-200 font-mono text-xs sm:text-sm font-bold transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <FaWhatsapp size={17} className="text-emerald-600" />
                <span>Pesan Website via WA</span>
              </a>
            </div>
          </div>

          {/* Card 2: Jasa Aplikasi Mobile */}
          <div className="bg-[#141414] border border-neutral-800 hover:border-neutral-700 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <FaMobileAlt size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-mono text-white">Jasa Aplikasi Mobile</h2>
                  <p className="text-xs text-neutral-400">Android & Flutter Modern</p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800">
                <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Mulai Dari</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">Rp 300.000</span>
                  <span className="text-xs text-neutral-400 font-mono">/aplikasi</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-neutral-300 pt-2">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-blue-400 shrink-0 mt-0.5 text-xs" />
                  <span>Aplikasi Android Siap Pasang (File APK)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-blue-400 shrink-0 mt-0.5 text-xs" />
                  <span>Teknologi Modern Flutter & Dart</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-blue-400 shrink-0 mt-0.5 text-xs" />
                  <span>Integrasi Database MySQL / API / Firebase</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-blue-400 shrink-0 mt-0.5 text-xs" />
                  <span>Aplikasi Kasir, Penjualan, & Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-blue-400 shrink-0 mt-0.5 text-xs" />
                  <span>UI/UX Menarik, Ringan & Mudah Digunakan</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-blue-400 shrink-0 mt-0.5 text-xs" />
                  <span>Garansi Perbaikan & Demo Aplikasi</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20Mas%20Yanuar,%20saya%20tertarik%20pesan%20Jasa%20Aplikasi%20Mobile%20Rp300rb`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs sm:text-sm font-bold border border-white/20 transition-all cursor-pointer"
              >
                <FaWhatsapp size={17} />
                <span>Pesan Aplikasi Mobile</span>
              </a>
            </div>
          </div>

          {/* Card 3: Jasa Tugas & Skripsi IT Mahasiswa */}
          <div className="bg-[#141414] border border-neutral-800 hover:border-neutral-700 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-mono text-white">Tugas & Skripsi IT</h2>
                  <p className="text-xs text-neutral-400">Untuk Seluruh Mahasiswa</p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800">
                <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Mulai Dari</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">Rp 300.000</span>
                  <span className="text-xs text-neutral-400 font-mono">/projek</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-neutral-300 pt-2">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-purple-400 shrink-0 mt-0.5 text-xs" />
                  <span>Tugas Pemrograman Kuliah (Web, Mobile, DB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-purple-400 shrink-0 mt-0.5 text-xs" />
                  <span>Projek Semester & Sistem Informasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-purple-400 shrink-0 mt-0.5 text-xs" />
                  <span>Program Skripsi & Tugas Akhir (TA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-purple-400 shrink-0 mt-0.5 text-xs" />
                  <span>Laravel, Next.js, Flutter, React, PHP, MySQL, IoT</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-purple-400 shrink-0 mt-0.5 text-xs" />
                  <span>Full Source Code + Cara Menjalankan</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-purple-400 shrink-0 mt-0.5 text-xs" />
                  <span>Garansi Revisi & Bimbingan Sampai Sidang</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20Mas%20Yanuar,%20saya%20mau%20konsultasi%20tugas/skripsi%20IT`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs sm:text-sm font-bold border border-white/20 transition-all cursor-pointer"
              >
                <FaWhatsapp size={17} />
                <span>Konsultasi Skripsi / Tugas</span>
              </a>
            </div>
          </div>
        </div>

        {/* Keunggulan Layanan */}
        <div className="bg-[#141414] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-white">
              Mengapa Memilih Jasa Pembuatan Website Yanuar Ardhika?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
              Berpengalaman membangun lebih dari 27 sistem informasi web enterprise, aplikasi mobile, dan proyek terdanai nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <FaRocket className="text-emerald-400 text-xl" />
              <h3 className="font-bold text-sm font-mono text-white">Pengerjaan Cepat</h3>
              <p className="text-xs text-neutral-400">Proses pengerjaan tepat waktu sesuai deadline yang disepakati bersama.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <FaServer className="text-blue-400 text-xl" />
              <h3 className="font-bold text-sm font-mono text-white">Free Hosting & Domain</h3>
              <p className="text-xs text-neutral-400">Paket website 400rb sudah termasuk hosting cloud aktif 1 tahun dan domain .web.id.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <FaShieldAlt className="text-purple-400 text-xl" />
              <h3 className="font-bold text-sm font-mono text-white">Garansi & Clean Code</h3>
              <p className="text-xs text-neutral-400">Kode bersih, terstruktur, mudah dikembangkan, dan dilengkapi garansi revisi.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <FaHeadset className="text-yellow-400 text-xl" />
              <h3 className="font-bold text-sm font-mono text-white">Bimbingan Langsung</h3>
              <p className="text-xs text-neutral-400">Konsultasi santai dan bimbingan cara pakai sistem sampai benar-benar paham.</p>
            </div>
          </div>
        </div>

        {/* 4 Langkah Mudah Pemesanan */}
        <div className="bg-[#141414] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-white">
              Cara Mudah Melakukan Pemesanan
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Proses transparan, aman, dan tanpa ribet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-white font-mono text-xs font-bold">Langkah 1</span>
              <h3 className="text-sm font-bold font-mono text-white">Konsultasi via WA</h3>
              <p className="text-xs text-neutral-400">Sampaikan kebutuhan website, aplikasi, atau tugas Anda ke WhatsApp 085933648537.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-white font-mono text-xs font-bold">Langkah 2</span>
              <h3 className="text-sm font-bold font-mono text-white">Pengerjaan Projek</h3>
              <p className="text-xs text-neutral-400">Projek dikerjakan dengan update berkala sesuai fitur dan spesifikasi yang disepakati.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-white font-mono text-xs font-bold">Langkah 3</span>
              <h3 className="text-sm font-bold font-mono text-white">Demo & Uji Coba</h3>
              <p className="text-xs text-neutral-400">Anda mencoba langsung demo sistem untuk memastikan semua fitur berjalan sempurna.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-white font-mono text-xs font-bold">Langkah 4</span>
              <h3 className="text-sm font-bold font-mono text-white">Serah Terima & Online</h3>
              <p className="text-xs text-neutral-400">Sistem website online siap pakai atau source code diserahterimakan sepenuhnya.</p>
            </div>
          </div>
        </div>

        {/* FAQ Interaktif */}
        <div className="bg-[#141414] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-white">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Jawaban seputar jasa pembuatan website, aplikasi, dan tugas IT.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <h3 className="text-sm font-bold text-white font-mono">Berapa biaya pembuatan website dan apa saja yang didapat?</h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Biaya mulai dari Rp400.000 sudah include hosting cloud aktif 1 tahun, nama domain .web.id gratis, desain responsif mobile/desktop, serta fitur sistem penjualan atau company profile sesuai pesanan.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <h3 className="text-sm font-bold text-white font-mono">Berapa lama waktu pengerjaan website atau aplikasi?</h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Waktu pengerjaan umumnya berkisar antara 2 hingga 7 hari kerja tergantung kompleksitas fitur yang diminta. Untuk tugas koding mahasiswa yang mendesak, bisa diselesaikan dalam hitungan hari.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <h3 className="text-sm font-bold text-white font-mono">Apakah bisa request fitur khusus (custom)?</h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Bisa sekali. Kami menguasai Laravel, Next.js, Flutter, React, PHP, MySQL, hingga integrasi mikrokontroler IoT (ESP32). Semua kebutuhan fitur custom bisa dikonsultasikan langsung.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <h3 className="text-sm font-bold text-white font-mono">Bagaimana cara menghubungi atau berkonsultasi?</h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Silakan hubungi WhatsApp resmi kami di <a href={`https://wa.me/${whatsappNumber}`} className="text-emerald-400 underline font-mono">085933648537</a>. Kami siap melayani konsultasi tanya jawab gratis sebelum Anda memutuskan memesan.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card Penutup */}
        <div className="text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900 to-black border border-white/15 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
            Siap Membangun Website & Aplikasi Impian Anda?
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Konsultasikan ide bisnis Anda sekarang juga. Harga terjangkau, pengerjaan cepat, dan bergaransi penuh.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo%20Mas%20Yanuar,%20saya%20mau%20konsultasi%20jasa%20pembuatan%20website`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-sm transition-all shadow-xl shadow-emerald-950/40 hover:scale-105 cursor-pointer"
            >
              <FaWhatsapp size={20} />
              <span>Chat WhatsApp: 085933648537</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
