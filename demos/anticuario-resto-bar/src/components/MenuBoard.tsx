import { MENU } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function MenuBoard() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="menu-head reveal" ref={ref}>
          <p className="section-kicker">Lo que hay</p>
          <h2 className="section-title">O quadro da porta.</h2>
          <p className="section-lead">
            Panchos, empanadas, pizzas, cerveza, vinos — do jeito que está no giz da entrada.
            Preços na casa; o site não inventa cardápio de agregador.
          </p>
        </div>
        <div className="menu-grid">
          {MENU.map((item) => (
            <article className="dish" key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="dish-note">{item.note}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="price-note" style={{ marginTop: 22 }}>
          Pedido e reserva pelo WhatsApp ou no {SITE.phoneDisplay}. Sem delivery nas listagens
          públicas.
        </p>
      </div>
    </section>
  );
}
