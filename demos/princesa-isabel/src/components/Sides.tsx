import { MORE_SIDES, SIDES } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Sides() {
  const ref = useReveal();

  return (
    <section className="section sides" id="mesa">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">A mesa</p>
          <h2 className="section-title">A maionese que a cidade discute.</h2>
          <p className="section-lead">
            Acompanhamentos à vontade no inox. Quem conhece a Princesinha fala da carne — e para
            no prato de batata.
          </p>
        </div>
        <div className="sides-grid">
          {SIDES.map((side) => (
            <article className="side-card" key={side.id}>
              <img src={side.image} alt={side.name} />
              <div>
                <h3>{side.name}</h3>
                <p>{side.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="more-sides">Também na mesa: {MORE_SIDES.join(" · ")}.</p>
      </div>
    </section>
  );
}
