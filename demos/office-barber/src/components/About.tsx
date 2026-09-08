import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="casa">
      <div className="wrap about-grid">
        <div className="about-copy reveal" ref={ref}>
          <p className="kicker">A casa</p>
          <h2 className="section-title">Escritório de corte na Barão.</h2>
          <p>
            A Office Barber é a barbearia com nome de office na Rua Barão do
            Amazonas, 1173 — loja térreo, Jardim Botânico. Vitrine para a
            calçada, parede de bloco cinza, lajota clara e cadeira preta.
            Não é bunker. Não é franquia.
          </p>
          <p>
            O selo diz CUT AND SHAVE e EST. MMXXI. A casa atende de segunda a
            sábado, das 9h às 20h. Domingo e feriado a porta fica fechada —
            a própria equipe avisou isso no Booksy.
          </p>
          <ul className="about-points">
            <li>Loja térreo na via comercial do bairro</li>
            <li>Agenda no WhatsApp ou no Booksy</li>
            <li>Café citado nas avaliações — sempre no capricho</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/espelho.jpeg"
            alt="Interior da Office Barber: fade no espelho com LED e selo da casa"
          />
          <div className="about-badge">{SITE.address.street}</div>
        </div>
      </div>
    </section>
  );
}
