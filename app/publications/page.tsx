import type { Metadata } from "next";
import Publications from "../ui/publications";
import NavBottom from "../components/NavBottom";

export const metadata: Metadata = {
    title: "Publikasi",
    description:
        "Karya ilmiah dan artikel penelitian Yanuar Ardhika — publikasi di jurnal nasional tentang digitalisasi posyandu, pengembangan aplikasi mobile, dan pengabdian masyarakat.",
    alternates: {
        canonical: "https://yanuar-ardhika.vercel.app/publications",
    },
    openGraph: {
        title: "Publikasi Ilmiah Yanuar Ardhika",
        description:
            "Karya ilmiah dan artikel penelitian Yanuar Ardhika — publikasi di jurnal nasional tentang digitalisasi posyandu dan pengembangan aplikasi.",
        url: "https://yanuar-ardhika.vercel.app/publications",
    },
};

export default function PublicationsPage() {
    return (
        <main className="min-h-screen bg-black">
            <Publications />
            <NavBottom currentPath="/publications" />
        </main>
    );
}
