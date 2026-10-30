"use client";

import { useEffect } from "react";

// Section entrances for the home page: each section's heading, then its text, then its media,
// rising once as the group enters. An IntersectionObserver plus CSS transitions does this without
// reading layout, so the page pays nothing at load (one ScrollTrigger per group forced a reflow each).
// Everything stays visible without JavaScript or with reduced motion.
const GROUPS = [
  ".section-head > *",
  ".rubro-grid > *",
  ".builder-form > *",
  ".builder-preview",
  ".price-grid > li, .price-more",
  ".ad-player",
  ".contact-form > *",
  ".chat",
  ".work-grid > *",
  ".ag-steps > li",
  ".ag-faq > div",
];

export function Reveals() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const groups = new Map<Element, HTMLElement[]>();
    document.querySelectorAll("main .section").forEach((section) => {
      GROUPS.forEach((selector) => {
        const items = Array.from(section.querySelectorAll<HTMLElement>(selector));
        if (items.length) groups.set(items[0], items);
      });
    });

    const all = Array.from(groups.values()).flat();
    all.forEach((el) => el.classList.add("rv"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          groups.get(entry.target)?.forEach((el, i) => {
            el.style.transitionDelay = `${i * 75}ms`;
            el.classList.add("is-in");
          });
          io.unobserve(entry.target);
        }
      },
      // The huge top margin counts anything already scrolled past as entered, so a fast scroll or a
      // jump link never leaves a group hidden above the viewport.
      { rootMargin: "100000px 0px -12% 0px" },
    );
    groups.forEach((_, first) => io.observe(first));

    return () => {
      io.disconnect();
      all.forEach((el) => {
        el.classList.remove("rv", "is-in");
        el.style.transitionDelay = "";
      });
    };
  }, []);
  return null;
}
