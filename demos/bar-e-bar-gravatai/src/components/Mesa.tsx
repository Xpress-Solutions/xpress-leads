import { MESA } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Mesa() {
  const ref = useReveal();

  return (
    <section className="section mesa" id="almoco">
      <div className="wrap mesa-grid">
        <div className="reveal" ref={ref}>
          <p className="kicker">Na mesa</p>
          <h2 className="title">Almoço farto. Casa simples.</h2>
          <p className="lead lead-ink">
            Quem almoça aqui descreve buffet, supermesa e carne passando quente. Não é
            cardápio inventado — é o que a casa já faz no balcão.
          </p>
        </div>
        <ol className="mesa-list">
          {MESA.map((item, i) => (
            <li key={item.title}>
              <span className="mesa-n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
