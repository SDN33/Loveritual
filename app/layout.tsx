import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LoveRitual - Ravivez votre flamme chaque mois",
  description: "Des box personnalisées livrées à votre porte pour créer des moments inoubliables à deux. Découvrez nos box mensuelles pour couples.",
  keywords: "box couple, abonnement couple, cadeau couple, love box, rituel amoureux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
