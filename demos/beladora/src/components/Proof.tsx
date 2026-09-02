import { SITE } from "../data/site";

export function Proof() {
  return (
    <section className="proof" aria-label="A casa em números">
      <div className="wrap proof-row">
        <p>
          <strong>{SITE.reviewsCount}</strong>
          <span>avaliações no Google</span>
        </p>
        <p>
          <strong>Orla</strong>
          <span>Av. Guaíba, Ipanema</span>
        </p>
        <p>
          <strong>Buteco 2026</strong>
          <span>Espetinho Beladora</span>
        </p>
        <p>
          <strong>{SITE.hoursLabel}</strong>
          <span>horários variados</span>
        </p>
      </div>
    </section>
  );
}
