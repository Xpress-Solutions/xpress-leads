import { SITE } from "../data/site.ts";

export function FinalCta() {
  return (
    <section className="section final" id="chegar">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Passo D’Areia</p>
          <h2 className="display">Vem à Cipó.</h2>
          <p className="lead">
            A Bruscheta Golden não tinha página da casa. Agora tem — e o mapa aponta para o 1264.
          </p>
          <div className="final-actions">
            <a className="btn btn-gold" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
            <a className="btn btn-ghost" href="#petisco">
              Ver o petisco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
