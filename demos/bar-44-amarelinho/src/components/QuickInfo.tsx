import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Assis Brasil, 171", text: "Santa Maria Goretti · zona norte" },
  { title: "Almoço e jantar", text: "Dois turnos, segunda a sábado" },
  { title: "4,6 no Google", text: "83 avaliações públicas" },
  { title: "Buteco 2026", text: "Charutinhos Jalapeños" },
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
