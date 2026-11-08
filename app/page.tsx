import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FAQ, FLATS, PHONE, PHONE_HREF } from "@/lib/data";
import { SITE_URL } from "@/lib/site";
import "./home.css";

export const metadata: Metadata = {
  title: "Квартиры посуточно в Пестово — напрямую от хозяйки, от 2 000 ₽/сутки",
  description:
    "Одно-, двух- и трёхкомнатные квартиры посуточно в Пестово на ул. Чапаева. Напрямую от хозяйки, без посредников и комиссии. ТВ, Wi-Fi, техника, бельё и полотенца. Заселение по паспорту. На связи 8:00–22:00.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Квартиры посуточно в Пестово — напрямую от хозяйки",
    description:
      "Одно-, двух- и трёхкомнатные квартиры на улице Чапаева. Без посредников и комиссии, от 2 000 ₽/сутки.",
    type: "website",
    locale: "ru_RU",
    url: "/",
  },
};

const SHORT_DESC: Record<string, string> = {
  "chapaeva-14-3room": "Просторный вариант для комфортного проживания. ТВ, Wi-Fi, техника и всё необходимое для быта.",
  "chapaeva-14-2room": "Удобная квартира со всем необходимым: от Wi-Fi и ТВ до стиральной машины и кухонной посуды.",
  "chapaeva-15-1room": "Уютное пространство для поездки или командировки. Есть бытовая техника, посуда, бельё и полотенца.",
  "chapaeva-17-1room": "Всё необходимое для самостоятельного проживания: кухня, техника, Wi-Fi и удобства для повседневных дел.",
};

const AMENITIES = [
  "Телевизор и Wi-Fi",
  "Стиральная машина",
  "Холодильник",
  "Газовая плита",
  "Чайник и микроволновка",
  "Посуда",
  "Утюг и гладильная доска",
  "Бельё и полотенца",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Квартиры от хозяйки — посуточно в Пестово",
  description:
    "Одно-, двух- и трёхкомнатные квартиры посуточно в Пестово напрямую от хозяйки. Без посредников и комиссии.",
  url: SITE_URL,
  telephone: "+79217058876",
  priceRange: "от 2000 ₽/сутки",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Чапаева",
    addressLocality: "Пестово",
    addressRegion: "Новгородская область",
    addressCountry: "RU",
  },
  openingHours: "Mo-Su 08:00-22:00",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.i },
  })),
};

export default function HomePage() {
  return (
    <main className="v3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="v3-topline">
        <div className="v3-wrap v3-topline-in">
          <span>Пестово · Новгородская область</span>
          <span>Напрямую от хозяйки · без комиссии</span>
        </div>
      </div>
      <header className="v3-header">
        <div className="v3-wrap v3-nav">
          <a className="v3-brand" href="#">
            <span className="v3-brand-mark">К</span>
            <span className="v3-brand-text">
              Квартиры от хозяйки
              <small>Посуточно в Пестово</small>
            </span>
          </a>
          <nav className="v3-navlinks" aria-label="Основная навигация">
            <a href="#apartments">Квартиры</a>
            <a href="#comfort">Условия</a>
            <Link href="/orgs">Командировочным</Link>
            <a href="#faq">Вопросы</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <a className="v3-nav-phone" href={PHONE_HREF}>{PHONE}</a>
        </div>
      </header>

      <section className="v3-hero">
        <div className="v3-wrap v3-hero-grid">
          <div>
            <div className="v3-eyebrow">Уютное проживание в Пестово</div>
            <h1 className="v3-h1">
              Ваша квартира
              <br />в Пестово — <em>без посредников</em>
            </h1>
            <p className="v3-hero-copy">
              Одно-, двух- и трёхкомнатные квартиры на улице Чапаева. Напрямую
              от хозяйки: без комиссий, сложных форм и лишних ожиданий. Просто
              позвоните — обсудим даты.
            </p>
            <div className="v3-hero-actions">
              <a className="v3-button" href={PHONE_HREF}>
                Позвонить хозяйке <span aria-hidden="true">↗</span>
              </a>
              <a className="v3-button v3-button--light" href="#apartments">
                Выбрать квартиру
              </a>
            </div>
            <div className="v3-hero-note">
              <span>
                <b className="v3-check">✓</b> На связи ежедневно 8:00–22:00
              </span>
              <span>
                <b className="v3-check">✓</b> Без предоплаты
              </span>
            </div>
          </div>
          <div className="v3-hero-visual">
            <div className="v3-hero-photo">
              <Image
                src="/images/chapaeva-14-2room/chapaeva-01.jpg"
                alt="Двухкомнатная квартира посуточно на улице Чапаева, 14 в Пестово"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 560px"
              />
              <div className="v3-photo-shade" />
            </div>
            <div className="v3-price-float">
              <small>Стоимость от</small>
              <strong>2 000 ₽</strong>
              <span>за сутки проживания</span>
            </div>
          </div>
        </div>
      </section>

      <div className="v3-trust-strip">
        <div className="v3-wrap v3-trust-grid">
          <div className="v3-trust-item"><span className="v3-trust-icon">⌂</span><div><b>От хозяйки</b><small>Без посредников</small></div></div>
          <div className="v3-trust-item"><span className="v3-trust-icon">₽</span><div><b>Без комиссии</b><small>Прямое бронирование</small></div></div>
          <div className="v3-trust-item"><span className="v3-trust-icon">✓</span><div><b>Всё необходимое</b><small>Бельё и полотенца</small></div></div>
          <div className="v3-trust-item"><span className="v3-trust-icon">▤</span><div><b>Для командировок</b><small>Чеки и документы</small></div></div>
        </div>
      </div>

      <section id="apartments" className="v3-section">
        <div className="v3-wrap">
          <div className="v3-section-head">
            <div>
              <div className="v3-eyebrow">Выберите подходящий вариант</div>
              <h2 className="v3-h2">
                Четыре квартиры
                <br />
                на Чапаева
              </h2>
            </div>
            <p className="v3-section-intro">
              Все квартиры оборудованы для комфортного проживания. Уточнить
              свободные даты и детали можно по телефону.
            </p>
          </div>
          <div className="v3-cards">
            {FLATS.map((f) => (
              <article key={f.slug} className="v3-flat-card">
                <div className="v3-flat-image">
                  <Image
                    src={f.photo!}
                    alt={`${f.name} — квартира посуточно в Пестово`}
                    fill
                    sizes="(max-width: 600px) 100vw, 540px"
                  />
                  <span className="v3-flat-tag">{f.tag}</span>
                </div>
                <div className="v3-flat-body">
                  <div className="v3-flat-meta">{f.addr}</div>
                  <h3 className="v3-flat-title">{f.name.split(" на ")[0]}</h3>
                  <p className="v3-flat-desc">{SHORT_DESC[f.slug]}</p>
                  <div className="v3-flat-bottom">
                    <div className="v3-flat-price">
                      {f.price}
                      <small>за сутки</small>
                    </div>
                    <Link className="v3-text-link" href={`/flats/${f.slug}`}>
                      Фото и условия ↗
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-features v3-section" id="comfort">
        <div className="v3-wrap v3-features-grid">
          <div>
            <div className="v3-eyebrow">Всё для удобства</div>
            <h2 className="v3-h2">
              Приезжайте —
              <br />
              всё необходимое уже есть
            </h2>
            <p className="v3-features-copy">
              В каждой квартире предусмотрено всё необходимое для комфортного
              проживания — от бытовой техники до кухонной посуды.
            </p>
            <div className="v3-amenities">
              {AMENITIES.map((a) => (
                <div key={a} className="v3-amenity">
                  <i>✓</i> {a}
                </div>
              ))}
            </div>
          </div>
          <div className="v3-rules-card">
            <h3>Условия проживания</h3>
            <div className="v3-rule"><span>Заезд</span><b>с 14:00</b></div>
            <div className="v3-rule"><span>Выезд</span><b>до 12:00</b></div>
            <div className="v3-rule"><span>Залог</span><b>2 000 ₽</b></div>
            <div className="v3-rule"><span>Документ для заселения</span><b>Паспорт или водительское удостоверение</b></div>
            <div className="v3-rule"><span>Связь с хозяйкой</span><b>Ежедневно, 8:00–22:00</b></div>
          </div>
        </div>
      </section>

      <section className="v3-business v3-section" id="business">
        <div className="v3-wrap v3-business-grid">
          <div>
            <div className="v3-eyebrow v3-eyebrow--light">Для организаций и ИП</div>
            <h2 className="v3-h2">Удобное размещение для командировочных</h2>
            <p className="v3-business-intro">
              Работаем с частными гостями, организациями и индивидуальными
              предпринимателями. Можно оформить проживание и получить документы
              для отчётности.
            </p>
            <div className="v3-business-list">
              <div className="v3-business-point"><b>Кассовый чек</b><span>Выдаётся при каждой оплате</span></div>
              <div className="v3-business-point"><b>Оплата по счёту</b><span>Для юридических лиц и ИП</span></div>
              <div className="v3-business-point"><b>Отчётные документы</b><span>Для командировок и бухгалтерии</span></div>
              <div className="v3-business-point"><b>Прямой контакт</b><span>Без посредников и комиссии</span></div>
            </div>
          </div>
          <div className="v3-business-call">
            <small>Нужно разместить сотрудника?</small>
            <h3>
              Обсудим условия
              <br />и даты по телефону
            </h3>
            <a className="v3-button" href={PHONE_HREF}>Позвонить хозяйке ↗</a>
            <p>Открыт вид деятельности «предоставление мест для краткосрочного проживания».</p>
            <Link className="v3-text-link" href="/orgs">Реквизиты и документы ↗</Link>
          </div>
        </div>
      </section>

      <section className="v3-section v3-faq" id="faq">
        <div className="v3-wrap">
          <div className="v3-section-head">
            <div>
              <div className="v3-eyebrow">Частые вопросы</div>
              <h2 className="v3-h2">Всё, что спрашивают<br />перед бронированием</h2>
            </div>
            <p className="v3-section-intro">
              Не нашли ответ — позвоните, на связи ежедневно с 8:00 до 22:00.
            </p>
          </div>
          <div className="v3-faq-list">
            {FAQ.map((f) => (
              <details key={f.q} className="v3-faq-item">
                <summary>{f.q}</summary>
                <p>{f.i}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-contact v3-section" id="contacts">
        <div className="v3-wrap">
          <div className="v3-contact-panel">
            <div>
              <div className="v3-eyebrow">Прямое бронирование</div>
              <h2 className="v3-h2">Позвоните — уточним даты за минуту</h2>
              <p>На связи ежедневно с 8:00 до 22:00. Если звоните ночью — пожалуйста, дождитесь утра.</p>
            </div>
            <div className="v3-contact-actions">
              <a className="v3-big-phone" href={PHONE_HREF}>{PHONE}</a>
              <a className="v3-button" href={PHONE_HREF}>Позвонить сейчас ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="v3-footer">
        <div className="v3-wrap v3-footer-inner">
          <span><b>Квартиры от хозяйки</b> · Пестово · ул. Чапаева</span>
          <span>Без посредников · Без комиссии · Прямое бронирование</span>
          <a href={PHONE_HREF}>{PHONE}</a>
        </div>
      </footer>
      <div className="v3-mobile-call">
        <a className="v3-button" href={PHONE_HREF}>Позвонить хозяйке · {PHONE}</a>
      </div>
    </main>
  );
}
