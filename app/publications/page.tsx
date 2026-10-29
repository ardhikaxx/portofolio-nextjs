import type { Metadata } from "next";
import Publications from "../ui/publications";
import { SITE_URL } from "../config/site";

export const metadata: Metadata = {
    title: "Publikasi Ilmiah & Penelitian | Yanuar Ardhika",
    description:
        "Karya ilmiah, jurnal nasional, dan artikel penelitian yang dipublikasikan oleh Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — digitalisasi posyandu, sistem informasi kesehatan balita, dan teknologi pangan.",
    keywords: [
        "Publikasi Yanuar Ardhika",
        "Jurnal Yanuar Ardhika",
        "Penelitian Yanuar Ardhika",
        "Karya Ilmiah Teknik Informatika Polije",
        "Jurnal Posyandu Digital",
        "Publikasi PKM-PM",
        "Riset Software Engineering Indonesia",
        "Yanuar Ardhika S.Tr.Kom.",
    ],
    alternates: {
        canonical: `${SITE_URL}/publications`,
        languages: {
            "id-ID": `${SITE_URL}/publications`,
            "x-default": `${SITE_URL}/publications`,
        },
    },
    openGraph: {
        title: "Publikasi Ilmiah & Penelitian | Yanuar Ardhika",
        description:
            "Karya ilmiah, jurnal nasional, dan artikel penelitian yang dipublikasikan oleh Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
        url: `${SITE_URL}/publications`,
        type: "website",
        siteName: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
        images: [
            {
                url: `${SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Publikasi Ilmiah Yanuar Ardhika",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Publikasi Ilmiah & Penelitian | Yanuar Ardhika",
        description:
            "Karya ilmiah, jurnal nasional, dan penelitian Yanuar Ardhika.",
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
                    name: "Publikasi Ilmiah & Riset",
                    item: `${SITE_URL}/publications`,
                },
            ],
        },
    ],
};

export default function PublicationsPage() {
    return (
        <main className="min-h-screen bg-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Publications />
        </main>
    );
}
