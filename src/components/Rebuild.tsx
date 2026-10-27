import { RebuildMotion } from "@/components/RebuildMotion";
import { RubroMock } from "@/components/RubroMock";
import { RUBROS } from "@/data/rubros";

const example = RUBROS[0];

// Pinned, scroll-scrubbed story: a dead negocio.site page is rebuilt into a working site.
// Without JavaScript or with reduced motion, the section rests on the finished site.
export function Rebuild() {
  return (
    <section id="reconstruccion" aria-labelledby="rebuild-title">
      <RebuildMotion />
      <div className="rebuild-stage">
        <div className="wrap rebuild-grid">
          <div className="rebuild-copy">
            <h2 id="rebuild-title">Así rescato una web caída</h2>
            <ol className="rebuild-steps">
              <li className="rb-step">
                <span className="rb-num">1</span>
                <strong>La web dejó de existir</strong>
                <p>
                  Google dio de baja los sitios negocio.site en 2024. Muchos negocios todavía los tienen
                  en su ficha de Maps, y quien toca el enlace encuentra un error.
                </p>
              </li>
              <li className="rb-step">
                <span className="rb-num">2</span>
                <strong>La reconstruyo pieza por pieza</strong>
                <p>Primero la estructura: lo que su cliente necesita ver en los primeros tres segundos.</p>
              </li>
              <li className="rb-step">
                <span className="rb-num">3</span>
                <strong>Y vuelve a atender</strong>
                <p>Turnos, WhatsApp, horarios y cómo llegar. Todo pensado para el celular, donde lo buscan.</p>
              </li>
            </ol>
          </div>

          <div className="browser" aria-hidden="true">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <div className="browser-url">
                <span className="url-dead">minegocio.negocio.site</span>
                <span className="url-live">odontologiapora.com.py</span>
              </div>
            </div>
            <div className="browser-view">
              <div className="layer layer-wire">
                <RubroMock rubro={example} variant="wire" />
              </div>
              <div className="layer layer-final">
                <RubroMock rubro={example} />
              </div>
              <div className="layer layer-dead">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <rect x="14" y="20" width="72" height="60" rx="8" fill="none" stroke="#a7b7b0" strokeWidth="5" />
                  <line x1="14" y1="36" x2="86" y2="36" stroke="#a7b7b0" strokeWidth="5" />
                  <path d="M38 50 62 70M62 50 38 70" stroke="#ff6b5b" strokeWidth="7" strokeLinecap="round" />
                </svg>
                <b>No se puede acceder a este sitio</b>
                <code>ERR_NAME_NOT_RESOLVED</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
