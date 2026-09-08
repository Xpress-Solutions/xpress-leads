import Image from "next/image";
import { images } from "@/data/images";
import { business } from "@/data/business";

const shots: { src: string; alt: string; wide?: boolean }[] = [
  { src: images.fachada, alt: "Fachada ameixa e toldo rosa na Vasco da Gama 207", wide: true },
  { src: images.salao, alt: "Salão petrol com tijolo, parquet e globos de latão" },
  { src: images.balcao, alt: "Balcão canelado e vitrine de garrafas" },
  { src: images.burrata, alt: "Burrata da casa com jamón e mel" },
  { src: images.cafe, alt: "Café da Casa Vasco" },
];

export function Galeria() {
  return (
    <section id="galeria" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">O casarão</p>
            <h2 className="font-display mt-2 text-5xl text-foreground">A casa, por dentro.</h2>
          </div>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline"
          >
            {business.instagramHandle}
          </a>
        </div>
        <div className="mt-10 columns-1 gap-3 sm:columns-2">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              className={`relative mb-3 overflow-hidden ${shot.wide ? "aspect-[16/10]" : "aspect-[4/3]"}`}
            >
              <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
