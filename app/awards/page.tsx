import type { Metadata } from "next";
import Awards from "../ui/awards";
import { SITE_URL } from "../config/site";

export const metadata: Metadata = {
    title: "Penghargaan & Prestasi Kompetisi IT | Yanuar Ardhika",
    description:
        "Daftar penghargaan, rekognisi, dan prestasi akademik serta kompetisi teknologi yang diraih oleh Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — termasuk pendanaan Program Kreativitas Mahasiswa (PKM-PM Kemendikbudristek).",
    keywords: [
        "Penghargaan Yanuar Ardhika",
        "Prestasi Yanuar Ardhika",
        "PKM-PM Kemendikbudristek Yanuar Ardhika",
        "Juara Kompetisi IT Polije",
        "Prestasi Mahasiswa Politeknik Negeri Jember",
        "Awards Software Engineer",
        "Rekognisi Inovasi Teknologi",
        "Yanuar Ardhika S.Tr.Kom.",
    ],
    alternates: {
        canonical: `${SITE_URL}/awards`,
        languages: {
            "id-ID": `${SITE_URL}/awards`,
            "x-default": `${SITE_URL}/awards`,
        },
    },
    openGraph: {
        title: "Penghargaan & Prestasi Kompetisi IT | Yanuar Ardhika",
        description:
            "Daftar penghargaan, rekognisi, dan prestasi akademik serta kompetisi teknologi yang diraih oleh Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
        url: `${SITE_URL}/awards`,
        type: "website",
        siteName: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
        images: [
            {
                url: `${SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Penghargaan & Prestasi Yanuar Ardhika",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Penghargaan & Prestasi | Yanuar Ardhika",
        description:
            "Daftar penghargaan dan prestasi kompetisi teknologi Yanuar Ardhika.",
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
                    name: "Penghargaan & Prestasi",
                    item: `${SITE_URL}/awards`,
                },
            ],
        },
    ],
};

export default function AwardsPage() {
    return (
        <main className="min-h-screen bg-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Awards />
        </main>
    );
}
