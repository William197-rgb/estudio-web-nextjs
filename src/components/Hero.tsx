"use client";

import Link from "next/link";
import { useRef, useSyncExternalStore } from "react";
import { RubroMock } from "@/components/RubroMock";
import { getRubro, RUBROS } from "@/data/rubros";
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

const desk = RUBROS[0];
const phone = getRubro("veterinaria") ?? RUBROS[1];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  // The real time only exists in the browser; the server renders the neutral line.
  const clock = parseClock(useSyncExternalStore(subscribeClock, readClock, () => ""));

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The one page-load moment. Nothing starts invisible: the headline is the LCP element,
        // and the devices only settle into place from slightly lower.
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(".hero-line", { y: 28, duration: 0.9, stagger: 0.1 }, 0)
          .from(".device-laptop", { y: 36, duration: 1.2 }, 0.05)
          .from(".device-phone", { y: 64, duration: 1.3 }, 0.15);
      });
    },
    { scope: root },
  );

  const status = clock
    ? clock.open
      ? { open: true, label: "Abierto ahora" }
      : { open: false, label: "Cerrado · le respondemos por WhatsApp" }
    : undefined;

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <h1 id="hero-title">
          <span className="hero-line">Su local cierra.</span>
          <span className="hero-line">Su web sigue atendiendo.</span>
        </h1>
        <div className="hero-copy">
          <p className="hero-lede">
            Hago páginas web para negocios de todo Paraguay: rápidas en el celular, con WhatsApp a un toque y fáciles
            de encontrar en Google.
          </p>
          <div className="hero-actions">
            <Link href="#contacto" className="btn btn-primary btn-arrow">
              Pedir mi propuesta
            </Link>
            <Link href="#rubros" className="btn btn-ghost">
              Ver ejemplos
            </Link>
          </div>
          <p className="hero-clock" aria-live="polite">
            {clock === null ? (
              <span>Su web atiende a cualquier hora del día.</span>
            ) : clock.open ? (
              <span>
                Son las <time>{clock.time}</time> en Paraguay. Mientras usted atiende el mostrador, su web responde a los
                que preguntan desde el celular.
              </span>
            ) : (
              <span>
                Son las <time>{clock.time}</time> en Paraguay. Su local ya cerró; con una buena web, sus clientes igual
                pueden escribirle y pedir turno.
              </span>
            )}
          </p>
        </div>
        <figure className="hero-devices">
          <div
            className="hero-stage"
            role="img"
            aria-label={`Ejemplos de páginas web: ${desk.business} en una computadora y ${phone.business} en un celular`}
          >
            <div className="device-laptop">
              <div className="device-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span className="device-url">odontologiapora.com.py</span>
              </div>
              <div className="device-screen">
                <RubroMock rubro={desk} />
              </div>
            </div>
            <div className="device-phone">
              <div className="device-screen">
                <RubroMock rubro={phone} status={status} />
              </div>
            </div>
          </div>
          <figcaption>Ejemplos: negocios ficticios, webs como las que entrego.</figcaption>
        </figure>
      </div>
    </section>
  );
}
