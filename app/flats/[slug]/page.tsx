import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FLATS,
  flatBySlug,
  HOURS,
  NEARBY,
  PHONE,
  PHONE_HREF,
  STAY,
} from "@/lib/data";
import { SITE_URL } from "@/lib/site";
import V3Gallery from "@/components/V3Gallery";
import V3Nav from "@/components/V3Nav";
import "../../home.css";

export function generateStaticParams() {
  return FLATS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flat = flatBySlug(slug);
  if (!flat) return {};
  return {
    title: `${flat.name} — посуточно в Пестово`,
    description: `${flat.name}: ${flat.tag}, ${flat.addr}. ${flat.price} за сутки. ТВ, Wi-Fi, техника, бельё и полотенца. Заселение по паспорту.`,
    alternates: { canonical: `/flats/${flat.slug}` },
  };
}

export default async function FlatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flat = flatBySlug(slug);
  if (!flat) notFound();

  const others = FLATS.filter((f) => f.slug !== flat.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: `${flat.name} — посуточно в Пестово`,
    description: flat.desc,
    url: `${SITE_URL}/flats/${flat.slug}`,
    image: `${SITE_URL}${flat.photo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: flat.addr,
      addressLocality: "Пестово",
      addressRegion: "Новгородская область",
      addressCountry: "RU",
    },
    containsPlace: {
      "@type": "Accommodation",
      occupancy: { "@type": "QuantitativeValue", value: Number(flat.tag[0]) || 1, unitText: "комнаты" },
    },
  };

  return (
    <main className="v3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="v3-header">
        <div className="v3-wrap v3-nav">
          <Link className="v3-brand" href="/">
            <span className="v3-brand-mark">К</span>
            <span className="v3-brand-text">
              Квартиры от хозяйки
              <small>Посуточно в Пестово</small>
            </span>
          </Link>
          <nav className="v3-navlinks" aria-label="Основная навигация">
            <Link href="/#apartments">Квартиры</Link>
            <Link href="/#comfort">Условия</Link>
            <Link href="/orgs">Командировочным</Link>
            <Link href="/#faq">Вопросы</Link>
            <Link href="/#contacts">Контакты</Link>
          </nav>
          <a className="v3-nav-phone" href={PHONE_HREF}>{PHONE}</a>
          <V3Nav base="/" />
        </div>
      </header>

      <section className="v3-fp-hero">
        <div className="v3-wrap">
          <nav className="v3-fp-back" aria-label="Назад">
            <Link href="/#apartments">← Все квартиры</Link>
          </nav>
          <div className="v3-fp-head">
            <div>
              <div className="v3-eyebrow">{flat.tag} · {flat.addr}</div>
              <h1 className="v3-h1 v3-fp-title">{flat.name.split(" на ")[0]}</h1>
              <p className="v3-fp-sub">{flat.addr}, Пестово</p>
            </div>
            <div className="v3-fp-cta">
              <div className="v3-fp-price">
                {flat.price}
                <small>за сутки</small>
              </div>
              <a className="v3-button" href={PHONE_HREF}>Позвонить хозяйке ↗</a>
            </div>
          </div>

          <V3Gallery photos={flat.photos} title={flat.name} />
        </div>
      </section>

      <section className="v3-fp-body v3-section">
        <div className="v3-wrap v3-fp-grid">
          <div>
            <h2 className="v3-h2">О квартире</h2>
            <p className="v3-fp-desc">{flat.desc}</p>
            <div className="v3-fp-specs">
              {flat.specs.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <h2 className="v3-h2 v3-fp-h2">Что рядом с домом</h2>
            <div className="v3-amenities v3-fp-nearby">
              {NEARBY.map((n) => (
                <div key={n.b} className="v3-amenity">
                  <i>✓</i>
                  <span>
                    <b>{n.b}</b>
                    {n.rest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="v3-rules-card v3-fp-rules">
            <h3>Условия проживания</h3>
            {STAY.map((s) => (
              <div key={s.b} className="v3-rule">
                <span>{s.b}</span>
                <b>{s.rest.replace(" — ", "")}</b>
              </div>
            ))}
            <div className="v3-rule">
              <span>Связь с хозяйкой</span>
              <b>Ежедневно, {HOURS.replace("ежедневно ", "")}</b>
            </div>
            <a className="v3-button v3-fp-rules-btn" href={PHONE_HREF}>
              Уточнить даты · {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="v3-section v3-fp-others">
        <div className="v3-wrap">
          <div className="v3-section-head">
            <div>
              <div className="v3-eyebrow">Есть и другие варианты</div>
              <h2 className="v3-h2">Другие квартиры</h2>
            </div>
            <p className="v3-section-intro">
              Все квартиры — на улице Чапаева, с одинаковым набором техники и
              условий проживания.
            </p>
          </div>
          <div className="v3-cards v3-cards--3">
            {others.map((f) => (
              <article key={f.slug} className="v3-flat-card">
                <Link className="v3-flat-image v3-flat-image--link" href={`/flats/${f.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.photo} alt={`${f.name} — квартира посуточно в Пестово`} />
                  <span className="v3-flat-tag">{f.tag}</span>
                </Link>
                <div className="v3-flat-body">
                  <div className="v3-flat-meta">{f.addr}</div>
                  <h3 className="v3-flat-title">{f.name.split(" на ")[0]}</h3>
                  <div className="v3-flat-bottom">
                    <div className="v3-flat-price">
                      {f.price}
                      <small>за сутки</small>
                    </div>
                    <Link className="v3-text-link" href={`/flats/${f.slug}`}>
                      Смотреть ↗
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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
