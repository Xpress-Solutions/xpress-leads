"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#bodega", label: "Bodega" },
  { href: "#irmas", label: "As irmãs" },
  { href: "#mesa", label: "A mesa" },
  { href: "#agenda", label: "Agenda" },
  { href: "#localizacao", label: "O casarão" },
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
          scrolled ? "bg-petrol/92 py-2 shadow-lg backdrop-blur-md" : "bg-transparent py-4",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#inicio" className="leading-none">
            <span className="font-display text-2xl tracking-wide text-foreground md:text-3xl">
              Casa Vasco
            </span>
            <span className="mt-0.5 block text-[0.62rem] tracking-[0.28em] text-accent uppercase">
              Vasco da Gama, 207
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/75 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <Button href={business.whatsapp} external>
              WhatsApp
            </Button>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span className={cn("h-px w-6 bg-foreground transition-all", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-px w-6 bg-foreground transition-all", open && "opacity-0")} />
            <span className={cn("h-px w-6 bg-foreground transition-all", open && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-petrol/97 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button href={business.whatsapp} external className="mt-4">
            Falar no WhatsApp
          </Button>
        </nav>
      </div>
    </>
  );
}
