import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reservas() {
  const ref = useReveal();

  return (
    <section className="section reservas" id="reservas">
      <div className="wrap reservas-grid reveal" ref={ref}>
        <figure className="reservas-photo">
          <img
            src="/fotos/kids.jpg"
            alt="Espaço kids da Terra do Churrasco, ao fundo da casa: brinquedo, escorregador e grama"
          />
        </figure>
        <div>
          <p className="section-kicker">Família e grupo</p>
          <h2 className="section-title">Aniversário de 50. Criança no fundo. Cusco na mesa.</h2>
          <p className="section-lead">
            Poucas casas da zona leste reservam mesa grande de verdade. Aqui o aniversário de 50
            amigos cabe — e o espaço kids fica ao fundo, com circuito de cama elástica e prato
            pensado para criança.
          </p>
          <p className="section-lead">
            O site é a recepção do evento: manda o WhatsApp com data, horário e quantas pessoas.
            A casa confirma.
          </p>
          <div className="reservas-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Reservar grupo no WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
