import Link from "next/link";
import { CIUDADES } from "@/data/ciudades";
import { CITIES, OWNER, PHONE_DISPLAY, whatsappHref } from "@/data/site";

const CITY_PAGES = new Map(CIUDADES.map((c) => [c.name, c.slug]));

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <b>{OWNER}</b>
            <p>Páginas web para negocios, desde Central, Paraguay.</p>
            <p>
              WhatsApp:{" "}
              <a href={whatsappHref("Hola, William. Me interesa una página web para mi negocio.") ?? "#contacto"}>
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
          <div>
            <p>Trabajo con negocios de Asunción y de todo el departamento Central:</p>
            <ul className="cities">
              {CITIES.map((city) => {
                const slug = CITY_PAGES.get(city);
                return <li key={city}>{slug ? <Link href={`/diseno-web/${slug}`}>{city}</Link> : city}</li>;
              })}
            </ul>
          </div>
        </div>
        <p className="footer-small">
          © 2026 {OWNER}. Este sitio está hecho con Next.js, GSAP y Remotion, y se mide con Lighthouse.
        </p>
      </div>
    </footer>
  );
}
