import Image from "next/image";
import { extras, plates } from "@/data/menu";
import { images } from "@/data/images";

export function Mesa() {
  return (
    <section id="mesa" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">A mesa</p>
            <h2 className="font-display mt-2 text-5xl leading-[0.95] text-foreground md:text-6xl">
              Comida de família, volta ao mundo.
            </h2>
            <p className="mt-5 max-w-xl text-foreground/70">
              Rabada, moqueca e galinha na cerveja ao lado de shakshuka, montaditos e burrata.
              O cardápio harmoniza com a bodega — e atende quem não come glúten, lactose ou carne.
            </p>
          </div>
          <div className="relative hidden aspect-[16/10] overflow-hidden lg:block">
            <Image
              src={images.mesa}
              alt="Mesa da Casa Vasco com pratos, taças de tinto, branco e rosé"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>

        <ol className="mt-12 divide-y divide-accent/15 border-y border-accent/15">
          {plates.map((plate, index) => (
            <li key={plate.name} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr]">
              <span className="font-display text-2xl text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl text-foreground">{plate.name}</h3>
                <p className="text-sm text-foreground/60">{plate.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <ul className="mt-8 space-y-2 text-sm text-foreground/65">
          {extras.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
