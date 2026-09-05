import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Fabricio() {
  const ref = useReveal();

  return (
    <section className="section fabricio" id="fabricio">
      <div className="wrap fabricio-grid reveal" ref={ref}>
        <div className="fabricio-photo">
          <img src="/fotos/corte-linhas.jpeg" alt="Degrade com linhas feito na Barbearia 107" />
          <span className="fabricio-badge">Cadeira do Fabricio</span>
        </div>
        <div>
          <p className="section-kicker">Quem corta</p>
          <h2 className="section-title">Fabricio Brasil.</h2>
          <p className="section-lead">
            Todo review da 107 cita o mesmo nome. Corte social, degrade na zero, navalhado,
            infantil — é o Fabricio na cadeira. Ágil, caprichado, lugar ventilado.
          </p>
          <ul className="fabricio-points">
            <li>Nome numérico próprio: a casa é 107, não um perfil de app.</li>
            <li>Agenda ativa no Booksy — o site traz a marca de volta pra casa.</li>
            <li>WhatsApp e Booksy no mesmo clique. Você escolhe como marcar.</li>
          </ul>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
              Abrir agenda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
