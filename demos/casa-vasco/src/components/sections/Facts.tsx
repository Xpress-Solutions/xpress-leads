import { facts } from "@/data/business";

export function Facts() {
  return (
    <section className="relative z-10 -mt-8 border-y border-accent/20 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-px bg-accent/15 px-0 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <article key={fact.label} className="bg-surface px-6 py-8">
            <p className="font-display text-5xl leading-none text-accent">{fact.value}</p>
            <p className="mt-2 text-sm font-semibold tracking-wide text-foreground uppercase">
              {fact.label}
            </p>
            <p className="mt-2 text-sm text-foreground/60">{fact.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
