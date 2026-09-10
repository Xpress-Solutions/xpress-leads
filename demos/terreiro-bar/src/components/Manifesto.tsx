import { SITE } from "../data/site";

export function Manifesto() {
  return (
    <section className="section manifesto" id="manifesto">
      <div className="wrap manifesto-grid">
        <div>
          <p className="kicker">ManifEstO</p>
          <h2 className="section-title">Pé no chão.</h2>
          <p className="manifesto-quote">{SITE.manifesto}</p>
          <div className="manifesto-copy">
            <p>{SITE.manifestoRest}</p>
            <p>
              Lugar de trazer a família, os amores e os amigos. Aqui a gente discute política,
              futebol e religião, sim. Sempre com respeito, sabendo que não temos uma só verdade.
            </p>
          </div>
        </div>
        <div className="manifesto-photo">
          <img
            src="/fotos/brinde.png"
            alt="Brinde de copos ceva e axé no Terreiro, com o mural da casa ao fundo"
          />
        </div>
      </div>
    </section>
  );
}
