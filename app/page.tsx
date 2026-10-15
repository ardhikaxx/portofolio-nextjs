import type { Metadata } from 'next';
import Hero from './ui/hero';

const BASE_URL = "https://yanuar-ardhika.vercel.app";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Murah Mulai 400 Ribu & Aplikasi Mobile — Yanuar Ardhika",
  description:
    "Jasa pembuatan website murah mulai 400 ribu include hosting 1 tahun + domain web.id & jasa aplikasi mobile start 300 ribu. Melayani sistem penjualan UMKM, kasir POS toko, company profile, dan tugas/skripsi IT mahasiswa. WhatsApp: 085933648537.",
  keywords: [
    "Jasa Pembuatan Website",
    "Jasa Pembuatan Website Murah",
    "Jasa Pembuatan Website 400 Ribu",
    "Jasa Pembuatan Website UMKM",
    "Jasa Pembuatan Sistem Penjualan",
    "Jasa Pembuatan Toko Online Murah",
    "Jasa Pembuatan Website Include Domain Hosting",
    "Jasa Pembuatan Aplikasi Mobile",
    "Jasa Pembuatan Aplikasi Mobile 300 Ribu",
    "Jasa Pembuatan Aplikasi Android",
    "Jasa Pembuatan Aplikasi Flutter",
    "Jasa Sistem Kasir POS UMKM",
    "Jasa Tugas IT Mahasiswa",
    "Jasa Projek IT Mahasiswa",
    "Jasa Skripsi Teknik Informatika",
    "Jasa Pembuatan Web Skripsi",
    "Jasa Pembuatan Aplikasi Skripsi",
    "Jasa Joki Coding Mahasiswa",
    "Jasa Pembuatan Website Jember",
    "Jasa Pembuatan Aplikasi Jember",
    "Yanuar Ardhika",
    "085933648537",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Jasa Pembuatan Website Murah Mulai 400 Ribu & Aplikasi Mobile — Yanuar Ardhika",
    description:
      "Jasa pembuatan website murah mulai 400 ribu (free hosting 1 tahun + domain web.id) & aplikasi mobile mulai 300 ribu. Sistem penjualan UMKM, kasir POS, dan tugas IT mahasiswa. Hubungi WhatsApp: 085933648537.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website & Aplikasi Mobile — Yanuar Ardhika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah Mulai 400 Ribu & Aplikasi Mobile — Yanuar Ardhika",
    description:
      "Jasa pembuatan website murah mulai 400 ribu include hosting 1 tahun + domain web.id & aplikasi mobile mulai 300 ribu. Hubungi WhatsApp: 085933648537.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
