import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-accent/15 bg-background px-4 py-14 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">Pinacoteca Café</p>
          <p className="mt-2 text-[0.68rem] tracking-[0.22em] text-accent uppercase">
            bar · arte · cultura
          </p>
          <p className="mt-4 text-sm text-muted">{site.address.full}</p>
        </div>
        <div className="grid gap-2 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-foreground/75 hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
        <div className="grid gap-2 text-sm">
          <a href={site.whatsapp} className="hover:text-accent">
            WhatsApp
          </a>
          <a href={`tel:${site.phoneTel}`} className="hover:text-accent">
            {site.phoneDisplay}
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            {site.instagramHandle}
          </a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            Facebook
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-muted">
        Demo Xpress · identidade extraída da casa · não é o site oficial.
      </p>
    </footer>
  );
}
