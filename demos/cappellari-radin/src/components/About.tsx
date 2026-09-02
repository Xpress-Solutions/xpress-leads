import { SITE } from "../data/site.ts";

export function About() {
  return (
    <section className="section about" id="casa">
      <div className="wrap about-grid">
        <div>
          <p className="kicker">Dois sobrenomes no letreiro</p>
          <h2 className="section-title">A casa na avenida.</h2>
          <p>
            A Marmoraria Cappellari &amp; Radin está instalada em uma das maiores avenidas de
            Porto Alegre. Vive o mercado de mármores e granitos com seriedade, qualidade, mão
            de obra qualificada e compromisso com o cliente — texto da própria casa, não de
            agência.
          </p>
          <p>
            No registro oficial é {SITE.legalName}, nome fantasia Art Pedra Material de
            Construção. No balcão, o pedido chega pelo sobrenome: Cappellari e Radin. Sócio
            Sadi Radin; pátio no térreo da Ipiranga, Jardim Botânico. Arquiteto, síndico e
            reforma residencial escolhem a chapa aqui.
          </p>
        </div>
        <div className="facts">
          <div className="fact">
            <b>{SITE.founded}</b>
            <span>Abertura da ART PEDRAS RADIN LTDA</span>
          </div>
          <div className="fact">
            <b>22+ anos</b>
            <span>Mesmo ponto, mesmo ofício de pedra</span>
          </div>
          <div className="fact">
            <b>8621</b>
            <span>Avenida Ipiranga, térreo · CEP 91530-001</span>
          </div>
          <div className="fact">
            <b>B2B + casa</b>
            <span>Obra, reforma e escolha com arquiteto</span>
          </div>
        </div>
      </div>
    </section>
  );
}
