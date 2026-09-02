import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-anita-orange py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-anita-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-display text-4xl leading-tight tracking-wide text-white uppercase md:text-6xl">
          Do café ao chope, a gente se encontra no Anita.
        </h2>
        <p className="mt-6 text-lg text-white/90">
          Passa no Armazém e aproveita o melhor do bairro.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/cardapio" variant="secondary">
            Ver Cardápio
          </Button>
          <Button
            href={business.mapsUrl}
            variant="outline"
            className="!border-white !text-white hover:!bg-white hover:!text-anita-orange"
            external
          >
            Como Chegar
          </Button>
        </div>
      </div>
    </section>
  );
}
