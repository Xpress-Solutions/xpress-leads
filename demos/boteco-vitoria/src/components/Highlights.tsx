import { MENU_ITEMS } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Highlights() {
  const ref = useReveal();
  const items = MENU_ITEMS.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="section highlights" id="destaques">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Os queridinhos do Vitória</p>
          <h2 className="section-title">O que a mesa pede.</h2>
          <p className="section-lead">
            Especialidades da casa e clássicos de boteco para decidir antes de sair de casa.
          </p>
        </div>
        <div className="hi-grid">
          {items.map((item) => (
            <article className="hi-card" key={item.id}>
              <img src={item.image ?? "/fotos/petiscos.jpg"} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.price}
                  {item.portion ? ` · ${item.portion}` : ""}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
