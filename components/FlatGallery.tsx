"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExpandIcon } from "./Icons";

/* Переиспользуемая сетка фото + лайтбокс (используется на главной и на страницах квартир) */
export default function FlatGallery({
  photos,
  title,
}: {
  photos: string[];
  title: string;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const count = photos.length;

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

  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    []
  );

  const go = (dir: number) => {
    setLightbox((i) => (i === null ? null : (i + dir + count) % count));
  };

  const close = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="gallery" key={title}>
        {photos.map((src, i) => (
          <button
            type="button"
            className="shot"
            key={src}
            onClick={() => setLightbox(i)}
            aria-label={`Увеличить фото ${i + 1}: ${title}`}
          >
            <Image
              src={src}
              alt={`${title} — фото ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1120px) 33vw, 260px"
            />
            <span className="shot-zoom" aria-hidden="true">
              <ExpandIcon />
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={close}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
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
        aria-label={lightbox !== null ? `${title}, фото ${lightbox + 1}` : undefined}
      >
        {lightbox !== null && (
          <div className="lightbox-inner">
            <div className="lightbox-frame">
              <Image
                src={photos[lightbox]}
                alt={`${title} — фото ${lightbox + 1}`}
                fill
                sizes="100vw"
                quality={90}
              />
              {count > 1 && (
                <>
                  <Image
                    key={`next-${photos[(lightbox + 1) % count]}`}
                    src={photos[(lightbox + 1) % count]}
                    alt=""
                    fill
                    sizes="100vw"
                    quality={90}
                    className="lightbox-preload"
                    aria-hidden="true"
                  />
                  <Image
                    key={`prev-${photos[(lightbox - 1 + count) % count]}`}
                    src={photos[(lightbox - 1 + count) % count]}
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
            <button type="button" className="lightbox-close" onClick={close} aria-label="Закрыть">
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
              <span className="lightbox-title">{title}</span>
              <span className="lightbox-count">
                {lightbox + 1} / {count}
              </span>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
