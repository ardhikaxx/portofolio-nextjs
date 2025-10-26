import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TargetCursor from "./components/TargetCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yanuar Ardhika - Web & Mobile Developer",
  description: "Portfolio of Yanuar Ardhika - Junior Web & Mobile Developer passionate about technology and creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={true}
          targetSelector=".cursor-target"
        />
        {children}
      </body>
    </html>
  );
}