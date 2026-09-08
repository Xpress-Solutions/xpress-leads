import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="ir">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker" style={{ color: "#f0c14b" }}>
            Sem tele-entrega
          </p>
          <h2>Vem na esquina. O xis não viaja.</h2>
          <p>
            Av. São Pedro, 1359 · São Geraldo. Terça a sábado 11h–23h, domingo 18h–23h. Segunda a
            casa descansa.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
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
