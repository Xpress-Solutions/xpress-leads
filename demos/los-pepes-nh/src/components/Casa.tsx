import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap casa-grid reveal" ref={ref}>
        <div className="casa-photo">
          <img src="/fotos/sala.jpeg" alt="Sala da Los Pepes: cadeira, OSB e corte em andamento" />
        </div>
        <div>
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Sente-se em casa.</h2>
          <p className="casa-bio">{SITE.bio}</p>
          <p className="casa-lead">{SITE.identity}</p>
          <p className="casa-tag">{SITE.tagline}</p>
        </div>
      </div>
    </section>
  );
}
