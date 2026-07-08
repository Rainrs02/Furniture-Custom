import type { Metadata } from "next";
import ProdukHero from "@/components/produk/ProdukHero";
import ProdukByRuangan from "@/components/produk/ProdukByRuangan";
import ProdukByMaterial from "@/components/produk/ProdukByMaterial";
import ProdukGrid from "@/components/produk/ProdukGrid";

export const metadata: Metadata = {
  title: "Produk & Layanan",
  description: "Jelajahi produk furnitur custom kami: kitchen set, wardrobe, meja makan, sofa, walk in closet, TV cabinet, dan banyak lagi berdasarkan ruangan dan material.",
};

export default function ProdukPage() {
  return (
    <>
      <ProdukHero />
      <ProdukByRuangan />
      <ProdukByMaterial />
      <ProdukGrid />
    </>
  );
}
