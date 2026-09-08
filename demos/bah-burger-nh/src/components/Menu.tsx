import { MENU } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const headRef = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="menu-head reveal" ref={headRef}>
          <p className="kicker">Cardápio da casa</p>
          <h2 className="display">Laçador, Tá Loco, Bah!Tchê.</h2>
          <p className="lead">
            Nomes gaúchos, carne na brasa e preço do Cardápio Web oficial. Pedido pelo WhatsApp{" "}
            {SITE.phoneDisplay} — ou no cardápio digital.
          </p>
        </div>

        {MENU.map((group) => (
          <div className="menu-group" key={group.id}>
            <h3>{group.title}</h3>
            <div className="menu-list">
              {group.items.map((item) => (
                <article className="dish" key={item.name}>
                  {item.photo ? <img src={item.photo} alt={item.name} /> : null}
                  <div>
                    <h4>
                      {item.name}
                      {item.tag ? (
                        <span className={`tag${item.tag === "da casa" ? " is-red" : ""}`}>{item.tag}</span>
                      ) : null}
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className="dish-price">
                    {item.price}
                    <span className="price-unit">R$</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
