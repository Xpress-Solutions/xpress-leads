import Image from "next/image";
import { SITE } from "@/data/site";

export function Manha() {
  return (
    <section id="manha" className="section">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="kicker mb-4">
            <span className="h-px w-8 bg-[color:var(--brand)]" />
            Abre 5h45
          </p>
          <h2 className="font-display text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.9] uppercase text-[color:var(--brand)]">
            Café da manhã ao fim da tarde.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-[color:var(--ink)]/78">
            Quem pesquisa café em Gravataí precisa do horário, do endereço na
            Dorival e do que tem no balcão. O La Bamba já é o ponto de rotina —
            {` `}
            {SITE.hoursLine}.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Abre", v: "5h45" },
              { k: "Fecha", v: "19h" },
              { k: "Domingo", v: "Fechado" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl bg-[color:var(--surface)] px-5 py-4 shadow-[var(--shadow)]"
              >
                <dt className="text-xs font-bold tracking-[0.16em] text-[color:var(--muted)] uppercase">
                  {item.k}
                </dt>
                <dd className="font-display mt-1 text-3xl uppercase text-[color:var(--brand)]">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="overflow-hidden rounded-[28px] bg-[color:var(--brand)] shadow-[var(--shadow)]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/cover.png"
              alt="Letreiro La Bamba com suco, pastéis e prato feito — banner oficial da casa"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <figcaption className="px-5 py-4 text-sm text-[#fff8f0]/85">
            O letreiro oficial: suco, pastel e o PF com ovo. Casa de avenida,
            não de vitrine.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
