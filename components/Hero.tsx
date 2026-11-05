import Image from "next/image";
import { HOURS, HOURS_NOTE, OWNER, PHONE, PHONE_HREF } from "@/lib/data";
import { ClockIcon, KeyIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-loc">
              <PinIcon />
              {OWNER.city}, ул. Чапаева, 14, 15 и 17 — квартиры от хозяйки
            </span>
            <h1>Квартиры посуточно в {OWNER.cityIn} — напрямую от хозяйки</h1>
            <p className="lede">
              Одно-, двух- и трёхкомнатные квартиры со всем необходимым: ТВ, Wi-Fi,
              стиральная машина, плита, посуда. Предоставляю отчётные документы для
              командировочных. Без посредников — бронируйте напрямую.
            </p>
            <div className="hero-cta">
              <a className="btn" href={PHONE_HREF}>
                <PhoneIcon />
                Позвонить <span className="num">{PHONE}</span>
              </a>
              <a className="hero-link" href="#flats">
                Квартиры и цены
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note-icon">
                <ClockIcon />
              </span>
              <span className="hero-note-text">
                <b>На связи {HOURS}</b>
                <span>{HOURS_NOTE}</span>
              </span>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-photo-frame">
              <div className="hero-ph">
                <Image
                  src="/images/chapaeva-14-2room/chapaeva-01.jpg"
                  alt="Квартира на ул. Чапаева, 14"
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 470px"
                />
              </div>
            </div>
            <div className="hero-badge">
              <span className="hero-badge-icon">
                <KeyIcon />
              </span>
              <span>
                <b>Заселение по документу</b>
                <small>паспорт или водительское удостоверение</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
