import { AMENITIES, SERVICES } from "../data/services";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const ref = useReveal();

  return (
    <section className="section services" id="servicos">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">A carta</p>
          <h2 className="section-title">Combo, navalha, hora marcada.</h2>
          <p className="section-lead">
            Preços do Booksy. O Richard atende sozinho — por isso a agenda é hora marcada, sem
            fila na porta.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((svc) => (
            <article
              className={`svc-card${svc.featured ? " is-featured" : ""}`}
              key={svc.name}
            >
              <span className="tag">{svc.tag}</span>
              <h3>{svc.name}</h3>
              <p>{svc.desc}</p>
              <div className="svc-meta">
                <span className="svc-price">{svc.price}</span>
                <span>{svc.time}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="amenity-row">
          {AMENITIES.map((item) => (
            <span className="amenity" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <a className="btn btn-primary" href={SITE.booksy} target="_blank" rel="noreferrer">
            Reservar horário
          </a>
        </div>
      </div>
    </section>
  );
}
