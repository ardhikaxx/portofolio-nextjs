import type { Metadata } from "next";
import Project from "../ui/project";
import NavBottom from "../components/NavBottom";

export const metadata: Metadata = {
    title: "Proyek",
    description:
        "Kumpulan proyek web dan mobile karya Yanuar Ardhika — meliputi sistem informasi, aplikasi Flutter, website Laravel, dan proyek PKM yang telah didanai.",
    alternates: {
        canonical: "https://yanuar-ardhika.vercel.app/project",
    },
    openGraph: {
        title: "Proyek Yanuar Ardhika",
        description:
            "Kumpulan proyek web dan mobile karya Yanuar Ardhika — sistem informasi, aplikasi Flutter, website Laravel, dan proyek PKM.",
        url: "https://yanuar-ardhika.vercel.app/project",
    },
};

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-black">
            <Project />
            <NavBottom currentPath="/project" />
        </main>
    );
}
