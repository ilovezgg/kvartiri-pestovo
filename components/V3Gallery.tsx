"use client";

import { useState } from "react";
import Image from "next/image";

export default function V3Gallery({
  photos,
  title,
}: {
  photos: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="v3-gal">
      <div className="v3-gal-main">
        <Image
          src={photos[active]}
          alt={`${title} — фото ${active + 1}`}
          fill
          priority
          sizes="(max-width: 850px) 100vw, 1120px"
        />
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
