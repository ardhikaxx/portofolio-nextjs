import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const BASE_URL = "https://yanuar-ardhika.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yanuar Ardhika - Web & Mobile Developer",
    template: "%s | Yanuar Ardhika",
  },
  description:
    "Portofolio Yanuar Ardhika Rahmadhani Ubaidillah — mahasiswa Teknik Informatika Politeknik Negeri Jember, Web & Mobile Developer berpengalaman di Laravel, Flutter, Next.js, dan IoT.",
  keywords: [
    "Yanuar Ardhika",
    "Yanuar Ardhika Rahmadhani",
    "Yanuar Ardhika Polije",
    "Web Developer Jember",
    "Mobile Developer",
    "Flutter Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Teknik Informatika Polije",
    "Portofolio Developer Indonesia",
  ],
  authors: [{ name: "Yanuar Ardhika Rahmadhani Ubaidillah", url: BASE_URL }],
  creator: "Yanuar Ardhika Rahmadhani Ubaidillah",
  publisher: "Yanuar Ardhika Rahmadhani Ubaidillah",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "Yanuar Ardhika",
    title: "Yanuar Ardhika - Web & Mobile Developer",
    description:
      "Portofolio Yanuar Ardhika Rahmadhani Ubaidillah — Web & Mobile Developer berpengalaman di Laravel, Flutter, Next.js, dan IoT.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1456,
        height: 816,
        alt: "Yanuar Ardhika - Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanuar Ardhika - Web & Mobile Developer",
    description:
      "Portofolio Yanuar Ardhika Rahmadhani Ubaidillah — Web & Mobile Developer berpengalaman di Laravel, Flutter, Next.js, dan IoT.",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yanuar Ardhika Rahmadhani Ubaidillah",
  alternateName: "Yanuar Ardhika",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.png`,
  jobTitle: "Web & Mobile Developer",
  description:
    "Mahasiswa Teknik Informatika Politeknik Negeri Jember yang berpengalaman dalam pengembangan web, mobile, dan IoT.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Politeknik Negeri Jember",
  },
  knowsAbout: [
    "Web Development",
    "Mobile Development",
    "Laravel",
    "Flutter",
    "Next.js",
    "IoT",
    "PHP",
    "Dart",
    "TypeScript",
  ],
  sameAs: [
    "https://github.com/ardhikaxx",
    "https://www.linkedin.com/in/yanuar-ardhika-rahmadhani-ubaidillah/",
    "https://www.instagram.com/ardhxkaa_",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
