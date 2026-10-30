import type { Metadata } from "next";
import { AgencyPreview } from "@/components/AgencyPreview";
import { Reveals } from "@/components/Reveals";
import { Work } from "@/components/Work";
import { AGENCY_FAQ, AGENCY_PLANS, FIVERR_GIG, FIVERR_PROFILE } from "@/data/agencias";
import { whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Webs en marca blanca para agencias",
  description:
    "Desarrollo web en marca blanca para agencias de marketing: ustedes venden la web con su marca y yo la construyo por detrás, en 5 a 7 días, desde USD 100 con pago protegido por Fiverr.",
  alternates: { canonical: "/agencias" },
  openGraph: {
    title: "Webs en marca blanca para agencias",
    description: "Ustedes venden la web con su marca. Yo la construyo por detrás.",
    locale: "es_ES",
    type: "website",
  },
};

const STEPS = [
  {
    title: "Me mandan el brief",
    text: "Logo, textos y fotos del cliente, más una o dos webs que le gusten. Por WhatsApp, por correo o por Fiverr.",
  },
  {
    title: "Primera versión en 3 días hábiles",
    text: "Con un enlace privado que pueden mostrarle a su cliente tal cual, sin nada mío a la vista.",
  },
  {
    title: "Una ronda de ajustes",
    text: "Juntan los cambios de su cliente en un solo mensaje y los aplico. Ustedes siguen siendo la única voz frente a él.",
  },
  {
    title: "Entrega a nombre de la agencia",
    text: "Archivos, accesos y publicación a nombre de ustedes o de su cliente. El dominio queda siempre a nombre del cliente.",
  },
];

export default function AgenciasPage() {
  const wa =
    whatsappHref("Hola, William. Tengo una agencia y me interesa el servicio de webs en marca blanca.") ?? FIVERR_PROFILE;

  return (
    <main id="contenido">
      <section className="ag-hero" aria-labelledby="ag-title">
        <div className="wrap ag-hero-grid">
          <h1 id="ag-title">Webs en marca blanca para agencias</h1>
          <div className="ag-hero-copy">
            <p className="hero-lede">
              Ustedes venden la web con su marca. Yo la construyo por detrás, sin contacto con su cliente, y la entrego en
              5 a 7 días.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={wa} target="_blank" rel="noopener">
                Escribir por WhatsApp
              </a>
              <a className="btn btn-ghost" href="#precios">
                Ver precios
              </a>
            </div>
          </div>
          <AgencyPreview />
        </div>
      </section>

      <Work
        tone="tint"
        title="Webs que pueden vender como suyas"
        lede="Cuatro sitios de muestra, cada uno con su propio diseño y algo que el cliente puede usar, no solo mirar. Así se ven las webs que entrego."
      />

      <section className="section section-paper" id="proceso" aria-labelledby="ag-steps-title">
        <div className="wrap ag-split">
          <div className="section-head">
            <h2 id="ag-steps-title">Cómo trabajamos</h2>
            <p>
              Ustedes hablan con el cliente; yo trabajo con lo que me pasan. Un brief, una primera versión, una ronda de
              ajustes y la entrega.
            </p>
          </div>
          <ol className="ag-steps">
            {STEPS.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint" id="precios" aria-labelledby="ag-price-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="ag-price-title">Precios para agencias</h2>
            <p>Ustedes ponen el precio a su cliente. Este es el mío, fijo y en dólares, con pago protegido por Fiverr.</p>
          </div>
          <ul className="price-grid price-grid-3">
            {AGENCY_PLANS.map((plan) => (
              <li key={plan.name} className={plan.featured ? "price-card is-featured" : "price-card"}>
                <h3>{plan.name}</h3>
                <p className="price-from">
                  <small>desde</small> {plan.price}
                </p>
                {plan.featured && <p className="price-badge">El que más piden las agencias</p>}
                <p className="price-days">Lista en {plan.days}</p>
                <ul>
                  {plan.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="price-more">
            <p>
              <b>¿Varias webs por mes?</b>
              Con un volumen fijo armamos una oferta personalizada en Fiverr, con el precio y los plazos por escrito.
            </p>
            <a className="btn btn-ghost btn-arrow" href={FIVERR_GIG} target="_blank" rel="noopener">
              Ver los paquetes en Fiverr
            </a>
          </div>
        </div>
      </section>

      <section className="section section-paper" id="preguntas" aria-labelledby="ag-faq-title">
        <div className="wrap ag-split">
          <div className="section-head">
            <h2 id="ag-faq-title">Lo que suelen preguntar</h2>
            <p>Si su duda no está acá, escríbanme y se la respondo por escrito.</p>
          </div>
          <dl className="ag-faq">
            {AGENCY_FAQ.map((f) => (
              <div key={f.q}>
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-night" id="contacto" aria-labelledby="ag-cta-title">
        <div className="wrap ag-cta">
          <div className="section-head">
            <h2 id="ag-cta-title">¿Probamos con la próxima web?</h2>
            <p>Cuéntenme qué les pidió su cliente y les respondo con el paquete, el plazo y la fecha de entrega.</p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href={wa} target="_blank" rel="noopener">
              Escribir por WhatsApp
            </a>
            <a className="btn btn-ghost" href={FIVERR_PROFILE} target="_blank" rel="noopener">
              Mi perfil en Fiverr
            </a>
          </div>
        </div>
      </section>

      <Reveals />
    </main>
  );
}
