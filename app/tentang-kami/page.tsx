import type { Metadata } from "next";
import TentangHero from "@/components/tentang/TentangHero";
import ProfilPerusahaan from "@/components/tentang/ProfilPerusahaan";
import SejarahSection from "@/components/tentang/SejarahSection";
import VisiMisiSection from "@/components/tentang/VisiMisiSection";
import TimSection from "@/components/tentang/TimSection";
import WorkshopSection from "@/components/tentang/WorkshopSection";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali Wasilah Furniture lebih dekat – sejarah, visi misi, tim profesional, dan workshop produksi kami.",
};

export default function TentangKamiPage() {
  return (
    <>
      <TentangHero />
      <ProfilPerusahaan />
      <SejarahSection />
      <VisiMisiSection />
      <TimSection />
      <WorkshopSection />
    </>
  );
}
