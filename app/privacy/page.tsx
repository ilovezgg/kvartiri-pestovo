import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/data";
import V3Nav from "@/components/V3Nav";
import "../home.css";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика обработки персональных данных сайта «Квартиры от хозяйки» — посуточно в Пестово.",
  robots: { index: false },
};

const SECTIONS = [
  {
    h: "Какие данные обрабатываются",
    p: "Сайт не содержит форм сбора персональных данных и не запрашивает имя, телефон, адрес электронной почты или паспортные данные. Связь с владельцем происходит по инициативе посетителя по телефону.",
  },
  {
    h: "Данные, сообщаемые по телефону",
    p: "При бронировании квартиры посетитель по собственной инициативе сообщает свои данные владельцу. Документ (паспорт или водительское удостоверение) предъявляется при заселении для оформления проживания в соответствии с законодательством РФ.",
  },
  {
    h: "Передача третьим лицам",
    p: "Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.",
  },
  {
    h: "Cookies и аналитика",
    p: "Сайт может использовать сервисы веб-аналитики (Яндекс Метрика) для подсчёта посещаемости. Собираемая ими информация обезличена и используется только в статистических целях.",
  },
  {
    h: "Изменение политики",
    p: "Актуальная версия политики всегда размещена на этой странице. По вопросам обработки данных обращайтесь по телефону, указанному на сайте.",
  },
];

export default function PrivacyPage() {
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
          <V3Nav base="/" />
        </div>
      </header>

      <section className="v3-section">
        <div className="v3-wrap" style={{ maxWidth: 760 }}>
          <div className="v3-eyebrow">Правовая информация</div>
          <h1 className="v3-h1" style={{ fontSize: "clamp(34px,4vw,52px)" }}>
            Политика конфиденциальности
          </h1>
          <p className="v3-fp-desc">
            Настоящая политика описывает порядок обработки персональных данных
            на сайте в соответствии с Федеральным законом № 152-ФЗ
            «О персональных данных».
          </p>
          {SECTIONS.map((s) => (
            <div key={s.h} style={{ marginTop: 34 }}>
              <h2 className="v3-h2" style={{ fontSize: 27 }}>{s.h}</h2>
              <p className="v3-fp-desc" style={{ marginBottom: 0 }}>{s.p}</p>
            </div>
          ))}
          <div className="v3-rules-card" style={{ marginTop: 44 }}>
            <div className="v3-rule">
              <span>Оператор данных</span>
              <b>Индивидуальный предприниматель, владелец сайта</b>
            </div>
            <div className="v3-rule">
              <span>Контакт</span>
              <b>{PHONE}</b>
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
    </main>
  );
}
