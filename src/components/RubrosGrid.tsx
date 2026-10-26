import Link from "next/link";
import { ViewTransition } from "react";
import { RubroMock } from "@/components/RubroMock";
import { RUBROS } from "@/data/rubros";

export function RubrosGrid() {
  return (
    <section id="rubros" className="section section-paper" aria-labelledby="rubros-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="rubros-title">Una web distinta para cada rubro</h2>
          <p>
            Un dentista y una constructora no venden igual. Estos son ejemplos de cómo pensaría la web de cada
            uno; toque uno para ver qué incluye.
          </p>
        </div>
        <div className="rubro-grid">
          {RUBROS.map((rubro) => (
            <Link
              key={rubro.slug}
              href={`/rubros/${rubro.slug}`}
              className="rubro-card"
              transitionTypes={["nav-forward"]}
              prefetch={true}
            >
              <ViewTransition name={`rubro-${rubro.slug}`} share="morph" default="none">
                <div className="rubro-preview">
                  <RubroMock rubro={rubro} />
                </div>
              </ViewTransition>
              <h3>{rubro.label}</h3>
              <p>
                Ejemplo: {rubro.business}, {rubro.city}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
