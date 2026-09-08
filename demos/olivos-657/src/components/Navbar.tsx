"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
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
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled || open
            ? "bg-[color:var(--background)]/92 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "bg-transparent py-5",
        )}
      >
        <div className="wrap flex items-center justify-between">
          <a href="#inicio" className="flex items-baseline gap-2" aria-label={SITE.name}>
            <span className="font-display text-2xl tracking-tight text-[color:var(--foreground)] italic md:text-[1.7rem]">
              Olivos
            </span>
            <span className="font-display text-lg tracking-[0.18em] text-[color:var(--brand)]">
              657
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.78rem] tracking-[0.16em] text-[color:var(--foreground)]/70 uppercase transition-colors hover:text-[color:var(--brand)]"
              >
                {link.label}
              </a>
            ))}
            <a className="btn btn-accent !min-h-10 !px-5" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Reservar
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span className={cn("h-px w-6 bg-[color:var(--foreground)] transition-all", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-px w-6 bg-[color:var(--foreground)] transition-all", open && "opacity-0")} />
            <span className={cn("h-px w-6 bg-[color:var(--foreground)] transition-all", open && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[color:var(--background)]/98 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl italic text-[color:var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn-accent mt-4" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Reservar mesa
          </a>
          <a href={`tel:${SITE.phoneTel}`} className="text-sm text-[color:var(--muted)]">
            {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </>
  );
}
