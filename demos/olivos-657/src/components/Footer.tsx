import { NAV_LINKS, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] py-12">
      <div className="wrap flex flex-col items-start justify-between gap-10 md:flex-row">
        <div>
          <p className="font-display text-3xl italic">
            Olivos <span className="not-italic tracking-[0.2em] text-[color:var(--brand)]">657</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--foreground)]/55">
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood}, {SITE.address.city} — {SITE.address.state}
            <br />
            CEP {SITE.address.cep}
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-3 inline-block text-sm text-[color:var(--brand)] hover:underline"
          >
            {SITE.phoneDisplay}
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[color:var(--foreground)]/60 hover:text-[color:var(--brand)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[color:var(--foreground)]/60 hover:text-[color:var(--brand)]"
          >
            Instagram
          </a>
        </nav>
      </div>
      <p className="wrap mt-10 text-xs text-[color:var(--muted)]">
        © {new Date().getFullYear()} {SITE.name}. Demo de apresentação — conteúdo a partir de
        fontes públicas (Bom Gourmet, BOABreja, Mixology, VEJA). Confirme horários e carta com a
        casa.
      </p>
    </footer>
  );
}
