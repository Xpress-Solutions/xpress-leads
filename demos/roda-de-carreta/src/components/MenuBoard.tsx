import { BUFFET, CUTS, DESSERTS } from "../data/site";

export function MenuBoard() {
  return (
    <section className="section menu" id="cardapio">
      <div className="wrap menu-split">
        <div>
          <p className="kicker">O que vem no espeto</p>
          <h2 className="section-title">Dezesseis cortes. Uma roda.</h2>
          <p className="section-lead">
            O forte é o rodízio em espeto corrido — picanha, maminha, vazio, cupim, costela,
            ovelha e o que o fogo mandar. Buffet campeiro completa a mesa.
          </p>
          <ul className="cuts">
            {CUTS.map((cut) => (
              <li key={cut.name}>
                <strong>{cut.name}</strong>
                <span>{cut.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-cols">
          <aside className="panel">
            <h3>Comida campeira</h3>
            <ul>
              {BUFFET.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <aside className="panel">
            <h3>Sobremesa caseira</h3>
            <ul>
              {DESSERTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <p className="price-note">
            Cortes e acompanhamentos conforme relatos públicos da casa. Confirme o rodízio do
            dia no salão — preços não estão nesta vitrine.
          </p>
        </div>
      </div>
    </section>
  );
}
