import { ESPETOS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const ref = useReveal();

  return (
    <section className="section dishes" id="cardapio">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">Cardápio de espetos</p>
        <h2 className="title">O que tem no fogo.</h2>
        <p className="lead">
          O Kachurrasco é o petisco oficial do concurso. O resto da noite — carne, coração,
          linguiça, coalho — é espetinho de esquina: pede no WhatsApp e confirma o que está na
          brasa.
        </p>

        <ol className="board">
          {ESPETOS.map((item) => (
            <li className={`board-row ${item.official ? "is-official" : ""}`} key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </div>
              <em>{item.price}</em>
            </li>
          ))}
        </ol>

        <p className="board-note">
          Espetos sem foto oficial: sem stock genérico. Preço e porção se resolvem com o Martins.
        </p>
        <div className="menu-foot">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir os espetos
          </a>
        </div>
      </div>
    </section>
  );
}
