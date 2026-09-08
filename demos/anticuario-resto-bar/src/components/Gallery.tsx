import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/fachada.jpg", alt: "Fachada e letreiro do Anticuário na Lima e Silva" },
  { src: "/fotos/interior.jpg", alt: "Salão com paredes de antiguidades e música ao vivo" },
  { src: "/fotos/prateleira.jpg", alt: "Mosaico amarelo e preto com o nome Anticuário" },
  { src: "/fotos/pizza.jpg", alt: "Pizza da casa no tabuleiro de madeira" },
  { src: "/fotos/chivito.jpg", alt: "Chivito e panchos da casa" },
  { src: "/fotos/renda.jpg", alt: "Mesa com toalha de renda no salão" },
  { src: "/fotos/pizza-xadrez.jpg", alt: "Pizza em quadradinhos e cerveja Patricia" },
  { src: "/fotos/lanches.jpg", alt: "Lanches e mesas na calçada" },
];

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Galeria</p>
        <h2 className="section-title">A casa, o prato, a rua.</h2>
        <p className="section-lead">
          Fotos reais da fachada, do salão-antiquário e da mesa — retiradas de
          listagens públicas. O dia a dia mora no Instagram.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          {SITE.instagramHandle} no Instagram →
        </a>
      </div>
    </section>
  );
}
