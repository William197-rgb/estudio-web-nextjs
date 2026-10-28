import { WORK } from "@/data/work";

// Three columns of real pages built for the showcase businesses, drifting at different speeds.
// Each column holds its strips twice so the CSS loop (translate -50%) never shows a seam.
const COLUMNS = [
  [WORK[0], WORK[1]],
  [WORK[2], WORK[3]],
  [WORK[1], WORK[0]],
];

export function HeroWall() {
  return (
    <figure className="hero-wall" aria-label="Páginas que diseñé: una barbería, una constructora, un gimnasio y una inmobiliaria">
      <div className="wall-cols" aria-hidden="true">
        {COLUMNS.map((col, i) => (
          <div className="wall-col" key={i}>
            <div className="wall-track">
              {[...col, ...col].map((w, j) => (
                <img key={j} src={`/work/${w.slug}-strip.webp`} alt="" width={520} height={w.stripHeight} loading={i === 1 ? "eager" : "lazy"} decoding="async" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <figcaption>Páginas reales que diseñé para negocios de muestra. Véalas funcionando más abajo.</figcaption>
    </figure>
  );
}
