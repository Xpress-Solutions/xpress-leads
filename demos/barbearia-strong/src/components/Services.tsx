import { PACKAGES, SERVICES, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const ref = useReveal();

  return (
    <section className="section" id="servicos">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que a casa faz</p>
        <h2 className="section-title">Corte, barba, centro.</h2>
        <p className="section-lead">
          Serviço de quem atende o Centro: rápido quando o expediente aperta, caprichado quando o
          cliente vem pra “terapia” — palavra deles, não nossa.
        </p>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
        <p className="section-kicker" style={{ marginTop: 40 }}>
          Do Instagram
        </p>
        <h3 className="section-title">Fidelidade Strong</h3>
        <p className="section-lead">
          Pacotes que a própria casa anunciou no @barbeariastrongpoa. Confirme vaga e regras no
          WhatsApp.
        </p>
        <div className="pack-grid">
          {PACKAGES.map((item) => (
            <article className="pack-card" key={item.name}>
              <strong>{item.name}</strong>
              <em>{item.price}</em>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="loc-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Quero marcar
          </a>
        </div>
      </div>
    </section>
  );
}
