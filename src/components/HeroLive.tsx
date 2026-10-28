"use client";

import { useSyncExternalStore } from "react";

// The client island of the hero. The rest of the hero renders on the server, so only the
// clock line hydrates; the entrance animation is plain CSS.

type Clock = { time: string; open: boolean };

const timeFmt = new Intl.DateTimeFormat("es-PY", {
  timeZone: "America/Asuncion",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const partsFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Asuncion",
  weekday: "short",
  hour: "numeric",
  hourCycle: "h23",
});

// Typical opening hours of the businesses I work with: Monday to Saturday, 8 to 18 h.
// Snapshots are strings so React can compare them between renders.
function readClock(): string {
  const now = new Date();
  const parts = partsFmt.formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const open = weekday !== "Sun" && hour >= 8 && hour < 18;
  return `${timeFmt.format(now)}|${open ? "open" : "closed"}`;
}

function subscribeClock(onChange: () => void) {
  const id = window.setInterval(onChange, 20_000);
  return () => window.clearInterval(id);
}

function parseClock(snapshot: string): Clock | null {
  if (!snapshot) return null;
  const [time, state] = snapshot.split("|");
  return { time, open: state === "open" };
}

// The real time only exists in the browser; the server renders the neutral state.
function useAsuncionClock(): Clock | null {
  return parseClock(useSyncExternalStore(subscribeClock, readClock, () => ""));
}

export function HeroClock() {
  const clock = useAsuncionClock();
  return (
    <p className="hero-clock" aria-live="polite">
      {clock === null ? (
        <span>Su web atiende a cualquier hora del día.</span>
      ) : clock.open ? (
        <span>
          Son las <time>{clock.time}</time> en Paraguay. Mientras usted atiende el mostrador, su web responde a los que
          preguntan desde el celular.
        </span>
      ) : (
        <span>
          Son las <time>{clock.time}</time> en Paraguay. Su local ya cerró; con una buena web, sus clientes igual pueden
          escribirle y pedir turno.
        </span>
      )}
    </p>
  );
}
