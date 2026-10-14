import type { Metadata } from "next";
import Awards from "../ui/awards";

const BASE_URL = "https://yanuar-ardhika.vercel.app";

export const metadata: Metadata = {
    title: "Penghargaan & Prestasi | Yanuar Ardhika",
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
    ],
    alternates: {
        canonical: `${BASE_URL}/awards`,
    },
    openGraph: {
        title: "Penghargaan & Prestasi | Yanuar Ardhika",
        description:
            "Daftar penghargaan, rekognisi, dan prestasi akademik serta kompetisi teknologi yang diraih oleh Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
        url: `${BASE_URL}/awards`,
        type: "website",
        images: [
            {
                url: `${BASE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Penghargaan Yanuar Ardhika",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Penghargaan & Prestasi | Yanuar Ardhika",
        description:
            "Daftar penghargaan dan prestasi kompetisi teknologi Yanuar Ardhika.",
        images: [`${BASE_URL}/og-image.jpg`],
    },
};

export default function AwardsPage() {
    return (
        <main className="min-h-screen bg-black">
            <Awards />
        </main>
    );
}
