import { SERVICES, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const ref = useReveal();

  return (
    <section className="section services" id="servicos">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Tabela da casa</p>
          <h2 className="section-title">Corte, barba e o combo da Bento.</h2>
          <p className="section-lead">
            Preços do Booksy. O que o bairro mais pede é o 015 — corte + barba por R$ 80.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((svc) => (
            <article
              className={`svc-card${"featured" in svc && svc.featured ? " is-featured" : ""}`}
              key={svc.name}
            >
              <div>
                <h3>{svc.name}</h3>
                <p>{svc.note}</p>
              </div>
              <div>
                <div className="svc-price">{svc.price}</div>
                <div className="svc-time">{svc.time}</div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <a className="btn btn-metal" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ver tabela completa no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
