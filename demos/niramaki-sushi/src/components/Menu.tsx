import { MENU } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Cardápio da casa</p>
          <h2 className="section-title">O que sai do barco.</h2>
          <p className="section-lead">
            Combos, sashimi e hot do cardápio oficial em niramaki.ola.click. Preço e porção para
            pedir direto — sem a taxa da plataforma.
          </p>
        </div>
        <div className="menu-grid">
          {MENU.map((item) => (
            <article className="dish" key={item.id}>
              <img src={item.image} alt="" />
              <div className="dish-body">
                <span className="dish-cat">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="dish-price">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="menu-foot">
          <a className="btn btn-ghost" href={SITE.menuUrl} target="_blank" rel="noreferrer">
            Ver cardápio completo
          </a>
        </div>
      </div>
    </section>
  );
}
