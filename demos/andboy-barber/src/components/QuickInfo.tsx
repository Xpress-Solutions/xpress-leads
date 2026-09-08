import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Since 2014", text: "O nome na porta é o do barbeiro." },
  { title: "5,0 · 176", text: "Booksy. Quase só nota máxima." },
  { title: "Cruz Jobim, 623", text: "Jardim Itu, zona norte de POA." },
  { title: "Navalha", text: "Toalha quente, espuma e despertar ice." },
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
