import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import brand from "../../brand.json";
import { SITE } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olivos 657 | Gastrobar intimista — Cidade Baixa, Porto Alegre",
  description:
    "Porta discreta na Rua da República, 657. Coquetelaria de Frederico Muller, cozinha da chef Marina Tosin, vinhos de bodegas pequenas do RS. Qua–dom a partir das 18h30.",
  keywords: [
    "Olivos 657",
    "Olivos 657 Porto Alegre",
    "gastrobar Cidade Baixa",
    "coquetelaria Porto Alegre",
    "Negroni Porto Alegre",
    "Rua da República 657",
  ],
  openGraph: {
    title: "Olivos 657 — A porta não avisa o que tem dentro.",
    description: SITE.subheadline,
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
  },
  robots: { index: false, follow: false },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "Restaurant"],
  name: SITE.name,
  description: SITE.description,
  telephone: SITE.phoneDisplay,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.cep,
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: SITE.reviewsCount,
    bestRating: 5,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Sunday"],
      opens: "18:30",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "18:30",
      closes: "01:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className="font-body antialiased"
        style={
          {
            "--background": brand.colors.background,
            "--foreground": brand.colors.foreground,
            "--brand": brand.colors.brand,
            "--accent": brand.colors.accent,
            "--surface": brand.colors.surface,
            "--muted": brand.colors.muted,
          } as CSSProperties
        }
      >
        {children}
        <div className="h-20 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
