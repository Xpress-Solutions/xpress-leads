import { BELLA } from "../data/menu";

export function Bella() {
  return (
    <section className="section bella" id="bella">
      <div className="wrap bella-grid">
        <div className="bella-photo">
          <img src={BELLA.photo} alt="Bella Virgem — espinafre, três queijos e pão de erva" />
        </div>
        <div className="bella-copy">
          <p className="kicker">{BELLA.edition}</p>
          <h2 className="section-title">{BELLA.name}</h2>
          <p>{BELLA.blurb}</p>
          <p>
            A temporada joga o clique para guia de terceiro. Aqui o petisco fica com o
            endereço certo: Olavo Bilac, 251.
          </p>
        </div>
      </div>
    </section>
  );
}
