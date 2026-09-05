import { weekdayBuffet, weekendBuffet } from "@/data/business";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Buffet() {
  return (
    <section id="buffet" className="bg-weber-linen py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          title="O almoço da casa"
          subtitle="Buffet à quilo ou livre. Semana caseira, domingo alemão."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-sm border border-weber-muted/25 bg-weber-surface p-8 shadow-[0_12px_40px_rgba(42,22,24,0.06)]">
            <p className="text-xs font-semibold tracking-[0.22em] text-weber-brand uppercase">
              Segunda a sexta · 11h30–13h45
            </p>
            <h3 className="font-display mt-3 text-3xl text-weber-brand md:text-4xl">
              {weekdayBuffet.title}
            </h3>
            <p className="mt-1 text-weber-muted">{weekdayBuffet.subtitle}</p>
            <ul className="mt-6 space-y-3 text-weber-ink/85">
              {weekdayBuffet.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-weber-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-sm bg-weber-brand p-8 text-weber-linen shadow-[0_12px_40px_rgba(107,28,36,0.28)]">
            <p className="text-xs font-semibold tracking-[0.22em] text-weber-accent uppercase">
              Sábado e domingo · 11h30–14h15
            </p>
            <h3 className="font-display mt-3 text-3xl md:text-4xl">
              {weekendBuffet.title}
            </h3>
            <p className="mt-1 text-weber-linen/70">{weekendBuffet.subtitle}</p>
            <ul className="mt-6 space-y-3 text-weber-linen/90">
              {weekendBuffet.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-weber-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
