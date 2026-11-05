"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
  children: React.ReactNode;
};

export default function Reveal({ delay = 0, className = "", as = "div", children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    document.body.classList.add("reveal-arm");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          if (delay) node.style.transitionDelay = `${delay}ms`;
          node.classList.add("in");
          io.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`reveal${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
