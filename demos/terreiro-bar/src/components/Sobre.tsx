import { SITE } from "../data/site";

export function Sobre() {
  return (
    <section className="section casa" id="casa">
      <div className="wrap">
        <p className="kicker">A casa</p>
        <h2 className="section-title">Eu não ando só.</h2>
        <div className="casa-grid">
          <div className="casa-photo">
            <img
              src="/fotos/fachada.png"
              alt="Fachada do Terreiro Bar Ancestral na Rua Luiz Afonso: mural, fitas do Bonfim e o letreiro"
            />
          </div>
          <div className="casa-copy">
            <p>
              {SITE.owners} abriram o Terreiro em {SITE.founded}, depois da microcervejaria Cabocla.
              Dois cervejeiros sommeliers, um casal de Viamão, e um ponto na Cidade Baixa que
              cresceu até o prédio vizinho — 2026 já com os dois espaços juntos.
            </p>
            <p>
              Mais do que um bar: território de samba, acarajé, afroempreendedores e conversa. O
              pitch da casa digital é dar página ao terreiro — não modernizar a marca.
            </p>
            <ul className="casa-points">
              <li>Roda de samba, minixirê e festa de rua na Luiz Afonso</li>
              <li>Torneiras exclusivas da Cabocla — cerveja oficial do Terreiro</li>
              <li>Reservas pelo WhatsApp · espaço para encontro e aniversário</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
