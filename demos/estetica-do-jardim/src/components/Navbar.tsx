"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { GardenMark } from "@/components/GardenMark";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#onde", label: "Onde" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brand-deep/92 py-2.5 shadow-lg backdrop-blur-md"
            : "bg-transparent py-4",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-surface"
            onClick={() => setOpen(false)}
          >
            <GardenMark className="h-8 w-8 text-ipe" />
            <span className="font-display text-xl leading-none tracking-tight md:text-2xl">
              {business.name}
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-surface/75 transition-colors hover:text-ipe"
              >
                {link.label}
              </a>
            ))}
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase transition hover:bg-ipe"
            >
              Pedir horário
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-surface transition-all",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span className={cn("h-0.5 w-6 bg-surface transition-all", open && "opacity-0")} />
            <span
              className={cn(
                "h-0.5 w-6 bg-surface transition-all",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-deep/98 transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-surface"
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase"
            onClick={() => setOpen(false)}
          >
            Pedir horário
          </a>
        </nav>
      </div>
    </>
  );
}
