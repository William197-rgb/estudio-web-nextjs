import Link from "next/link";
import { OWNER } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="wordmark">
          <span className="wordmark-mark" aria-hidden="true">
            W
          </span>
          <span>
            <b>{OWNER}</b>
            <small>Páginas web para negocios</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Secciones">
          <Link href="/#reconstruccion">Cómo trabajo</Link>
          <Link href="/#ejemplos">Arme su web</Link>
          <Link href="/#anuncio">Su anuncio</Link>
          <Link href="/#proceso">Proceso</Link>
          <Link href="/#precios">Precios</Link>
        </nav>
        <Link href="/#contacto" className="btn btn-wa">
          <span className="cta-long">Escribir por&nbsp;</span>WhatsApp
        </Link>
      </div>
    </header>
  );
}
