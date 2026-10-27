import type { CSSProperties } from "react";
import type { Rubro } from "@/data/rubros";

type Props = {
  rubro: Rubro;
  variant?: "final" | "wire";
  // Opening state shown on the example site, e.g. driven by the real Asunción clock.
  status?: { open: boolean; label: string };
};

// A miniature of the website I would build for this trade. Pure markup, sized in em,
// so the same component works as a grid thumbnail and as the detail-page hero.
export function RubroMock({ rubro, variant = "final", status }: Props) {
  const { look } = rubro;
  // The skeleton keeps the layout (font, radius) but takes its greys from .mock-wire.
  const style: Record<string, string> =
    variant === "wire"
      ? { "--m-font": look.font, "--m-radius": look.radius }
      : {
          "--m-bg": look.bg,
          "--m-surface": look.surface,
          "--m-ink": look.ink,
          "--m-accent": look.accent,
          "--m-accent-ink": look.accentInk,
          "--m-font": look.font,
          "--m-radius": look.radius,
        };

  return (
    <div className={variant === "wire" ? "mock mock-wire" : "mock"} style={style as CSSProperties} aria-hidden="true">
      <div className="mock-nav">
        <span className="mock-logo" />
        <b>{rubro.business}</b>
        <em />
      </div>
      <div className="mock-hero">
        {status && <span className={status.open ? "mock-status" : "mock-status is-closed"}>{status.label}</span>}
        <span className="mock-city">{rubro.city}</span>
        <span className="mock-title">{rubro.hero}</span>
        <span className="mock-btn">{rubro.cta}</span>
      </div>
      <div className="mock-wa">
        <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        Escríbanos por WhatsApp
      </div>
      <div className="mock-cards">
        <div>
          <b>Horarios</b>
          <span>Lun a sáb, 8 a 18 h</span>
        </div>
        <div>
          <b>Cómo llegar</b>
          <span>{rubro.city}</span>
        </div>
      </div>
    </div>
  );
}
