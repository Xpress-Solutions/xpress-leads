import { SERVICES, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Servicos() {
  const ref = useReveal();

  return (
    <section className="section servicos" id="servicos">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="section-kicker">Na tesoura</p>
          <h2 className="section-title">Corte, barba, sobrancelha.</h2>
          <p className="section-lead">
            Combos da casa, com preço e tempo. Agenda no site — o nome na porta é Los Pepes, não o do
            aplicativo.
          </p>
        </div>
        <ul className="service-list">
          {SERVICES.map((item) => (
            <li key={item.name} className={`service-card ${item.popular ? "is-popular" : ""}`}>
              <div>
                <p className="service-name">{item.name}</p>
                <p className="service-meta">{item.duration}</p>
              </div>
              <div className="service-end">
                <p className="service-price">{item.price}</p>
                <a href={SITE.booksy} target="_blank" rel="noreferrer">
                  Reservar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
