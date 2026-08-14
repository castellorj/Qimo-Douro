import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douro & Salamanca 2027 — QiMO",
  description: "Sete noites pelo Rio Douro a bordo do Emerald Radiance. Uma experiência exclusiva da QiMO, de 13 a 20 de novembro de 2027.",
  openGraph: {
    title: "Douro & Salamanca 2027 — QiMO",
    description: "Sete noites pelo Rio Douro a bordo do Emerald Radiance. Uma experiência exclusiva da QiMO, de 13 a 20 de novembro de 2027.",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Douro & Salamanca 2027" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="js"><body>{children}</body></html>;
}
