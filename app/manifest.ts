import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yanuar Ardhika — Full Stack Web & Mobile Developer",
    short_name: "Yanuar Ardhika",
    description:
      "Portofolio profesional Yanuar Ardhika — Software Engineer & Full Stack Developer berpengalaman di Laravel, Flutter, Next.js, React, dan IoT.",
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
      {
        name: "Curriculum Vitae",
        short_name: "CV",
        description: "Curriculum Vitae & Resume profesional Yanuar Ardhika",
        url: "/cv",
        icons: [{ src: "/img/sticker.webp", sizes: "96x96" }],
      },
    ],
  };
}
