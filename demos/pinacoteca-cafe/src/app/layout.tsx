import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Libre_Bodoni, Source_Sans_3 } from "next/font/google";
import brand from "../../brand.json";
import { site } from "@/data/site";
import { images } from "@/data/images";
import "./globals.css";

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pinacoteca-cafe.demo.xpress"),
  title: "Pinacoteca Café | Bar, arte e cultura na Rua da República",
  description:
    "Pinacoteca Café na Cidade Baixa: casarão vermelho, mesas de mosaico, exposições e o Croqueflor do Comida di Buteco 2026. WhatsApp, horário e como chegar.",
  keywords: [
    "Pinacoteca Café",
    "Pinacoteca Bar",
    "Cidade Baixa",
    "Rua da República",
    "Croqueflor",
    "Comida di Buteco 2026",
    "Porto Alegre",
  ],
  openGraph: {
    title: "Pinacoteca Café — bar, arte e cultura",
    description: site.tagline,
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    images: [{ url: images.hero, width: 1200, height: 1600, alt: "Mesa de mosaico da Pinacoteca Café" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "CafeOrCoffeeShop"],
  name: site.name,
  description: site.identity,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.cep,
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "1717",
    bestRating: "5",
  },
  sameAs: [site.instagram, site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { colors } = brand;
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className="font-body antialiased"
        style={
          {
            "--background": colors.background,
            "--foreground": colors.foreground,
            "--brand": colors.brand,
            "--accent": colors.accent,
            "--surface": colors.surface,
            "--muted": colors.muted,
          } as CSSProperties
        }
      >
        {children}
        <div className="h-20 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
