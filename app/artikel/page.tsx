import type { Metadata } from "next";
import ArtikelList from "@/components/artikel/ArtikelList";

export const metadata: Metadata = {
  title: "Artikel & Blog",
  description: "Artikel inspirasi interior, tips memilih furnitur, panduan material, tren desain, dan berita terbaru dari Wasilah Furniture.",
};

export default function ArtikelPage() {
  return <ArtikelList />;
}
