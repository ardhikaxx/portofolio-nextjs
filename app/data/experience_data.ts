export interface Experience {
    id: string;
    company: string;
    location: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
    responsibilities: string[];
    logo: string;
}

export const experiences: Experience[] = [
    {
        id: "1",
        company: "PT. Wesclic Indonesia Neotech",
        location: "Ngestiharjo, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55182",
        role: "Full-Stack Web Developer",
        period: "Agustus 2025 - Desember 2025",
        description: "Magang sebagai Full-Stack Web Developer perusahaan yang bergerak dibidang Teknologi Informasi dengan layanan perencanaan, pembuatan, pengembangan, perbaikan serta perawatan infrastruktur IT.",
        technologies: ["React", "Next.js", "TypeScript", "Laravel", "Mysql", "Tailwind CSS"],
        responsibilities: [
            "Mengembangkan dan memelihara proyek aplikasi web yang ada di perusahaan",
            "Berpartisipasi dalam code review dan agile development",
            "Mengoptimalkan sistem kinerja proyek pada perusahaan"
        ],
        logo: "/img/experience/logo1.png"
    },
];