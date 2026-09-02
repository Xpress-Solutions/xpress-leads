import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Chama a mesa.</h2>
          <p>Bah Brasa, São Luís. Quarta a sábado, na brasa.</p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsappShare} target="_blank" rel="noreferrer">
              Chama no Zap
            </a>
            <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
