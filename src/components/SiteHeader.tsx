"use client";

import { usePathname } from "next/navigation";
import { SectionLink } from "@/components/SectionLink";
import { OWNER } from "@/data/site";

// Each audience keeps its own menu: on /agencias the links jump inside that page, so a visitor
// from an agency never lands on the Paraguay business pitch by accident.
const BUSINESS_NAV = [
  { href: "/#trabajos", label: "Trabajos" },
  { href: "/#reconstruccion", label: "Cómo trabajo" },
  { href: "/#ejemplos", label: "Arme su web" },
  { href: "/#anuncio", label: "Su anuncio" },
  { href: "/#precios", label: "Precios" },
  { href: "/agencias", label: "Agencias" },
];

const AGENCY_NAV = [
  { href: "/agencias#trabajos", label: "Trabajos" },
  { href: "/agencias#proceso", label: "Cómo trabajamos" },
  { href: "/agencias#precios", label: "Precios" },
  { href: "/agencias#preguntas", label: "Preguntas" },
];

export function SiteHeader() {
  const agency = usePathname()?.startsWith("/agencias") ?? false;
  const nav = agency ? AGENCY_NAV : BUSINESS_NAV;

  return (
    <header className="site-header">
      <div className="wrap">
        <SectionLink href={agency ? "/agencias" : "/"} className="wordmark">
          <span className="wordmark-mark" aria-hidden="true">
            W
          </span>
          <span>
            <b>{OWNER}</b>
            <small>{agency ? "Webs en marca blanca para agencias" : "Páginas web para negocios"}</small>
          </span>
        </SectionLink>
        <nav className="site-nav" aria-label="Secciones">
          {nav.map((item) => (
            <SectionLink key={item.href} href={item.href}>
              {item.label}
            </SectionLink>
          ))}
        </nav>
        <SectionLink href={agency ? "/agencias#contacto" : "/#contacto"} className="btn btn-wa">
          <span className="cta-long">Escribir por&nbsp;</span>WhatsApp
        </SectionLink>
      </div>
    </header>
  );
}
