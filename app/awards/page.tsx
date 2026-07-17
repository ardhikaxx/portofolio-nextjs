import type { Metadata } from "next";
import Awards from "../ui/awards";
import NavBottom from "../components/NavBottom";

export const metadata: Metadata = {
    title: "Penghargaan",
    description:
        "Daftar penghargaan dan prestasi Yanuar Ardhika — juara kompetisi, pendanaan PKM, dan penghargaan akademik dari 2021 hingga sekarang.",
    alternates: {
        canonical: "https://yanuar-ardhika.vercel.app/awards",
    },
    openGraph: {
        title: "Penghargaan Yanuar Ardhika",
        description:
            "Daftar penghargaan dan prestasi Yanuar Ardhika — juara kompetisi, pendanaan PKM, dan penghargaan akademik.",
        url: "https://yanuar-ardhika.vercel.app/awards",
    },
};

export default function AwardsPage() {
    return (
        <main className="min-h-screen bg-linear-to-br from-yellow-900 to-red-900">
            <Awards />
            <NavBottom currentPath="/awards" />
        </main>
    );
}
