import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>meio cheio</h2>
          <p>Manda um DM e reserva a mesa na Venâncio.</p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.instagramDm} target="_blank" rel="noreferrer">
              Reservar @meio.cheio.poa
            </a>
            <a className="btn btn-ghost is-light" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
