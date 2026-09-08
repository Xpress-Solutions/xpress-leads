import { PERKS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="casa">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">O nome é a cidade. O ponto é a Bento.</h2>
          <p>{SITE.description}</p>
          <p>
            Tijolo aparente, azulejo branco, cadeira preta e a avenida do lado de fora. Não é
            clube inglês — é barbearia de Porto Alegre, com streetwear La Poa no balcão e
            gurizada na área kids.
          </p>
          <div className="perk-grid">
            {PERKS.map((perk) => (
              <article className="perk" key={perk.title}>
                <b>{perk.title}</b>
                <span>{perk.text}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/interior.jpg"
            alt="Corte infantil no interior de tijolo da Poa Barber Shop"
          />
          <div className="about-badge">Tijolo, azulejo e a Bento do lado de fora.</div>
        </div>
      </div>
    </section>
  );
}
