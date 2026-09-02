import { PRESS } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Press() {
  const ref = useReveal();

  return (
    <section className="section press" id="voz">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Na voz da casa</p>
        <h2 className="section-title">Pátio de casa, não vitrine.</h2>
        <div className="press-grid">
          {PRESS.map((item) => (
            <blockquote className="press-card" key={item.source}>
              <p>“{item.quote}”</p>
              <cite>{item.source}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
