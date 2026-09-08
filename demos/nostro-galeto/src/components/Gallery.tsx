import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  {
    src: "/fotos/galeto-polenta.jpg",
    alt: "Galeto assado, polenta frita e massa — o prato da Nostro Galeto",
    caption: "Galeto, polenta e massa no mesmo prato",
  },
  {
    src: "/fotos/mesa-xadrez.jpg",
    alt: "Mesa com toalha xadrez vermelha da Nostro Galeto",
    caption: "A toalha xadrez da casa",
  },
  {
    src: "/fotos/massas.jpg",
    alt: "Massas verde e lasanha da Nostro Galeto",
    caption: "Massas do rodízio",
  },
  {
    src: "/fotos/agnoline.jpg",
    alt: "Sopa de agnoline servida no salão",
    caption: "Agnoline para abrir o almoço",
  },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Da casa</p>
        <h2 className="section-title">Prato e salão.</h2>
        <p className="section-lead">
          Fotos do Instagram {SITE.instagramHandle} e da mesa real — galeto, xadrez, massas e a
          sopeira de agnoline.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p style={{ marginTop: 18 }}>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" style={{ color: "var(--brand)" }}>
            Ver mais no Instagram {SITE.instagramHandle}
          </a>
        </p>
      </div>
    </section>
  );
}
