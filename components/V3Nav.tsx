"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PHONE, PHONE_HREF } from "@/lib/data";

export default function V3Nav({ base = "" }: { base?: "" | "/" }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const close = () => setOpen(false);

  const links = [
    { href: `${base}#apartments`, label: "Квартиры" },
    { href: `${base}#comfort`, label: "Условия" },
    { href: "/orgs", label: "Командировочным" },
    { href: `${base}#faq`, label: "Вопросы" },
    { href: `${base}#contacts`, label: "Контакты" },
  ];

  return (
    <>
      <button
        type="button"
        className={`v3-burger${open ? " is-open" : ""}`}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="v3-mobmenu"
            initial={reduced ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <nav className="v3-mobmenu-links" aria-label="Мобильная навигация">
              {links.map((l) =>
                l.href.startsWith("/") ? (
                  <Link key={l.label} href={l.href} onClick={close}>
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.label} href={l.href} onClick={close}>
                    {l.label}
                  </a>
                )
              )}
            </nav>
            <a className="v3-button v3-mobmenu-call" href={PHONE_HREF} onClick={close}>
              Позвонить хозяйке · {PHONE}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
