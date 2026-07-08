import type { Metadata } from "next";
import KontakHero from "@/components/kontak/KontakHero";
import KontakInfo from "@/components/kontak/KontakInfo";
import KonsultasiForm from "@/components/kontak/KonsultasiForm";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi Gratis",
  description: "Hubungi Wasilah Furniture untuk konsultasi furnitur gratis. Alamat workshop, nomor telepon, WhatsApp, email, dan form konsultasi multi-step.",
};

export default function KontakPage() {
  return (
    <>
      <KontakHero />
      <KontakInfo />
      <KonsultasiForm />
    </>
  );
}
