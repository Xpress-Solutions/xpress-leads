import Image from "next/image";
import { business } from "@/data/business";
import { images } from "@/data/images";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#buffet", label: "Buffet" },
  { href: "#mesa", label: "Mesa alemã" },
  { href: "#casa", label: "A casa" },
  { href: "#localizacao", label: "Localização" },
  { href: business.facebook, label: "Facebook", external: true },
];

export function Footer() {
  return (
    <footer className="bg-weber-brand-deep py-12 text-weber-linen">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <Image
              src={images.logo}
              alt="Restaurante Weber's"
              width={180}
              height={72}
              className="mx-auto h-14 w-auto rounded-sm md:mx-0"
            />
            <p className="mt-4 text-sm text-weber-linen/65">
              {business.address.street}
              <br />
              {business.address.neighborhood}
              <br />
              {business.address.city} — {business.address.state}
            </p>
            <a
              href={business.phoneLink}
              className="mt-2 inline-block text-sm font-medium text-weber-accent hover:underline"
            >
              {business.phone}
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-weber-linen/70 transition-colors hover:text-weber-accent"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-weber-linen/70 transition-colors hover:text-weber-accent"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        </div>

        <div className="mt-10 border-t border-weber-linen/10 pt-6 text-center text-xs text-weber-linen/40">
          <p>
            © {new Date().getFullYear()} {business.name}. Desde 1998 no Rincão.
            Demo de apresentação — sem deploy.
          </p>
        </div>
      </div>
    </footer>
  );
}
