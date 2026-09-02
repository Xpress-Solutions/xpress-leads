import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Magnifico() {
  const ref = useReveal();

  return (
    <section className="section magnifico" id="magnifico">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Comida di Buteco 2026</p>
        <h2 className="section-title">O Magnífico.</h2>
        <p className="section-lead">
          O petisco do Point no circuito deste ano. Pastel de verdade — massa
          dourada, carne, brócolis e queijo — no Rubem Berta.
        </p>
        <div className="mag-grid">
          <figure className="mag-photo">
            <img
              src="/fotos/hero.jpg"
              alt="O Magnífico: pastel dourado aberto com carne, brócolis e queijo, foto oficial do Comida di Buteco 2026"
            />
          </figure>
          <div className="mag-copy">
            <p>
              {SITE.pitch} O Magnífico é o prato que a casa coloca na mesa do
              concurso: ofício de pastelaria, não petisco genérico de bar.
            </p>
            <p>
              Tema 2026, verduras. O brócolis entra no recheio com a carne e o
              queijo, dentro da massa frita na hora. Foto oficial de Israh Ramos
              para a Revista Sabores do Sul.
            </p>
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Quero o Magnífico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
