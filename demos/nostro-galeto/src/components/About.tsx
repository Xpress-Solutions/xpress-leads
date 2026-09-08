import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Galeteria de bairro. De verdade.</h2>
          <p>
            A Nostro Galeto fica na Avenida Bahia, 581, no São Geraldo — Quarto Distrito de Porto
            Alegre. Preserva o DNA das galeterias clássicas da Serra: salão familiar, serviço que
            não para entre as mesas, aroma de galeto assado.
          </p>
          <p>
            Casa da família Battisti. Nos dias de semana são 200, 250 refeições; no fim de semana
            a mesa dobra. Almoço de família, prato executivo, jantar de terça a sábado. Segunda a
            casa descansa.
          </p>
          <ul className="about-points">
            <li>Galeto ao primo canto e rodízio de massas</li>
            <li>Sopa de agnoline para abrir — o ritual da galeteria</li>
            <li>Av. Bahia, 581 · São Geraldo · {SITE.phoneDisplay}</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/agnoline.jpg"
            alt="Sopa de agnoline na sopeira de inox, com pão e cadeiras de madeira do salão da Nostro Galeto"
          />
          <div className="about-badge">Família Battisti · São Geraldo</div>
        </div>
      </div>
    </section>
  );
}
