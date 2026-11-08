"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FLATS, PHONE_HREF } from "@/lib/data";
import Reveal from "./Reveal";
import FlatGallery from "./FlatGallery";
import { CheckIcon, ChevronRightIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Flats() {
  const [active, setActive] = useState(0);
  const selected = FLATS[active];

  return (
    <div className="wrap">
      <section id="flats">
        <div className="sec-head">
          <Reveal>
            <h2>Квартиры на Чапаева 14, 15 и 17</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Трёх- и двухкомнатная на Чапаева, 14, однокомнатные — на Чапаева, 15 и 17.
              Нажмите на карточку, чтобы посмотреть фото этой квартиры.
            </p>
          </Reveal>
        </div>
        <div className="flats">
          {FLATS.map((flat, i) => (
            <Reveal key={flat.name} delay={i * 110}>
              <article className={`flat${active === i ? " is-active" : ""}`}>
                <div
                  className="flat-select"
                  role="button"
                  tabIndex={0}
                  aria-pressed={active === i}
                  aria-label={`Показать фото: ${flat.name}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                >
                  <div className="flat-media">
                    <div className="flat-photo">
                      <Image
                        src={flat.photo!}
                        alt={`${flat.name} — фото`}
                        fill
                        sizes="(max-width: 860px) 100vw, 540px"
                      />
                    </div>
                    <span className="flat-tag">
                      <PinIcon />
                      {flat.tag}
                    </span>
                    {active === i && (
                      <span className="flat-selected">
                        <CheckIcon />
                        Выбрано
                      </span>
                    )}
                  </div>
                  <div className="flat-body">
                    <h3>{flat.name}</h3>
                    <p className="addr">
                      <PinIcon />
                      {flat.addr}
                    </p>
                    <div className="flat-specs">
                      {flat.specs.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    <p className="flat-desc">{flat.desc}</p>
                  </div>
                </div>
                <div className="flat-foot">
                  <p className="price">
                    {flat.price} <small>/ сутки</small>
                  </p>
                  <div className="flat-foot-actions">
                    <Link className="flat-more" href={`/flats/${flat.slug}`}>
                      Подробнее
                      <ChevronRightIcon />
                    </Link>
                    <a className="btn btn--small" href={PHONE_HREF}>
                      <PhoneIcon />
                      Позвонить
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <p className="flats-note">
            Свободные даты и стоимость уточняйте по телефону.
          </p>
        </Reveal>
      </section>

      <section id="gallery" className="flat-gallery">
        <div className="sec-head">
          <Reveal>
            <h2>Фото: {selected.name}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>Показаны фотографии только выбранной квартиры. Нажмите на фото, чтобы рассмотреть его крупнее.</p>
          </Reveal>
        </div>
        <FlatGallery photos={selected.photos} title={selected.name} />
      </section>
    </div>
  );
}
