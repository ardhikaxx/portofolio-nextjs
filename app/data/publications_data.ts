export interface Publication {
    id: number;
    title: string;
    year: number;
    link: string;
    authors: string[];
    abstract: string;
}

export const publications: Publication[] = [
    {
        id: 1,
        title: 'Implementasi Aplikasi Mobile Untuk Manajemen Data Kesehatan Posyandu Dengan Integrasi API Web Studi Kasus Posyandu Seruni, Desa Mlandingan Kulon, Situbondo',
        year: 2026,
        link: 'https://sipora.polije.ac.id/57810/',
        authors: ['Yanuar Ardhika Rahmadhani Ubaidillah'],
        abstract: 'Pengelolaan data kesehatan di Posyandu Seruni saat ini dilakukan secara konvensional menggunakan buku KIA (Kesehatan Ibu dan Anak) dan register manual. Metode ini mengakibatkan efisiensi rendah, risiko kehilangan dokumen, dan akses terbatas bagi orang tua untuk memantau pertumbuhan anak mereka secara mandiri. Studi ini bertujuan untuk mendigitalisasi sistem pengelolaan data kesehatan posyandu melalui pengembangan aplikasi pengelolaan data posyandu bayi dan balita berbasis mobile yang terintegrasi dengan sistem web kader melalui Web API. Aplikasi ini dikembangkan menggunakan framework Flutter dan bahasa pemrograman Dart dengan arsitektur client-server. Fitur utama yang diimplementasikan meliputi grafik pemantauan pertumbuhan antropometri secara real-time, akses ke jadwal posyandu, dan materi pendidikan kesehatan digital. Hasil evaluasi dari 31 responden menunjukkan tingkat kegunaan 99% dan fungsionalitas 96%. Implementasi teknologi ini telah berhasil meningkatkan transparansi data dan partisipasi aktif orang tua dalam memantau perkembangan anak menuju masyarakat yang lebih sehat.',
    },
];
