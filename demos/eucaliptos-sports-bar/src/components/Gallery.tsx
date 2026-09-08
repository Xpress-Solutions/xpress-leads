import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  {
    src: "/fotos/fachada.jpg",
    alt: "Fachada de vidro na Cerro Largo: mesas de madeira, letreiro e bandeirinhas",
    credit: "Anselmo Cunha / RBS · QuintoAndar",
  },
  {
    src: "/fotos/chope.jpg",
    alt: "Logo do Eucaliptos sobre chope âmbar no copo pint",
    credit: "Instagram @eucaliptossportsbar",
  },
  {
    src: "/fotos/balcao.jpg",
    alt: "Interior: azulejo subway preto, destilados e pint de chope no balcão",
    credit: "Andressa Pufal / Jornal do Comércio",
  },
];

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa de verdade</p>
        <h2 className="section-title">Cerro Largo, chope e balcão.</h2>
        <p className="section-lead">
          Fotos da fachada, do mark e do interior — a mesma casa que aparece no Instagram e
          nas matérias. Nada de stock de sports bar genérico.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.credit}</figcaption>
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Mais no {SITE.instagramHandle} →
        </a>
      </div>
    </section>
  );
}
