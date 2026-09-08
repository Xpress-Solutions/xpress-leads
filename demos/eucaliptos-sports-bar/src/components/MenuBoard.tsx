import { CATEGORIES, MENU } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function MenuBoard() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O que sobe na mesa</p>
          <h2 className="section-title">Hambúrguer de jogo, petisco e chope.</h2>
          <p className="section-lead">
            Nomes de gol, porção para dividir e oito torneiras — três delas da Coromberk Bier,
            marca própria da casa. Preço e porção no balcão.
          </p>
        </div>
        <div className="menu-grid">
          {CATEGORIES.flatMap((cat) =>
            MENU.filter((item) => item.category === cat.id).map((item) => (
              <article className="menu-item" key={item.id}>
                {item.tag ? <span className="menu-tag">{item.tag}</span> : null}
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            )),
          )}
        </div>
        <div className="loc-actions" style={{ marginTop: 28 }}>
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
            Cardápio no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
