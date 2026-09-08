import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Senta na Confraria.</h2>
          <p>José do Patrocínio, 378 — Cidade Baixa. Agenda no Booksy ou chama no Instagram.</p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.booksy} target="_blank" rel="noreferrer">
              Agendar horário
            </a>
            <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
