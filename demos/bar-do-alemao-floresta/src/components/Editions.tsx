import { EDITIONS } from "../data/site";

export function Editions() {
  return (
    <section className="section editions" id="edicoes">
      <div className="wrap">
        <p className="kicker">No concurso</p>
        <h2 className="section-title">Petiscos que já saíram da cozinha.</h2>
        <p className="section-lead">
          Só o que as fichas públicas registram. Sem cardápio inventado, sem preço de stock.
        </p>
        <div className="ed-grid">
          {EDITIONS.map((item) => (
            <article className="ed-card" key={item.year}>
              <time>{item.year}</time>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
