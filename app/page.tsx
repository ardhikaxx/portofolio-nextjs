import type { Metadata } from 'next';
import Hero from './ui/hero';

const BASE_URL = "https://yanuar-ardhika.vercel.app";

export const metadata: Metadata = {
  title: "Yanuar Ardhika — Full Stack Web & Mobile Developer",
  description:
    "Portofolio resmi Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Software Engineer & Full Stack Developer spesialis Laravel, Flutter, Next.js, dan IoT. Lulusan D4 Teknik Informatika Politeknik Negeri Jember.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Yanuar Ardhika — Full Stack Web & Mobile Developer",
    description:
      "Portofolio resmi Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Software Engineer & Full Stack Developer spesialis Laravel, Flutter, Next.js, dan IoT di Jember, Jawa Timur.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Yanuar Ardhika - Full Stack Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanuar Ardhika — Full Stack Web & Mobile Developer",
    description:
      "Portofolio resmi Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Software Engineer & Full Stack Developer spesialis Laravel, Flutter, Next.js, dan IoT.",
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
