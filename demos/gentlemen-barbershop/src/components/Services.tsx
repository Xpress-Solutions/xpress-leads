import { SERVICES } from "../data/services";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const ref = useReveal();

  return (
    <section className="section services" id="servicos">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Na cadeira</p>
        <h2 className="section-title">O que o Tiago faz.</h2>
        <p className="section-lead">
          Preços e tempos do Booksy da casa. Público masculino — corte, barba e o combo que fecha o visual.
        </p>
        <div className="svc-list">
          {SERVICES.map((svc) => (
            <article className="svc-row" key={svc.name}>
              <div>
                {svc.tag ? <span className="tag">{svc.tag}</span> : null}
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
              </div>
              <div className="svc-meta">
                <div className="svc-price">{svc.price}</div>
                <span className="svc-time">{svc.duration}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="loc-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Quero esse horário
          </a>
          <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ver agenda no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
