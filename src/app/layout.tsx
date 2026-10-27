import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, Schibsted_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CITIES, OWNER, SITE_URL, WHATSAPP_NUMBER } from "@/data/site";
import "./globals.css";

// The studio's own face.
const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Faces of the example sites and the promo video, so they read as other businesses' brands.
// Not preloaded: nothing in the first paint of the studio's text depends on them.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
  preload: false,
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${OWNER} | Páginas web para negocios en Paraguay`,
    template: `%s | ${OWNER}`,
  },
  description:
    "Páginas web rápidas en el celular, con WhatsApp a un toque y fáciles de encontrar en Google, para negocios, profesionales y tiendas de todo Paraguay.",
  openGraph: {
    title: `${OWNER} | Páginas web para negocios en Paraguay`,
    description: "Su local cierra. Su web sigue atendiendo.",
    locale: "es_PY",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${OWNER}, diseño web`,
  url: SITE_URL,
  description: "Diseño y desarrollo de páginas web para negocios.",
  telephone: `+${WHATSAPP_NUMBER}`,
  areaServed: [
    { "@type": "Country", name: "Paraguay" },
    ...CITIES.map((city) => ({ "@type": "City", name: city })),
  ],
  address: { "@type": "PostalAddress", addressRegion: "Central", addressCountry: "PY" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} ${body.variable}`}>
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
