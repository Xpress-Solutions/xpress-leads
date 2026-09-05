import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-weber-brand py-20 md:py-28">
      <div className="hero-grain absolute inset-0 opacity-60" aria-hidden />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-weber-accent uppercase">
          Desde 1998
        </p>
        <h2 className="font-display mt-4 text-4xl leading-tight text-weber-linen md:text-6xl">
          Reserva a mesa. O eisbein não espera.
        </h2>
        <p className="mt-6 text-lg text-weber-linen/80">
          {business.pitch}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={business.phoneLink} variant="secondary">
            Ligar {business.phone}
          </Button>
          <Button
            href={business.mapsUrl}
            variant="outline"
            className="!border-weber-linen !text-weber-linen hover:!bg-weber-linen hover:!text-weber-brand"
            external
          >
            Como chegar
          </Button>
        </div>
      </div>
    </section>
  );
}
