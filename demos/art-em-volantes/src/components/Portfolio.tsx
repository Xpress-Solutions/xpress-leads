import { WORKS } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Portfolio() {
  const ref = useReveal();

  return (
    <section className="section portfolio" id="portfolio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Trabalhos da casa</p>
        <h2 className="section-title">O volante pronto.</h2>
        <p className="section-lead">
          Fotos oficiais do ateliê — Ford, Mitsubishi e o close da costura.
          O produto vende o site.
        </p>
        <div className="portfolio-grid">
          {WORKS.map((work) => (
            <figure key={work.src}>
              <img src={work.src} alt={work.alt} />
              <figcaption>{work.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
