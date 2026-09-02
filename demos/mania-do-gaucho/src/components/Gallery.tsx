import { useReveal } from "../hooks/useReveal";

const SHOTS = [
  {
    src: "/fotos/hero.jpg",
    alt: "Dois açougueiros de jaleco branco segurando um corte inteiro no balcão",
  },
  {
    src: "/fotos/marca.jpg",
    alt: "Marca Casa de Carnes Mania do Gaúcho em faixa verde com Desde 1978",
  },
  {
    src: "/fotos/dia-pais.jpg",
    alt: "Peça de Dia dos Pais da casa, com logo, bandeira do RS e churrasco",
  },
  {
    src: "/fotos/bandeira.jpg",
    alt: "Bandeira do Rio Grande do Sul usada nos posts da casa",
  },
  {
    src: "/fotos/uniforme.jpg",
    alt: "Polo branco com o logo bordado — gaúcho e faixas verde, vermelho e amarelo",
  },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Da casa</p>
        <h2 className="section-title">O que a vitrine já mostra.</h2>
        <p className="section-lead">
          Fotos da página oficial — balcão, marca e uniforme. Nada de banco de imagem.
        </p>
        <div className="gallery-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src + shot.alt}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
