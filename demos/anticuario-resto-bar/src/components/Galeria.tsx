import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/fachada.jpg", alt: "Fachada do Anticuário na Lima e Silva 985" },
  { src: "/fotos/interior.jpg", alt: "Interior com letreiro, bandeiras do Uruguai e o número 985" },
  { src: "/fotos/pancho.jpg", alt: "Panchos com queijo, azeitona e pimentão na toalha xadrez" },
  { src: "/fotos/xadrez.jpg", alt: "Pizza na tábua sobre toalha xadrez vermelha" },
  { src: "/fotos/salao.jpg", alt: "Salão com mesas de madeira e geladeira da casa" },
  { src: "/fotos/colecao.jpg", alt: "Peças de coleção, telefone de disco e bandeira uruguaia" },
  { src: "/fotos/pizza.jpg", alt: "Pizza uruguaia corte xadrez em mesa de máquina de costura" },
  { src: "/fotos/renda.jpg", alt: "Mesa com renda e prato de porcelana vintage" },
  { src: "/fotos/prateleira.jpg", alt: "Mosaico Peñarol com o nome Anticuário em cursiva, Gardel e peças na prateleira" },
] as const;

export function Galeria() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Fotos da casa</p>
        <h2 className="section-title">O salão, a rua, o prato.</h2>
        <p className="section-lead">
          Fachada, interior e comida do Anticuário — fotos públicas da casa no Google e
          no Restaurant Guru, não banco de imagem.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Mais no Instagram {SITE.instagramHandle} →
        </a>
      </div>
    </section>
  );
}
