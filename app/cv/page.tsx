import type { Metadata } from "next";
import CVPageClient from "../ui/cv-page-client";

export const metadata: Metadata = {
  title: "CV",
  description: "CV Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. - Web & Mobile Developer",
  alternates: {
    canonical: "https://yanuar-ardhika.vercel.app/cv",
  },
  openGraph: {
    title: "CV Yanuar Ardhika",
    description: "CV Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom. - Web & Mobile Developer",
    url: "https://yanuar-ardhika.vercel.app/cv",
  },
};

export default function CVPage() {
  return <CVPageClient />;
}
