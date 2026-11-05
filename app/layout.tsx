import type { Metadata } from "next";
import { Caveat, Onest, Prata } from "next/font/google";
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
  title: "Квартиры посуточно в Пестово — напрямую от хозяйки",
  description:
    "Одно-, двух- и трёхкомнатные квартиры посуточно в Пестово от хозяйки. От 2000 ₽/сутки, ТВ, Wi-Fi, техника и посуда. Заселение по паспорту или водительскому удостоверению. Звоните с 8:00 до 22:00.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${onest.variable} ${prata.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
