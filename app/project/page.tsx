import type { Metadata } from "next";
import Project from "../ui/project";

const BASE_URL = "https://yanuar-ardhika.vercel.app";

export const metadata: Metadata = {
    title: "Koleksi Proyek Web & Mobile | Yanuar Ardhika",
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
    ],
    alternates: {
        canonical: `${BASE_URL}/project`,
    },
    openGraph: {
        title: "Koleksi Proyek Web & Mobile | Yanuar Ardhika",
        description:
            "Eksplorasi 27+ portofolio proyek perangkat lunak karya Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — sistem informasi enterprise, aplikasi Flutter, Laravel, Next.js, dan IoT.",
        url: `${BASE_URL}/project`,
        type: "website",
        images: [
            {
                url: `${BASE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Koleksi Proyek Yanuar Ardhika",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Koleksi Proyek Web & Mobile | Yanuar Ardhika",
        description:
            "Eksplorasi 27+ portofolio proyek perangkat lunak karya Yanuar Ardhika — sistem informasi enterprise, Flutter, Laravel, dan IoT.",
        images: [`${BASE_URL}/og-image.jpg`],
    },
};

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-black">
            <Project />
        </main>
    );
}
