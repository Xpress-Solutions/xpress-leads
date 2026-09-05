import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="contato">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Tira a casa do diretório</p>
          <h2>Bar e Bar. Churrasco e almoço.</h2>
          <p className="lead final-lead">
            Reserva na Elmo Lenz — liga e marca a mesa.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.reserveHref}>
              Reservar mesa
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
