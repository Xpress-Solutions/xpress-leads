import { business } from "@/data/business";

export function Footer() {
  return (
    <footer className="border-t border-accent/15 bg-petrol py-12 text-foreground/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <p className="font-display text-3xl text-foreground">Casa Vasco</p>
          <p className="mt-1 text-xs tracking-[0.22em] text-accent uppercase">
            Armazém de bebidas · bar · café
          </p>
          <p className="mt-4 text-sm">
            {business.address.full}
            <br />
            {business.phone}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#bodega" className="hover:text-accent">
            Bodega
          </a>
          <a href="#irmas" className="hover:text-accent">
            As irmãs
          </a>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            {business.instagramHandle}
          </a>
          <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            WhatsApp
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-foreground/35 md:px-6">
        © {new Date().getFullYear()} Casa Vasco. Demo de apresentação — fotos de divulgação da casa
        (JC, Sabores do Sul, Gastronomia RS).
      </p>
    </footer>
  );
}
