import { MENU } from "../data/menu";

export function MenuBoard() {
  return (
    <div className="menu-board">
      {MENU.map((section) => (
        <section className="menu-block" key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          <p>{section.lead}</p>
          <ul>
            {section.items.map((item) => (
              <li key={item.name}>
                <div>
                  <strong>{item.name}</strong>
                  {item.note ? <em>{item.note}</em> : null}
                </div>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
