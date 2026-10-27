"use client";

import { useRef } from "react";
import { RubroMock } from "@/components/RubroMock";
import { RUBROS } from "@/data/rubros";
import { gsap, useGSAP } from "@/lib/gsap";

const example = RUBROS[0];

// Pinned, scroll-scrubbed story: a dead negocio.site page is rebuilt into a working site.
// Without JavaScript or with reduced motion, the section rests on the finished site.
export function Rebuild() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
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
    },
    { scope: root },
  );

  return (
    <section id="reconstruccion" ref={root} aria-labelledby="rebuild-title">
      <div className="rebuild-stage">
        <div className="wrap rebuild-grid">
          <div className="rebuild-copy">
            <h2 id="rebuild-title">Así rescato una web caída</h2>
            <ol className="rebuild-steps">
              <li className="rb-step">
                <span className="rb-num">1</span>
                <strong>La web dejó de existir</strong>
                <p>
                  Google dio de baja los sitios negocio.site en 2024. Muchos negocios todavía los tienen
                  en su ficha de Maps, y quien toca el enlace encuentra un error.
                </p>
              </li>
              <li className="rb-step">
                <span className="rb-num">2</span>
                <strong>La reconstruyo pieza por pieza</strong>
                <p>Primero la estructura: lo que su cliente necesita ver en los primeros tres segundos.</p>
              </li>
              <li className="rb-step">
                <span className="rb-num">3</span>
                <strong>Y vuelve a atender</strong>
                <p>Turnos, WhatsApp, horarios y cómo llegar. Todo pensado para el celular, donde lo buscan.</p>
              </li>
            </ol>
          </div>

          <div className="browser" aria-hidden="true">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <div className="browser-url">
                <span className="url-dead">minegocio.negocio.site</span>
                <span className="url-live">odontologiapora.com.py</span>
              </div>
            </div>
            <div className="browser-view">
              <div className="layer layer-wire">
                <RubroMock rubro={example} variant="wire" />
              </div>
              <div className="layer layer-final">
                <RubroMock rubro={example} />
              </div>
              <div className="layer layer-dead">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <rect x="14" y="20" width="72" height="60" rx="8" fill="none" stroke="#a7b7b0" strokeWidth="5" />
                  <line x1="14" y1="36" x2="86" y2="36" stroke="#a7b7b0" strokeWidth="5" />
                  <path d="M38 50 62 70M62 50 38 70" stroke="#ff6b5b" strokeWidth="7" strokeLinecap="round" />
                </svg>
                <b>No se puede acceder a este sitio</b>
                <code>ERR_NAME_NOT_RESOLVED</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
