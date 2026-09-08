import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const DISHES = [
  {
    title: "Petiscos de boteco",
    text: "Aipim frito com queijo colonial, polenta brustolada com salaminho e radite — o que a mesa pede enquanto o samba roda.",
  },
  {
    title: "Pratos e filés",
    text: "À la carte do sobrado: filés, pizzas e o prato que acompanha o espetáculo sem levantar da cadeira.",
  },
  {
    title: "Copo e taça",
    text: "Chope, cerveja, vinho, cachaça e drinque. A casa é de música — a bebida segura o intervalo.",
  },
];

export function Mesa() {
  const ref = useReveal();

  return (
    <section className="section mesa" id="mesa">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">A mesa</p>
          <h2 className="section-title">Comida de casa, não de palco.</h2>
          <p className="section-lead">
            Petiscos, pizzas e filés. Aos sábados, a feijoada. Preço e porção: pergunte no
            WhatsApp — esta demo não inventa cardápio.
          </p>
        </div>
        <div className="mesa-grid">
          {DISHES.map((dish) => (
            <article className="mesa-card" key={dish.title}>
              <h3>{dish.title}</h3>
              <p>{dish.text}</p>
            </article>
          ))}
        </div>
        <p className="mesa-note">
          Pratos citados em relatos públicos da casa (polenta, aipim, feijoada). Confirme o
          cardápio do dia no {SITE.instagramHandle}.
        </p>
      </div>
    </section>
  );
}
