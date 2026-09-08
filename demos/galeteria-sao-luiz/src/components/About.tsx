import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">Desde {SITE.founded}</p>
          <h2 className="section-title">Galeteria de Santana, não de avenida.</h2>
          <p>
            A São Luiz fica na Rua São Luís, 844 loja 6 — o nome da casa é o nome da rua. Abriu em
            1988 e segue o ofício de galeteria tradicional: almoço, mesa de família, comida caseira.
          </p>
          <p>
            Ambiente acolhedor, limpo e calmo. Galetos e carnes na grelha de tijolo, buffet na
            semana, prato feito no sábado, telentrega no letreiro amarelo da fachada.
          </p>
          <ul className="about-points">
            <li>Casa de Santana desde 1988</li>
            <li>Churrascaria e galeteria — o logo é o espeto com chama</li>
            <li>Buffet meio-dia · churrasco para levar · Banricompras</li>
          </ul>
        </div>
        <div className="about-photo">
          <img src="/fotos/salao.jpg" alt="Salão de almoço da Galeteria São Luiz em Santana" />
          <div className="about-badge">
            {SITE.address.street}
            <br />
            Santana · POA
          </div>
        </div>
      </div>
    </section>
  );
}
