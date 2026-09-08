import { SERVICES, SITE } from "../data/site.ts";
import { useReveal } from "../hooks/useReveal.ts";

export function Servicos() {
  const ref = useReveal();

  return (
    <section className="section servicos" id="servicos">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="kicker">Tabela da casa</p>
          <h2 className="section-title">Barba, cabelo e bigode.</h2>
          <p className="lead">
            Preços do Booksy da Pepeu Barber. Agenda no WhatsApp ou na plataforma — o corte é na
            Umbu 715, loja 2.
          </p>
        </div>
        <ul className="svc-list">
          {SERVICES.map((item) => (
            <li key={item.name}>
              <div>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </div>
              <em>
                {item.price}
                <small>{item.time}</small>
              </em>
            </li>
          ))}
        </ul>
        <div className="svc-foot">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Quero marcar
          </a>
        </div>
      </div>
    </section>
  );
}
