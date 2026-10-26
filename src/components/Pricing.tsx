import { PLANS, PRICE_NOTES } from "@/data/precios";

export function Pricing() {
  return (
    <section id="precios" className="section section-paper" aria-labelledby="precios-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="precios-title">Precios claros, antes de empezar</h2>
          <p>Estos son los precios desde los que parte cada tipo de web. Le paso el número exacto según lo que necesite.</p>
        </div>
        <ul className="price-grid">
          {PLANS.map((plan) => (
            <li key={plan.name} className={plan.featured ? "price-card is-featured" : "price-card"}>
              <h3>{plan.name}</h3>
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
        <ul className="price-notes">
          {PRICE_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
