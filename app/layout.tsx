import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victoria Galarza | Fotógrafa de retrato íntimo",
  description:
    "Victoria Galarza es fotógrafa especializada en retrato íntimo, fotografía para artistas y marcas, y talleres de fotografía en Valparaíso y Viña del Mar, Chile. Conoce su trabajo, servicios y portafolio.",
  openGraph: {
    title: "Victoria Galarza | Fotógrafa",
    description:
      "Retrato íntimo, fotografía para artistas y marcas, y talleres de fotografía en Valparaíso y Viña del Mar, Chile.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
