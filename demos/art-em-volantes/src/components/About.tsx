import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">Sobre a casa</p>
          <h2 className="section-title">Mais de dez anos no volante.</h2>
          <p>{SITE.about}</p>
          <p>{SITE.pitch}</p>
          <ul className="about-points">
            <li>Revestimento de volantes e volantes injetados</li>
            <li>Costura à mão, com linha na cor do projeto</li>
            <li>Ponto na Rua Barão do Amazonas, 1475</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/couro.jpg"
            alt="Textura de couro perfurado — material do ofício da Art em Volantes"
          />
          <div className="about-badge">
            <img src="/logo-oficio.png" alt="" width={56} height={54} />
            <span>Chaves cruzadas · selo da casa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
