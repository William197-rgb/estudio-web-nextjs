import Link from "next/link";
import { HeroClock, HeroPhone } from "@/components/HeroLive";
import { RubroMock } from "@/components/RubroMock";
import { getRubro, RUBROS } from "@/data/rubros";

const desk = RUBROS[0];
const phone = getRubro("veterinaria") ?? RUBROS[1];

// Rendered on the server; only the clock and the phone example hydrate. The entrance is CSS.
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
            <Link href="#rubros" className="btn btn-ghost">
              Ver ejemplos
            </Link>
          </div>
          <HeroClock />
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
            <HeroPhone rubro={phone} />
          </div>
          <figcaption>Ejemplos: negocios ficticios, webs como las que entrego.</figcaption>
        </figure>
      </div>
    </section>
  );
}
