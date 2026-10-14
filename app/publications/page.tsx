import type { Metadata } from "next";
import Publications from "../ui/publications";

const BASE_URL = "https://yanuar-ardhika.vercel.app";

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
    ],
    alternates: {
        canonical: `${BASE_URL}/publications`,
    },
    openGraph: {
        title: "Publikasi Ilmiah & Penelitian | Yanuar Ardhika",
        description:
            "Karya ilmiah, jurnal nasional, dan artikel penelitian yang dipublikasikan oleh Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
        url: `${BASE_URL}/publications`,
        type: "website",
        images: [
            {
                url: `${BASE_URL}/og-image.jpg`,
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
        images: [`${BASE_URL}/og-image.jpg`],
    },
};

export default function PublicationsPage() {
    return (
        <main className="min-h-screen bg-black">
            <Publications />
        </main>
    );
}
