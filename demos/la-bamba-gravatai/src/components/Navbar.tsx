"use client";

import { useEffect, useState } from "react";
import { NAV, SITE } from "@/data/site";
import { LogoMark } from "@/components/LogoMark";

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

  const bar = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          bar
            ? "border-b border-black/8 bg-[color:var(--paper)]/94 backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-h)" }}
      >
        <div className="wrap flex h-full items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3">
            <LogoMark className="h-12 w-12" />
            <span
              className={`font-display hidden text-xl uppercase tracking-[0.04em] sm:block ${
                bar ? "text-[color:var(--brand)]" : "text-[#fff8f0]"
              }`}
            >
              La Bamba
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  bar
                    ? "text-[color:var(--ink)]/70 hover:text-[color:var(--brand)]"
                    : "text-[#fff8f0]/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              className="btn btn-brand !min-h-11 !px-5 !text-sm"
              href={`tel:${SITE.phoneTel}`}
            >
              Ligar
            </a>
          </nav>

          <button
            type="button"
            className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border lg:hidden ${
              bar ? "border-black/15" : "border-white/25"
            }`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-5 transition ${
                bar ? "bg-[color:var(--ink)]" : "bg-[#fff8f0]"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition ${
                bar ? "bg-[color:var(--ink)]" : "bg-[#fff8f0]"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition ${
                bar ? "bg-[color:var(--ink)]" : "bg-[#fff8f0]"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[color:var(--paper)] px-6 pt-28 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display py-2 text-4xl uppercase text-[color:var(--brand)]"
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-brand mt-6 w-fit"
            href={`tel:${SITE.phoneTel}`}
            onClick={() => setOpen(false)}
          >
            Ligar {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </>
  );
}
