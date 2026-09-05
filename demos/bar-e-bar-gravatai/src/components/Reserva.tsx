import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reserva() {
  const ref = useReveal();

  return (
    <section className="section reserva" id="reserva">
      <div className="wrap reserva-box reveal" ref={ref}>
        <p className="kicker">Reserva de mesa</p>
        <h2 className="title">Marca a mesa na Elmo Lenz.</h2>
        <p className="lead">
          Churrascaria sente ligação demais no horário de pico. Liga, diz o nome e a hora —
          o balcão confirma o almoço.
        </p>
        <p className="reserva-phone">
          <a href={SITE.reserveHref}>{SITE.phoneDisplay}</a>
        </p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.reserveHref}>
            Ligar e reservar
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Ver no mapa
          </a>
        </div>
      </div>
    </section>
  );
}
