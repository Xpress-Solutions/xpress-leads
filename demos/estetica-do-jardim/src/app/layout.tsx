import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { business } from "@/data/business";
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
  title: "Estética do Jardim | Clínica do Jardim Botânico — Porto Alegre",
  description: business.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="font-body antialiased">
        {children}
        <div className="h-20 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
