import { SITE } from "../data/site";
import { SERVICES } from "../data/services";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const ref = useReveal();

  return (
    <section className="section services" id="servicos">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">A cadeira</p>
          <h2 className="section-title">O que a Confraria faz.</h2>
          <p className="section-lead">
            Preços do Booksy da casa. Corte, barba, navalhado, trança e o combo que o bairro
            pede — sem cardápio genérico de rede.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((item) => (
            <article className="svc-card" key={item.name}>
              <div>
                <small>{item.group}</small>
                <h3>{item.name}</h3>
                {"detail" in item ? <small>{item.detail}</small> : null}
              </div>
              <div>
                <div className="svc-price">{item.price}</div>
                <div className="svc-meta">{item.duration}</div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <a className="btn btn-primary" href={SITE.booksy} target="_blank" rel="noreferrer">
            Reservar no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
