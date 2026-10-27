import { ProofMotion } from "@/components/ProofMotion";
import report from "@/data/lighthouse.json";

type Scores = { performance: number; accessibility: number; bestPractices: number; seo: number };

const LABELS: [keyof Scores, string][] = [
  ["performance", "Rendimiento"],
  ["accessibility", "Accesibilidad"],
  ["bestPractices", "Buenas prácticas"],
  ["seo", "SEO"],
];

const CIRC = 2 * Math.PI * 44;

function color(score: number) {
  if (score >= 90) return "#25d366";
  if (score >= 50) return "#ffb23f";
  return "#ff5c4d";
}

// Real Lighthouse results for this same site, written to lighthouse.json after each audit.
export function Proof() {
  const scores = report.scores as Scores | null;

  return (
    <section id="medido" className="section section-night" aria-labelledby="medido-title">
      <ProofMotion />
      <div className="wrap">
        <div className="section-head">
          <h2 id="medido-title">Medido, no prometido</h2>
          <p>
            Esta misma página, auditada con Lighthouse, la herramienta de Google que mide velocidad, accesibilidad y
            buenas prácticas. Así reviso cada web antes de entregarla.
          </p>
        </div>
        {scores ? (
          <div className="proof-grid">
            {LABELS.map(([key, label]) => (
              <div className="gauge" key={key} data-score={scores[key]}>
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#2a3b34" strokeWidth="8" />
                  <circle
                    className="gauge-arc"
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke={color(scores[key])}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    strokeDashoffset={CIRC * (1 - scores[key] / 100)}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <b className="gauge-value" aria-hidden="true">
                  {scores[key]}
                </b>
                <span>
                  {label}
                  <span className="sr-only">: {scores[key]} de 100</span>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="proof-meta">La medición se agrega al publicar el sitio.</p>
        )}
        {report.measured && (
          <p className="proof-meta">
            Medido el {report.measured} en modo {report.device}, con la configuración estándar de Lighthouse.
          </p>
        )}
      </div>
    </section>
  );
}
