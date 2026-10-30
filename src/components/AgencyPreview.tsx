"use client";

import { type ReactNode, useEffect, useId, useState, useSyncExternalStore } from "react";
import { AGENCY_CITIES } from "@/data/agencias";

const PY_TZ = "America/Asuncion";

// The current minute as the snapshot, so React only re-renders when the shown time changes.
// The server snapshot is 0: the static HTML carries the plain-words fallback instead of dates.
const readMinute = () => Math.floor(Date.now() / 60_000);
function subscribeMinute(onChange: () => void) {
  const id = window.setInterval(onChange, 20_000);
  return () => window.clearInterval(id);
}

function localDate(tz: string, at: Date) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: tz, year: "numeric", month: "numeric", day: "numeric" })
      .formatToParts(at)
      .map((x) => [x.type, x.value]),
  );
  return new Date(Date.UTC(Number(p.year), Number(p.month) - 1, Number(p.day)));
}

// Business days after the day the brief arrives, counted in the agency's own calendar.
function addBusinessDays(day: Date, n: number) {
  const d = new Date(day);
  while (n > 0) {
    d.setUTCDate(d.getUTCDate() + 1);
    const w = d.getUTCDay();
    if (w !== 0 && w !== 6) n--;
  }
  return d;
}

const weekdayFmt = new Intl.DateTimeFormat("es", { weekday: "long", timeZone: "UTC" });
const dateFmt = new Intl.DateTimeFormat("es", { day: "numeric", month: "long", timeZone: "UTC" });
// "miércoles 4 de noviembre": Intl puts a comma after the weekday, which reads wrong mid-sentence.
const dayFmt = { format: (d: Date) => `${weekdayFmt.format(d)} ${dateFmt.format(d)}` };
const clock = (tz: string, at: Date) =>
  new Intl.DateTimeFormat("es", { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: tz }).format(at);

// The page's live thing: the agency types its name and picks its city; the sample site's credit
// line becomes theirs and the first version and delivery dates are shown in their calendar.
// Without JavaScript the frame shows "su agencia" and the dates line explains the plazo in words.
export function AgencyPreview({ children }: { children: ReactNode }) {
  const id = useId();
  const [agency, setAgency] = useState("");
  const [city, setCity] = useState(AGENCY_CITIES[0].name);
  const minute = useSyncExternalStore(subscribeMinute, readMinute, () => 0);
  const now = minute ? new Date(minute * 60_000) : null;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const v = document.getElementById(`${id}-video`) as HTMLVideoElement | null;
    v?.play().catch(() => {});
  }, [id]);

  const tz = AGENCY_CITIES.find((c) => c.name === city)?.tz ?? AGENCY_CITIES[0].tz;
  const name = agency.trim() || "su agencia";
  const today = now ? localDate(tz, now) : null;

  // Two grid cells of the hero: the copy with the controls on the left, the framed site on the right.
  return (
    <>
      <div className="ag-hero-copy">
        {children}
        <div className="ag-controls">
          <div className="field">
            <label htmlFor={`${id}-name`}>Nombre de su agencia</label>
            <input
              id={`${id}-name`}
              type="text"
              maxLength={40}
              autoComplete="organization"
              placeholder="Agencia Norte"
              value={agency}
              onChange={(e) => setAgency(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor={`${id}-city`}>Su ciudad</label>
            <select id={`${id}-city`} value={city} onChange={(e) => setCity(e.target.value)}>
              {AGENCY_CITIES.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="ag-dates" aria-live="polite">
          {today && now ? (
            <>
              Si me mandan el brief hoy, la primera versión les llega el <b>{dayFmt.format(addBusinessDays(today, 3))}</b> y
              la web terminada, a más tardar, el <b>{dayFmt.format(addBusinessDays(today, 7))}</b>. Ahora son las{" "}
              {clock(tz, now)} en {city} y las {clock(PY_TZ, now)} en Paraguay.
            </>
          ) : (
            <>La primera versión llega a los 3 días hábiles del brief, y la web terminada en 5 a 7 días.</>
          )}
        </p>
      </div>
        <figure className="ag-frame" data-ui>
          <div className="ag-frame-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <b>costa-alta.com</b>
          </div>
          <video
            id={`${id}-video`}
            src="/work/costa-alta.mp4"
            poster="/work/costa-alta.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            width={960}
            height={540}
            aria-label="Recorrido por la web de muestra de una inmobiliaria"
          />
          <figcaption className="ag-credit" aria-live="polite">
            Sitio hecho por <b>{name}</b>
          </figcaption>
        </figure>
    </>
  );
}
