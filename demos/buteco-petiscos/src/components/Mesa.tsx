import { MESA } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Mesa() {
  const ref = useReveal();

  return (
    <section className="section mesa" id="mesa">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que tem pra mesa</p>
        <h2 className="section-title">Almoço, petisco e chopp.</h2>
        <p className="section-lead">
          Não é cardápio de aplicativo. É o que a casa faz de segunda a sábado na Floriano: prato
          de almoço, bacalhau e chope gelado.
        </p>
        <div className="mesa-grid">
          {MESA.map((item) => (
            <article className="mesa-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
