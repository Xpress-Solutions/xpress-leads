import { LUNCH_BOARD, MENU } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Mesa() {
  const ref = useReveal();

  return (
    <section className="section mesa" id="mesa">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">A mesa</p>
          <h2 className="section-title">Almoço de quadro. Jantar de boteco.</h2>
          <p className="section-lead">
            Pratos que a casa já mostrou em foto e em avaliação — sem cardápio inventado. O preço
            do almoço está no quadro-negro da calçada.
          </p>
        </div>

        <div className="mesa-grid">
          {MENU.map((item) => (
            <article className="dish" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="dish-body">
                {item.tag ? <span className="tag">{item.tag}</span> : null}
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <small>{item.note}</small>
              </div>
            </article>
          ))}
        </div>

        <aside className="board" aria-label="Quadro do almoço">
          <h3>No quadro da calçada</h3>
          <ul>
            {LUNCH_BOARD.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <small>{item.source}</small>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
