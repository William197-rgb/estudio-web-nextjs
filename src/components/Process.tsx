"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const STEPS = [
  {
    title: "Conversamos por WhatsApp",
    text: "Me cuenta qué vende, a quién, y qué le preguntan siempre sus clientes. Con diez minutos alcanza.",
  },
  {
    title: "Le envío una propuesta en PDF",
    text: "Con lo que incluye su web y el plazo de entrega. Sin costo y sin compromiso.",
  },
  {
    title: "Diseño y armo su web",
    text: "Le muestro avances y ajustamos juntos. El plazo habitual es de unos 7 días.",
  },
  {
    title: "Se publica, y usted paga al final",
    text: "Cuando la web ya está en línea y funcionando, no antes.",
  },
];

export function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The line draws itself as the reader moves down the steps.
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
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".process-line-fill", { scaleY: 1 });
        steps.forEach((step) => step.classList.add("is-on"));
      });
    },
    { scope: root },
  );

  return (
    <section id="proceso" ref={root} className="section section-paper" aria-labelledby="proceso-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="proceso-title">Cuatro pasos, sin vueltas</h2>
          <p>Desde el primer mensaje hasta la web publicada, sabe en cada momento qué sigue.</p>
        </div>
        <div className="process">
          <div className="process-line" aria-hidden="true">
            <span className="process-line-fill" />
          </div>
          <ol className="process-list">
          {STEPS.map((step, i) => (
            <li key={step.title} className="process-step">
              <span className="process-dot" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
