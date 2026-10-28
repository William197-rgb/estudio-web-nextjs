"use client";

import dynamic from "next/dynamic";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import { RUBROS } from "@/data/rubros";

// Remotion is only downloaded when this section is about to scroll into view,
// so it never weighs on the first load of the page.
const AdPlayer = dynamic(() => import("@/components/AdPlayer"), {
  ssr: false,
  loading: () => <Poster text="Cargando el anuncio…" />,
});

function Poster({ text }: { text: string }) {
  return (
    <div className="ad-poster">
      <p>{text}</p>
    </div>
  );
}

export function AdStudio() {
  const [name, setName] = useState("Su Negocio");
  const [slug, setSlug] = useState(RUBROS[0].slug);
  const [near, setNear] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const deferredName = useDeferredValue(name.trim() || "Su Negocio");
  const rubro = RUBROS.find((r) => r.slug === slug) ?? RUBROS[0];

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="anuncio" className="section section-tint" aria-labelledby="anuncio-title">
      <div className="wrap ad-grid">
        <div>
          <div className="section-head">
            <h2 id="anuncio-title">Su anuncio, con su nombre</h2>
            <p>
              Escriba el nombre y elija el rubro. El video de 15 segundos se arma en vivo, en su propio navegador,
              listo para compartir en estados de WhatsApp o Reels.
            </p>
          </div>
          <form className="ad-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label htmlFor="ad-name">Nombre de su negocio</label>
              <input
                id="ad-name"
                value={name}
                maxLength={28}
                autoComplete="organization"
                onChange={(e) => setName(e.target.value)}
              />
              <small>Hasta 28 letras, para que entre bien en la pantalla del celular.</small>
            </div>
            <div className="field">
              <label htmlFor="ad-rubro">Rubro</label>
              <select id="ad-rubro" value={slug} onChange={(e) => setSlug(e.target.value)}>
                {RUBROS.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div>
          <div className="ad-player" ref={frame}>
            {near ? (
              <AdPlayer businessName={deferredName} heroText={rubro.hero} />
            ) : (
              <Poster text="El anuncio se carga al llegar aquí." />
            )}
          </div>
          <p className="ad-note">Hecho con Remotion: el mismo código genera el MP4 final en alta calidad.</p>
        </div>
      </div>
    </section>
  );
}
