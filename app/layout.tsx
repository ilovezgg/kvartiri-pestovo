import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
  verification: {
    google: "wG7K84aPoCsbFv8b_5BU2WuEyEBb5APmCSyCBpjcCe8",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${onest.variable} ${prata.variable} ${caveat.variable}`}>
      <body>
        {children}
        {/* Яндекс.Метрика (ID 114509384) */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=114509384', 'ym');

          ym(114509384, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});

          // Цель «клик по телефону» — автоцель Метрики (ID 691616135), вручную не шлём`}
        </Script>
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/114509384" style={{ position: "absolute", left: -9999 }} alt="" /></div>
        </noscript>
      </body>
    </html>
  );
}
