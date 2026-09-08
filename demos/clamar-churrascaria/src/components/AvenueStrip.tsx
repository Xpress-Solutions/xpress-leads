import { SITE } from "../data/site";

export function AvenueStrip() {
  return (
    <section className="strip" aria-label="Dados da casa">
      <div className="strip-grid">
        <div className="strip-item">
          <b>{SITE.address.street}</b>
          <span>{SITE.address.neighborhood} · CEP {SITE.address.cep}</span>
        </div>
        <div className="strip-item">
          <b>{SITE.phoneDisplay}</b>
          <span>O telefone da porta — ligue antes de ir</span>
        </div>
        <div className="strip-item">
          <b>Almoço 12h–15h</b>
          <span>Segunda a sábado, no corredor do comércio</span>
        </div>
        <div className="strip-item">
          <b>Jantar 19h–23h</b>
          <span>Domingo a casa descansa</span>
        </div>
      </div>
    </section>
  );
}
