import { DISHES } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Dishes() {
  const ref = useReveal();

  return (
    <section className="section dishes" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">Os petiscos que a casa levou ao concurso</p>
          <h2 className="title">Não é cardápio inventado.</h2>
          <p className="lead">
            Dois pratos públicos, duas edições. O resto da noite — espeto, pub e o que estiver
            na brasa — se resolve no WhatsApp.
          </p>
        </div>
        <div className="dish-list">
          {DISHES.map((dish) => (
            <article className="dish" key={dish.id} id={dish.id === "poro-e-brasa" ? undefined : dish.id}>
              <img src={dish.photo} alt={dish.alt} />
              <div className="dish-body">
                <span className="dish-year">{dish.contest}</span>
                <h3>{dish.name}</h3>
                <p>{dish.lead}</p>
                <p>{dish.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
