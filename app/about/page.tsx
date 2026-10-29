import type { Metadata } from "next";
import About from "../ui/about";
import { SITE_URL, SITE_CONFIG } from "../config/site";

export const metadata: Metadata = {
    title: "Tentang Yanuar Ardhika | Full Stack Web & Mobile Developer",
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
        "Yanuar Ardhika S.Tr.Kom.",
    ],
    alternates: {
        canonical: `${SITE_URL}/about`,
        languages: {
            "id-ID": `${SITE_URL}/about`,
            "x-default": `${SITE_URL}/about`,
        },
    },
    openGraph: {
        title: "Tentang Yanuar Ardhika, S.Tr.Kom. | Full Stack Developer",
        description:
            "Profil lengkap Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — lulusan Teknik Informatika Polije, Software Engineer & Full Stack Developer di Laravel, Flutter, Next.js, dan IoT.",
        url: `${SITE_URL}/about`,
        type: "profile",
        siteName: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
        images: [
            {
                url: `${SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Profil Yanuar Ardhika Rahmadhani Ubaidillah",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tentang Yanuar Ardhika, S.Tr.Kom. | Full Stack Developer",
        description:
            "Profil lengkap Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Software Engineer & Full Stack Developer lulusan Teknik Informatika Polije.",
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
                    name: "Tentang Saya",
                    item: `${SITE_URL}/about`,
                },
            ],
        },
        {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/about#webpage`,
            url: `${SITE_URL}/about`,
            name: "Tentang Yanuar Ardhika | Full Stack Web & Mobile Developer",
            description: SITE_CONFIG.description,
            mainEntity: {
                "@type": "Person",
                name: SITE_CONFIG.fullName,
                url: SITE_URL,
                jobTitle: "Full Stack Web & Mobile Developer",
                alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Politeknik Negeri Jember",
                },
            },
        },
    ],
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <About />
        </main>
    );
}
