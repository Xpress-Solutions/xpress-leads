import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SITE } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jacinto Pane & Cucina — focaccia de fermentação natural em Santana",
  description: SITE.description,
  icons: { icon: "/logo.jpeg" },
  openGraph: {
    title: "Jacinto Pane & Cucina",
    description: SITE.line,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo.jpeg", width: 600, height: 600, alt: "Logo Jacinto" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Bakery", "LocalBusiness"],
  name: SITE.name,
  description: SITE.description,
  image: "/logo.jpeg",
  telephone: SITE.phoneTel,
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
    bestRating: 5,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:30",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${sourceSans.variable}`}>
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
