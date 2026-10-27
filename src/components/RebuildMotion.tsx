"use client";

import { useIdleGsap } from "@/lib/gsap";

// The rebuild story's scroll animation; Rebuild.tsx renders the markup on the server.
export function RebuildMotion() {
  useIdleGsap("reconstruccion", ({ gsap }, mm) => {
    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        small: "(max-width: 860px)",
      },
      (ctx) => {
        if (!ctx.conditions?.motion) return;
        const steps = gsap.utils.toArray<HTMLElement>(".rb-step");

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".rebuild-stage",
            start: "top top",
            end: ctx.conditions.small ? "+=1500" : "+=2200",
            pin: true,
            scrub: 0.6,
          },
        });

        // Inactive steps use a dimmer colour that still passes WCAG contrast (5.2:1), not opacity.
        const DIM = "#7f918a";
        const focus = (i: number, at: string | number) => {
          tl.to(steps.map((st) => st.querySelector("strong")), { color: DIM, duration: 0.1 }, at)
            .to(steps.map((st) => st.querySelector("p")), { color: DIM, duration: 0.1 }, at)
            .to(steps[i].querySelector("strong"), { color: "#eef3f1", duration: 0.1 }, at)
            .to(steps[i].querySelector("p"), { color: "#a7b7b0", duration: 0.1 }, at);
        };

        // Starting state: the broken page, step 1 in focus.
        tl.set(".layer-dead", { opacity: 1 })
          .set(".layer-wire", { opacity: 0 })
          .set(".layer-final", { opacity: 0 })
          .set(".url-dead", { opacity: 1 })
          .set(".url-live", { opacity: 0 })
          .set(".rb-num", { backgroundColor: "transparent", color: "#a7b7b0", borderColor: "#2a3b34" })
          .set(steps[0].querySelector(".rb-num"), { backgroundColor: "#ff6b5b", color: "#0e1a16", borderColor: "#ff6b5b" });
        focus(0, 0);
        tl.addLabel("dead", 0.4);

        // Glitch, then the error page collapses while the skeleton grows behind it.
        tl.to(".layer-dead", { x: -14, skewX: 6, duration: 0.05 }, "dead")
          .to(".layer-dead", { x: 10, skewX: -4, duration: 0.05 })
          .to(".layer-dead", { x: 0, skewX: 0, duration: 0.05 })
          .addLabel("wire", "+=0.1");

        // Step 2: the skeleton grows block by block.
        tl.to(".layer-dead", { opacity: 0, scale: 0.94, duration: 0.25 }, "wire")
          .to(steps[1].querySelector(".rb-num"), { backgroundColor: "#5fd3a4", color: "#0e1a16", borderColor: "#5fd3a4", duration: 0.1 }, "wire")
          .to(".layer-wire", { opacity: 1, duration: 0.1 }, "wire")
          .from(".layer-wire .mock > *", { scaleY: 0, transformOrigin: "50% 0%", stagger: 0.12, duration: 0.3 }, "wire+=0.05")
          .addLabel("final", "+=0.25");
        focus(1, "wire");

        // Step 3: colour, copy and the real address arrive.
        focus(2, "final");
        tl.to(steps[2].querySelector(".rb-num"), { backgroundColor: "#25d366", color: "#06301a", borderColor: "#25d366", duration: 0.1 }, "final")
          .to(".layer-final", { opacity: 1, duration: 0.35 }, "final")
          .to(".url-dead", { opacity: 0, duration: 0.1 }, "final")
          .to(".url-live", { opacity: 1, duration: 0.1 }, "final+=0.05")
          .from(".layer-final .mock-wa", { scale: 0.85, duration: 0.25, ease: "back.out(2)" }, "final+=0.2")
          .to({}, { duration: 0.4 });
      },
    );
  });
  return null;
}
