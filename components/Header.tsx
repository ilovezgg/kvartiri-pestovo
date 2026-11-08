"use client";

import { useEffect, useState } from "react";
import { OWNER, PHONE, PHONE_HREF } from "@/lib/data";
import { PhoneIcon } from "./Icons";

const NAV = [
  ["Квартиры", "#flats"],
  ["Фото", "#gallery"],
  ["Как бронируем", "#steps"],
  ["Хозяйка", "#about"],
  ["Организациям", "#org"],
  ["Вопросы", "#faq"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="nav" aria-label="Основная навигация">
        <a className="brand" href="#">
          <span className="mark" aria-hidden="true">
            {OWNER.name.charAt(0)}
          </span>
          <span className="brand-text">
            <b>{OWNER.name}</b>
            <small>посуточно в {OWNER.cityIn}</small>
          </span>
        </a>
        <div className="nav-links">
          {NAV.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-tel" href={PHONE_HREF}>
            {PHONE}
          </a>
          <a className="btn btn--small" href={PHONE_HREF}>
            <PhoneIcon />
            <span className="btn-label">Позвонить</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
