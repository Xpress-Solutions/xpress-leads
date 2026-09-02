import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { images } from "@/data/images";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "#eventos", label: "Eventos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: business.googleReviewsUrl, label: "Google", external: true },
];

export function Footer() {
  return (
    <footer className="bg-anita-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <Image
              src={images.logo}
              alt="Armazém Anita"
              width={140}
              height={56}
              className="mx-auto h-14 w-auto md:mx-0"
            />
            <p className="mt-4 text-sm text-white/60">
              {business.address.street}
              <br />
              {business.address.neighborhood}
              <br />
              {business.address.city} - {business.address.state}
            </p>
            <a
              href={business.phoneLink}
              className="mt-2 inline-block text-sm font-medium text-anita-orange hover:underline"
            >
              {business.phone}
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-anita-orange"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-anita-orange"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {business.name}. Demo apresentação —
            conteúdo demonstrativo onde indicado.
          </p>
        </div>
      </div>
    </footer>
  );
}
