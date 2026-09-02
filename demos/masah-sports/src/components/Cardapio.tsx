import { MENU } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Cardapio() {
  const ref = useReveal();
  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">Na mesa</p>
          <h2 className="title">Carne, frita, chilli.</h2>
          <p className="lead">
            Argentina, brasileira, italiana — grelha e copa. Reviews citam bife, cebolada e chopp.
            Preço do concurso: o petisco saiu a R$ 35 nas edições públicas.
          </p>
        </div>
        <div className="menu-grid">
          {MENU.map((item) => (
            <article className="dish" key={item.name}>
              <div className="dish-tag">{item.tag}</div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
