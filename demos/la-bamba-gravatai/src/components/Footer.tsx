import { SITE } from "@/data/site";
import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] py-12 text-[#fff8f0]">
      <div className="wrap flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <LogoMark className="h-12 w-12" />
            <span className="font-display text-2xl uppercase tracking-wide">
              La Bamba
            </span>
          </div>
          <p className="mt-4 text-sm text-[#fff8f0]/60">
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood}, {SITE.address.city} — {SITE.address.state}
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-2 inline-block text-sm font-semibold text-[#ffd28a]"
          >
            {SITE.phoneDisplay}
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#fff8f0]/70">
          <a href="#manha">Café da manhã</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#local">Onde fica</a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </nav>
      </div>
      <p className="wrap mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#fff8f0]/40">
        © {new Date().getFullYear()} {SITE.legalName}. Demo de apresentação —
        horários e cardápio conforme listagens públicas.
      </p>
    </footer>
  );
}
