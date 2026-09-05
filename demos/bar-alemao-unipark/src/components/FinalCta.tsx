import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Depois da aula</p>
          <h2>Sai pelo acesso 2. O Alemão tá na primeira à direita.</h2>
          <p>{SITE.pitch}</p>
          <div className="final-actions">
            <a className="btn btn-accent" href="#cardapio">
              Ver cardápio
            </a>
            <a className="btn btn-ghost" href="#acesso-2">
              Mapa do acesso 2
            </a>
            <a className="btn btn-red" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
