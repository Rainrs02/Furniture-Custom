import type { Metadata } from "next";
import GaleriClient from "@/components/galeri/GaleriClient";

export const metadata: Metadata = {
  title: "Galeri & Portofolio",
  description: "Lihat portofolio lengkap furnitur custom kami: kitchen set, wardrobe, walk in closet, TV cabinet, bedroom, living room, home office, dan video produk.",
};

export default function GaleriPage() {
  return <GaleriClient />;
}
