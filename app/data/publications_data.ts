export interface Publication {
    id: number;
    title: string;
    year: number;
    links: { label: string; url: string }[];
    authors: string[];
    abstract: string;
}

export const publications: Publication[] = [
    {
        id: 1,
        title: 'Implementasi Aplikasi Mobile Untuk Manajemen Data Kesehatan Posyandu Dengan Integrasi API Web Studi Kasus Posyandu Seruni, Desa Mlandingan Kulon, Situbondo',
        year: 2026,
        links: [
            { label: 'Lihat Publikasi', url: 'https://sipora.polije.ac.id/57810/' },
        ],
        authors: ['Yanuar Ardhika Rahmadhani Ubaidillah'],
        abstract: 'Pengelolaan data kesehatan di Posyandu Seruni saat ini dilakukan secara konvensional menggunakan buku KIA (Kesehatan Ibu dan Anak) dan register manual. Metode ini mengakibatkan efisiensi rendah, risiko kehilangan dokumen, dan akses terbatas bagi orang tua untuk memantau pertumbuhan anak mereka secara mandiri. Studi ini bertujuan untuk mendigitalisasi sistem pengelolaan data kesehatan posyandu melalui pengembangan aplikasi pengelolaan data posyandu bayi dan balita berbasis mobile yang terintegrasi dengan sistem web kader melalui Web API. Aplikasi ini dikembangkan menggunakan framework Flutter dan bahasa pemrograman Dart dengan arsitektur client-server. Fitur utama yang diimplementasikan meliputi grafik pemantauan pertumbuhan antropometri secara real-time, akses ke jadwal posyandu, dan materi pendidikan kesehatan digital. Hasil evaluasi dari 31 responden menunjukkan tingkat kegunaan 99% dan fungsionalitas 96%. Implementasi teknologi ini telah berhasil meningkatkan transparansi data dan partisipasi aktif orang tua dalam memantau perkembangan anak menuju masyarakat yang lebih sehat.',
    },
    {
        id: 2,
        title: 'Implementasi Aplikasi Layanan Posyandu Balita Berbasis Website Dan Mobile Untuk Digitalisasi Di Posyandu Seruni Situbondo',
        year: 2025,
        links: [
            { label: 'Lihat Publikasi', url: 'https://journal.unhas.ac.id/index.php/panritaabdi/article/view/45287' },
        ],
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
    {
        id: 3,
        title: 'Pelatihan Keuangan dan Pemasaran Untuk Meningkatkan Kapabilitas UMKM Ilham Meubel',
        year: 2024,
        links: [
            { label: 'Garuda', url: 'https://garuda.kemdiktisaintek.go.id/documents/detail/4727760' },
            { label: 'ResearchGate', url: 'https://www.researchgate.net/publication/387444942_Pelatihan_Keuangan_dan_Pemasaran_Untuk_Meningkatkan_Kapabilitas_UMKM_Ilham_Meubel' },
        ],
        authors: [
            'Oryza Ardhiarisca',
            'Rahma Rina Wijayanti',
            'Zilvanhisna Emka Fitri',
            'Avisenna Harkat',
            'M. Avan Dwi Adi Nur Kholiq',
            'Muhammad Hanip',
            'Yanuar Ardhika Rahmadhani Ubaidillah',
        ],
        abstract: 'Kegiatan pengabdian ini dilakukan di Usaha Mikro Kecil dan Menengah (UMKM) Ilham Meubel yang berlokasi di Bondowoso. Ilham Meubel merupakan UMKM yang bergerak dalam bidang meubelair. Tujuan dari dilaksankannya pengabdian yakni membantu Ilham Meubel untuk menyelesaikan permasalahan yang dihadapi yakni terkait pemasaran dan juga keuangan. Pemasaran yang dilakukan di mitra selama ini masihlah pemasaran tradisional. Sedangkan pada bidang keuangan, mitra belum melakukan pencatatan keuangan. Metode kegiatan pengabdian ini yakni survey lapang, ceramah, demonstrasi, praktek, dan diskusi. Pelaksana kegiatan terdiri dari empat orang dosen dan tiga orang mahasiswa dengan kepakaran pada bidang ekonomi, akuntansi, manajemen, dan teknologi informasi yang mampu menyelesaikan permasalahan mitra pada bidang pemasaran dan keuangan. Kegiatan ini berlangsung selama delapan bulan yang terbagi menjadi tiga tahapan yakni survei, persiapan pembuatan aplikasi keuangan berbasis excel dan juga website serta tahap akhir adalah pelatihan. Pengabdian ini diharapkan memberikan dampak nyata kepada mitra terkait manajerial usaha.',
    },
];
