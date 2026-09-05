import { highlights } from "@/data/business";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function MesaAlema() {
  return (
    <section id="mesa" className="bg-weber-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          title="A mesa alemã do Vale"
          subtitle="Não é oktoberfest de vitrine. É o almoço de domingo que a casa monta desde os anos 90."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.name}
              className="border-l-4 border-weber-brand bg-weber-linen px-6 py-6"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-weber-muted uppercase">
                {item.label}
              </p>
              <h3 className="font-display mt-2 text-3xl text-weber-brand">
                {item.name}
              </h3>
              <p className="mt-3 leading-relaxed text-weber-ink/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
