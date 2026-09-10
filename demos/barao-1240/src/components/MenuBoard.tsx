import { MENU } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function MenuBoard() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que a casa serve</p>
        <h2 className="section-title">À la minuta na calçada.</h2>
        <p className="section-lead">
          Do que aparece nas placas, nos posts e nas avaliações — não de um cardápio inventado.
          O prato do dia pergunta-se no balcão ou no WhatsApp.
        </p>
        <div className="menu-board">
          {MENU.map((item) => (
            <article className="menu-item" key={item.id}>
              {item.tag ? <span className="tag">{item.tag}</span> : null}
              <strong>{item.name}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
        <figure className="menu-photo">
          <img
            src="/fotos/cardapio.jpg"
            alt="Placas de calçada do Barão 1240 com à la minuta à parmegiana e macarronada"
          />
        </figure>
        <p className="menu-note">
          Cardápios em agregadores andam defasados. Ticket típico no Google: {SITE.priceRange}.
          Confirme o que tem hoje.
        </p>
        <div className="encomenda-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            O que tem hoje?
          </a>
        </div>
      </div>
    </section>
  );
}
