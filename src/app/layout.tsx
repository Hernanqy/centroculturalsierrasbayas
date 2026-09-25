import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centro Cultural Sierras Bayas",
  description: "Agenda y planificaciÃ³n cultural"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}