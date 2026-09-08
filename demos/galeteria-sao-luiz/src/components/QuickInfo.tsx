import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Desde 1988", text: "Décadas de almoço em Santana" },
  { title: "Buffet meio-dia", text: "Seg–sex com churrasco no espeto" },
  { title: "Galeto da casa", text: "No espeto, na grelha de tijolo" },
  { title: "Telentrega", text: "Churrasco para levar · Banricompras" },
];

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap">
        <div className="quick-grid reveal" ref={ref}>
          {ITEMS.map((item) => (
            <article className="quick-card" key={item.title}>
              <b>{item.title}</b>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
