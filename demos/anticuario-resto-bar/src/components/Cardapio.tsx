import { EXTRAS, MENU } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Cardapio() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">El menú</p>
        <h2 className="section-title">Chivito na mesa.</h2>
        <p className="section-lead">
          O quadro da porta anuncia o essencial: panchos, empanadas, pizzas, cerveza e
          vinos. O chivito é o que a casa carrega no nome da Cidade Baixa.
        </p>
        <div className="menu-grid">
          {MENU.map((item) => (
            <article className="dish" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="dish-body">
                <span className="dish-tag">{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="extras">
          {EXTRAS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
