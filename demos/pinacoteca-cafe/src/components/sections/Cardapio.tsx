import { menu } from "@/data/menu";

export function Cardapio() {
  return (
    <section id="cardapio" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-accent uppercase">
          A mesa
        </p>
        <h2 className="font-display mt-3 max-w-[16ch] text-5xl leading-[0.92] md:text-6xl">
          Petisco de concurso, pizza fina e chope de carta longa.
        </h2>
        <p className="mt-5 max-w-xl text-foreground/72">
          O que a casa serve de verdade — listagens públicas, Destemperados e o prato da edição.
          Confirme preço no balcão.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {menu.map((block) => (
            <div key={block.category}>
              <h3 className="border-b border-accent/30 pb-3 text-[0.72rem] font-semibold tracking-[0.18em] text-accent uppercase">
                {block.category}
              </h3>
              <ul className="mt-6 space-y-7">
                {block.items.map((item) => (
                  <li key={item.name}>
                    <h4 className="font-display text-2xl leading-none text-foreground">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                    {"note" in item && item.note ? (
                      <p className="mt-2 text-[0.7rem] tracking-wide text-accent uppercase">
                        {item.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
