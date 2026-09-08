import { BITES, CARTA_NOTE, WINES } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Carta() {
  const ref = useReveal();

  return (
    <section className="section carta" id="carta">
      <div className="wrap">
        <div className="carta-head reveal" ref={ref}>
          <p className="section-kicker">A carta</p>
          <h2 className="section-title">Copo, não ritual.</h2>
          <p className="section-lead">
            Todos os vinhos são do Rio Grande do Sul. A da casa sai no copo baixo de bojo —
            o mesmo preço da cerveja, de propósito.
          </p>
        </div>
        <div className="carta-grid">
          {WINES.map((item) => (
            <article className="wine" key={item.name}>
              {item.tag ? <span className="tag">{item.tag}</span> : null}
              <div className="wine-top">
                <h3>{item.name}</h3>
                <span className="wine-price">{item.price}</span>
              </div>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="carta-grid" style={{ marginTop: 12 }}>
          {BITES.map((item) => (
            <article className="wine" key={item.name}>
              <div className="wine-top">
                <h3>{item.name}</h3>
                <span className="wine-price">{item.price}</span>
              </div>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="carta-note">{CARTA_NOTE}</p>
      </div>
    </section>
  );
}
