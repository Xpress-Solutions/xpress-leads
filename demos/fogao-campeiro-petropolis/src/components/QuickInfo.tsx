import { QUICK } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="O essencial da casa">
      <div className="wrap quick-grid reveal" ref={ref}>
        {QUICK.map((item, index) => (
          <article className="quick-card" key={item.title}>
            <span className="quick-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <b>{item.title}</b>
            <span>{item.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
