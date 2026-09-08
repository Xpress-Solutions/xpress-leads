import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { business } from "@/data/business";
import { images } from "@/data/images";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Vasco | Armazém de vinhos e cachaças — Bom Fim, Porto Alegre",
  description: business.description,
  keywords: [
    "Casa Vasco",
    "Casa Vasco Porto Alegre",
    "armazém de vinhos Bom Fim",
    "cachaça artesanal Porto Alegre",
    "gastrobar Bom Fim",
    "Vasco da Gama 207",
  ],
  openGraph: {
    title: "Casa Vasco — o casarão do Bom Fim",
    description: business.description,
    type: "website",
    locale: "pt_BR",
    siteName: business.name,
    images: [{ url: images.fachada, width: 800, height: 533, alt: "Fachada da Casa Vasco" }],
  },
  robots: { index: false, follow: false },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["WineStore", "BarOrPub"],
  name: business.name,
  description: business.description,
  image: [images.fachada, images.bodega],
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
