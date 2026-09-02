import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function PoroBrasa() {
  const ref = useReveal();

  return (
    <section className="section petisco" id="poro-e-brasa">
      <div className="wrap petisco-grid reveal" ref={ref}>
        <div className="petisco-photo">
          <img
            src="/fotos/poro-brasa.jpg"
            alt="Espetinho Poro e Brasa — espeto com molho rústico, batata dourada e creme de ervas. Foto Israh Ramos / Comida di Buteco"
          />
          <span className="petisco-stamp">Comida di Buteco 2026</span>
        </div>
        <div className="petisco-copy">
          <p className="kicker">O petisco da edição</p>
          <h2 className="title">Espetinho Poro e Brasa.</h2>
          <p>
            Espeto na brasa, molho de tomate rústico, batata dourada e o creme verde de ervas —
            o poró e a brasa no mesmo prato. Foi com ele que a Annalu entrou no circuito 2026
            de Porto Alegre e Canoas.
          </p>
          <div className="petisco-meta">
            <span className="chip">Tema verduras</span>
            <span className="chip">R$ 40 no concurso</span>
            <span className="chip">Foto Israh Ramos</span>
          </div>
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
