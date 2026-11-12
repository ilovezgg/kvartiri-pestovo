"use client";

import { useState } from "react";
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
  const reduced = useReducedMotion();

  return (
    <div className="v3-gal">
      <div className="v3-gal-main">
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
      </div>
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
    </div>
  );
}
