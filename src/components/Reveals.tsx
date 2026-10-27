"use client";

import { gsap, useGSAP } from "@/lib/gsap";

// Section entrances for the home page: each section's heading, then its text, then its media,
// rising once as the section enters. Everything is visible without JavaScript or with reduced motion.
const GROUPS = [
  ".section-head > *",
  ".rubro-grid > *",
  ".price-grid > li, .price-more",
  ".ad-player",
  ".contact-form > *",
  ".chat",
];

export function Reveals() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("main .section").forEach((section) => {
        GROUPS.forEach((selector) => {
          const items = section.querySelectorAll<HTMLElement>(selector);
          if (!items.length) return;
          gsap.from(items, {
            y: 24,
            opacity: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.075,
            scrollTrigger: { trigger: items[0], start: "top 88%", once: true },
          });
        });
      });
    });
  });
  return null;
}
