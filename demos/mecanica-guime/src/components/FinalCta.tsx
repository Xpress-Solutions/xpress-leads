import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Manda o orçamento.</h2>
          <p>
            A Guime tem {SITE.yearsOpen} anos na Oito de Julho e ainda não tinha uma
            página. O telefone é o mesmo: o que vocês fazem, o que o carro precisa,
            o valor.
          </p>
          <div className="final-actions">
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
