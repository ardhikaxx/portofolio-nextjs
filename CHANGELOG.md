# 📋 Catatan Riwayat Rilis (Changelog)

Format dokumen ini mengacu pada standar [Keep a Changelog](https://keepachangelog.com/id/1.0.0/) dan mematuhi prinsip [Semantic Versioning (SemVer)](https://semver.org/spec/v2.0.0.html).

---

## [2.1.0] — 2026-10-14

### ⚡ Performa & Optimasi PageSpeed
* **Eliminasi Render-Blocking CSS Font**: Mengganti impor eksternal Google Fonts (`@import` dan `<link rel="stylesheet">`) dengan `next/font/google` (`Geist`, `Geist_Mono`, `Poppins`, `Jaro`) yang di-*self-host* secara otomatis tanpa jeda jaringan.
* **Next.js Image Optimizer**: Mengaktifkan konversi modern ke format `AVIF` dan `WebP` responsif dengan `deviceSizes` dan `imageSizes` yang teroptimasi, serta masa *cache* 1 tahun (`immutable`).
* **LCP Image Prioritization**: Membatasi prioritas pramuat (*preload*) hanya pada kartu pertama (`priority={index === 0}`) dan menerapkan *lazy-loading* pada kartu proyek di bawah layar.
* **Pengurangan TBT (Total Blocking Time)**: Menunda siklus looping animasi `LetterGlitch` selama 200ms pasca-hidrasi awal untuk membebaskan *main-thread* CPU.
* **Optimasi Scroll Layar Sentuh**: Mengisolasi inisialisasi Lenis khusus untuk perangkat desktop ber-pointer halus (`pointer: fine`), memberikan performa *scroll* 120Hz bawaan peramban tanpa jank di perangkat bergerak.

### 📚 Dokumentasi Repositori & Fitur
* **Dokumentasi Lengkap Proyek**: Penambahan file standar open-source institusional: `README.md`, `CHANGELOG.md`, `CITATION.md`, `citation.cff`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, dan `SUPPORT.md`.
* **Kanal Donasi QRIS**: Penambahan modul apresiasi kopi sukarela berbasis pemindaian QRIS terintegrasi pada dokumentasi resmi.

---

## [2.0.0] — 2026-10-14

### 🚀 Fitur Baru
* **Penambahan Proyek #26**: Website Aplikasi Label Gizi MBG — Sistem transparansi pangan & pengelolaan label nutrisi harian untuk program Makanan Bergizi Gratis (MBG) berbasis QR Code permanen.
* **Penambahan Proyek #27**: Website Profil Resmi PPAk FEB UNESA + CMS Admin — Sistem profil kelembagaan Program Studi Pendidikan Profesi Akuntan FEB Universitas Negeri Surabaya dengan 27 rute terintegrasi.
* **Static Site Generation (SSG) 40 Halaman Penuh**: Transformasi halaman dinamis `/project/[id]` menjadi Server Component dengan `generateStaticParams()` dan `generateMetadata()`.
* **Dynamic XML Sitemap 33 URL**: Otomasi pembuatan sitemap (`/sitemap.xml`) yang memetakan seluruh halaman statis dan ke-27 proyek individual dengan prioritas indeks terstruktur.
* **Schema.org BreadcrumbList & SoftwareApplication**: Integrasi skema terstruktur JSON-LD di setiap halaman proyek untuk memaksimalkan peluang *Rich Snippets* di Google Search.
* **Verifikasi Google Search Console Ganda**: Penambahan meta tag verifikasi eksplisit di `<head>` melengkapi berkas HTML statis.

### 🎨 Tampilan & UI
* **Penyempurnaan Tampilan Detail Proyek**: Penghapusan badge kategori ("Web System & ERP", dll) pada kartu utama, bilah samping, dan kartu bawah untuk tampilan yang lebih bersih, fokus, dan minimalis.

---

## [1.2.0] — 2026-10-12

### 🚀 Fitur & Penyesuaian
* **Penambahan Proyek #24 & #25**: Penambahan sistem informasi klinik hewan Aurora Vet & Petcare serta website korporat kantor advokat Holong Siregar Law Office.
* **Bento Grid Layout Redesign**: Pembaruan tata letak koleksi proyek dengan ritme kartu bento modern 3-kolom desktop dan 2-kolom tablet.
* **Penyempurnaan Maskot Hero**: Penyesuaian ukuran laptop sticker mascot agar lebih proporsional pada tampilan mobile dan desktop.

---

## [1.1.0] — 2026-07-17

### 🚀 Fitur Baru
* **Image Lightbox**: Integrasi `react-photo-view` untuk inspeksi tangkapan layar proyek beresolusi tinggi.
* **Smooth Scroll**: Penerapan Lenis untuk pengalaman navigasi gulir halus.
* **Blur Placeholder**: Efek transisi halus saat gambar proyek sedang dimuat.
* **Animasi Transisi Halaman**: Penerapan Framer Motion & GSAP untuk perpindahan rute mulus.

### 🐛 Perbaikan Bug
* Perbaikan mount guard canvas Three.js dari galat null alpha.
* Perbaikan loading screen agar hanya muncul saat refresh awal dan tidak menghalangi interaksi navigasi klien.

---

## [1.0.0] — 2026-07-01

### 🚀 Rilis Awal
* Peluncuran portofolio resmi Yanuar Ardhika Rahmadhani Ubaidillah berbasis Next.js 16 (App Router), React 19, TypeScript, dan Tailwind CSS.
* Showcase 23 proyek sistem informasi, web korporat, aplikasi mobile, dan IoT.
* Halaman Penghargaan, Publikasi Ilmiah, CV Viewer, dan Tentang Saya.
* Tema gelap monokromatis dengan estetika glassmorphism.
