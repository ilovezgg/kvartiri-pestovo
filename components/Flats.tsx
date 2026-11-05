"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FLATS, PHONE_HREF } from "@/lib/data";
import Reveal from "./Reveal";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ExpandIcon,
  PhoneIcon,
  PinIcon,
} from "./Icons";

export default function Flats() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selected = FLATS[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (lightbox !== null) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }
  }, [lightbox]);

  useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);

  const go = (dir: number) => {
    setLightbox((i) => {
      if (i === null) return null;
      const count = selected.photos.length;
      return (i + dir + count) % count;
    });
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  return (
    <>
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
                      {flat.photo ? (
                        <div className="flat-photo">
                          <Image
                            src={flat.photo}
                            alt={`${flat.name} — фото`}
                            fill
                            sizes="(max-width: 860px) 100vw, 540px"
                          />
                        </div>
                      ) : (
                        <div
                          className="ph"
                          role="img"
                          aria-label="Фото трёхкомнатной квартиры — по запросу"
                        >
                          <span>фото: трёхкомнатная</span>
                        </div>
                      )}
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
                    <a className="btn btn--small" href={PHONE_HREF}>
                      <PhoneIcon />
                      Позвонить
                    </a>
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
          <div className="gallery" key={selected.name}>
            {selected.photos.map((src, i) => (
              <button
                type="button"
                className="shot"
                key={src}
                onClick={() => setLightbox(i)}
                aria-label={`Увеличить фото ${i + 1}: ${selected.name}`}
              >
                <Image
                  src={src}
                  alt={`${selected.name} — фото ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1120px) 33vw, 260px"
                />
                <span className="shot-zoom" aria-hidden="true">
                  <ExpandIcon />
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={closeLightbox}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeLightbox();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          }
        }}
        aria-label={lightbox !== null ? `${selected.name}, фото ${lightbox + 1}` : undefined}
      >
        {lightbox !== null && (
          <div className="lightbox-inner">
            <div className="lightbox-frame">
              <Image
                src={selected.photos[lightbox]}
                alt={`${selected.name} — фото ${lightbox + 1}`}
                fill
                sizes="100vw"
                quality={90}
              />
              {selected.photos.length > 1 && (
                <>
                  <Image
                    key={`next-${selected.photos[(lightbox + 1) % selected.photos.length]}`}
                    src={selected.photos[(lightbox + 1) % selected.photos.length]}
                    alt=""
                    fill
                    sizes="100vw"
                    quality={90}
                    className="lightbox-preload"
                    aria-hidden="true"
                  />
                  <Image
                    key={`prev-${selected.photos[(lightbox - 1 + selected.photos.length) % selected.photos.length]}`}
                    src={selected.photos[(lightbox - 1 + selected.photos.length) % selected.photos.length]}
                    alt=""
                    fill
                    sizes="100vw"
                    quality={90}
                    className="lightbox-preload"
                    aria-hidden="true"
                  />
                </>
              )}
            </div>
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Закрыть"
            >
              <CloseIcon />
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={() => go(-1)}
              aria-label="Предыдущее фото"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={() => go(1)}
              aria-label="Следующее фото"
            >
              <ChevronRightIcon />
            </button>
            <div className="lightbox-bar">
              <span className="lightbox-title">{selected.name}</span>
              <span className="lightbox-count">
                {lightbox + 1} / {selected.photos.length}
              </span>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
