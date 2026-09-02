import { MENU } from "../data/menu";

export function Menu() {
  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <p className="kicker">Na mesa</p>
        <h2 className="section-title">Coma a pizza d’A Virgem.</h2>
        <p className="lead">
          Pizzas autorais, escondidinho de mandioquinha e o drink que a casa batizou.
          Nomes que já circulam em guia — agora na página da casa.
        </p>
        <div className="menu-list">
          {MENU.map((item) => (
            <article className="menu-item" key={item.name}>
              {item.tag ? <span className="chip">{item.tag}</span> : null}
              <h3>{item.name}</h3>
              <p>{item.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
