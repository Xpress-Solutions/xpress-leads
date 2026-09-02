import { OFICIO } from "../data/site";

export function Casa() {
  return (
    <section className="section" id="casa">
      <div className="wrap">
        <p className="kicker">A operação</p>
        <h2 className="section-title">Parrilla à vista. Rua na porta.</h2>
        <p className="lead">
          Bar e parrilla numa casa só. Carne no fogo, chope e cerveja, tela de jogo e a calçada
          da Fernando Machado como salão extra.
        </p>
        <div className="casa-grid" style={{ marginTop: 28 }}>
          {OFICIO.map((item) => (
            <article className="casa-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <figure className="casa-photo">
          <img
            src="/fotos/salao.jpg"
            alt="Salão do Arvo: balcão de concreto, neon amarelo em zigue-zague, parrilla e tijolo aparente"
          />
        </figure>
      </div>
    </section>
  );
}
