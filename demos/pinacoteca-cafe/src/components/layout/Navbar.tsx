"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

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
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "bg-background/92 shadow-lg backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#inicio" className="leading-none">
            <span className="font-display text-[1.65rem] tracking-tight text-foreground">
              Pinacoteca
            </span>
            <span className="mt-0.5 block text-[0.62rem] tracking-[0.28em] text-accent uppercase">
              bar · arte · cultura
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.82rem] text-foreground/75 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <Button href={site.whatsapp} className="!min-h-10 !px-4 !text-[0.68rem]">
              WhatsApp
            </Button>
          </nav>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-foreground/20 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <i
                className={cn(
                  "block h-px bg-foreground transition",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <i className={cn("block h-px bg-foreground transition", open && "opacity-0")} />
              <i
                className={cn(
                  "block h-px bg-foreground transition",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/97 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col items-start justify-center gap-4 px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button href={site.whatsapp} className="mt-4">
            Chamar no WhatsApp
          </Button>
        </nav>
      </div>
    </>
  );
}
