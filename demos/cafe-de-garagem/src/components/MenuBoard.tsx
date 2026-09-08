import { MENU } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function MenuBoard() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O ofício da casa</p>
          <h2 className="section-title">Café, lanche, PF.</h2>
          <p className="section-lead">
            Sem cardápio oficial publicado. O que a review de 2026 descreve — e o
            que o concurso confirma. Preço só onde o circuito fixou.
          </p>
        </div>
        <div className="menu-grid">
          {MENU.map((item) => (
            <article className="menu-item" key={item.id}>
              <div>
                {item.tag ? <span className="tag">{item.tag}</span> : null}
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              {item.price ? <span className="price">{item.price}</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
