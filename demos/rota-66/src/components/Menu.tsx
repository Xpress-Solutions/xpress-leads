import { MENU, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O que se pede</p>
          <h2 className="section-title">Cardápio de lancheria.</h2>
          <p className="section-lead">
            Itens que a casa realmente serve — concurso, alaminuta, lanche e o que o bairro
            já conhece. Sem prato inventado de template.
          </p>
        </div>
        <ul className="menu-list">
          {MENU.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <em>{item.note}</em>
                <p>{item.detail}</p>
              </div>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
        <div className="menu-foot">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.menuDigital} target="_blank" rel="noreferrer">
            Cardápio digital
          </a>
        </div>
      </div>
    </section>
  );
}
