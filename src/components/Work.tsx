"use client";

import { useEffect, useRef } from "react";
import { WORK, workUrl } from "@/data/work";

// Each tile plays its recorded walk-through only while it is on screen; with reduced motion the
// poster stays. Videos are muted, silent loops with preload="none" so the page does not pay for them up front.
export function Work() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.35 },
    );
    root.querySelectorAll("video").forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section section-paper work" id="trabajos" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="work-title">Cada web, su propio estilo</h2>
          <p>Cuatro negocios de muestra, cuatro diseños distintos. Todos con algo que el cliente puede usar, no solo mirar.</p>
        </div>
        <div className="work-grid" ref={ref}>
          {WORK.map((w) => (
            <article className="work-tile" key={w.slug}>
              <a href={workUrl(w)} target="_blank" rel="noopener" className="work-media" aria-label={`Abrir la web de ${w.name} en una pestaña nueva`}>
                <video src={`/work/${w.slug}.mp4`} poster={`/work/${w.slug}.jpg`} muted loop playsInline preload="none" width={960} height={540} />
              </a>
              <div className="work-meta">
                <h3>{w.name}</h3>
                <p className="work-kind">
                  {w.kind}, {w.place}
                </p>
                <p>{w.live}.</p>
                <a href={workUrl(w)} target="_blank" rel="noopener" className="work-link">
                  Probar la web
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
