import type { Metadata } from 'next';
import Hero from './ui/hero';
import { SITE_URL, SITE_CONFIG } from './config/site';

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Murah Mulai 400 Ribu & Aplikasi Mobile — Yanuar Ardhika",
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: "Jasa Pembuatan Website Murah Mulai 400 Ribu & Aplikasi Mobile — Yanuar Ardhika",
    description: SITE_CONFIG.description,
    url: SITE_URL,
    type: "website",
    siteName: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website & Aplikasi Mobile — Yanuar Ardhika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah Mulai 400 Ribu & Aplikasi Mobile — Yanuar Ardhika",
    description: SITE_CONFIG.description,
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@ardhikaxx",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
