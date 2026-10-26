"use client";

import Link from "next/link";
import { useRef, useSyncExternalStore } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Clock = { time: string; open: boolean };

const timeFmt = new Intl.DateTimeFormat("es-PY", {
  timeZone: "America/Asuncion",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const partsFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Asuncion",
  weekday: "short",
  hour: "numeric",
  hourCycle: "h23",
});

// Typical opening hours of the businesses I work with: Monday to Saturday, 8 to 18 h.
// Snapshots are strings so React can compare them between renders.
function readClock(): string {
  const now = new Date();
  const parts = partsFmt.formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const open = weekday !== "Sun" && hour >= 8 && hour < 18;
  return `${timeFmt.format(now)}|${open ? "open" : "closed"}`;
}

function subscribeClock(onChange: () => void) {
  const id = window.setInterval(onChange, 20_000);
  return () => window.clearInterval(id);
}

function parseClock(snapshot: string): Clock | null {
  if (!snapshot) return null;
  const [time, state] = snapshot.split("|");
  return { time, open: state === "open" };
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  // The real time only exists in the browser; the server renders the neutral line.
  const clock = parseClock(useSyncExternalStore(subscribeClock, readClock, () => ""));

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The one page-load moment: the sign stutters on like a real neon tube.
        const tl = gsap.timeline({ defaults: { ease: "none" } });
        tl.from(".sign-word", { opacity: 0.08, duration: 0.05 })
          .to(".sign-word", { opacity: 0.25, duration: 0.06 }, "+=0.18")
          .to(".sign-word", { opacity: 1, duration: 0.04 }, "+=0.08")
          .to(".sign-word", { opacity: 0.4, duration: 0.05 }, "+=0.22")
          .to(".sign-word", { opacity: 1, duration: 0.05 }, "+=0.06")
          // Only movement on the headline: it is the LCP element, so it must never start invisible.
          .from(".hero-line", { y: 28, duration: 0.8, stagger: 0.12, ease: "power3.out" }, 0.05);
      });
    },
    { scope: root },
  );

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <h1 id="hero-title">
            <span className="hero-line">Su local cierra.</span>
            <span className="hero-line">Su web sigue atendiendo.</span>
          </h1>
          <p className="hero-clock" aria-live="polite">
            {clock === null ? (
              "En Central, a cualquier hora del día."
            ) : clock.open ? (
              <>
                Son las <time>{clock.time}</time> en Central. Mientras usted atiende el mostrador, su web responde
                a los que preguntan desde el celular.
              </>
            ) : (
              <>
                Son las <time>{clock.time}</time> en Central. Su local ya cerró; con una buena web, sus clientes
                igual pueden escribirle y pedir turno.
              </>
            )}
          </p>
          <p className="hero-lede">
            Hago páginas web para negocios de Asunción y Central: rápidas en el celular, con WhatsApp a un toque y
            fáciles de encontrar en Google.
          </p>
          <div className="hero-actions">
            <Link href="#contacto" className="btn btn-primary">
              Pedir mi propuesta
            </Link>
            <Link href="#reconstruccion" className="btn btn-ghost">
              Ver cómo trabajo
            </Link>
          </div>
        </div>
        <div className="sign-wrap" aria-hidden="true">
          <div className="sign-cords" />
          <div className="sign">
            <div className="sign-word">ABIERTO</div>
            <p className="sign-hours">
              <b>las 24 horas</b>, también domingos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
