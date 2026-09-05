import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const SHOTS = [
  { src: "/fotos/corte-estrela.jpeg", alt: "Degrade com estrela na 107", caption: "Estrela" },
  { src: "/fotos/corte-linhas.jpeg", alt: "Degrade com linhas na 107", caption: "Linhas" },
  { src: "/fotos/corte-fade.jpeg", alt: "Fade limpo na 107", caption: "Fade" },
  { src: "/fotos/corte-infantil.jpeg", alt: "Corte infantil com X na 107", caption: "Infantil" },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="cortes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Do salão</p>
        <h2 className="section-title">O corte da casa.</h2>
        <p className="section-lead">
          Fotos reais da 107 no Booksy. Degrade, desenho e infantil — sem stock de catálogo.
        </p>
        <div className="gallery-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Mais no Instagram {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
