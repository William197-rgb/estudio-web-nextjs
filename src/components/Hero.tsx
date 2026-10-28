import Link from "next/link";
import { HeroClock } from "@/components/HeroLive";
import { HeroWall } from "@/components/HeroWall";

// Rendered on the server; only the clock hydrates. The entrance and the drifting wall are CSS.
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
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
            <Link href="#ejemplos" className="btn btn-ghost">
              Arme su web
            </Link>
          </div>
          <HeroClock />
        </div>
        <HeroWall />
      </div>
    </section>
  );
}
