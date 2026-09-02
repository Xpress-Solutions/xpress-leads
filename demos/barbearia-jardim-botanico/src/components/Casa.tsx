import { SITE } from "../data/site.ts";

export function Casa() {
  return (
    <section className="section" id="casa">
      <div className="wrap casa-grid">
        <div className="casa-copy">
          <p className="kicker">A casa</p>
          <h2 className="section-title">O nome já é o bairro.</h2>
          <p>{SITE.identity}</p>
          <p>
            Fica na {SITE.street}, no Jardim Botânico — a poucas quadras do jardim que dá
            nome à casa. Agenda só por WhatsApp. Espaço reformado, sala 02, ponto de rua.
          </p>
        </div>
        <figure className="casa-photo">
          <img
            src="/fotos/jardim-dossel.jpg"
            alt="Dossel e trilha do Jardim Botânico de Porto Alegre, o nome da barbearia"
          />
          <figcaption>Jardim Botânico de Porto Alegre — Felisberto, CC BY 3.0</figcaption>
        </figure>
      </div>
    </section>
  );
}
