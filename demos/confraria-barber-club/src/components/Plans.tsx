import { SITE } from "../data/site";
import { PLANS_BIWEEKLY, PLANS_MONTHLY } from "../data/services";
import { useReveal } from "../hooks/useReveal";

export function Plans() {
  const ref = useReveal();

  return (
    <section className="section plans" id="planos">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Assinatura da casa</p>
          <h2 className="section-title">Bruxos e amigos.</h2>
          <p className="section-lead">
            Os planos que a Confraria já vende no Instagram: mensal para quem é da casa,
            quinzena para quem volta a cada 15 dias.
          </p>
        </div>
        <div className="plan-cols">
          <article className="plan-board">
            <h3>Bruxos da Confraria</h3>
            <p>Planos mensais</p>
            {PLANS_MONTHLY.map((plan) => (
              <div className="plan-row" key={plan.name}>
                <div>
                  {plan.name}
                  <span> · economize até {plan.save}</span>
                </div>
                <strong>{plan.price}</strong>
              </div>
            ))}
          </article>
          <article className="plan-board">
            <h3>Amigos da Confraria</h3>
            <p>Planos quinzenais</p>
            {PLANS_BIWEEKLY.map((plan) => (
              <div className="plan-row" key={plan.name}>
                <div>
                  {plan.name}
                  <span> · economize até {plan.save}</span>
                </div>
                <strong>{plan.price}</strong>
              </div>
            ))}
          </article>
        </div>
        <div style={{ marginTop: 22 }}>
          <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
            Pedir plano no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
