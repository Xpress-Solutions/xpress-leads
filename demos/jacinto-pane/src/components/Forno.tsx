import { OVEN } from "@/data/site";

export function Forno() {
  return (
    <section id="forno" className="section bg-[color:var(--surface)]">
      <div className="wrap">
        <p className="kicker">Pane & cucina</p>
        <h2 className="font-display mt-3 max-w-xl text-[clamp(2.4rem,6vw,4rem)] leading-[0.95] text-[color:var(--brand)]">
          O que sai do forno na Jacinto Gomes.
        </h2>
        <p className="mt-4 max-w-xl text-[color:var(--muted)]">
          Padaria de fermentação natural e uma linha de cucina para levar —
          o ofício que a casa anunciou desde a abertura, em 2021.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {OVEN.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-white/8 bg-[#003364] p-6"
            >
              <h3 className="font-display text-3xl text-[color:var(--brand)]">
                {item.title}
              </h3>
              <p className="mt-3 text-[color:var(--foreground)]/78">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
