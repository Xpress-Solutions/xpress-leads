import { MENU } from "../data/menu";

export function MenuBoard() {
  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <p className="kicker">Cardápio da casa</p>
        <h2 className="section-title">O que pede na Pinho's.</h2>
        <p className="section-lead">
          Picadão, chope e o petisco do concurso. Preços e porções confirmam no
          balcão — o site não inventa tabela de agregador.
        </p>
        <div className="board">
          {MENU.map((group) => (
            <div className="board-col" key={group.id}>
              <h3>{group.title}</h3>
              {group.items.map((item) => (
                <article className="dish" key={item.name}>
                  <div className="dish-head">
                    <h4>{item.name}</h4>
                    {item.tag ? <span className="tag">{item.tag}</span> : null}
                  </div>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
        <p className="demo-note">Itens públicos de guias e da própria casa · sem foto de banco</p>
      </div>
    </section>
  );
}
