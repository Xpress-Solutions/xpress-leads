import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">Sobre o pub</p>
          <h2 className="section-title">Um pedaço de Vancouver no Cristal.</h2>
          <p>{SITE.about}</p>
          <p>
            Sobreviveu à pandemia e à enchente. Segue referência de cerveja artesanal na Zona Sul
            — sem virar boate, sem virar restaurante de pose.
          </p>
          <ul className="about-points">
            <li>Comida di Buteco 2026 · Brócolis na Rede</li>
            <li>Deck, jardim e balcão em U para 130 pessoas</li>
            <li>Lema da casa: {SITE.tagline}</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/salao.jpg"
            alt="Salão do Barril Pub com balcão em U, lousa de cerveja e mesas de madeira"
          />
          <div className="about-badge">14 torneiras · balcão em U · Zona Sul</div>
        </div>
      </div>
    </section>
  );
}
