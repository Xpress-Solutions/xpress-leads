import { HIGHLIGHTS } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Highlights() {
  const ref = useReveal();

  return (
    <section className="section" id="casa">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">A casa no prato</p>
          <h2 className="section-title">Galeto, grelha e o bufê do meio-dia.</h2>
          <p className="section-lead">
            Fotos da própria São Luiz: fachada, salão, espeto e a linha do almoço. Não é stock.
          </p>
        </div>
        <div className="hi-grid">
          {HIGHLIGHTS.map((item) => (
            <article className="hi-card" key={item.id}>
              <img src={item.image} alt={item.description} />
              <div>
                <span className="hi-note">{item.note}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
