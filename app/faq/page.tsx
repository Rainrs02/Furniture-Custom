import type { Metadata } from "next";
import FAQClient from "@/components/faq/FAQClient";

export const metadata: Metadata = {
  title: "FAQ – Pertanyaan Umum",
  description: "Temukan jawaban atas pertanyaan umum seputar furnitur custom: harga, material, desain, produksi, instalasi, garansi, dan pemesanan.",
};

export default function FAQPage() {
  return <FAQClient />;
}
