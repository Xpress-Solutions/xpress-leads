import Image from "next/image";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function HappyHour() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1920&q=80"
        alt="Happy hour no Anita — chope e petiscos"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-anita-black/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="Depois do trabalho, o destino é Anita."
          subtitle="Chope gelado, churrasquinho, futebol e aquele clima de boteco de bairro."
          light
        />

        <div className="flex flex-wrap gap-3">
          {["🍺 Chope", "🔥 Churrasquinho", "⚽ Futebol", "🎶 Música", "🍽 Petiscos"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {item}
              </span>
            ),
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/cardapio">Ver Cardápio</Button>
          <Button href={business.mapsUrl} variant="outline" external>
            Como Chegar
          </Button>
        </div>
      </div>
    </section>
  );
}
