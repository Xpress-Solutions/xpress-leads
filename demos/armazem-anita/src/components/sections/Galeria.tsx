"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

export function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="Um pouco do Anita."
          subtitle="Fotos reais do estabelecimento e do dia a dia no armazém."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(i)}
              className={cn(
                "group relative overflow-hidden rounded-xl",
                img.span,
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-anita-black/0 transition-colors group-hover:bg-anita-black/20" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-anita-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Galeria de fotos"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-3xl text-white"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            ×
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
