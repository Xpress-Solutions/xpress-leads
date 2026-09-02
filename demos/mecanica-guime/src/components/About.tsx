import { SITE } from "../data/site";

export function About() {
  return (
    <section className="section" id="casa">
      <div className="wrap casa-grid">
        <div className="casa-copy">
          <p className="kicker">A casa</p>
          <h2 className="section-title">Sobrenome na porta.</h2>
          <p>{SITE.identity}</p>
          <p>
            Abriu em {SITE.foundedLabel}. Cinco décadas depois ainda é a oficina do
            155, no meio de uma rua que ganhou condomínio novo — a Guime ficou.
          </p>
          <div className="casa-facts">
            <div className="casa-fact">
              <b>{SITE.yearsOpen} anos</b>
              <span>no mesmo ofício, na mesma rua</span>
            </div>
            <div className="casa-fact">
              <b>155</b>
              <span>Oito de Julho · casa e oficina</span>
            </div>
            <div className="casa-fact">
              <b>5 ofícios</b>
              <span>mecânica até peça, no mesmo lote</span>
            </div>
            <div className="casa-fact">
              <b>Família</b>
              <span>Guime no letreiro, Brigoni no balcão</span>
            </div>
          </div>
        </div>
        <div className="casa-panel" aria-hidden="true">
          <p className="casa-panel-label">
            Portão de rua. Piso de concreto. Orçamento no telefone — do jeito que
            oficina antiga atende.
          </p>
        </div>
      </div>
    </section>
  );
}
