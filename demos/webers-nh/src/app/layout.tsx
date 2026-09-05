import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Source_Sans_3 } from "next/font/google";
import { business } from "@/data/business";
import { images } from "@/data/images";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webers-nh.demo.xpress"),
  title: "Weber's | Buffet alemão e comida caseira desde 1998 — Novo Hamburgo",
  description:
    "Restaurante Weber's no Rincão / Vila Rosa: buffet de comida caseira na semana e mesa alemã no fim de semana. Eisbein e chucrute desde 1998. Rua Vinte e Quatro de Maio, 222.",
  keywords: [
    "Restaurante Weber's",
    "Weber's Novo Hamburgo",
    "comida alemã Novo Hamburgo",
    "eisbein Novo Hamburgo",
    "buffet Rincão",
    "chucrute Vila Rosa",
    "almoço familiar NH",
  ],
  openGraph: {
    title: "Weber's — Eisbein e chucrute no fim de semana desde 1998",
    description: business.description,
    type: "website",
    locale: "pt_BR",
    siteName: business.name,
    images: [{ url: images.logo, width: 960, height: 380, alt: "Logo do Restaurante Weber's" }],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  description: business.description,
  image: [images.logo],
  telephone: business.phone,
  email: business.email,
  priceRange: "$$",
  servesCuisine: ["Alemã", "Brasileira", "Caseira"],
  foundingDate: "1998-07-10",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coordinates.lat,
    longitude: business.coordinates.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.googleRating,
    reviewCount: business.googleReviews,
    bestRating: 5,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:30",
      closes: "13:45",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "11:30",
      closes: "14:15",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${sourceSans.variable} ${script.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <div className="h-20 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
