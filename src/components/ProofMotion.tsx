"use client";

import { useIdleGsap } from "@/lib/gsap";

const CIRC = 2 * Math.PI * 44;

// Each score ring fills and counts up once as it enters; Proof.tsx renders the final values.
export function ProofMotion() {
  useIdleGsap("medido", ({ gsap }, mm) => {
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("#medido .gauge").forEach((gauge) => {
        const target = Number(gauge.dataset.score);
        const arc = gauge.querySelector(".gauge-arc");
        const value = gauge.querySelector(".gauge-value");
        const counter = { n: 0 };
        gsap
          .timeline({
            scrollTrigger: { trigger: gauge, start: "top 85%", once: true },
            defaults: { duration: 1.2, ease: "power2.out" },
          })
          .fromTo(arc, { strokeDashoffset: CIRC }, { strokeDashoffset: CIRC * (1 - target / 100) }, 0)
          .fromTo(
            counter,
            { n: 0 },
            {
              n: target,
              onUpdate: () => {
                if (value) value.textContent = String(Math.round(counter.n));
              },
            },
            0,
          );
      });
    });
  });
  return null;
}
