import Image from "next/image";
import { business } from "@/data/business";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-weber-brand"
    >
      <div className="hero-grain absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-weber-brand-deep via-weber-brand/70 to-weber-brand/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-32 md:px-6 md:pb-20 md:pt-40">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-weber-accent uppercase">
            Rincão · Vila Rosa · Novo Hamburgo
          </p>
          <Image
            src={images.logo}
            alt="Restaurante Weber's"
            width={420}
            height={166}
            className="mb-6 h-auto w-[min(100%,22rem)] rounded-sm shadow-2xl md:w-[26rem]"
            priority
          />
          <h1 className="font-script text-6xl leading-none text-weber-linen sm:text-7xl md:text-8xl">
            Weber&apos;s
          </h1>
          <p className="mt-2 text-sm font-semibold tracking-[0.42em] text-weber-linen/85 uppercase">
            Restaurante
          </p>
          <div className="rule-gold my-5 w-48" aria-hidden />
          <p className="font-display text-2xl text-weber-accent md:text-3xl">
            Tradição desde 1998. Eisbein e chucrute no fim de semana.
          </p>
          <p className="mt-5 max-w-xl text-lg text-weber-linen/80">
            {business.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={business.phoneLink} variant="secondary">
              Ligar {business.phone}
            </Button>
            <Button href={business.mapsUrl} variant="outline" external>
              Como chegar
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-1 text-weber-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-lg">
                  ★
                </span>
              ))}
            </div>
            <div className="text-sm text-weber-linen/70">
              <span className="font-bold text-weber-linen">
                {business.googleRating}
              </span>{" "}
              no Google ·{" "}
              <span className="font-medium text-weber-linen">
                +{business.googleReviews} avaliações
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
