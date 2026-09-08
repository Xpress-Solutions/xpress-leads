import { QUICK } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="O essencial da casa">
      <div className="wrap quick-grid reveal" ref={ref}>
        {QUICK.map((item) => (
          <article className="quick-card" key={item.title}>
            <b>{item.title}</b>
            <span>{item.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
