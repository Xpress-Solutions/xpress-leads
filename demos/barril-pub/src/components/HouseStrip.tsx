import { HOUSE_MARKS } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function HouseStrip() {
  const ref = useReveal();

  return (
    <section className="strip" aria-label="A casa em quatro marcas">
      <div className="wrap strip-grid reveal" ref={ref}>
        {HOUSE_MARKS.map((item) => (
          <div key={item.title}>
            <b>{item.title}</b>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
