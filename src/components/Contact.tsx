"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { RUBROS } from "@/data/rubros";
import { OWNER, whatsappHref } from "@/data/site";

const timeFmt = new Intl.DateTimeFormat("es-PY", {
  timeZone: "America/Asuncion",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const noopSubscribe = () => () => {};

function buildMessage(name: string, business: string, rubroLabel: string, extra: string) {
  const who = name.trim() ? `Soy ${name.trim()}` : "Les escribo";
  const where = business.trim() ? ` de ${business.trim()}` : "";
  const kind = rubroLabel ? ` (${rubroLabel.toLowerCase()})` : "";
  const more = extra.trim() ? ` ${extra.trim()}` : "";
  return `Hola, ${OWNER.split(" ")[0]}. ${who}${where}${kind}. Me interesa una página web para mi negocio.${more}`;
}

export function Contact() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [rubro, setRubro] = useState("");
  const [extra, setExtra] = useState("");
  const noteId = useId();

  // Client-only clock for the bubble timestamp; the server renders it empty.
  const time = useSyncExternalStore(
    noopSubscribe,
    () => timeFmt.format(new Date()),
    () => "",
  );

  const rubroLabel = RUBROS.find((r) => r.slug === rubro)?.label ?? (rubro === "otro" ? "otro rubro" : "");
  const message = buildMessage(name, business, rubroLabel, extra);
  const href = whatsappHref(message);

  return (
    <section id="contacto" className="section section-paper" aria-labelledby="contacto-title">
      <div className="wrap contact-grid">
        <div>
          <div className="section-head">
            <h2 id="contacto-title">Pídame su propuesta</h2>
            <p>Complete lo que quiera y el mensaje se escribe solo. Usted lo revisa y lo envía desde su WhatsApp.</p>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label htmlFor="c-name">Su nombre</label>
              <input id="c-name" value={name} autoComplete="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="c-business">Nombre del negocio</label>
              <input
                id="c-business"
                value={business}
                autoComplete="organization"
                onChange={(e) => setBusiness(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="c-rubro">Rubro</label>
              <select id="c-rubro" value={rubro} onChange={(e) => setRubro(e.target.value)}>
                <option value="">Elegir rubro</option>
                {RUBROS.map((r) => (
                  <option key={r.slug} value={r.slug}>
                    {r.label}
                  </option>
                ))}
                <option value="otro">Otro rubro</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="c-extra">Algo más que quiera contarme</label>
              <textarea id="c-extra" value={extra} onChange={(e) => setExtra(e.target.value)} />
            </div>
            {href ? (
              <a className="btn btn-wa" href={href} target="_blank" rel="noopener">
                Enviar por WhatsApp
              </a>
            ) : (
              <>
                <a className="btn btn-wa" role="link" aria-disabled="true" aria-describedby={noteId}>
                  Enviar por WhatsApp
                </a>
                <p className="form-note" id={noteId}>
                  Falta configurar el número de WhatsApp en src/data/site.ts para activar este botón.
                </p>
              </>
            )}
          </form>
        </div>

        <figure className="chat" aria-label="Vista previa del mensaje">
          <div className="chat-head">
            <span className="chat-avatar" aria-hidden="true">
              W
            </span>
            <div>
              {OWNER}
              <small>Diseño web</small>
            </div>
          </div>
          <div className="chat-body">
            <p className="bubble">
              {message}
              <span className="bubble-meta">{time} ✓✓</span>
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
