import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CITIES, OWNER, SITE_URL, WHATSAPP_NUMBER } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${OWNER} | Páginas web para negocios de Central`,
    template: `%s | ${OWNER}`,
  },
  description:
    "Páginas web rápidas en el celular, con WhatsApp a un toque y fáciles de encontrar en Google, para negocios de Asunción y Central, Paraguay.",
  openGraph: {
    title: `${OWNER} | Páginas web para negocios de Central`,
    description: "Su local cierra. Su web sigue atendiendo.",
    locale: "es_PY",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1020",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${OWNER}, diseño web`,
  url: SITE_URL,
  description: "Diseño y desarrollo de páginas web para negocios.",
  telephone: `+${WHATSAPP_NUMBER}`,
  areaServed: CITIES.map((city) => ({ "@type": "City", name: city })),
  address: { "@type": "PostalAddress", addressRegion: "Central", addressCountry: "PY" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
