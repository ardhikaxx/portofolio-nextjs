import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Jaro } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import NavBottom from "./components/NavBottom";
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL, SITE_CONFIG } from './config/site';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jasa Pembuatan Website Murah & Aplikasi Mobile | Yanuar Ardhika",
    template: "%s | Yanuar Ardhika",
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [
    { name: SITE_CONFIG.fullName, url: SITE_URL },
    { name: SITE_CONFIG.name, url: SITE_CONFIG.social.github },
  ],
  creator: SITE_CONFIG.fullName,
  publisher: SITE_CONFIG.fullName,
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
    url: SITE_URL,
    siteName: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
    title: "Jasa Pembuatan Website Murah & Aplikasi Mobile | Yanuar Ardhika",
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Jasa Pembuatan Website Murah Mulai 400rb & Aplikasi Mobile — Yanuar Ardhika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Murah & Aplikasi Mobile | Yanuar Ardhika",
    description: SITE_CONFIG.description,
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@ardhikaxx",
    site: "@ardhikaxx",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
      "x-default": SITE_URL,
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
      "@id": `${SITE_URL}/#person`,
      name: SITE_CONFIG.fullName,
      givenName: "Yanuar Ardhika",
      familyName: "Rahmadhani Ubaidillah",
      additionalName: "Ardhika",
      alternateName: ["Yanuar Ardhika", "Ardhika", "ardhikaxx", "ardhxkaa", "Yanuar Ardhika Polije"],
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      jobTitle: "Full Stack Web & Mobile Developer",
      description:
        "Software Engineer & Full Stack Developer berpengalaman di Laravel, Flutter, Next.js, React, PHP, MySQL, dan IoT. Lulusan Sarjana Terapan Komputer (S.Tr.Kom.) D4 Teknik Informatika Politeknik Negeri Jember.",
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
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Sarjana Terapan Komputer (S.Tr.Kom.)",
        credentialCategory: "degree",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Politeknik Negeri Jember",
        },
      },
      knowsAbout: [
        "Jasa Pembuatan Website Murah",
        "Jasa Pembuatan Aplikasi Mobile",
        "Jasa Tugas IT Mahasiswa",
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
        "ESP32 Microcontroller",
        "Tailwind CSS",
        "Bootstrap",
        "Decision Support System SPK",
        "Enterprise Resource Planning ERP",
        "Point of Sale POS Kasir",
      ],
      knowsLanguage: ["Indonesian", "English"],
      sameAs: [
        SITE_URL,
        "https://yanuar-ardhika.vercel.app/",
        SITE_CONFIG.social.github,
        SITE_CONFIG.social.linkedin,
        SITE_CONFIG.social.instagram,
        SITE_CONFIG.social.reviews,
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Jasa Pembuatan Website & Aplikasi Mobile — Yanuar Ardhika",
      image: `${SITE_URL}/og-image.jpg`,
      url: `${SITE_URL}/jasa-pembuatan-website`,
      telephone: "+6285933648537",
      priceRange: "Rp300.000 - Rp2.500.000",
      currenciesAccepted: "IDR",
      paymentAccepted: "Cash, Bank Transfer, QRIS",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jember",
        addressRegion: "Jawa Timur",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.1724,
        longitude: 113.7007,
      },
      areaServed: [
        { "@type": "Country", name: "Indonesia" },
        { "@type": "City", name: "Jember" },
        { "@type": "City", name: "Surabaya" },
        { "@type": "City", name: "Malang" },
        { "@type": "City", name: "Sidoarjo" },
        { "@type": "City", name: "Banyuwangi" },
        { "@type": "City", name: "Jakarta" },
        { "@type": "City", name: "Bandung" },
        { "@type": "City", name: "Yogyakarta" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Katalog Jasa Pembuatan Website & Aplikasi Mobile",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Website (Include Hosting 1 Tahun & Domain .web.id)",
              description:
                "Pembuatan website toko online, sistem penjualan UMKM, kasir POS, company profile, dan landing page modern siap online.",
            },
            price: "400000",
            priceCurrency: "IDR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Pembuatan Aplikasi Mobile (Android / Flutter)",
              description:
                "Pembuatan aplikasi mobile Android untuk kasir POS, operasional bisnis, inventory, dan monitoring UMKM berbasis Flutter.",
            },
            price: "300000",
            priceCurrency: "IDR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Tugas & Projek IT / Skripsi Mahasiswa",
              description:
                "Bantuan pengerjaan projek IT kuliah, tugas pemrograman, dan program skripsi Teknik Informatika & Sistem Informasi bergaransi bimbingan dan full source code.",
            },
            price: "300000",
            priceCurrency: "IDR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jasa Sistem Informasi & Kasir POS UMKM",
              description:
                "Sistem pencatatan penjualan, kasir kas, manajemen inventaris stok produk, dan cetak invoice struk.",
            },
            price: "400000",
            priceCurrency: "IDR",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Yanuar Ardhika — Jasa Pembuatan Website & Portofolio",
      alternateName: [
        "Yanuar Ardhika Portfolio",
        "yanuarardhika.web.id",
        "Jasa Website Yanuar Ardhika",
        "Portofolio Yanuar Ardhika",
      ],
      description:
        "Website resmi Yanuar Ardhika Rahmadhani Ubaidillah — Full Stack Web & Mobile Developer serta Jasa Pembuatan Website Murah & Aplikasi Mobile.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: ["id-ID", "en-US"],
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/project?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Yanuar Ardhika — Full Stack Web & Mobile Developer",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#person`,
      },
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa biaya jasa pembuatan website di Yanuar Ardhika?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biaya jasa pembuatan website mulai dari Rp400.000, sudah include hosting aktif selama 1 tahun dan domain .web.id gratis tanpa biaya tersembunyi. Sangat cocok untuk UMKM, toko online, sistem kasir POS, dan company profile.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah paket website Rp400 ribu sudah termasuk hosting dan domain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, betul. Paket website mulai Rp400.000 sudah include hosting cloud aktif selama 1 tahun dan nama domain resmi .web.id. Website langsung siap online dan bisa diakses publik.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa biaya jasa pembuatan aplikasi mobile Android?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jasa pembuatan aplikasi mobile Android (berbasis Flutter) mulai dari Rp300.000 untuk kebutuhan kasir toko POS, operasional bisnis UMKM, maupun tugas kuliah mahasiswa.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah melayani jasa tugas koding dan program skripsi mahasiswa IT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, kami melayani pengerjaan tugas pemrograman, projek semester IT, dan program skripsi/tugas akhir untuk mahasiswa Teknik Informatika dan Sistem Informasi dengan garansi bimbingan, revisi, dan full source code.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama waktu pengerjaan website atau aplikasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Waktu pengerjaan umumnya berkisar antara 2 sampai 7 hari kerja tergantung kompleksitas fitur yang diminta. Untuk tugas koding mahasiswa yang urgent, bisa diselesaikan dalam 1-2 hari.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara memesan atau berkonsultasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anda bisa langsung menghubungi WhatsApp di 085933648537 (fast respon) atau mengunjungi portofolio resmi di https://yanuarardhika.web.id/.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${jaro.variable} bg-black text-white`}
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Jember" />
        <meta name="geo.position" content="-8.1724;113.7007" />
        <meta name="ICBM" content="-8.1724, 113.7007" />
        <meta name="google-site-verification" content="google21da1fa6eeb78504.html" />
        <meta name="google-site-verification" content="21da1fa6eeb78504" />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="image_src" href={`${SITE_URL}/og-image.jpg`} />
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
        <SmoothScroll>{children}</SmoothScroll>
        <NavBottom />
        <Analytics />
      </body>
    </html>
  );
}
