import { SANDWICHES, SHARE } from "../data/menu";
import { SITE } from "../data/site";

export function Menu() {
  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <p className="section-kicker">cozinha de planta</p>
        <h2 className="section-title">o que vai pra mesa.</h2>
        <p className="section-lead">
          Cardápio enxuto, sem inspiração geográfica fixa. Muda a cada seis meses.
          Quatro sanduíches e pratos para compartilhar — tofu, focaccia, berinjela,
          azeitona empanada.
        </p>
        <div className="menu-grid">
          {SHARE.map((item) => (
            <article className="dish" key={item.name}>
              {item.tag ? <span className="tag">{item.tag}</span> : null}
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </article>
          ))}
          {SANDWICHES.map((item) => (
            <article className="dish" key={item.name}>
              {item.tag ? <span className="tag">{item.tag}</span> : null}
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
        <p className="menu-note">
          Preço e disponibilidade no balcão ou no WhatsApp. Há pão e cerveja sem
          glúten. Pedido também pelo iFood.{" "}
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Perguntar o que tem hoje →
          </a>
        </p>
      </div>
    </section>
  );
}
