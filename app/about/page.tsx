import type { Metadata } from "next";
import About from "../ui/about";
import NavBottom from "../components/NavBottom";

export const metadata: Metadata = {
    title: "Tentang Saya",
    description:
        "Profil Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — lulusan Teknik Informatika Politeknik Negeri Jember, Software Engineer berpengalaman di Laravel, Flutter, Next.js, dan IoT.",
    alternates: {
        canonical: "https://yanuar-ardhika.vercel.app/about",
    },
    openGraph: {
        title: "Tentang Yanuar Ardhika, S.Tr.Kom.",
        description:
            "Profil Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — lulusan Teknik Informatika Politeknik Negeri Jember, Software Engineer.",
        url: "https://yanuar-ardhika.vercel.app/about",
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-linear-to-br from-blue-900 to-purple-900">
            <About />
            <NavBottom currentPath="/about" />
        </main>
    );
}
