import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Quase 50 anos na Felizardo.</h2>
          <p>
            A Mania do Gaúcho II é casa de carnes de bairro desde 1978. Cortes certificados,
            açougueiros que ensinam o ponto, vinhos, cervejas artesanais e o que falta para o
            fogo — identidade gaúcha que o site não precisa inventar, só organizar.
          </p>
          <p>
            A carne chega abatida de fazenda — historicamente de Bagé e Pantano Grande — e
            noventa por cento do balcão é fresco. Sábado é dia de fila para o churrasco de
            domingo: quem pesquisa o corte em casa agora encontra a casa, não só a vitrine.
          </p>
          <ul className="about-points">
            <li>Aberta em 21 de novembro de 1978 · CNPJ {SITE.cnpj}</li>
            <li>Gado, ovelha, porco, frango e peixe no mesmo balcão</li>
            <li>Tele-entrega e evento — o letreiro da loja já pede isso na calçada</li>
          </ul>
        </div>
        <figure className="about-photo">
          <img
            src="/fotos/hero.jpg"
            alt="Açougueiros da Mania do Gaúcho II no balcão de inox, com um corte inteiro nas mãos"
          />
          <figcaption>O balcão da Felizardo — jaleco branco, inox e o corte do dia.</figcaption>
        </figure>
      </div>
    </section>
  );
}
