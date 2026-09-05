import { MENU } from "../data/menu";
import { whatsappUrl } from "../data/site";

export function Cardapio() {
  return (
    <section className="section cardapio" id="cardapio">
      <div className="wrap">
        <p className="section-kicker">Cardápio de avenida</p>
        <h2 className="section-title">O que pede na Ceará.</h2>
        <p className="section-lead">
          Xis, alaminuta e o Tesouro. Preço do petisco do concurso no circuito;
          o resto se pede no balcão ou no WhatsApp — como a casa já trabalha.
        </p>
        <div className="menu-list">
          {MENU.map((item) => (
            <a
              key={item.id}
              className="menu-item"
              href={whatsappUrl(`Olá, Gringo’s! Quero pedir: ${item.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              {item.photo ? <img src={item.photo} alt="" /> : <div className="menu-dot" aria-hidden="true" />}
              <div>
                {item.tag ? <span className="menu-tag">{item.tag}</span> : null}
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="menu-price">{item.price}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
