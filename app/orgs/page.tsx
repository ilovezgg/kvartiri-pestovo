import type { Metadata } from "next";
import Link from "next/link";
import { ORG, PHONE, PHONE_HREF } from "@/lib/data";
import "../home.css";

export const metadata: Metadata = {
  title: "Для организаций и командировочных — квартиры посуточно в Пестово с отчётными документами",
  description:
    "Размещение командировочных в Пестово: квартиры посуточно от 2 000 ₽/сутки, кассовые чеки, оплата по расчётному счёту, отчётные документы для бухгалтерии. Работаем с организациями и ИП.",
  alternates: { canonical: "/orgs" },
};

const STEPS = [
  {
    n: "01",
    b: "Позвоните",
    rest: "Назовите даты и число сотрудников — подберём квартиру и забронируем.",
  },
  {
    n: "02",
    b: "Выставим счёт",
    rest: "Для юридических лиц и ИП — оплата по расчётному счёту.",
  },
  {
    n: "03",
    b: "Выдадим документы",
    rest: "Кассовый чек при каждой оплате и отчётные документы для бухгалтерии.",
  },
];

export default function OrgsPage() {
  const details = ORG.details.filter((d) => d.v);

  return (
    <main className="v3">
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
        </div>
      </header>

      <section className="v3-org-hero">
        <div className="v3-wrap">
          <div className="v3-eyebrow">Для организаций и ИП</div>
          <h1 className="v3-h1">
            Размещение командировочных
            <br />в Пестово — <em>с документами</em>
          </h1>
          <p className="v3-hero-copy">{ORG.lead}</p>
          <div className="v3-hero-actions">
            <a className="v3-button" href={PHONE_HREF}>
              Обсудить размещение <span aria-hidden="true">↗</span>
            </a>
            <Link className="v3-button v3-button--light" href="/#apartments">
              Посмотреть квартиры
            </Link>
          </div>
        </div>
      </section>

      <section className="v3-section v3-org-facts-sec">
        <div className="v3-wrap">
          <div className="v3-section-head">
            <div>
              <div className="v3-eyebrow">Что мы предоставляем</div>
              <h2 className="v3-h2">Всё для отчётности</h2>
            </div>
            <p className="v3-section-intro">
              Открыт вид деятельности «предоставление мест для краткосрочного
              проживания». Налогообложение — УСН (доходы).
            </p>
          </div>
          <div className="v3-org-cards">
            {ORG.facts.map((f) => (
              <div key={f.b} className="v3-org-card">
                <b>{f.b}</b>
                <span>{f.rest.replace(" — ", "")}</span>
              </div>
            ))}
          </div>

          <div className="v3-org-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="v3-org-step">
                <span className="v3-org-step-n">{s.n}</span>
                <b>{s.b}</b>
                <p>{s.rest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-section v3-org-req-sec">
        <div className="v3-wrap v3-fp-grid">
          <div>
            <div className="v3-eyebrow">Реквизиты</div>
            <h2 className="v3-h2">Данные для договора<br />и бухгалтерии</h2>
            <p className="v3-fp-desc">
              Полные реквизиты для договора и счёта вышлем по запросу —
              позвоните, и подготовим документы к дате заезда сотрудника.
            </p>
          </div>
          <div className="v3-rules-card">
            <h3>Реквизиты</h3>
            {details.map((d) => (
              <div key={d.k} className="v3-rule">
                <span>{d.k}</span>
                <b>{d.v}</b>
              </div>
            ))}
            <div className="v3-rule">
              <span>Остальные реквизиты</span>
              <b>по запросу по телефону</b>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-contact v3-section">
        <div className="v3-wrap">
          <div className="v3-contact-panel">
            <div>
              <div className="v3-eyebrow">Прямой контакт</div>
              <h2 className="v3-h2">Позвоните — обсудим условия и даты</h2>
              <p>На связи ежедневно с 8:00 до 22:00. Без посредников и комиссии.</p>
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
