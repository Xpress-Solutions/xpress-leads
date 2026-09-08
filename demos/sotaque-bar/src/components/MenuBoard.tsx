import { MENU_ITEMS, PRICE_NOTE } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function MenuBoard() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Cardápio da casa</p>
        <h2 className="section-title">O que tem pra mesa.</h2>
        <p className="section-lead">
          Petiscos, sanduíches e drinks com brasilidade. Carta enxuta, do jeito que
          o boteco prometeu no primeiro dia.
        </p>
        <div className="menu-list">
          {MENU_ITEMS.map((item) => (
            <article className="menu-row" key={item.id}>
              <div className="menu-row-top">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className="menu-note">{PRICE_NOTE}</p>
      </div>
    </section>
  );
}
