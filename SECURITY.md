# 🛡️ Kebijakan Keamanan (Security Policy)

Keamanan informasi, integritas data, dan privasi pengunjung merupakan komitmen utama dalam pengembangan dan pemeliharaan website **Modern Interactive Portfolio & Engineering Showcase** karya **Yanuar Ardhika Rahmadhani Ubaidillah (@ardhikaxx)**.

Repositori ini dikembangkan dengan mematuhi prinsip-prinsip pengembangan perangkat lunak modern yang aman (*Secure Software Development Life Cycle*), standar keamanan web terkini (*OWASP Top 10*), serta proteksi privasi pengunjung.

---

## 📦 Versi yang Didukung (Supported Versions)

Pembaruan keamanan, penambalan celah (*security patches*), dan pemeliharaan dependensi aktif diberikan untuk versi berikut:

| Versi | Status Keamanan | Dukungan |
| :--- | :--- | :--- |
| **v2.x** | ✅ Aktif (*Active Security Support*) | Fitur baru, audit dependensi, & patch celah keamanan |
| **v1.x** | ⚠️ Terbatas (*Maintenance Only*) | Hanya perbaikan keamanan kritis |
| **< 1.0.0** | ❌ Tidak Didukung (*End of Life*) | Tidak menerima pembaruan lagi |

---

## 🔒 Lapisan Keamanan Bawaan (Built-in Security Implementations)

1. **Arsitektur Static Site Generation (SSG) & Minimisasi Attack Surface**:
   * Halaman website dan 27+ detail proyek di-render statis menggunakan `generateStaticParams()` dan Server Components pada Next.js.
   * Tidak ada koneksi database publik yang terekspos secara langsung ke browser, menghilangkan potensi eksploitasi SQL Injection di sisi front-end.

2. **HTTP Security Headers & Modern Transport**:
   * Konfigurasi header keamanan tingkat tinggi diterapkan langsung melalui `next.config.mjs`:
     * `X-DNS-Prefetch-Control: on`
     * `X-Frame-Options: SAMEORIGIN` (Mencegah serangan *clickjacking*)
     * `X-Content-Type-Options: nosniff` (Mencegah *MIME-type sniffing*)
     * `Referrer-Policy: strict-origin-when-cross-origin` (Melindungi data referer sensitif)
     * `Permissions-Policy: camera=(), microphone=(), geolocation=()` (Menonaktifkan akses hardware sensitif tanpa izin)

3. **Proteksi Cross-Site Scripting (XSS)**:
   * Seluruh komponen antarmuka dibangun menggunakan React 19 dan TypeScript dengan sanitasi otomatis bawaan terhadap input data dinamis.
   * Tidak menggunakan `dangerouslySetInnerHTML` tanpa mekanisme sanitasi ketat.

4. **Integritas Aset & Optimasi Media**:
   * Format gambar otomatis dikonversi dan disajikan melalui WebP/AVIF terkompresi dengan domain origin terbatas pada Next.js Image Optimization.
   * Penghindaran pemuatan skrip pihak ketiga yang tidak terverifikasi (bebas *external render-blocking script*).

5. **Supply Chain Security & Dependensi**:
   * Seluruh pustaka eksternal diverifikasi dan diaudit secara berkala menggunakan `npm audit`.
   * Versi pustaka dikunci melalui `package-lock.json` untuk mencegah serangan rantai pasok (*supply chain attacks*).

---

## 🚨 Melaporkan Celah Keamanan (Reporting a Vulnerability)

Jika Anda menemukan potensi kerentanan, bug keamanan, atau celah (*security vulnerability*) dalam repositori atau situs web produksi:

> [!CAUTION]
> **JANGAN MEMBUAT LAPORAN TERBUKA** melalui fitur publik *GitHub Issues* demi mencegah eksploitasi oleh pihak yang tidak bertanggung jawab sebelum patch keamanan dirilis.

Silakan kirimkan laporan celah keamanan secara privat dan bertanggung jawab (*Responsible Disclosure*) melalui kontak resmi berikut:

* **Email Resmi**: `ardhikayanuar58@gmail.com`
* **Subjek Email**: `[SECURITY VULNERABILITY] - Portfolio Next.js`
* **GitHub Security Advisory**: Melalui tab [Security Advisories](https://github.com/ardhikaxx/portofolio-nextjs/security/advisories/new) (jika tersedia).

### Informasi yang Sangat Membantu dalam Laporan Anda:
1. Deskripsi lengkap mengenai celah keamanan yang ditemukan.
2. Langkah-langkah detail atau *Proof-of-Concept (PoC)* untuk mereproduksi temuan tersebut.
3. Estimasi potensi dampak (*impact assessment*) terhadap website atau data pengunjung.
4. Saran penanganan atau mitigasi (jika ada).

---

## ⏱️ Komitmen & Penanganan

* **Konfirmasi Penerimaan**: Kami berkomitmen merespons laporan dalam kurun waktu **1x24 jam** sejak email diterima.
* **Proses Verifikasi**: Investigasi dan verifikasi celah dilakukan sesegera mungkin di lingkungan terisolasi.
* **Rilis Patch**: Perbaikan (*security hotfix*) akan segera di-deploy ke repositori dan server produksi.
* **Penghargaan & Atribusi**: Nama atau identitas pelapor yang bertanggung jawab (*ethical researcher*) akan dicantumkan pada catatan rilis `CHANGELOG.md` sebagai bentuk apresiasi (kecuali jika meminta anonim).

---

Terima kasih atas kontribusi dan kerja sama Anda dalam menjaga integritas dan keamanan ekosistem digital portofolio ini.

**Yanuar Ardhika Rahmadhani Ubaidillah (@ardhikaxx)**  
*Full Stack Software Engineer & Maintainer*
