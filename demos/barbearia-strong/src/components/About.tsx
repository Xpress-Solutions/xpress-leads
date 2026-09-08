import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">Sobre a Strong</p>
          <h2 className="section-title">Barbearia do centro. Nome Strong.</h2>
          <p>
            Na Rua Dr. Flores, loja 3 da Galeria Universitário, a Strong atende quem passa cedo
            pro trabalho e quem senta pra desligar. O próprio texto da casa diz: às vezes tem que
            ser rápido; às vezes o cliente vem pra terapia.
          </p>
          <p>
            O Anderson — dono, ex-atleta, barbeiro citado nas avaliações — colocou o selo preto e
            o bigode branco na parede de tijolo. Não é club. É a barbearia do Centro.
          </p>
          <ul className="about-points">
            <li>Centro Histórico · Dr. Flores</li>
            <li>Abre às 8h na maior parte da semana</li>
            <li>Agenda no WhatsApp da bio</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/interior.jpg"
            alt="Barbeiro da Strong com a máscara do logo, parede de tijolo ao fundo"
          />
          <div className="about-badge">@barbeariastrongpoa</div>
        </div>
      </div>
    </section>
  );
}
