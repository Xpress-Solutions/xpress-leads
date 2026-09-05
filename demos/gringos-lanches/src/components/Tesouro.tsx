import { SITE, WA_TESOURO } from "../data/site";

export function Tesouro() {
  return (
    <section className="section tesouro" id="tesouro">
      <div className="wrap tesouro-grid">
        <div className="tesouro-photo">
          <img
            src="/fotos/tesouro.jpg"
            alt="Tesouro de Molho — cubos de lanche tostado com molho de tomate e salsinha. Foto: Israh Ramos / Sabores do Sul."
          />
          <div className="tesouro-stamp">R$ 40 no circuito</div>
        </div>
        <div>
          <p className="section-kicker">O petisco da edição</p>
          <h2 className="section-title">Tesouro de Molho</h2>
          <p className="section-lead">
            A Gringo’s entrou no Comida di Buteco 2026 com o Tesouro: lanche tostado
            em cubos, molho de tomate grosso e salsinha no prato branco. Não é
            petisco de vitrine — é o lanche da Ceará com nome de concurso.
          </p>
          <div className="tesouro-meta">
            <div>
              <strong>Av. Ceará, 823</strong>
              <span>São João · Porto Alegre</span>
            </div>
            <div>
              <strong>{SITE.hoursLead}</strong>
              <span>Confirme no WhatsApp do dia</span>
            </div>
          </div>
          <a className="btn btn-primary" href={WA_TESOURO} target="_blank" rel="noreferrer">
            Quero o Tesouro
          </a>
        </div>
      </div>
    </section>
  );
}
