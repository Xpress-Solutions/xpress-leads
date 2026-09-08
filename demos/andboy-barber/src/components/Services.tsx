import { SERVICES, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const ref = useReveal();

  return (
    <section className="section services" id="servicos">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="section-kicker">Cadeira</p>
          <h2 className="section-title">O que o Andboy faz.</h2>
          <p className="section-lead">
            Preços e tempo do Booksy. Um profissional — o horário é com ele.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((item) => (
            <article className={`svc-card ${"featured" in item && item.featured ? "is-featured" : ""}`} key={item.name}>
              <div className="svc-top">
                <h3>{item.name}</h3>
                <strong>{item.price}</strong>
              </div>
              <p>{item.note}</p>
              <span>{item.time}</span>
            </article>
          ))}
        </div>
        <div className="section-foot">
          <a className="btn btn-accent" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ver horários no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
