# 🤝 Panduan Kontribusi (Contributing Guidelines)

Terima kasih atas minat dan ketertarikan Anda pada repositori **Next.js Portfolio — Yanuar Ardhika**!

Proyek ini dirancang dan dikelola secara mandiri oleh **Yanuar Ardhika Rahmadhani Ubaidillah (@ardhikaxx)**. Mengingat portofolio ini dilindungi lisensi **Proprietary Software License (All Rights Reserved)**, segala bentuk kontribusi saran, perbaikan bug, atau penyempurnaan performa diatur sesuai panduan berikut.

---

## 📌 Kebijakan Hak Cipta & Kepemilikan Kode

1. **Kepemilikan Kode**: Seluruh basis kode, konsep visual, struktur UI/UX, dan aset portofolio adalah hak milik eksklusif **Yanuar Ardhika Rahmadhani Ubaidillah (@ardhikaxx)**.
2. **Larangan Plagiarisme**: Anda dilarang menghapus atribusi pengembang asli, lisensi, atau mengklaim kepemilikan atas portofolio ini (lihat [LICENSE.md](./LICENSE.md)).
3. **Pemberian Hak Kontribusi**: Setiap *pull request* yang Anda kirimkan dan disetujui oleh pemilik repositori akan menjadi bagian dari basis kode proyek tanpa pengalihan klaim hak cipta komersial.

---

## 🛠️ Standar Kualitas & Pengembangan Kode

Bagi Anda yang ingin berkontribusi dalam perbaikan bug (*bugfix*) atau optimasi performa:

* **Framework & Runtime**: Node.js v20+, Next.js 16.x (App Router), dan React 19.x.
* **Bahasa Pemrograman**: **TypeScript 5.x** dengan konfigurasi ketat (*strict mode*). Hindari penggunaan tipe `any` tanpa alasan yang sangat mendasar.
* **Styling**: Memanfaatkan **Tailwind CSS v4** dengan pendekatan utility-first. Pertahankan konsistensi tema monokromatis gelap (`bg-black`, `text-white`, aksen netral).
* **Tipografi**: Selalu gunakan font resmi yang telah terkonfigurasi melalui `next/font/google` (`font-jaro`, `font-poppins`, `font-sans`, `font-mono`). **Dilarang** menyisipkan `@import` font eksternal di CSS karena akan memblokir rendering peramban.
* **Optimasi Gambar**: Gunakan komponen `<Image />` bawaan Next.js dengan atribut `alt` deskriptif dan atribut `sizes` yang proporsional guna mencegah *Cumulative Layout Shift* (CLS).
* **Verifikasi Build**: Sebelum mengajukan perubahan, pastikan kode lulus kompilasi tanpa error:
  ```bash
  npm run build
  npm run lint
  ```

---

## 🌿 Alur Kerja Git (Git Workflow)

1. **Kloning Repositori**:
   ```bash
   git clone https://github.com/ardhikaxx/portofolio-nextjs.git
   cd portofolio-nextjs
   ```

2. **Buat Branch Baru**:
   Gunakan awalan branch yang jelas:
   * `feat/nama-fitur` (untuk fitur baru)
   * `fix/nama-bug` (untuk perbaikan masalah)
   * `perf/nama-optimasi` (untuk peningkatan performa)
   * `docs/nama-dokumentasi` (untuk pembaruan dokumen)

   ```bash
   git checkout -b perf/optimasi-lcp-hero
   ```

3. **Format Pesan Komit (Conventional Commits)**:
   Gunakan standar [Conventional Commits](https://www.conventionalcommits.org/) dalam Bahasa Indonesia atau Inggris:
   * `feat: tambahkan fitur filter baru pada halaman proyek`
   * `fix: perbaikan layout shift pada mascot hero section`
   * `perf: optimasi waktu muat gambar webp dan avif`
   * `docs: perbarui panduan kontribusi dan sitasi karya`

4. **Kirimkan Pull Request (PR)**:
   * Pastikan satu PR berfokus pada satu tujuan spesifik.
   * Cantumkan deskripsi jelas mengenai perubahan yang dilakukan, alasan perubahan, dan bukti bahwa `npm run build` sukses 100%.

---

## 🐞 Melaporkan Bug & Masalah Tampilan

Bila Anda menemukan kendala tampilan, kesalahan teks, atau galat fungsionalitas:
* Buat laporan baru melalui [GitHub Issues](https://github.com/ardhikaxx/portofolio-nextjs/issues).
* Jelaskan jenis perangkat yang digunakan (desktop/mobile), sistem operasi, peramban (Chrome/Safari/Firefox), serta langkah-langkah untuk mereproduksi masalah tersebut.
* Lampirkan tangkapan layar jika berkaitan dengan antarmuka visual.
* Untuk celah keamanan sensitif, ikuti panduan pelaporan di [SECURITY.md](./SECURITY.md).

---

## 💖 Dukungan Pengembangan

Jika Anda menyukai struktur portofolio ini dan ingin mendukung pengembang, silakan berikan apresiasi traktiran kopi melalui kode **QRIS** yang tertera pada [README.md](./README.md#--dukungan--donasi).

---

**Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. (@ardhikaxx)**  
*Lead Software Architect & Maintainer*
