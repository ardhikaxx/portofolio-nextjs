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
    {
        id: 2,
        title: 'Implementasi Aplikasi Layanan Posyandu Balita Berbasis Website Dan Mobile Untuk Digitalisasi Di Posyandu Seruni Situbondo',
        year: 2025,
        link: 'https://journal.unhas.ac.id/index.php/panritaabdi/article/view/45287',
        authors: [
            'Rafika Dwi Shefira',
            'Nike Wulan Avrilia',
            'Yanuar Ardhika Rahmadhani Ubaidillah',
            'Insan Hidayah',
            'Herawati Landara Sinaga',
            'Aji Seto Arifianto',
            'Bety Etikasari',
            'Hermawan Arief Putranto',
        ],
        abstract: 'Posyandu Seruni, yang berlokasi di Dusun Kampung Gudang, Desa Mlandingan Kulon, Kabupaten Situbondo, merupakan pos kesehatan masyarakat aktif yang melayani 40 bayi dan balita. Namun, proses pencatatan dan pelaporan aktivitasnya masih dilakukan secara manual menggunakan dokumen fisik, yang menyebabkan berbagai masalah seperti risiko kehilangan data, kesalahan pencatatan, keterlambatan pelaporan, dan rendahnya keterlibatan orang tua dalam memantau perkembangan anak. Untuk mengatasi tantangan ini, tim PKM-PM mengembangkan Sistem Informasi Manajemen Data Kesehatan berbasis web dan mobile untuk Posyandu Bayi dan Balita. Tujuan program ini adalah untuk mendigitalisasi proses pencatatan dan pelaporan data Posyandu, meningkatkan efisiensi dan kualitas layanan, serta mendorong partisipasi aktif masyarakat, khususnya dari orang tua, dalam memantau kesehatan anak secara berkelanjutan. Metode yang digunakan meliputi identifikasi kebutuhan mitra melalui wawancara, pelaksanaan sosialisasi dan pelatihan bagi bidan, kader Posyandu, dan orang tua balita, diikuti dengan evaluasi kepuasan pengguna dan distribusi buku panduan pengguna. Hasil menunjukkan bahwa aplikasi tersebut diterima dengan baik oleh semua pengguna. Evaluasi dari bidan dan kader menunjukkan kepuasan 100% dalam hal kegunaan, fungsionalitas, kinerja aplikasi, dan pelatihan. Sementara itu, orang tua balita memberikan nilai tinggi pada kegunaan (99%), fungsionalitas (96%), pelatihan (94%), dan kinerja aplikasi (83%). Hasil-hasil ini menunjukkan bahwa program ini berhasil dilaksanakan dan selaras dengan kebutuhan pengguna.',
    },
];
