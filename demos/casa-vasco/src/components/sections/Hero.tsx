import Image from "next/image";
import { business } from "@/data/business";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-petrol">
      <Image
        src={images.fachada}
        alt="Fachada ameixa da Casa Vasco na Rua Vasco da Gama, 207 — toldo rosa, esquadrias mostarda e vitrine de garrafas"
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/70 to-brand/25" />
      <div className="awning-edge absolute inset-x-0 top-0 h-10 bg-muted/80 md:h-12" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-36 md:px-6 md:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-3 text-xs font-semibold tracking-[0.32em] text-accent uppercase">
            Bom Fim · Porto Alegre · {business.tagline}
          </p>
          <h1 className="font-display text-[4.2rem] leading-[0.82] text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
            Casa Vasco
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/85 md:text-xl">
            {business.phrase}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={business.whatsapp} external>
              Chamar no WhatsApp
            </Button>
            <Button href={business.phoneLink} variant="ghost">
              Ligar {business.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
