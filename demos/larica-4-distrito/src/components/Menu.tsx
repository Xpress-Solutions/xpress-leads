import { MENU } from "../data/menu";
import { SITE } from "../data/site";

export function Menu() {
  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <p className="kicker">O que sair da chapa</p>
        <h2 className="section-title">Pra matar a larica.</h2>
        <p className="lead">
          Cardápio público da casa — xis, pastel de carne de panela e o petisco do concurso.
          Preço e o que tem hoje, no balcão ou no WhatsApp.
        </p>
        <div className="menu-grid">
          {MENU.map((item) => (
            <article className="dish" key={item.id}>
              <span className="dish-note">{item.note}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="dish-src">Fonte: {item.source}</span>
            </article>
          ))}
        </div>
        <p className="menu-cta">
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Perguntar o que tem hoje
          </a>
        </p>
      </div>
    </section>
  );
}
