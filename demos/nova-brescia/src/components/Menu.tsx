import { OUTROS, XIS } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que pede no balcão</p>
        <h2 className="section-title">Dez sabores de xis.</h2>
        <p className="section-lead">
          Cardápio enraizado há quase 40 anos: xis, bauru, cachorro-quente e torrada. A carne chega
          fresca todo dia, o pão é exclusivo da casa e a maionese é caseira — no potinho, na mesa.
        </p>
        <p className="menu-note">
          Exceto o xis salada, os lanches saem sem milho e ervilha. Se quiser, pede no balcão — sem
          custo extra. Preço é o da chapa: pergunta na hora.
        </p>

        <div className="menu-grid">
          {XIS.map((item) => (
            <article className={`menu-card ${item.image ? "has-photo" : ""}`} key={item.id}>
              {item.image ? (
                <img src={item.image} alt={item.name} />
              ) : null}
              <div>
                {item.tag ? <span className="tag">{item.tag}</span> : null}
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="others">
          <p className="section-kicker">Fora o xis</p>
          <h3 className="section-title" style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}>
            Bauru, dog, torrada.
          </h3>
          <div className="others-grid">
            {OUTROS.map((item) => (
              <article key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
