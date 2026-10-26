import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RubroMock } from "@/components/RubroMock";
import { CIUDADES, getCiudad } from "@/data/ciudades";
import { PLANS } from "@/data/precios";
import { getRubro, type Rubro } from "@/data/rubros";
import { whatsappHref } from "@/data/site";

// Only the listed cities exist; anything else is a 404 in the static export.
export const dynamicParams = false;

export function generateStaticParams() {
  return CIUDADES.map((c) => ({ ciudad: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/diseno-web/[ciudad]">): Promise<Metadata> {
  const { ciudad } = await params;
  const c = getCiudad(ciudad);
  if (!c) return {};
  return {
    title: `Diseño de páginas web en ${c.name}`,
    description: `Páginas web para negocios de ${c.name}: rápidas en el celular, con WhatsApp a un toque y fáciles de encontrar en Google. Desde ${PLANS[0].from}, usted paga al final.`,
    alternates: { canonical: `/diseno-web/${c.slug}` },
  };
}

export default async function CiudadPage({ params }: PageProps<"/diseno-web/[ciudad]">) {
  const { ciudad } = await params;
  const c = getCiudad(ciudad);
  if (!c) notFound();

  const rubros = c.rubros.map(getRubro).filter((r): r is Rubro => Boolean(r));
  const href = whatsappHref(`Hola, William. Tengo un negocio en ${c.name} y me interesa una página web.`) ?? "/#contacto";

  return (
    <main id="contenido" className="rubro-page">
      <div className="wrap">
        <Link href="/" className="back-link">
          Volver al inicio
        </Link>
        <div className="city-head">
          <h1>Páginas web para negocios de {c.name}</h1>
          <p className="lede">{c.intro}</p>
          <p className="city-facts">
            Desde {PLANS[0].from}, lista en {PLANS[0].days}. Usted paga cuando la web ya está publicada.
          </p>
          <a className="btn btn-wa" href={href} target="_blank" rel="noopener">
            Consultar por WhatsApp
          </a>
        </div>

        <h2 className="city-subtitle">Ejemplos para negocios de {c.name}</h2>
        <ul className="rubro-grid city-rubros">
          {rubros.map((r) => (
            <li key={r.slug}>
              <Link href={`/rubros/${r.slug}`} className="rubro-card">
                <div className="rubro-preview">
                  <RubroMock rubro={r} />
                </div>
                <h3>{r.label}</h3>
                <p>{r.hero}</p>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="city-subtitle">Cómo trabajamos</h2>
        <ol className="city-steps">
          <li>Me cuenta por WhatsApp qué vende y qué le preguntan siempre sus clientes.</li>
          <li>Le paso una propuesta con el precio exacto y el plazo.</li>
          <li>Armo su web y la ajustamos juntos.</li>
          <li>Se publica, aparece en Google, y recién ahí paga.</li>
        </ol>

        <nav className="city-others" aria-label="Otras ciudades">
          <p>También trabajo en:</p>
          <ul>
            {CIUDADES.filter((o) => o.slug !== c.slug).map((o) => (
              <li key={o.slug}>
                <Link href={`/diseno-web/${o.slug}`}>{o.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
