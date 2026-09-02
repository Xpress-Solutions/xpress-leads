import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="encomenda">
      <div className="wrap">
        <p className="script">Já pediu a tele de domingo?</p>
        <h2>Reserva o corte antes da fila do sábado.</h2>
        <p>
          WhatsApp de encomenda, o que tem na semana e o ponto que você quer — a Mania do
          Gaúcho na busca de quem está montando o churrasco em casa.
        </p>
        <div className="final-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
