import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

/* Локальные шрифты: провайдер блокирует fonts.googleapis.com,
   поэтому next/font/google не работает — файлы лежат в public/fonts */
const onest = localFont({
  src: [
    { path: "../public/fonts/onest-cyrillic.woff2", weight: "100 900", style: "normal" },
    { path: "../public/fonts/onest-latin-v.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-onest",
});

const prata = localFont({
  src: [
    { path: "../public/fonts/prata-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/prata-latin.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  variable: "--font-prata",
});

const caveat = localFont({
  src: [
    { path: "../public/fonts/caveat-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/caveat-latin.woff2", weight: "500", style: "normal" },
  ],
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
