import { HOUSE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">Como o toldo apresenta a casa</p>
        <h2 className="section-title">Bar · cafeteria · petiscaria.</h2>
        <p className="lead">
          A faixa da fachada ainda diz o que a Beladora é: três ofícios na mesma orla, com
          nome de mulher e mesa para o Guaíba.
        </p>
        <div className="casa-grid">
          {HOUSE.map((item) => (
            <article className="casa-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
