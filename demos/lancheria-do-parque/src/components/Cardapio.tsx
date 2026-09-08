import { MENU } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Cardapio() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O que se pede</p>
          <h2 className="section-title">Xis, minuta, jarra.</h2>
          <p className="section-lead">
            Cardápio de lancheria clássica — o preço está no display do balcão, do jeito que
            sempre foi. Aqui vai o que a casa é.
          </p>
        </div>
        <div className="menu-grid">
          {MENU.map((item) => (
            <article className="menu-card" key={item.id}>
              {item.tag ? <span className="menu-tag">{item.tag}</span> : null}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className="menu-note">
          Preços no balcão. Pedido no grito — sem comanda de aplicativo.
        </p>
      </div>
    </section>
  );
}
