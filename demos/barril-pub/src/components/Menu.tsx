import { MENU } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O que tem na mesa</p>
          <h2 className="section-title">Almoço na avenida. Chope na jarra.</h2>
          <p className="section-lead">
            Cardápio público da casa: o petisco do buteco, a bergamota que virou marca e as 14
            torneiras. Sem lorem — só o que a Wenceslau já conhece.
          </p>
        </div>
        <div className="menu-grid">
          {MENU.map((item) => (
            <article className="menu-item" key={item.name}>
              {item.tag ? <span className="tag">{item.tag}</span> : null}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
