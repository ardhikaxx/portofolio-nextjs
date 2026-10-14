# ⚡ Portofolio Resmi Yanuar Ardhika — Full Stack Web & Mobile Developer

[![Next.js](https://img.shields.io/badge/Next.js-16.x-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://yanuar-ardhika.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE.md)
[![Author](https://img.shields.io/badge/Author-Yanuar%20Ardhika%20Rahmadhani%20Ubaidillah-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ardhikaxx)

Website portofolio digital profesional resmi milik **Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.** — Software Engineer & Full Stack Developer lulusan D4 Teknik Informatika Politeknik Negeri Jember. Dibangun menggunakan arsitektur modern **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4** dengan fokus pada estetika monokromatis minimalis, interaktivitas halus, performa tinggi (*Core Web Vitals*), serta optimasi SEO tingkat lanjut untuk mesin pencari Google.

🌐 **Akses Website Publik**: [https://yanuar-ardhika.vercel.app](https://yanuar-ardhika.vercel.app)

---

## ✨ Fitur Utama

### 1. 🖥️ Halaman Beranda Interaktif (Hero Section)
* **Background Canvas LetterGlitch**: Animasi matriks karakter digital responsif berbasis HTML5 Canvas yang dideferensiasikan agar menghemat beban CPU (*0ms Total Blocking Time*).
* **Mascot Interaktif**: Maskot avatar kustom (*PageMascot*) yang mengikuti pergerakan kursor mouse (*pointer-tracking*) dan memberikan reaksi animasi menyenangkan saat diklik (*boop & dizzy reactions*).
* **Typographic Headline Monokrom**: Tampilan modern memadukan tipografi `Jaro` dan `Poppins` yang di-*self-host* via `next/font/google` tanpa memblokir proses rendering browser.
* **Akses Cepat (Quick Action)**: Tombol navigasi langsung ke Profil Tentang Saya, CV Digital, serta Portal Ulasan & Testimoni Klien.

### 2. 🍱 Koleksi 27 Proyek Unggulan (Bento Grid)
* **Tata Letak Bento Grid Modern**: Susunan kartu dinamis dengan ritme visual bento (kartu lebar & standar) yang menyajikan 27 karya sistem informasi web, aplikasi mobile Flutter, dan sistem berbasis IoT.
* **Pencarian Real-Time & Filter Tahun**: Filter instan berdasarkan kata kunci (nama sistem, deskripsi, teknologi) dan kategori tahun (2024–2026).
* **Lazy Loading & Prioritas LCP**: Hanya kartu pertama yang dimuat sebagai prioritas LCP, sementara kartu lainnya dimuat secara *lazy load* guna menghemat penggunaan bandwidth data.

### 3. 🔍 Halaman Detail Proyek Teroptimasi SSG (`/project/[id]`)
* **Static Site Generation (SSG)**: Seluruh 27 halaman detail proyek di-render sebagai berkas HTML statis saat proses build (`generateStaticParams`), memungkinkan bot perayap Google mengindeks konten secara instan.
* **Perbesar Gambar Interaktif (Lightbox)**: Integrasi `react-photo-view` untuk inspeksi mockup antarmuka proyek dalam resolusi tinggi.
* **Metadata & Breadcrumbs Dinamis**: Setiap halaman proyek memiliki title, meta deskripsi, Open Graph, Twitter Cards, dan skema `BreadcrumbList` serta `SoftwareApplication` tersendiri.
* **Rekomendasi Proyek Terkait**: Kolom proyek terbaru dan carousel eksplorasi proyek lainnya di bagian bawah.

### 4. 👤 Profil Tentang Saya & Jejak Karier (`/about`)
* **Grafik Kontribusi GitHub Dinamis**: Integrasi API kontribusi GitHub real-time dengan pemilih tahun historis untuk menampilkan keaktifan komit kode.
* **Timeline Pengalaman Terpadu**: Rincian rekam jejak pengalaman kerja, magang industri, dan kepemimpinan riset PKM terdanai Kemendikbudristek.
* **Modal Kontak Interaktif**: Formulir kontak langsung yang memudahkan rekruter dan klien menghubungi via email atau saluran profesional.

### 5. 🏆 Penghargaan & Publikasi Ilmiah (`/awards` & `/publications`)
* **Etalase Penghargaan**: Dokumentasi pencapaian kompetisi teknologi informasi, pendanaan PKM nasional, dan rekognisi akademik.
* **Publikasi Jurnal Ilmiah**: Daftar karya tulis ilmiah dan artikel penelitian terindeks yang dipublikasikan pada konferensi dan jurnal nasional.

### 6. 📄 Curriculum Vitae (CV) Digital (`/cv`)
* Penampil berkas CV resmi interaktif berbasis PDF viewer dengan opsi unduh langsung dokumen resmi.

### 7. 🚀 Optimasi SEO Komprehensif & PageSpeed
* **60+ Targeted Keywords**: Menjangkau pencarian nama lengkap, spesialisasi teknologi, hingga Local SEO Jember & Jawa Timur.
* **Dynamic XML Sitemap (33 URL)**: Mengindeks seluruh halaman utama dan ke-27 proyek individual.
* **Schema.org Graph JSON-LD**: Skema terstruktur `Person`, `WebSite`, `ProfilePage`, dan `BreadcrumbList`.
* **Zero-Blocking Next Fonts**: Eliminasi render-blocking stylesheets Google Fonts.
* **Format AVIF/WebP & Responsive Caching**: Caching jangka panjang 1 tahun (`immutable`) untuk seluruh aset statis.

---

## 🛠️ Tech Stack & Dependensi

| Kategori | Teknologi |
| :--- | :--- |
| **Framework Utama** | [Next.js 16.x (App Router)](https://nextjs.org) & [React 19.x](https://react.dev) |
| **Bahasa Pemrograman** | [TypeScript 5.x](https://www.typescriptlang.org) |
| **Styling & Desain** | [Tailwind CSS v4.0](https://tailwindcss.com) (Modern CSS Engine) |
| **Tipografi** | `next/font/google` (`Geist`, `Geist_Mono`, `Poppins`, `Jaro`) & `NokiaFC22` (Lokal) |
| **Animasi & Interaktivitas** | Framer Motion, GSAP, Lenis (Smooth Scroll Desktop), HTML5 Canvas |
| **Komponen Gambar** | Next.js Image Optimization (AVIF & WebP), React Photo View, Plaiceholder |
| **Ikon Antarmuka** | React Icons (`react-icons/hi2`, `react-icons/fa`) |
| **Platform Deployment** | [Vercel](https://vercel.com) (Edge Network & Serverless Static Hosting) |

---

## 📁 Struktur Direktori

```
portofolio-nextjs/
├── app/
│   ├── about/                    # Halaman Tentang Saya (/about)
│   ├── awards/                   # Halaman Penghargaan & Prestasi (/awards)
│   ├── components/               # Komponen UI Reusable (NavBottom, Mascot, Glitch, Modal)
│   ├── cv/                       # Halaman Penampil CV (/cv)
│   ├── data/                     # Basis Data Master Statis (projects, awards, publications, experience)
│   ├── fonts/                    # Font lokal
│   ├── project/                  # Koleksi Proyek (/project)
│   │   └── [id]/                 # Halaman Detail Proyek SSG (/project/[id])
│   ├── publications/             # Halaman Publikasi Ilmiah (/publications)
│   ├── ui/                       # Komponen Section Halaman (hero, about, project, dll)
│   ├── favicon.ico               # Ikon Web
│   ├── globals.css               # Styling Global & Definisi Variabel Tailwind
│   ├── layout.tsx                # Root Layout, Metadata Global, dan Schema.org JSON-LD
│   ├── not-found.tsx             # Halaman Kustom 404 Error
│   ├── page.tsx                  # Beranda Utama (/)
│   ├── robots.ts                 # Generator Otomatis robots.txt
│   └── sitemap.ts                # Generator Otomatis Dynamic sitemap.xml (33 URL)
├── public/
│   ├── img/                      # Aset Gambar (Sticker mascot, avatar)
│   ├── mascots/                  # Lembar Sprite Animasi Maskot
│   ├── projects/                 # Aset Mockup WebP Proyek (1.webp s.d. 27.webp)
│   ├── qris.png                  # Kode QRIS Donasi Pengembang
│   └── CV_Yanuar_Ardhika.pdf     # Berkas Unduhan Resmi CV
├── next.config.mjs               # Konfigurasi Next.js, AVIF/WebP Image Optimizer, Caching Headers
├── package.json                  # Dependensi dan Skrip Proyek
└── tsconfig.json                 # Konfigurasi Kompiler TypeScript
```

---

## ⚙️ Panduan Menjalankan di Lingkungan Lokal

### 1. Kloning Repositori
```bash
git clone https://github.com/ardhikaxx/portofolio-nextjs.git
cd portofolio-nextjs
```

### 2. Pasang Dependensi
```bash
npm install
```

### 3. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka browser dan akses tautan lokal: `http://localhost:3000`

### 4. Eksekusi Build Produksi
```bash
npm run build
```
Perintah ini akan mengompilasi TypeScript, memvalidasi dependensi, dan men-generate 40 halaman statis HTML (SSG) secara optimal.

---

## 📚 Dokumentasi Sistem

* [⚖️ **LICENSE.md**](./LICENSE.md) — Ketentuan lisensi perangkat lunak resmi (**MIT License**).
* [🛡️ **SECURITY.md**](./SECURITY.md) — Kebijakan keamanan & pelaporan celah keamanan (*Responsible Disclosure*).
* [🤝 **CONTRIBUTING.md**](./CONTRIBUTING.md) — Pedoman kontribusi kode, standar kualitas, dan alur kerja Git.
* [📜 **CODE_OF_CONDUCT.md**](./CODE_OF_CONDUCT.md) — Pedoman perilaku dan integritas komunitas pengembang.
* [💬 **SUPPORT.md**](./SUPPORT.md) — Kanal bantuan teknis, konsultasi proyek, dan komunikasi resmi pengembang.
* [📋 **CHANGELOG.md**](./CHANGELOG.md) — Catatan riwayat pembaruan fitur terstruktur (*Keep a Changelog*).
* [📚 **CITATION.md**](./CITATION.md) — Format sitasi karya untuk keperluan akademik dan penelitian.
* [🔖 **citation.cff**](./citation.cff) — Format metadata sitasi mesin (*Citation File Format*).

---

## 💖 Dukungan & Donasi

Jika portofolio ini atau karya proyek terbuka oleh **Yanuar Ardhika** bermanfaat bagi Anda dan telah menginspirasi atau menghemat jam kerja Anda, Anda dapat menunjukkan apresiasi dengan memberikan traktiran kopi (donasi) melalui pemindaian kode **QRIS** di bawah ini:

<p align="center">
  <img src="./qris.png" alt="QRIS Donasi" width="300"/>
</p>

> Donasi sepenuhnya bersifat sukarela dan tidak mengikat. Seluruh portofolio dan showcase proyek tetap dapat diakses secara utuh tanpa donasi.

---

## ⚠️ Ketentuan Penggunaan & Lisensi

Kode sumber website ini dilisensikan di bawah [MIT License](./LICENSE.md). Anda dipersilakan untuk mempelajari arsitektur kode dan implementasinya. Namun, seluruh **aset gambar, logo, identitas diri, mockup proyek, dan konten pribadi milik Yanuar Ardhika Rahmadhani Ubaidillah dilindungi hak cipta (*All Rights Reserved*)** dan tidak boleh digunakan atau diklaim sebagai milik pribadi tanpa izin tertulis.

---

## 👨‍💻 Pengembang & Hak Cipta

Dirancang dan dibangun dengan dedikasi penuh oleh:  
**[Yanuar Ardhika Rahmadhani Ubaidillah (@ardhikaxx)](https://github.com/ardhikaxx)**  
*Lead Software Architect & Maintainer*

> **Copyright (c) 2024 - 2026 Yanuar Ardhika Rahmadhani Ubaidillah (@ardhikaxx). All Rights Reserved.**
