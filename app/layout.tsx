import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wasilah Furniture – Furnitur Custom Premium Berkualitas Tinggi",
    template: "%s | Wasilah Furniture",
  },
  description:
    "Furnitur custom premium untuk hunian dan komersial. Dari desain hingga instalasi, kami menghadirkan keahlian pengerjaan kayu terbaik dengan material pilihan.",
  keywords: [
    "furniture custom",
    "kitchen set",
    "lemari custom",
    "interior rumah",
    "furnitur kayu",
    "meja makan custom",
    "wardrobe custom",
  ],
  openGraph: {
    title: "Wasilah Furniture – Furnitur Custom Premium",
    description:
      "Furnitur custom premium untuk hunian dan komersial. Dari desain hingga instalasi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
