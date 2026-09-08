import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";

export function CtaFinal() {
  return (
    <section className="bg-brand py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
          A casinha está aberta
        </p>
        <h2 className="font-display mt-3 text-5xl leading-[0.95] text-foreground md:text-6xl">
          Entra. Escolhe a garrafa. Fica.
        </h2>
        <p className="mt-5 text-foreground/80">
          Reserva, dúvida de rótulo ou uma mesa na calçada — fala com a Casa Vasco.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={business.whatsapp} external>
            WhatsApp
          </Button>
          <Button
            href={business.mapsUrl}
            variant="ghost"
            className="!border-foreground/40 !text-foreground hover:!border-accent hover:!text-accent"
            external
          >
            Como chegar
          </Button>
        </div>
      </div>
    </section>
  );
}
