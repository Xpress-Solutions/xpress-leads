import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">A casa</p>
        <h2 className="section-title">Bah. E brasa.</h2>
        <p className="lead">{SITE.identity}</p>
        <div className="casa-grid">
          <article className="casa-card">
            <h3>Esquina de Canoas</h3>
            <p>
              Não é extensão de Porto Alegre. É São Luís, na Berto Círio — buteco metropolitano
              no mesmo circuito, com nome de quem fala gaúcho.
            </p>
          </article>
          <article className="casa-card">
            <h3>Só de noite</h3>
            <p>
              Quarta a sábado, 18h30 às 23h30. Casa que acende quando o turno vira — não armazém
              de manhã, não pub de avenida.
            </p>
          </article>
          <article className="casa-card">
            <h3>O petisco tem nome</h3>
            <p>
              Bolinho do Brasa. Sem site oficial, o concurso falava pela casa. Aqui o clique
              cai no ponto certo.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
