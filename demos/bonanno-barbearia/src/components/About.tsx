import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="confraria">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Não é fila. É confraria.</h2>
          <p>
            A Bonanno fica na Av. Bispo Scalabrini, 380 loja 1, no Jardim Itu. O fedora no
            vidro, a camisa jeans da equipe e a cadeira de couro são da casa — Bruno Galante
            Rodrigues abriu em agosto de 2018 e o bairro já pede o combo pelo nome.
          </p>
          <p>
            Parede de cimento, madeira na bancada, placa na parede e conversa enquanto a
            navalha fecha o fade. Quem entra, entra para cortar e ficar.
          </p>
          <ul className="about-points">
            <li>Logo fedora + charuto no vidro — a marca da confraria</li>
            <li>Combo corte + barba como serviço de casa</li>
            <li>Equipe pedida pelo nome no Booksy</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/fachada-bruno.png"
            alt="Bruno Galante na porta da Bonanno, com o logo branco no vidro preto"
          />
          <div className="about-badge">
            {SITE.owner}
            <small>desde {SITE.founded} · Jardim Itu</small>
          </div>
        </div>
      </div>
    </section>
  );
}
