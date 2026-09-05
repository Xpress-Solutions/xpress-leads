import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Kachurrasco() {
  const ref = useReveal();

  return (
    <section className="section petisco" id="kachurrasco">
      <div className="wrap petisco-grid reveal" ref={ref}>
        <div className="petisco-photo">
          <img
            src="/fotos/kachurrasco.jpg"
            alt="Kachurrasco — pão alongado com carne de espeto e molho verde. Foto Israh Ramos / Comida di Buteco"
          />
          <span className="petisco-stamp">Comida di Buteco 2026</span>
        </div>
        <div className="petisco-copy">
          <p className="kicker">O petisco da edição</p>
          <h2 className="title">Kachurrasco.</h2>
          <p>
            Pão alongado com gergelim, carne de espeto, molho verde da casa. Foi com ele que o
            Martins entrou no circuito 2026 de Porto Alegre e Canoas — espetinho de esquina, não
            sanduíche de vitrine.
          </p>
          <div className="petisco-meta">
            <span className="chip">Tema verduras</span>
            <span className="chip">R$ 40 no concurso</span>
            <span className="chip">Foto Israh Ramos</span>
          </div>
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
