import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap casa-grid reveal" ref={ref}>
        <div className="casa-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">A esquina que fede a boteco.</h2>
          <p className="section-lead">
            Dois amigos — um paulista e um garibaldense — olharam o casarão na Protásio
            com a João Guimarães e reconstruíram tudo. O nome veio dos sotaques na mesma mesa.
          </p>
          <p>
            O Sotaque é um bar plural: gente de todo tipo, pet friendly, música às vezes,
            feirinha quando rola. A arquitetura da Butiá deixou o pé-direito alto e os
            janelões abertos na calçada — até quem senta dentro parece estar na rua.
          </p>
          <p>
            Na cozinha, o combinado é o mesmo do primeiro anúncio: não inventar a roda.
            Pastel bem feito, buraco quente, cerveja gelada. O simples, com mão de chef.
          </p>
          <ul className="casa-points">
            <li>Fachada verde-musgo, letreiro branco, mesas pretas na pedra</li>
            <li>Cozinha à vista, atrás da grade de vidro canelado</li>
            <li>Desde 2022 · CNPJ ativo · ~16 mil no @sotaquebar</li>
          </ul>
        </div>
        <div className="casa-photo">
          <img
            src="/fotos/janelao.jpg"
            alt="Pé-direito alto, concreto cru e a grade de vidro canelado da cozinha do Sotaque"
          />
          <div className="casa-badge">Um bar plural · Protásio 699</div>
        </div>
      </div>
    </section>
  );
}
