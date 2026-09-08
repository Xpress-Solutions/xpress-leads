import { agenda } from "@/data/menu";

export function Agenda() {
  return (
    <section id="agenda" className="lattice bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">Na casa</p>
        <h2 className="font-display mt-2 text-5xl leading-[0.95] text-foreground md:text-6xl">
          Jazz, milonga e produtor na mesa.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {agenda.map((item) => (
            <article key={item.title} className="border border-accent/20 bg-background/80 p-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                {item.when}
              </p>
              <h3 className="font-display mt-2 text-3xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
