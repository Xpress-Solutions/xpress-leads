import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Espetinho() {
  const ref = useReveal();

  return (
    <section className="section espetinho" id="espetinho">
      <div className="wrap espetinho-grid reveal" ref={ref}>
        <div className="espetinho-photo">
          <img
            src="/fotos/espetinho.jpg"
            alt="Espetinho Beladora do Comida di Buteco 2026, empanado no prato com molho verde"
          />
        </div>
        <div className="espetinho-copy">
          <p className="kicker">Comida di Buteco 2026</p>
          <h2 className="section-title">Espetinho Beladora.</h2>
          <p>
            O petisco da edição: espeto empanado da casa, o mesmo que a Revista Sabores do
            Sul fotografou para o circuito de Porto Alegre.
          </p>
          <p>
            Não é porção genérica de avenida. É o prato que leva o nome da Beladora — e o
            motivo de quem busca espetinho na orla do Guaíba.
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
