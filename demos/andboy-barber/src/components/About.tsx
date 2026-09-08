import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="andboy">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-photo">
          <img
            src="/fotos/andboy-tesoura.jpg"
            alt="Andboy no salão, tesoura na mão, avental preto e camisa xadrez"
          />
          <span className="about-badge">Andboy · o barbeiro da casa</span>
        </div>
        <div className="about-copy">
          <p className="section-kicker">Quem corta</p>
          <h2 className="section-title">Não é uma equipe. É o Andboy.</h2>
          <p>
            As avaliações do Booksy repetem o mesmo nome: Andboy. Corte, navalha,
            sobrancelha, prótese, até domicílio — uma cadeira, um ofício.
          </p>
          <p>
            O salão é de tijolo, piso xadrez e avental preto. Desde 2014 o logo
            carrega o poste, as navalhas cruzadas e o nome. Casa de barbeiro,
            não vitrine de franquia.
          </p>
          <ul className="about-points">
            <li>Estacionamento · cartão · Wi-Fi · fidelidade</li>
            <li>Agenda no Booksy e no WhatsApp</li>
            <li>
              Instagram{" "}
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
