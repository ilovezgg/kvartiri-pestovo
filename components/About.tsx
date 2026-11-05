import { PHONE, PHONE_HREF, HOURS, HOURS_NOTE, OWNER } from "@/lib/data";
import Reveal from "./Reveal";
import { PhoneIcon } from "./Icons";

export default function About() {
  return (
    <div className="wrap">
      <section id="about">
        <div className="about">
          <Reveal>
            <figure className="about-note">
              <span className="about-note-mark" aria-hidden="true">
                “
              </span>
              <blockquote>
                Сдаю квартиры сама, без посредников. На связи с 8:00 до 22:00 —
                звоните, всё расскажу и забронирую.
              </blockquote>
              <figcaption className="about-sign">
                <span className="about-sign-name">{OWNER.sign}</span>
                <span className="about-sign-meta">квартиры посуточно в {OWNER.cityIn}</span>
              </figcaption>
              <div className="about-facts">
                <span>
                  <b>1–3</b> комнаты
                </span>
                <span>
                  <b>от 2 000 ₽</b> за сутки
                </span>
                <span>
                  <b>8–22</b> на связи ежедневно
                </span>
              </div>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <h2>Сдаю квартиры сама</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="about-lede">
                Предлагаю одно-, двух- и трёхкомнатные квартиры. Каждая оборудована
                всем необходимым: ТВ, Wi-Fi, стиральная машина, газовая плита, чайник,
                микроволновая печь, холодильник, посуда, утюг и гладильная доска.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                Заезд с 14:00, расчётный час — 12:00. При заселении нужен паспорт или
                водительское удостоверение и залог 2 000 ₽. Предоставляю отчётные
                документы, налогообложение — УСН (доходы).
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Бронирую по звонку. Детали удобно обсудить сообщениями в MAX. С 22:00
                до 8:00, пожалуйста, не звоните — это время отдыха.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="about-contact">
                <a href={PHONE_HREF}>
                  <PhoneIcon />
                  {PHONE}
                </a>
                <span>
                  {HOURS} · {HOURS_NOTE}
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
