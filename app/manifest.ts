import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yanuar Ardhika — Jasa Pembuatan Website & Aplikasi Mobile",
    short_name: "Yanuar Ardhika",
    description:
      "Jasa pembuatan website murah mulai 400 ribu include hosting 1 tahun & domain web.id gratis, serta aplikasi mobile Android mulai 300 ribu.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/img/sticker.webp",
        sizes: "512x512",
        type: "image/webp",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Jasa Pembuatan Website",
        short_name: "Jasa Website",
        description: "Paket jasa pembuatan website murah mulai Rp400.000 include domain dan hosting",
        url: "/jasa-pembuatan-website",
        icons: [{ src: "/img/sticker.webp", sizes: "96x96" }],
      },
      {
        name: "Koleksi Proyek Portofolio",
        short_name: "Proyek",
        description: "27+ portofolio sistem web, aplikasi mobile, dan IoT",
        url: "/project",
        icons: [{ src: "/img/sticker.webp", sizes: "96x96" }],
      },
      {
        name: "Tentang Yanuar Ardhika",
        short_name: "Tentang",
        description: "Profil lengkap dan pengalaman profesional Yanuar Ardhika",
        url: "/about",
        icons: [{ src: "/img/sticker.webp", sizes: "96x96" }],
      },
    ],
  };
}
