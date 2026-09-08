import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="richard">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">O Professor</p>
          <h2 className="section-title">Richard Chagas Ferreira.</h2>
          <p>
            Historiador que virou barbeiro em 2015. Os clientes chamam de Barack — e de
            Professor. Escreveu o primeiro livro nacional sobre a história da profissão:{" "}
            <em>Barbearia — A Evolução da Nobre Arte Através dos Séculos</em>.
          </p>
          <p>
            Formado na Pazzone e na Pivot Point de Chicago. Depois veio o old school da
            Schorem, na Holanda; a Figaro&apos;s, em Lisboa; a Bisb, na Itália. A casa na Zona
            Norte é onde essa escola vira corte e navalha, um cliente por vez.
          </p>
          <ul className="about-points">
            <li>Dono da {SITE.name} · EST. {SITE.foundedRoman}</li>
            <li>Livro da nobre arte — GZH, dezembro de 2023</li>
            <li>Schorem · Figaro&apos;s · Bisb · Pazzone · Pivot Point</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/richard.jpg"
            alt="Richard no jaleco com Barack bordado, alinhando um pompadour"
          />
          <div className="about-badge">Barack · o Professor</div>
        </div>
      </div>
    </section>
  );
}
