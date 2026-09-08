import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const SHOTS = [
  { src: "/fotos/interior.jpg", alt: "Estação da Gentlemen's: parede ardósia, piso xadrez e bancada de madeira" },
  { src: "/fotos/corte-fade.jpg", alt: "Corte fade feito na casa" },
  { src: "/fotos/corte-capa.jpg", alt: "Cliente na cadeira com capa listrada" },
  { src: "/fotos/corte-tesoura.jpg", alt: "Acabamento com tesoura na Gentlemen's" },
  { src: "/fotos/corte-pomada.jpg", alt: "Corte finalizado com pomada" },
  { src: "/fotos/tiago-retrato.jpg", alt: "Tiago B. Gonçalves" },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A cadeira no retrato</p>
        <h2 className="section-title">Fotos da casa.</h2>
        <p className="section-lead">
          Interior e cortes publicados no Booksy da Gentlemen&apos;s — não é banco de imagem.
        </p>
        <div className="gallery-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
        <div className="loc-actions">
          <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
