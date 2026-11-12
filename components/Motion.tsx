"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  /** задержка, сек */
  delay?: number;
  /** смещение по Y, px */
  y?: number;
  /** анимировать сразу при монтировании (hero), а не по скроллу */
  hero?: boolean;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 26,
  hero = false,
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  const animProps = hero
    ? { animate: { opacity: 1, y: 0 } }
    : {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-70px" },
      };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...animProps}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
