"use client";

import { useEffect, useState } from "react";
import { NAV, SITE } from "@/data/site";

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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[color:var(--background)]/92 backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-h)" }}
      >
        <div className="wrap flex h-full items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-[14px] object-cover"
            />
            <span className="font-display hidden text-xl tracking-tight text-[color:var(--brand)] sm:block">
              Jacinto
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[color:var(--foreground)]/75 transition-colors hover:text-[color:var(--brand)]"
              >
                {item.label}
              </a>
            ))}
            <a className="btn btn-brand !min-h-11 !px-5 !text-sm" href={SITE.whatsapp}>
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-5 bg-[color:var(--foreground)] transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[color:var(--foreground)] transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[color:var(--foreground)] transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[color:var(--background)]/96 px-6 pt-28 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display py-2 text-4xl text-[color:var(--brand)]"
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn-brand mt-6 w-fit" href={SITE.whatsapp}>
            Pedir no WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
