import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Jaro } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import NavBottom from "./components/NavBottom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const jaro = Jaro({
  variable: "--font-jaro",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const BASE_URL = "https://yanuar-ardhika.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Jasa Pembuatan Website Murah & Aplikasi Mobile | Yanuar Ardhika",
    template: "%s | Jasa Pembuatan Website & Aplikasi Mobile",
  },
  description:
    "Jasa pembuatan website murah mulai 400 ribu include hosting 1 tahun + domain web.id, dan jasa aplikasi mobile Android/Flutter mulai 300 ribu. Melayani sistem penjualan UMKM, kasir POS, company profile, dan tugas/skripsi IT mahasiswa. WhatsApp: 085933648537.",
  keywords: [
    // Nama lengkap & variasi ejaan pencarian
    "Yanuar Ardhika",
    "Yanuar Ardhika Rahmadhani",
    "Yanuar Ardhika Rahmadhani Ubaidillah",
    "Yanuar Ardhika S.Tr.Kom.",
    "Yanuar Ardhika Polije",
    "Yanuar Ardhika Jember",
    "Yanuar Ardhika Developer",
    "Yanuar Ardhika Portfolio",
    "ardhikaxx",
    "ardhxkaa",
    "ardhxkaa_",
    
    // Profesi & Spesialisasi
    "Web Developer",
    "Mobile Developer",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Programmer Indonesia",
    "Software Engineer Indonesia",
    "Web Developer Indonesia",
    "Mobile Developer Indonesia",
    "Android Developer Indonesia",
    "Full Stack Developer Indonesia",

    // Lokasi Geografis (Local SEO)
    "Web Developer Jember",
    "Mobile Developer Jember",
    "Programmer Jember",
    "Software Engineer Jember",
    "IT Consultant Jember",
    "Developer Jember",
    "Jasa Pembuatan Website Jember",
    "Jasa Pembuatan Aplikasi Jember",
    "Web Developer Jawa Timur",
    "Programmer Jawa Timur",
    "Developer Surabaya",
    "Developer Malang",

    // Tech Stack & Framework
    "Laravel Developer",
    "Flutter Developer",
    "Next.js Developer",
    "React Developer",
    "PHP Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "Bootstrap Developer",
    "MySQL Database",
    "RESTful API Development",
    "IoT Developer",
    "Internet of Things",
    "ESP32 Developer",
    "Microcontroller",
    "Machine Learning Developer",
    "Naive Bayes NLP",
    "SPK PROMETHEE",
    "Decision Support System",
    "ERP Developer",
    "Point of Sale POS",

    // Afiliasi Kampus & Akademik
    "Politeknik Negeri Jember",
    "Teknik Informatika Polije",
    "Jurusan Teknologi Informasi Polije",
    "JTI Polije",
    "Alumni Polije",
    "Lulusan Terbaik Polije",
    "S.Tr.Kom. Polije",
    "PKM Kemendikbudristek",
    "PKM-PM 2024",
    "AITeC Politeknik Negeri Jember",

    // Layanan & Search Intent Jasa Website, Mobile & Mahasiswa
    "Jasa Pembuatan Website Murah",
    "Jasa Pembuatan Website 400 Ribu",
    "Jasa Pembuatan Website UMKM",
    "Jasa Pembuatan Sistem Penjualan",
    "Jasa Pembuatan Website Toko Online",
    "Jasa Pembuatan Aplikasi Mobile Murah",
    "Jasa Pembuatan Aplikasi Mobile 300 Ribu",
    "Jasa Pembuatan Aplikasi Android",
    "Jasa Pembuatan Aplikasi Flutter",
    "Jasa Pembuatan Website Laravel",
    "Jasa Buat Website Include Domain Hosting",
    "Jasa Sistem Kasir POS UMKM",
    "Jasa Pembuatan Sistem Informasi Penjualan",
    "Jasa Tugas IT Mahasiswa",
    "Jasa Pembuatan Tugas Pemrograman",
    "Jasa Projek IT Mahasiswa",
    "Jasa Skripsi Teknik Informatika",
    "Jasa Pembuatan Web Skripsi",
    "Jasa Pembuatan Aplikasi Skripsi",
    "Jasa Tugas Akhir Informatika",
    "Jasa Joki Tugas Coding",
    "Jasa Pembuatan Aplikasi Murah Mahasiswa",
    "Jasa Pembuatan Website Jember",
    "Jasa Pembuatan Aplikasi Jember",
    "Jasa Programmer Freelance Murah",
    "Portofolio Developer Indonesia",
    "Portofolio Web Developer",
    "Portofolio Software Engineer",
    "Jasa Pembuatan Website",
    "Jasa Pembuatan Aplikasi Mobile",
    "Jasa Pembuatan Sistem Informasi",
    "Jasa Pembuatan Website Perusahaan",
    "Hire Full Stack Developer Indonesia",
    "Freelance Web Developer Indonesia",

    // Proyek Unggulan
    "PPAk FEB UNESA",
    "Website PPAk FEB UNESA",
    "Aplikasi Label Gizi MBG",
    "Label Gizi Makanan Bergizi Gratis",
    "Holong Siregar Law Office",
    "Aurora Vet Petcare",
    "SPK KIP-K Polije",
    "SI-BESTI Tidur Ibu",
    "APOCARE Farmasi",
    "SIPKES Polije Poli Gigi",
    "RSPD Klaten",
    "Posyandu Digital PKM-PM",
    "GlucoWise Diabetes App",
    "AITeC VII 2025",
    "PutraKJ Trans",
    "Casim Coffee",
    "Rezti Batik Jember"
  ],
  authors: [
    { name: "Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.", url: BASE_URL },
    { name: "Yanuar Ardhika", url: "https://github.com/ardhikaxx" }
  ],
  creator: "Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
  publisher: "Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
  category: "technology",
  classification: "Software Engineering, Full Stack Web Development, Mobile Development Portfolio",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Yanuar Ardhika",
    lastName: "Rahmadhani Ubaidillah",
    username: "ardhikaxx",
    gender: "male",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: BASE_URL,
    siteName: "Portofolio Yanuar Ardhika",
    title: "Jasa Pembuatan Website Murah & Aplikasi Mobile | Yanuar Ardhika",
    description:
      "Jasa pembuatan website murah mulai 400 ribu include hosting 1 tahun + domain web.id & aplikasi mobile mulai 300 ribu. Melayani sistem penjualan UMKM, toko online, dan tugas IT mahasiswa. WhatsApp: 085933648537.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Jasa Pembuatan Website & Aplikasi Mobile — Yanuar Ardhika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah & Aplikasi Mobile | Yanuar Ardhika",
    description:
      "Jasa pembuatan website murah mulai 400 ribu include hosting 1 tahun + domain web.id & aplikasi mobile mulai 300 ribu. Hubungi WhatsApp: 085933648537.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@ardhikaxx",
    site: "@ardhikaxx",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "id-ID": BASE_URL,
      "x-default": BASE_URL,
    },
  },
  verification: {
    google: "21da1fa6eeb78504",
  },
  icons: {
    icon: [
      { url: "/img/sticker.webp", type: "image/webp" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/img/sticker.webp",
    apple: "/img/sticker.webp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
      givenName: "Yanuar Ardhika",
      familyName: "Rahmadhani Ubaidillah",
      additionalName: "Ardhika",
      alternateName: ["Yanuar Ardhika", "Ardhika", "ardhikaxx", "ardhxkaa"],
      url: BASE_URL,
      image: `${BASE_URL}/og-image.jpg`,
      jobTitle: "Full Stack Web & Mobile Developer",
      description:
        "Software Engineer & Full Stack Developer berpengalaman di Laravel, Flutter, Next.js, React, PHP, MySQL, dan IoT. Lulusan D4 Teknik Informatika Politeknik Negeri Jember.",
      gender: "Male",
      nationality: {
        "@type": "Country",
        name: "Indonesia",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jember",
        addressRegion: "Jawa Timur",
        addressCountry: "ID",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Politeknik Negeri Jember",
        alternateName: "Polije",
        url: "https://polije.ac.id",
      },
      knowsAbout: [
        "Web Development",
        "Mobile Application Development",
        "Full Stack Development",
        "Laravel Framework",
        "Flutter Framework",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "PHP",
        "Dart",
        "MySQL",
        "RESTful API",
        "Internet of Things IoT",
        "Tailwind CSS",
        "Bootstrap",
        "Machine Learning",
        "Decision Support System SPK",
        "Enterprise Resource Planning ERP",
      ],
      knowsLanguage: ["Indonesian", "English"],
      sameAs: [
        "https://github.com/ardhikaxx",
        "https://www.linkedin.com/in/yanuar-ardhika-rahmadhani-ubaidillah/",
        "https://www.instagram.com/ardhxkaa_",
        "https://page-reviews.vercel.app/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      "name": "Jasa Pembuatan Website & Aplikasi Mobile — Yanuar Ardhika",
      "image": `${BASE_URL}/og-image.jpg`,
      "url": BASE_URL,
      "telephone": "+6285933648537",
      "priceRange": "Rp300.000 - Rp2.500.000",
      "currenciesAccepted": "IDR",
      "paymentAccepted": "Cash, Bank Transfer, QRIS",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jember",
        "addressRegion": "Jawa Timur",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.1724,
        "longitude": 113.7007
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Indonesia"
        },
        {
          "@type": "City",
          "name": "Jember"
        },
        {
          "@type": "City",
          "name": "Surabaya"
        },
        {
          "@type": "City",
          "name": "Malang"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Katalog Jasa Pembuatan Website & Aplikasi",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Jasa Pembuatan Website (Include Hosting 1 Tahun & Domain .web.id)",
              "description": "Pembuatan website toko online, sistem penjualan UMKM, company profile, dan landing page cepat."
            },
            "price": "400000",
            "priceCurrency": "IDR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Jasa Pembuatan Aplikasi Mobile (Android / Flutter)",
              "description": "Pembuatan aplikasi mobile Android untuk kasir POS, operasional bisnis, dan UMKM."
            },
            "price": "300000",
            "priceCurrency": "IDR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Jasa Tugas & Projek IT / Skripsi Mahasiswa",
              "description": "Bantuan pengerjaan projek IT, tugas pemrograman, dan program skripsi Teknik Informatika & Sistem Informasi."
            },
            "price": "300000",
            "priceCurrency": "IDR"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Portofolio Yanuar Ardhika",
      alternateName: "Yanuar Ardhika Portfolio",
      description:
        "Website portofolio resmi Yanuar Ardhika Rahmadhani Ubaidillah — Full Stack Web & Mobile Developer.",
      publisher: {
        "@id": `${BASE_URL}/#person`,
      },
      inLanguage: ["id-ID", "en-US"],
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/project?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profilepage`,
      url: BASE_URL,
      name: "Yanuar Ardhika — Full Stack Web & Mobile Developer",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      about: {
        "@id": `${BASE_URL}/#person`,
      },
      mainEntity: {
        "@id": `${BASE_URL}/#person`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Berapa biaya jasa pembuatan website di Yanuar Ardhika?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Biaya jasa pembuatan website mulai dari Rp400.000, sudah include hosting aktif selama 1 tahun dan domain .web.id gratis. Cocok untuk UMKM, toko online, sistem kasir/penjualan, dan company profile."
          }
        },
        {
          "@type": "Question",
          "name": "Berapa biaya jasa pembuatan aplikasi mobile Android?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jasa pembuatan aplikasi mobile Android (berbasis Flutter) mulai dari Rp300.000 untuk kebutuhan kasir POS, operasional bisnis, maupun tugas kuliah/skripsi."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah melayani jasa pembuatan tugas, projek IT, dan skripsi mahasiswa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ya, kami melayani pengerjaan tugas pemrograman, projek IT kuliah, dan program skripsi/tugas akhir untuk mahasiswa Teknik Informatika dan Sistem Informasi dengan garansi bimbingan dan source code lengkap."
          }
        },
        {
          "@type": "Question",
          "name": "Bagaimana cara memesan atau berkonsultasi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anda bisa langsung menghubungi WhatsApp di 085933648537 atau mengunjungi portofolio resmi di https://yanuar-ardhika.vercel.app/."
          }
        }
      ]
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${jaro.variable} bg-black text-white`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta name="google-site-verification" content="google21da1fa6eeb78504.html" />
        <meta name="google-site-verification" content="21da1fa6eeb78504" />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${BASE_URL}/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="image_src" href={`${BASE_URL}/og-image.jpg`} />
        <link rel="icon" href="/img/sticker.webp" type="image/webp" />
        <link rel="shortcut icon" href="/img/sticker.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/img/sticker.webp" />
        {/* Preload LCP Hero Sticker Image directly from initial HTML document */}
        <link
          rel="preload"
          as="image"
          href="/img/sticker.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-black text-white min-h-screen">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <NavBottom />
      </body>
    </html>
  );
}
