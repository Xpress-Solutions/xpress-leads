import { MENU } from "../data/site";

export function Menu() {
  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <p className="section-kicker">Cardápio da madrugada</p>
        <h2 className="section-title">Tudo muito e com tudo.</h2>
        <p className="section-lead">
          Xis à parmegiana, mocotó, torre de lasanha e o que a Andresa inventou
          esta semana. Preços públicos das matérias de 2026 — confirme na mesa.
        </p>
        <div className="menu-list">
          {MENU.map((item) => (
            <article className="menu-item" key={item.name}>
              <div className="menu-item-top">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <span className="tag">{item.tag}</span>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
