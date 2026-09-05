import { DAY_PARTS, MENU, MENU_NOTE } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Na Av. do Forte</p>
        <h2 className="section-title">Almoço e noite.</h2>
        <p className="section-lead">
          A casa abre às 11h. Não é só boteco de fim de expediente — é mesa de
          avenida o dia inteiro, com o bolinho no centro.
        </p>

        <div className="menu-parts">
          {DAY_PARTS.map((part) => (
            <div className={`menu-col menu-col-${part.id}`} key={part.id}>
              <header>
                <h3>{part.label}</h3>
                <span>{part.hours}</span>
              </header>
              <ul>
                {MENU.filter((item) => item.part === part.id).map((item) => (
                  <li key={item.id} className={item.featured ? "is-featured" : undefined}>
                    <div>
                      <strong>
                        {item.name}
                        {item.official ? <em> · oficial</em> : null}
                      </strong>
                      <p>{item.description}</p>
                    </div>
                    <span className="price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="menu-note">{MENU_NOTE}</p>
      </div>
    </section>
  );
}
