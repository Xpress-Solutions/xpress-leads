import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="casa">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">La casa</p>
          <h2 className="section-title">Anticuário de verdade.</h2>
          <p>
            O nome não é metáfora. O salão é um antiquário que serve jantar: peças
            uruguaias, argentinas e americanas, quadros, discos, latas, um Gardel na
            prateleira e o mosaico amarelo-preto com o script da casa.
          </p>
          <p>
            Família uruguaia no balcão — quase só falam espanhol, e a resposta padrão
            das reviews é <em>muchas gracias</em>. Desde {SITE.founded} na Lima e Silva,
            loja 2: restô-bar de Cidade Baixa, não tema de shopping.
          </p>
          <ul className="about-points">
            <li>Letreiro preto, script dourado e bandeiras do Uruguai na porta</li>
            <li>Renda no salão, xadrez nas mesas da calçada, toldo na rua</li>
            <li>Música ao vivo — violão, canto, mesa que canta junto no domingo</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/prateleira.jpg"
            alt="Prateleira do Anticuário com mosaico amarelo e preto, garrafas e peças antigas"
          />
          <div className="about-badge">Na Lima e Silva desde {SITE.founded}</div>
        </div>
      </div>
    </section>
  );
}
