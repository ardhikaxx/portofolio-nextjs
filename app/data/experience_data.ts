export interface Experience {
    id: string;
    company: string;
    location: string;
    locationShort?: string;
    role: string;
    period: string;
    type?: string;
    description: string;
    technologies: string[];
    responsibilities: string[];
    logo: string;
}

export const experiences: Experience[] = [
    {
        id: "2",
        company: "Kantor Pertanahan Kabupaten Bondowoso",
        location: "Jl. Taman Makam Pahlawan No. 43, Dabasah, Kec. Bondowoso, Kabupaten Bondowoso, Jawa Timur 68211",
        locationShort: "Bondowoso, Indonesia",
        role: "Tenaga Teknis Survei & Pemetaan",
        period: "2026 - Sekarang",
        type: "MagangHub Batch 3A 2026",
        description: "Program MagangHub Batch 3A 2026 sebagai Tenaga Teknis Survei & Pemetaan di Kantor Pertanahan Kabupaten Bondowoso (Kementerian ATR/BPN) yang berfokus pada kegiatan inventarisasi, deliniasi batas bidang tanah, dan pengolahan data spasial serta tekstual.",
        technologies: ["AutoCAD"],
        responsibilities: [
            "Melakukan inventarisasi dan identifikasi data spasial maupun tekstual (termasuk daftar KW 4, 5, 6) untuk menyusun peta kerja.",
            "Melakukan pengumpulan data primer di lapangan melalui deliniasi batas bidang tanah, wawancara masyarakat, dan pengambilan titik koordinat (geotagging) menggunakan aplikasi.",
            "Mengolah data spasial dan tekstual hasil lapangan (overlay, editing, dan topologi), memvalidasi kesesuaian atribut, serta menyusun daftar bidang tanah KW 4, 5, 6 berdasarkan kejelasan posisinya."
        ],
        logo: "/img/experience/logo2.webp"
    },
    {
        id: "1",
        company: "PT. Wesclic Indonesia Neotech",
        location: "Ngestiharjo, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55182",
        locationShort: "Yogyakarta, Indonesia",
        role: "Full-Stack Web Developer",
        period: "Agustus 2025 - Desember 2025",
        type: "Magang / Internship",
        description: "Magang sebagai Full-Stack Web Developer di perusahaan yang bergerak dibidang Teknologi Informasi dengan layanan perencanaan, pembuatan, pengembangan, perbaikan serta perawatan infrastruktur IT.",
        technologies: ["React", "Next.js", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
        responsibilities: [
            "Mengembangkan dan memelihara proyek aplikasi web yang ada di perusahaan",
            "Berpartisipasi dalam code review dan agile development",
            "Mengoptimalkan sistem kinerja proyek pada perusahaan"
        ],
        logo: "/img/experience/logo1.webp"
    },
];