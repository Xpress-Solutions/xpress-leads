import Image from "next/image";
import { gallery } from "@/data/images";
import { site } from "@/data/site";

export function Galeria() {
  return (
    <section id="galeria" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-accent uppercase">
          Galeria
        </p>
        <h2 className="font-display mt-3 text-5xl leading-none">A casa, sem stock.</h2>
        <p className="mt-4 max-w-lg text-muted">
          Fachada, mosaico, salão e o Croqueflor — fotos públicas da Pinacoteca na República.
        </p>
        <div className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {gallery.map((shot) => (
            <figure key={shot.src} className="mb-3 break-inside-avoid overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.wide ? 900 : 720}
                height={shot.wide ? 600 : 900}
                className="h-auto w-full object-cover"
              />
            </figure>
          ))}
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm font-semibold text-accent hover:underline"
        >
          Ver {site.instagramHandle} →
        </a>
      </div>
    </section>
  );
}
