import { drinks, plates, winesNote } from "@/data/menu";
import { SITE } from "@/data/site";

export function Carta() {
  return (
    <section className="section" id="carta">
      <div className="wrap">
        <p className="kicker">A carta</p>
        <h2 className="section-title mt-4">Primeiro o copo. Depois a mesa.</h2>
        <p className="section-lead mt-5">
          A primeira página do cardápio é de bebida — clássicos, autorais e uma atenção especial
          aos amargos. A cozinha da chef {SITE.partners.kitchen} acompanha no ritmo de
          compartilhar.
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] text-[color:var(--accent)] uppercase">
              Coquetelaria · {SITE.partners.bar}
            </p>
            <ul className="mt-6 divide-y divide-[color:var(--line)]">
              {drinks.map((item) => (
                <li key={item.id} className="py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl text-[color:var(--foreground)]">
                      {item.name}
                    </h3>
                    {item.note ? (
                      <span className="text-[0.68rem] tracking-[0.16em] text-[color:var(--brand)] uppercase">
                        {item.note}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-[color:var(--foreground)]/65">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-door rounded-sm bg-[color:var(--surface)] p-8 md:p-10">
            <p className="text-[0.7rem] tracking-[0.22em] text-[color:var(--brand)] uppercase">
              Cozinha · {SITE.partners.kitchen}
            </p>
            <ul className="mt-6 space-y-7">
              {plates.map((item) => (
                <li key={item.id}>
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--foreground)]/65">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <div className="olive-rule my-8" />
            <p className="text-[0.7rem] tracking-[0.22em] text-[color:var(--muted)] uppercase">
              Vinhos
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--foreground)]/70">
              {winesNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
