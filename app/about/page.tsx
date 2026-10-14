import type { Metadata } from "next";
import About from "../ui/about";

const BASE_URL = "https://yanuar-ardhika.vercel.app";

export const metadata: Metadata = {
    title: "Tentang Saya | Profil Yanuar Ardhika Rahmadhani, S.Tr.Kom.",
    description:
        "Profil lengkap Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — lulusan Sarjana Terapan D4 Teknik Informatika Politeknik Negeri Jember (Polije). Software Engineer & Full Stack Developer berpengalaman di Laravel, Flutter, Next.js, React, PHP, MySQL, dan IoT.",
    keywords: [
        "Tentang Yanuar Ardhika",
        "Biodata Yanuar Ardhika",
        "Profil Yanuar Ardhika",
        "Yanuar Ardhika Rahmadhani Ubaidillah",
        "Lulusan Teknik Informatika Polije",
        "Alumni Politeknik Negeri Jember",
        "Software Engineer Jember",
        "Web Developer Jember",
        "Full Stack Developer Indonesia",
        "Keahlian Yanuar Ardhika",
        "Pengalaman Yanuar Ardhika",
    ],
    alternates: {
        canonical: `${BASE_URL}/about`,
    },
    openGraph: {
        title: "Tentang Yanuar Ardhika, S.Tr.Kom. | Full Stack Developer",
        description:
            "Profil lengkap Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — lulusan Teknik Informatika Polije, Software Engineer & Full Stack Developer di Laravel, Flutter, Next.js, dan IoT.",
        url: `${BASE_URL}/about`,
        type: "profile",
        images: [
            {
                url: `${BASE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Profil Yanuar Ardhika",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tentang Yanuar Ardhika, S.Tr.Kom. | Full Stack Developer",
        description:
            "Profil lengkap Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Software Engineer & Full Stack Developer lulusan Teknik Informatika Polije.",
        images: [`${BASE_URL}/og-image.jpg`],
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <About />
        </main>
    );
}
