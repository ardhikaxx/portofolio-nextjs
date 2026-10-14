import type { Metadata } from "next";
import CVPageClient from "../ui/cv-page-client";

const BASE_URL = "https://yanuar-ardhika.vercel.app";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV) & Resume | Yanuar Ardhika",
  description:
    "Curriculum Vitae (CV) dan resume profesional Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Software Engineer & Full Stack Developer dengan rekam jejak pengalaman industri, proyek riset nasional terdanai, dan keahlian Laravel, Flutter, Next.js, dan IoT.",
  keywords: [
    "CV Yanuar Ardhika",
    "Resume Yanuar Ardhika",
    "Download CV Yanuar Ardhika",
    "CV Software Engineer Indonesia",
    "CV Full Stack Developer",
    "CV Web Developer Laravel",
    "CV Flutter Developer",
    "Teknik Informatika Polije CV",
    "Resume Programmer Indonesia",
  ],
  alternates: {
    canonical: `${BASE_URL}/cv`,
  },
  openGraph: {
    title: "Curriculum Vitae (CV) | Yanuar Ardhika, S.Tr.Kom.",
    description:
      "Curriculum Vitae (CV) dan resume profesional Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Software Engineer & Full Stack Developer.",
    url: `${BASE_URL}/cv`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Curriculum Vitae Yanuar Ardhika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum Vitae (CV) | Yanuar Ardhika, S.Tr.Kom.",
    description:
      "Curriculum Vitae (CV) dan resume profesional Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
};

export default function CVPage() {
  return <CVPageClient />;
}
