import type { Metadata } from "next";
import AlurHero from "@/components/alur/AlurHero";
import AlurSteps from "@/components/alur/AlurSteps";
import AlurCTA from "@/components/alur/AlurCTA";

export const metadata: Metadata = {
  title: "Alur Pemesanan",
  description: "Proses pemesanan furnitur custom kami: dari konsultasi, pengukuran, desain, produksi, quality control, hingga instalasi dan garansi after sales.",
};

export default function AlurPemesananPage() {
  return (
    <>
      <AlurHero />
      <AlurSteps />
      <AlurCTA />
    </>
  );
}
