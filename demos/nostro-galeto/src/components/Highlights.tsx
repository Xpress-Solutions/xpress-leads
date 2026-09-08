import { HIGHLIGHTS } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Highlights() {
  const ref = useReveal();

  return (
    <section className="section highlights" id="destaques">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A mesa da casa</p>
        <h2 className="section-title">O prato, não o template.</h2>
        <p className="section-lead">
          Galeto assado, polenta frita e massa no mesmo prato branco. Toalha xadrez, radiche no
          inox — é a Nostro, não uma cantina genérica.
        </p>
        <div className="hi-grid">
          {HIGHLIGHTS.map((item) => (
            <article className="hi-card" key={item.title}>
              <img src={item.image} alt={item.alt} />
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
