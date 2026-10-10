import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

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
    "Portofolio Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — lulusan Teknik Informatika Politeknik Negeri Jember, Web & Mobile Developer berpengalaman di Laravel, Flutter, Next.js, dan IoT.",
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
  authors: [{ name: "Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.", url: BASE_URL }],
  creator: "Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
  publisher: "Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
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
      "Portofolio Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Web & Mobile Developer berpengalaman di Laravel, Flutter, Next.js, dan IoT.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Yanuar Ardhika - Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanuar Ardhika - Web & Mobile Developer",
    description:
      "Portofolio Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. — Web & Mobile Developer berpengalaman di Laravel, Flutter, Next.js, dan IoT.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.",
  alternateName: "Yanuar Ardhika",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
  jobTitle: "Web & Mobile Developer",
  description:
    "Lulusan Teknik Informatika Politeknik Negeri Jember yang berpengalaman dalam pengembangan web, mobile, dan IoT.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${BASE_URL}/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="image_src" href={`${BASE_URL}/og-image.jpg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
