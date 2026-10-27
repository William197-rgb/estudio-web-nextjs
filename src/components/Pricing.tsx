import { PLANS, PRICE_NOTES } from "@/data/precios";
import { whatsappHref } from "@/data/site";

export function Pricing() {
  const custom =
    whatsappHref("Hola, William. Necesito una web a medida y quiero consultar el presupuesto.") ?? "#contacto";

  return (
    <section id="precios" className="section section-tint" aria-labelledby="precios-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="precios-title">Precios claros, antes de empezar</h2>
          <p>Estos son los precios desde los que parte cada tipo de web. Le paso el número exacto según lo que necesite.</p>
        </div>
        <ul className="price-grid">
          {PLANS.map((plan) => (
            <li key={plan.name} className={plan.featured ? "price-card is-featured" : "price-card"}>
              <h3>{plan.name}</h3>
              {plan.featured && <span className="price-badge">Recomendado</span>}
              <p className="price-from">
                <small>desde</small> {plan.from}
              </p>
              <p className="price-days">Lista en {plan.days}</p>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="price-more">
          <p>
            <b>¿Necesita algo más grande o distinto?</b>
            Sitios para empresas con varias sucursales, webs personales para profesionales o la tienda propia de su
            marca de Instagram. Me cuenta qué necesita y le paso un presupuesto a medida.
          </p>
          <a className="btn btn-ghost btn-arrow" href={custom} target="_blank" rel="noopener">
            Consultar por WhatsApp
          </a>
        </div>
        <ul className="price-notes">
          {PRICE_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
