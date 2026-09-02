import { SABORES } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Sabores() {
  const ref = useReveal();

  return (
    <section className="section sabores" id="sabores">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que pede</p>
        <h2 className="section-title">Sabores do Point.</h2>
        <p className="section-lead">
          Os petiscos de concurso estão documentados. O restante do cardápio
          pede no WhatsApp ou no delivery da casa — sem lorem, sem preço inventado.
        </p>
        <div className="sabor-list">
          {SABORES.map((item) => (
            <article className="sabor" key={item.name}>
              <span className="tag">{item.tag}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.note ? <p className="note">{item.note}</p> : null}
            </article>
          ))}
        </div>
        <div className="loc-actions">
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.delivery} target="_blank" rel="noreferrer">
            Delivery
          </a>
        </div>
      </div>
    </section>
  );
}
