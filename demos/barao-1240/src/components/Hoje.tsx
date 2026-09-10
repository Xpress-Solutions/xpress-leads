import { SERVICES } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Hoje() {
  const ref = useReveal();

  return (
    <section className="section hoje" id="hoje">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O expediente</p>
        <h2 className="section-title">Das 7h ao fim da tarde.</h2>
        <p className="section-lead">
          Café da manhã, almoço de rua e encomenda. Quem pesquisa no Google acha o horário e o
          WhatsApp — sem depender de cardápio velho em agregador.
        </p>
        <div className="hoje-grid" style={{ marginTop: 28 }}>
          {SERVICES.map((item) => (
            <article className="hoje-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
