import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, ViewTransition } from "react";
import { RubroMock } from "@/components/RubroMock";
import { getRubro, RUBROS } from "@/data/rubros";

// Only the six trades exist; anything else is a 404 in the static export.
export const dynamicParams = false;

export function generateStaticParams() {
  return RUBROS.map((rubro) => ({ slug: rubro.slug }));
}

export async function generateMetadata({ params }: PageProps<"/rubros/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const rubro = getRubro(slug);
  if (!rubro) return {};
  return {
    title: `Página web para ${rubro.label.toLowerCase()}`,
    description: rubro.pitch,
  };
}

type Params = PageProps<"/rubros/[slug]">["params"];

// The six trades are prerendered by generateStaticParams into the static export.
export default function RubroPage({ params }: PageProps<"/rubros/[slug]">) {
  return (
    <Suspense fallback={<main id="contenido" className="rubro-page" style={{ minHeight: "100svh" }} />}>
      <RubroContent params={params} />
    </Suspense>
  );
}

async function RubroContent({ params }: { params: Params }) {
  const { slug } = await params;
  const rubro = getRubro(slug);
  if (!rubro) notFound();

  const index = RUBROS.indexOf(rubro);
  const prev = RUBROS[(index - 1 + RUBROS.length) % RUBROS.length];
  const next = RUBROS[(index + 1) % RUBROS.length];

  // key={slug}: moving between two rubros re-mounts the page so the directional slide plays.
  return (
    <ViewTransition
      key={rubro.slug}
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      default="none"
    >
      <main id="contenido" className="rubro-page">
        <div className="wrap">
          <Link href="/#rubros" className="back-link" transitionTypes={["nav-back"]}>
            Volver a los rubros
          </Link>
          <div className="rubro-layout">
            <div>
              <h1>Una web para su {rubro.label.toLowerCase()}</h1>
              <p className="lede">{rubro.pitch}</p>
              <ul className="feature-list">
                {rubro.features.map((feature) => (
                  <li key={feature}>
                    <svg width="24" height="24" viewBox="0 0 48 48" aria-hidden="true">
                      <circle cx="24" cy="24" r="22" fill="#25d366" />
                      <path
                        d="M14 25l7 7 13-15"
                        fill="none"
                        stroke="#06301a"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/#contacto" className="btn btn-primary" transitionTypes={["nav-back"]}>
                Quiero una web así
              </Link>
            </div>
            <ViewTransition name={`rubro-${rubro.slug}`} share="morph" default="none">
              <div
                className="rubro-hero-mock"
                role="img"
                aria-label={`Ejemplo de página web para ${rubro.business}, ${rubro.city}`}
              >
                <RubroMock rubro={rubro} />
              </div>
            </ViewTransition>
          </div>
          <nav className="rubro-pager" aria-label="Otros rubros">
            <Link href={`/rubros/${prev.slug}`} transitionTypes={["nav-back"]}>
              <small>Rubro anterior</small>
              <b>{prev.label}</b>
            </Link>
            <Link href={`/rubros/${next.slug}`} transitionTypes={["nav-forward"]}>
              <small>Rubro siguiente</small>
              <b>{next.label}</b>
            </Link>
          </nav>
        </div>
      </main>
    </ViewTransition>
  );
}
