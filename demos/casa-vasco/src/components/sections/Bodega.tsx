import Image from "next/image";
import { images } from "@/data/images";
import { cellar } from "@/data/menu";

export function Bodega() {
  return (
    <section id="bodega" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">A prateleira</p>
        <h2 className="font-display mt-2 max-w-2xl text-5xl leading-[0.95] text-foreground md:text-6xl">
          Sem carta. A casa é a carta.
        </h2>
        <p className="mt-5 max-w-xl text-foreground/70">
          Você entra, olha as garrafas na janela mostarda e escolhe. Vinho de microlote gaúcho,
          cachaça de alambique, rótulo do Leste — a curadoria das irmãs, não um PDF.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden border border-accent/15 bg-surface">
            <div className="relative aspect-[16/10]">
              <Image
                src={images.bodega}
                alt="Balcão petrol da Casa Vasco com globos de latão e prateleiras de vinhos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-7">
              <h3 className="font-display text-4xl text-foreground">{cellar.wines.title}</h3>
              <p className="mt-3 text-foreground/70">{cellar.wines.lead}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {cellar.wines.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="overflow-hidden border border-accent/15 bg-surface">
            <div className="relative aspect-[16/10]">
              <Image
                src={images.cachacas}
                alt="Degustação de cachaça artesanal no balcão da Casa Vasco"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-7">
              <h3 className="font-display text-4xl text-foreground">{cellar.cachacas.title}</h3>
              <p className="mt-3 text-foreground/70">{cellar.cachacas.lead}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {cellar.cachacas.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-muted" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
