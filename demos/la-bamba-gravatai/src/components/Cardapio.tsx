import Image from "next/image";
import { GALLERY, MENU } from "@/data/site";

export function Cardapio() {
  return (
    <section id="cardapio" className="section bg-[color:var(--surface)]">
      <div className="wrap">
        <p className="kicker mb-4">
          <span className="h-px w-8 bg-[color:var(--brand)]" />
          O que a casa mostra
        </p>
        <h2 className="font-display max-w-[16ch] text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.92] uppercase text-[color:var(--ink)]">
          Café, lanche e o PF do almoço.
        </h2>
        <p className="mt-4 max-w-2xl text-[color:var(--ink)]/72">
          Sem cardápio digital oficial. O que está abaixo vem do letreiro, das
          fotos da casa e do que o Google já descreve — sem preço inventado.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {MENU.map((item) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-black/6 bg-[color:var(--paper)] px-6 py-6"
            >
              <h3 className="font-display text-2xl uppercase tracking-wide text-[color:var(--brand)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[color:var(--ink)]/75">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {GALLERY.map((shot) => (
            <figure
              key={shot.src}
              className="overflow-hidden rounded-2xl bg-[color:var(--ink)]/6"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
              </div>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-xs text-[color:var(--muted)]">
          Fotos oficiais do Facebook da casa — estufa, pastel, lanche, pão e
          bolo.
        </p>
      </div>
    </section>
  );
}
