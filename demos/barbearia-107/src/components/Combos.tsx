import { COMBOS, CUTS } from "../data/services";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

function formatPrice(value: number) {
  return `R$ ${value}`;
}

export function Combos() {
  const headRef = useReveal();
  const listRef = useReveal();

  return (
    <section className="section combos" id="combos">
      <div className="wrap">
        <div className="reveal" ref={headRef}>
          <p className="section-kicker">Combos e cortes</p>
          <h2 className="section-title">O que tem na 107.</h2>
          <p className="section-lead">
            Preços do Booksy. Combos na frente — social + barba, degrade completo ou máquina
            rápida. Agenda no WhatsApp ou no app.
          </p>
        </div>

        <div className="combo-grid reveal" ref={listRef}>
          {COMBOS.map((item) => (
            <article className={`combo-card ${item.highlight ? "is-hot" : ""}`} key={item.name}>
              <span className="combo-tag">{item.highlight ? "Mais pedido" : "Combo"}</span>
              <h3>{item.name}</h3>
              <div className="combo-meta">
                <strong>{formatPrice(item.price)}</strong>
                <span>{item.duration}</span>
              </div>
              <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                Quero esse
              </a>
            </article>
          ))}
        </div>

        <ul className="cut-list">
          {CUTS.map((cut) => (
            <li key={cut.name}>
              <span>{cut.name}</span>
              <i />
              <b>
                {formatPrice(cut.price)}
                <small>{cut.duration}</small>
              </b>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
