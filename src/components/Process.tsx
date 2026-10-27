import { ProcessMotion } from "@/components/ProcessMotion";

const STEPS = [
  {
    title: "Conversamos por WhatsApp",
    text: "Me cuenta qué vende, a quién, y qué le preguntan siempre sus clientes. Con diez minutos alcanza.",
  },
  {
    title: "Le envío una propuesta en PDF",
    text: "Con lo que incluye su web y el plazo de entrega. Sin costo y sin compromiso.",
  },
  {
    title: "Diseño y armo su web",
    text: "Le muestro avances y ajustamos juntos. El plazo habitual es de unos 7 días.",
  },
  {
    title: "Se publica, y usted paga al final",
    text: "Cuando la web ya está en línea y funcionando, no antes.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="section section-paper" aria-labelledby="proceso-title">
      <ProcessMotion />
      <div className="wrap">
        <div className="section-head">
          <h2 id="proceso-title">Cuatro pasos, sin vueltas</h2>
          <p>Desde el primer mensaje hasta la web publicada, sabe en cada momento qué sigue.</p>
        </div>
        <div className="process">
          <div className="process-line" aria-hidden="true">
            <span className="process-line-fill" />
          </div>
          <ol className="process-list">
          {STEPS.map((step, i) => (
            <li key={step.title} className="process-step">
              <span className="process-dot" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
