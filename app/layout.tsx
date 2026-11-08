import type { Metadata } from "next";
import { Caveat, Onest, Prata } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-onest",
});

const prata = Prata({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
  variable: "--font-prata",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Квартиры посуточно в Пестово — напрямую от хозяйки, от 2 000 ₽/сутки",
    template: "%s | Квартиры от хозяйки, Пестово",
  },
  description:
    "Одно-, двух- и трёхкомнатные квартиры посуточно в Пестово от хозяйки. От 2000 ₽/сутки, ТВ, Wi-Fi, техника и посуда. Заселение по паспорту или водительскому удостоверению. Звоните с 8:00 до 22:00.",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Квартиры посуточно в Пестово от хозяйки" }],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${onest.variable} ${prata.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
