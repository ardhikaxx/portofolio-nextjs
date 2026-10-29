import type { Metadata } from "next";
import CVPageClient from "../ui/cv-page-client";
import { SITE_URL, SITE_CONFIG } from "../config/site";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV) & Resume | Yanuar Ardhika S.Tr.Kom.",
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
    "Yanuar Ardhika S.Tr.Kom.",
  ],
  alternates: {
    canonical: `${SITE_URL}/cv`,
    languages: {
      "id-ID": `${SITE_URL}/cv`,
      "x-default": `${SITE_URL}/cv`,
    },
  },
  openGraph: {
    title: "Curriculum Vitae (CV) | Yanuar Ardhika, S.Tr.Kom.",
    description:
      "Curriculum Vitae (CV) dan resume profesional Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Software Engineer & Full Stack Developer.",
    url: `${SITE_URL}/cv`,
    type: "website",
    siteName: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
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
          name: "Curriculum Vitae (CV)",
          item: `${SITE_URL}/cv`,
        },
      ],
    },
  ],
};

export default function CVPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Semantic Crawler Context for Search Engines */}
      <div className="sr-only">
        <h1>Curriculum Vitae (CV) & Resume Profesional — Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.</h1>
        <p>
          Sarjana Terapan Komputer (S.Tr.Kom.) lulusan Program Studi D4 Teknik Informatika, Jurusan Teknologi Informasi, Politeknik Negeri Jember (Polije). Software Engineer & Full Stack Developer dengan fokus pada Laravel, Flutter, Next.js, React, TypeScript, MySQL, dan IoT (ESP32).
        </p>
        <h2>Profil & Kontak</h2>
        <ul>
          <li>Nama Lengkap: Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.</li>
          <li>Domisili: Jember, Jawa Timur, Indonesia</li>
          <li>Email: {SITE_CONFIG.email}</li>
          <li>WhatsApp: {SITE_CONFIG.phone}</li>
          <li>Portofolio & Website Resmi: {SITE_URL}</li>
          <li>LinkedIn: {SITE_CONFIG.social.linkedin}</li>
          <li>GitHub: {SITE_CONFIG.social.github}</li>
        </ul>
        <p>
          Unduh dokumen CV format PDF di: <a href="/CV_Yanuar_Ardhika.pdf">Download CV Yanuar Ardhika PDF</a>
        </p>
      </div>
      <CVPageClient />
    </main>
  );
}
