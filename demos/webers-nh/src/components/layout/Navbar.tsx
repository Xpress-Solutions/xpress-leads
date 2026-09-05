"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#buffet", label: "Buffet" },
  { href: "#mesa", label: "Mesa alemã" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Quem almoça" },
  { href: "#localizacao", label: "Onde estamos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "bg-weber-brand/96 py-2 shadow-lg backdrop-blur-md"
            : "bg-transparent py-4",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src={images.logo}
              alt="Restaurante Weber's — logo"
              width={168}
              height={66}
              className="h-10 w-auto rounded-sm md:h-12"
              priority
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-weber-linen/80 transition-colors hover:text-weber-accent"
              >
                {link.label}
              </a>
            ))}
            <Button href={business.phoneLink} className="!px-5 !py-2 !text-xs">
              Ligar
            </Button>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-weber-linen transition-all",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-weber-linen transition-all",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-weber-linen transition-all",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-weber-brand-deep/98 transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-weber-linen hover:text-weber-accent"
            >
              {link.label}
            </a>
          ))}
          <Button href={business.phoneLink} className="mt-4">
            Ligar {business.phone}
          </Button>
        </nav>
      </div>
    </>
  );
}
