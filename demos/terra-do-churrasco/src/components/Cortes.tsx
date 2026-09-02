import { CORTES, EXTRAS } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Cortes() {
  const ref = useReveal();

  return (
    <section className="section cortes" id="cortes">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Do campo para a mesa</p>
          <h2 className="section-title">Cortes com capricho de assado.</h2>
          <p className="section-lead">
            Cardápio completo de assados, acompanhamentos, à la carte e sobremesas. Entradas a
            partir de R$ 21; cortes entre R$ 57 e R$ 263 — valores da inauguração, confirmar na
            casa.
          </p>
        </div>

        <div className="cortes-grid">
          {CORTES.map((item) => (
            <article className="corte-card" key={item.name}>
              <div className="corte-photo">
                <img src={item.photo} alt={item.alt} />
              </div>
              <div className="corte-body">
                <h3>{item.name}</h3>
                <p>{item.note}</p>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>

        <ul className="extras">
          {EXTRAS.map((item) => (
            <li key={item.name}>
              <b>{item.name}</b>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>

        <div className="menu-foot">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir indicação no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
