"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function V3Gallery({
  photos,
  title,
}: {
  photos: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const reduced = useReducedMotion();

  const go = useCallback(
    (dir: 1 | -1) =>
      setActive((i) => (i + dir + photos.length) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, go]);

  return (
    <div className="v3-gal">
      <button
        type="button"
        className="v3-gal-main v3-gal-open"
        onClick={() => setLightbox(true)}
        aria-label={`Открыть фото ${active + 1} на весь экран`}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            style={{ position: "absolute", inset: 0 }}
            initial={reduced ? false : { opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Image
              src={photos[active]}
              alt={`${title} — фото ${active + 1}`}
              fill
              priority
              sizes="(max-width: 850px) 100vw, 1120px"
            />
          </motion.div>
        </AnimatePresence>
        <span className="v3-gal-count">
          {active + 1} / {photos.length}
        </span>
        <span className="v3-gal-expand" aria-hidden="true">⤢</span>
      </button>
      <div className="v3-gal-thumbs" role="tablist" aria-label="Фотографии квартиры">
        {photos.map((p, i) => (
          <button
            key={p}
            type="button"
            className={`v3-gal-thumb${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Фото ${i + 1}`}
            aria-selected={i === active}
          >
            <Image
              src={p}
              alt=""
              fill
              sizes="(max-width: 600px) 20vw, 120px"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="v3-lb"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} — просмотр фото`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(false)}
          >
            <button
              type="button"
              className="v3-lb-close"
              onClick={() => setLightbox(false)}
              aria-label="Закрыть"
            >
              ✕
            </button>
            <button
              type="button"
              className="v3-lb-nav v3-lb-prev"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Предыдущее фото"
            >
              ←
            </button>
            <div className="v3-lb-stage" onClick={(e) => e.stopPropagation()}>
              <Image
                src={photos[active]}
                alt={`${title} — фото ${active + 1}`}
                fill
                sizes="100vw"
              />
            </div>
            <button
              type="button"
              className="v3-lb-nav v3-lb-next"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Следующее фото"
            >
              →
            </button>
            <span className="v3-lb-count">
              {active + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
