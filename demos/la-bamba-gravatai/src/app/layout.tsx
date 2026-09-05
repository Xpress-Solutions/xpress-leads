import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { SITE } from "@/data/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://la-bamba-gravatai.demo.xpress"),
  title: "La Bamba — café da manhã na Dorival, Gravataí",
  description: SITE.description,
  icons: { icon: "/logo.jpg" },
  openGraph: {
    title: "La Bamba — Gravataí",
    description: SITE.subhead,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/cover.png", width: 820, height: 312, alt: "La Bamba" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["CafeOrCoffeeShop", "Restaurant"],
  name: SITE.legalName,
  description: SITE.description,
  image: ["/cover.png", "/logo.jpg"],
  telephone: SITE.phoneTel,
  email: SITE.email,
  priceRange: SITE.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.coordinates.lat,
    longitude: SITE.coordinates.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.ratingNum,
    reviewCount: SITE.reviewsCount,
    bestRating: 5,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "05:45",
      closes: "19:00",
    },
  ],
  servesCuisine: ["Brasileira", "Café da manhã", "Lanches"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${oswald.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
