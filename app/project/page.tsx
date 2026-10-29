import type { Metadata } from "next";
import Project from "../ui/project";
import { SITE_URL } from "../config/site";

export const metadata: Metadata = {
    title: "Portofolio Proyek Web, Mobile & IoT | Yanuar Ardhika",
    description:
        "Eksplorasi 27+ portofolio proyek perangkat lunak karya Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — mencakup sistem informasi enterprise, aplikasi mobile Android (Flutter), website Laravel, Next.js, machine learning, dan integrasi IoT.",
    keywords: [
        "Proyek Yanuar Ardhika",
        "Portofolio Website Laravel",
        "Portofolio Aplikasi Flutter",
        "Portofolio Next.js",
        "Sistem Informasi Enterprise",
        "Aplikasi Mobile Android",
        "PPAk FEB UNESA",
        "Label Gizi MBG",
        "Holong Siregar Law Office",
        "Aurora Vet Petcare",
        "SPK KIP-K PROMETHEE",
        "APOCARE Farmasi POS ERP",
        "SIPKES Polije",
        "Web Posyandu PKM Kemendikbud",
        "Jasa Pembuatan Website Jember",
        "Jasa Pembuatan Aplikasi Mobile",
        "Full Stack Developer Portfolio Indonesia",
        "Yanuar Ardhika S.Tr.Kom.",
    ],
    alternates: {
        canonical: `${SITE_URL}/project`,
        languages: {
            "id-ID": `${SITE_URL}/project`,
            "x-default": `${SITE_URL}/project`,
        },
    },
    openGraph: {
        title: "Portofolio Proyek Web, Mobile & IoT | Yanuar Ardhika",
        description:
            "Eksplorasi 27+ portofolio proyek perangkat lunak karya Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — sistem informasi enterprise, aplikasi Flutter, Laravel, Next.js, dan IoT.",
        url: `${SITE_URL}/project`,
        type: "website",
        siteName: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
        images: [
            {
                url: `${SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Koleksi Proyek Yanuar Ardhika",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portofolio Proyek Web, Mobile & IoT | Yanuar Ardhika",
        description:
            "Eksplorasi 27+ portofolio proyek perangkat lunak karya Yanuar Ardhika — sistem informasi enterprise, Flutter, Laravel, dan IoT.",
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
                    name: "Koleksi Proyek",
                    item: `${SITE_URL}/project`,
                },
            ],
        },
    ],
};

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Project />
        </main>
    );
}
