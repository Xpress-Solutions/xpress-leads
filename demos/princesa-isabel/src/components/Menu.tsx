import { CORTES, RODIZIOS } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O espeto</p>
          <h2 className="section-title">Com picanha ou sem. O resto é o ritmo da casa.</h2>
          <p className="section-lead">
            Mini e completo: a diferença é ter picanha. Preços dos cards oficiais de setembro de
            2026 — confirme no dia, porque feriado muda o valor.
          </p>
        </div>
        <div className="menu-grid">
          {RODIZIOS.map((item) => (
            <article className="rodizio" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="rodizio-body">
                <p className="section-kicker">{item.note}</p>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <div className="price">{item.price}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="cortes" aria-label="Cortes do espeto">
          {CORTES.map((corte) => (
            <span className="chip" key={corte}>
              {corte}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
