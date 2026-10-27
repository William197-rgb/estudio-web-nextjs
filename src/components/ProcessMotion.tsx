"use client";

import { useIdleGsap } from "@/lib/gsap";

// The process line draws itself as the reader moves down the steps; Process.tsx renders the markup.
export function ProcessMotion() {
  useIdleGsap("proceso", ({ gsap, ScrollTrigger }, mm) => {
    const steps = gsap.utils.toArray<HTMLElement>("#proceso .process-step");
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        ".process-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".process", start: "top 70%", end: "bottom 60%", scrub: 0.5 },
        },
      );
      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 65%",
          onEnter: () => step.classList.add("is-on"),
          onLeaveBack: () => step.classList.remove("is-on"),
        });
      });
      return () => steps.forEach((step) => step.classList.remove("is-on"));
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      steps.forEach((step) => step.classList.add("is-on"));
      return () => steps.forEach((step) => step.classList.remove("is-on"));
    });
  });
  return null;
}
