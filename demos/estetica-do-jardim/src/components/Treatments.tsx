import { treatments } from "@/data/business";

export function Treatments() {
  return (
    <section id="tratamentos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
          Tratamentos
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-4xl font-semibold text-foreground md:text-5xl">
          O que a cliente pesquisa antes de marcar.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Estética de bairro com ticket de clínica: procedimentos, equipe e um
          WhatsApp de agenda — não um feed genérico.
        </p>

        <ol className="mt-12 divide-y divide-brand/12 border-y border-brand/12">
          {treatments.map((item, index) => (
            <li
              key={item.name}
              className="grid gap-3 py-7 md:grid-cols-[4rem_14rem_1fr] md:items-baseline"
            >
              <span className="font-display text-2xl text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-semibold text-brand">
                {item.name}
              </h3>
              <p className="text-foreground/80">{item.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
