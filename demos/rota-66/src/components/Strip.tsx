import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";
import { useReveal } from "../hooks/useReveal";

export function Strip() {
  const ref = useReveal();
  const hours = useHours();

  const items = [
    { k: hours.open ? "Aberto agora" : hours.headline, v: hours.detail },
    { k: "Restinga", v: "Av. Nilo Wulff, 902" },
    { k: "Spin Bacon", v: "Comida di Buteco 2026" },
    { k: `${SITE.rating} no Google`, v: `${SITE.reviewsCount} avaliações` },
  ];

  return (
    <section className="strip" aria-label="Informações da casa">
      <div className="wrap strip-grid reveal" ref={ref}>
        {items.map((item) => (
          <div className="strip-item" key={item.k}>
            <b>{item.k}</b>
            <span>{item.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
