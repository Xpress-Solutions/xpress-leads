import { NAV, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#001a36] pb-28 pt-12 md:pb-12">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src="/logo.jpeg"
            alt="Jacinto Pane & Cucina"
            width={64}
            height={64}
            className="h-16 w-16 rounded-2xl object-cover"
          />
          <p className="font-display mt-4 text-3xl text-[color:var(--brand)]">
            {SITE.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-[color:var(--muted)]">
            {SITE.address.full}
          </p>
        </div>
        <div className="grid gap-2 text-sm">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[color:var(--brand)]">
              {item.label}
            </a>
          ))}
        </div>
        <div className="grid gap-2 text-sm">
          <a href={SITE.whatsapp}>WhatsApp</a>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          <a href={SITE.maps}>Google Maps</a>
        </div>
      </div>
      <p className="wrap mt-10 text-xs text-[color:var(--muted)]">
        Demo Xpress — identidade visual da casa, não um tema genérico.
      </p>
    </footer>
  );
}
