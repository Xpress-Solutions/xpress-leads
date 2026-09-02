import Image from "next/image";
import { business } from "@/data/business";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-anita-black"
    >
      <Image
        src={images.fachada}
        alt="Fachada do Armazém Anita — mesas na calçada, toldo laranja e letreiro no Jardim Botânico"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anita-black via-anita-black/75 to-anita-black/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 md:px-6 md:pb-20 md:pt-40">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-anita-orange uppercase">
            Jardim Botânico — Porto Alegre
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-wide text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
            Do café ao happy hour.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
            {business.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/cardapio">Ver Cardápio</Button>
            <Button href={business.mapsUrl} variant="outline" external>
              Como Chegar
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-1 text-anita-orange">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-lg">
                  ★
                </span>
              ))}
            </div>
            <div className="text-sm text-white/70">
              <span className="font-bold text-white">
                {business.googleRating}
              </span>{" "}
              no Google ·{" "}
              <span className="font-medium text-white">
                +{business.googleReviews} avaliações
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
