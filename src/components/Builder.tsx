"use client";

import Link from "next/link";
import { useId, useMemo, useState, useSyncExternalStore, type CSSProperties } from "react";
import { RUBROS } from "@/data/rubros";
import { CITIES, OWNER, whatsappHref } from "@/data/site";

// "Arme su web": the visitor names the business, picks what the site must do, and a phone builds
// that site live. Every block inside the phone works (pick a slot, add products). The choices travel
// in the WhatsApp message, and the same choices can be shared as a link (?negocio=&ciudad=&quiere=&color=),
// so a prospect can receive a demo that already carries the name of their business.

type Goal = "turnos" | "pedidos" | "urgencias" | "ubicacion" | "google";

const GOALS: { id: Goal; label: string }[] = [
  { id: "turnos", label: "Que me pidan turnos" },
  { id: "pedidos", label: "Recibir pedidos por WhatsApp" },
  { id: "urgencias", label: "Atender urgencias" },
  { id: "ubicacion", label: "Mostrar horarios y cómo llegar" },
  { id: "google", label: "Aparecer en Google" },
];

const COLORS = {
  verde: { label: "Verde", accent: "#0a7d55", soft: "#e3f2ec", ink: "#0e1a16" },
  azul: { label: "Azul", accent: "#1f5fd1", soft: "#e4ecfb", ink: "#0d1a33" },
  bordo: { label: "Bordó", accent: "#9e2a3a", soft: "#f6e6e8", ink: "#2a0f14" },
  naranja: { label: "Naranja", accent: "#b84d14", soft: "#fbeadf", ink: "#2b1406" },
  grafito: { label: "Grafito", accent: "#2b2f33", soft: "#eceeef", ink: "#111315" },
} as const;
type ColorKey = keyof typeof COLORS;

const DAYS = ["Hoy", "Mañana", "Pasado"];
const TIMES = ["08:30", "10:00", "11:30", "15:00", "16:30"];
const PRODUCTS = [
  { name: "Su producto A", price: 35000 },
  { name: "Su producto B", price: 60000 },
  { name: "Su producto C", price: 120000 },
];

const DEFAULT_GOALS: Goal[] = ["turnos", "ubicacion", "google"];
const gs = new Intl.NumberFormat("es-PY");

function headline(goals: Goal[]) {
  if (goals.includes("turnos")) return "Pida su turno en un minuto";
  if (goals.includes("pedidos")) return "Haga su pedido por WhatsApp";
  if (goals.includes("urgencias")) return "Le respondemos al instante";
  return "Lo atendemos también por WhatsApp";
}

function slugify(text: string) {
  return (
    text
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "")
      .slice(0, 24) || "sunegocio"
  );
}

function initials(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return ((words[0]?.[0] ?? "S") + (words[1]?.[0] ?? "")).toUpperCase();
}

type LinkChoices = { name?: string; city?: string; goals?: Goal[]; color?: ColorKey };

// A shared demo link carries the choices in the query string. The server renders the defaults.
function parseLink(search: string): LinkChoices {
  const params = new URLSearchParams(search);
  const n = params.get("negocio");
  const c = params.get("ciudad");
  const q = params.get("quiere");
  const k = params.get("color");
  const picked = q?.split(",").filter((g): g is Goal => GOALS.some((x) => x.id === g));
  return {
    name: n ? n.slice(0, 32) : undefined,
    city: c && (CITIES as readonly string[]).includes(c) ? c : undefined,
    goals: picked?.length ? picked : undefined,
    color: k && k in COLORS ? (k as ColorKey) : undefined,
  };
}

const noopSubscribe = () => () => {};

export function Builder() {
  const search = useSyncExternalStore(noopSubscribe, () => window.location.search, () => "");
  const link = useMemo(() => parseLink(search), [search]);

  // null = the visitor has not touched it yet, so the shared link (or the default) applies.
  const [nameEdit, setName] = useState<string | null>(null);
  const [cityEdit, setCity] = useState<string | null>(null);
  const [goalsEdit, setGoals] = useState<Goal[] | null>(null);
  const [colorEdit, setColor] = useState<ColorKey | null>(null);
  const [slot, setSlot] = useState<{ day: number; time: string } | null>(null);
  const [day, setDay] = useState(0);
  const [cart, setCart] = useState<number[]>([0, 0, 0]);
  const [copied, setCopied] = useState(false);
  const nameId = useId();
  const cityId = useId();

  const name = nameEdit ?? link.name ?? "";
  const city = cityEdit ?? link.city ?? CITIES[0];
  const goals = goalsEdit ?? link.goals ?? DEFAULT_GOALS;
  const color = colorEdit ?? link.color ?? "verde";

  const business = name.trim() || "Su Negocio";
  const has = (g: Goal) => goals.includes(g);
  const toggle = (g: Goal) => setGoals(goals.includes(g) ? goals.filter((x) => x !== g) : [...goals, g]);
  const palette = COLORS[color];
  const items = cart.reduce((a, b) => a + b, 0);
  const total = cart.reduce((sum, n, i) => sum + n * PRODUCTS[i].price, 0);

  const picked = GOALS.filter((g) => has(g.id)).map((g) => g.label[0].toLowerCase() + g.label.slice(1));
  const message = `Hola, ${OWNER.split(" ")[0]}. Armé mi web en su página: ${business}, en ${city}${
    picked.length ? `, para ${picked.join(", ")}` : ""
  }. ¿Me pasa una propuesta?`;
  const href = whatsappHref(message) ?? "#contacto";

  const share = async () => {
    const url = new URL(window.location.href);
    url.search = new URLSearchParams({
      negocio: business,
      ciudad: city,
      quiere: goals.join(","),
      color,
    }).toString();
    url.hash = "demo";
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copie este enlace:", url.toString());
    }
  };

  const siteStyle = {
    "--b-accent": palette.accent,
    "--b-soft": palette.soft,
    "--b-ink": palette.ink,
  } as CSSProperties;

  return (
    <section id="ejemplos" className="section section-paper" aria-labelledby="ejemplos-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="ejemplos-title">Arme su web en 30 segundos</h2>
          <p>
            Escriba el nombre de su negocio y elija qué tiene que hacer su web. El celular la arma en vivo; cuando le
            guste, me la manda por WhatsApp y le paso el presupuesto.
          </p>
        </div>

        <div className="builder">
          <form className="builder-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label htmlFor={nameId}>Nombre de su negocio</label>
              <input
                id={nameId}
                value={name}
                maxLength={32}
                autoComplete="organization"
                placeholder="Ej.: Ferretería Don Juan"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor={cityId}>Ciudad</label>
              <select id={cityId} value={city} onChange={(e) => setCity(e.target.value)}>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <fieldset className="builder-goals">
              <legend>¿Qué tiene que hacer su web?</legend>
              {GOALS.map((g) => (
                <label key={g.id} className="chip">
                  <input type="checkbox" checked={has(g.id)} onChange={() => toggle(g.id)} />
                  <span>{g.label}</span>
                </label>
              ))}
            </fieldset>

            <fieldset className="builder-colors">
              <legend>Color de su marca</legend>
              {(Object.keys(COLORS) as ColorKey[]).map((k) => (
                <label key={k} className="swatch" style={{ "--swatch": COLORS[k].accent } as CSSProperties}>
                  <input type="radio" name="builder-color" checked={color === k} onChange={() => setColor(k)} />
                  <span>{COLORS[k].label}</span>
                </label>
              ))}
            </fieldset>

            <div className="builder-actions">
              <a className="btn btn-primary btn-arrow" href={href} target="_blank" rel="noopener">
                Quiero una web así
              </a>
              <button type="button" className="btn btn-ghost" onClick={share}>
                {copied ? "Enlace copiado" : "Copiar enlace de esta demo"}
              </button>
            </div>
          </form>

          {/* Shared links land here (#demo), so a prospect sees their site first, even on a phone. */}
          <div className="builder-preview" id="demo">
            {has("google") && (
              <figure className="serp" aria-label="Así lo encuentran en Google">
                <figcaption>Así lo encuentran cuando lo buscan</figcaption>
                <p className="serp-url">{slugify(business)}.com.py</p>
                <p className="serp-title">
                  {business} | {city}
                </p>
                <p className="serp-text">
                  {business} en {city}.{has("turnos") ? " Turnos en línea." : ""}
                  {has("pedidos") ? " Pedidos por WhatsApp." : ""} Horarios, ubicación y contacto a un toque.
                </p>
              </figure>
            )}

            <figure data-ui className="builder-phone" aria-label={`Vista previa de la web de ${business}`}>
              <div className="bsite" style={siteStyle}>
                <div className="bsite-nav">
                  <span className="bsite-logo" aria-hidden="true">
                    {initials(business)}
                  </span>
                  <b>{business}</b>
                </div>

                {has("urgencias") && (
                  <a className="bsite-urgent" href={href} target="_blank" rel="noopener">
                    Urgencias: escríbanos ahora
                  </a>
                )}

                <div className="bsite-hero">
                  <small>{city}</small>
                  <strong>{headline(goals)}</strong>
                  <a className="bsite-btn" href={href} target="_blank" rel="noopener">
                    Escríbanos por WhatsApp
                  </a>
                </div>

                {has("turnos") && (
                  <div className="bsite-block">
                    <b>Pida su turno</b>
                    <div className="bsite-days" role="group" aria-label="Día">
                      {DAYS.map((d, i) => (
                        <button key={d} type="button" aria-pressed={day === i} onClick={() => setDay(i)}>
                          {d}
                        </button>
                      ))}
                    </div>
                    <div className="bsite-times" role="group" aria-label="Hora">
                      {TIMES.map((t) => {
                        const on = slot?.day === day && slot.time === t;
                        return (
                          <button key={t} type="button" aria-pressed={on} onClick={() => setSlot({ day, time: t })}>
                            {t}
                          </button>
                        );
                      })}
                    </div>
                    <span className="bsite-cta">
                      {slot ? `Confirmar turno: ${DAYS[slot.day].toLowerCase()}, ${slot.time}` : "Elija un horario"}
                    </span>
                  </div>
                )}

                {has("pedidos") && (
                  <div className="bsite-block">
                    <b>Haga su pedido</b>
                    <ul className="bsite-products">
                      {PRODUCTS.map((p, i) => (
                        <li key={p.name}>
                          <span>
                            {p.name}
                            <small>Gs. {gs.format(p.price)}</small>
                          </span>
                          <span className="bsite-qty">
                            <button
                              type="button"
                              aria-label={`Quitar ${p.name}`}
                              onClick={() => setCart((c) => c.map((n, j) => (j === i ? Math.max(0, n - 1) : n)))}
                            >
                              −
                            </button>
                            <output aria-label={`Cantidad de ${p.name}`}>{cart[i]}</output>
                            <button
                              type="button"
                              aria-label={`Agregar ${p.name}`}
                              onClick={() => setCart((c) => c.map((n, j) => (j === i ? n + 1 : n)))}
                            >
                              +
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <span className="bsite-cta">
                      {items
                        ? `Enviar pedido por WhatsApp · ${items} ${items === 1 ? "producto" : "productos"} · Gs. ${gs.format(total)}`
                        : "Agregue productos"}
                    </span>
                  </div>
                )}

                {has("ubicacion") && (
                  <div className="bsite-block bsite-where">
                    <b>Horarios y cómo llegar</b>
                    <span>Lunes a sábado, 8 a 18 h</span>
                    <span>{city}, Paraguay</span>
                    <span className="bsite-link">Abrir en el mapa</span>
                  </div>
                )}
              </div>
            </figure>
            <p className="builder-note">Demo: los productos y horarios son de ejemplo; en su web van los suyos.</p>
          </div>
        </div>

        <nav className="builder-rubros" aria-label="Ejemplos por rubro">
          <span>Ejemplos por rubro:</span>
          {RUBROS.map((r) => (
            <Link key={r.slug} href={`/rubros/${r.slug}`}>
              {r.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
