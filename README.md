# Yanuar Ardhika — Personal Portfolio

Portofolio pribadi berbasis **Next.js 16 (App Router)** yang menampilkan proyek, penghargaan, publikasi, dan pengalaman dengan visual interaktif modern.

## Fitur

- **Loading screen** — Animasi counter persen 0→100% di pojok kiri bawah, hanya muncul saat refresh
- **Hero section** — Typographic headline dengan efek Three.js (Dither + StickerPeel)
- **Smooth scroll** — Scrolling halus pakai Lenis
- **Page transition** — Animasi fade/slide antar halaman
- **Image lightbox** — Klik gambar project untuk perbesar (react-photo-view)
- **Blur placeholder** — Efek blur halus saat gambar loading (Plaiceholder)
- **Navigasi floating** — Bottom navigation pill dengan animasi spring
- **Halaman proyek** — Grid proyek dengan search & filter tahun, parallax cards
- **Halaman penghargaan** — Grid penghargaan dengan search & filter
- **Halaman publikasi** — Daftar publikasi dengan search & filter
- **Halaman about** — Profil, sosial media, dan pengalaman kerja
- **404 page** — Halaman not-found kustom
- **Responsive** — Mobile-first, glassmorphism, dark theme
- **SEO** — Metadata, Open Graph, JSON-LD, sitemap, robots.txt

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Animasi 3D | Three.js, @react-three/fiber, @react-three/postprocessing |
| Animasi UI | Framer Motion, GSAP |
| Smooth Scroll | Lenis |
| Image | Plaiceholder, react-photo-view |
| Ikon | react-icons |
| Notifikasi | react-toastify |
| Font | Geist (Google Fonts), NokiaFC22 (lokal) |
| Deploy | Vercel (static export) |

## Struktur Proyek

```
app/
├── components/          # Komponen reusable (LoadingScreen, NavBottom, dll)
├── data/                # Data statis (proyek, penghargaan, dll)
├── fonts/               # Konfigurasi font lokal
├── ui/                  # Halaman UI sections (hero, about, project, dll)
├── project/[id]/        # Halaman detail proyek
├── layout.tsx           # Root layout
├── page.tsx             # Halaman utama (/)
├── not-found.tsx        # Halaman 404
├── globals.css          # Global styles + Tailwind
├── sitemap.ts           # Sitemap config
└── robots.ts            # Robots.txt config
public/
├── fonts/               # Font file lokal
├── img/                 # Gambar (foto profil, sticker)
└── projects/            # Gambar proyek (1.webp - 34.webp)
```

## Cara Menjalankan

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint
```

## Tentang Saya

**Yanuar Ardhika Rahmadhani Ubaidillah** — Web & Mobile Developer

Mahasiswa Teknik Informatika di Politeknik Negeri Jember yang berpengalaman dalam pengembangan web (Laravel, Next.js) dan mobile (Flutter). Aktif dalam proyek PKM, pengembangan sistem informasi, dan aplikasi berbasis IoT.

- GitHub: [@ardhikaxx](https://github.com/ardhikaxx)
- LinkedIn: [Yanuar Ardhika](https://www.linkedin.com/in/yanuar-ardhika-rahmadhani-ubaidillah/)
- Instagram: [@ardhxkaa_](https://www.instagram.com/ardhxkaa_)
