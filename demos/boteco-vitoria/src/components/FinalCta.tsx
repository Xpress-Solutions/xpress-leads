import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Já sabe onde vai ser o próximo encontro?</h2>
          <p>Chama a galera e vem pro Vitória.</p>
          <div className="final-actions">
            <Link className="btn btn-primary" to="/cardapio">
              Ver cardápio
            </Link>
            <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
