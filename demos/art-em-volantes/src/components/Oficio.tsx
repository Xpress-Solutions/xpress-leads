import { SERVICES } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Oficio() {
  const ref = useReveal();

  return (
    <section className="section oficio" id="oficio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O ofício</p>
        <h2 className="section-title">Couro, linha e ponto.</h2>
        <p className="section-lead">
          Nicho raro na cidade: quem chega já sabe o que quer — um volante que
          parou de parecer novo. A bancada fica na Barão do Amazonas.
        </p>
        <ul className="oficio-grid">
          {SERVICES.map((item) => (
            <li key={item.title} className="oficio-item">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
