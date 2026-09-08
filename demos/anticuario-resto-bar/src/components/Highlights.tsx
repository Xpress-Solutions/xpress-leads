import { HIGHLIGHTS } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Highlights() {
  const ref = useReveal();

  return (
    <section className="section highlights" id="destaques">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">A mesa pede</p>
          <h2 className="section-title">Três motivos para cruzar a Baixa.</h2>
        </div>
        <div className="hi-grid">
          {HIGHLIGHTS.map((item) => (
            <article className="hi-card" key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
