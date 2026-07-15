"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useConsultationStore } from "@/store/consultationStore";

export default function SuccessMessage() {
  const { data, reset, waUrl } = useConsultationStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      className="text-center py-16 px-8 rounded-sm"
      style={{ backgroundColor: "var(--color-broken-white)", border: "1px solid var(--color-stone)" }}
    >
      <div
        className="w-20 h-20 rounded-sm flex items-center justify-center mx-auto mb-8"
        style={{ backgroundColor: "var(--color-emerald)", color: "white" }}
      >
        <CheckCircle size={40} />
      </div>

      <h3
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
      >
        Terima Kasih, {data.nama}!
      </h3>

      <p
        className="text-base mb-3 max-w-lg mx-auto leading-relaxed"
        style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)", opacity: 0.8 }}
      >
        Konsultasi Anda telah berhasil kami terima. Tim konsultan kami akan menghubungi Anda melalui:
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <div className="px-4 py-2 rounded-sm" style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-stone)" }}>
          <p className="text-xs" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>Email</p>
          <p className="text-sm font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>{data.email}</p>
        </div>
        <div className="px-4 py-2 rounded-sm" style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-stone)" }}>
          <p className="text-xs" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>Telepon/WA</p>
          <p className="text-sm font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>{data.telepon}</p>
        </div>
      </div>

      <p
        className="text-sm mb-4 opacity-60"
        style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}
      >
        Estimasi respons: 1×24 jam pada hari kerja
      </p>

      {waUrl && (
        <div className="mb-10 p-4 rounded-sm" style={{ backgroundColor: "rgba(37, 211, 102, 0.1)", border: "1px dashed #25D366" }}>
          <p className="text-sm mb-3 font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
            Jika WhatsApp tidak otomatis terbuka, klik tombol di bawah ini:
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-sm transition-all text-white"
            style={{ backgroundColor: "#25D366", fontFamily: "var(--font-mono)" }}
          >
            Buka WhatsApp
          </a>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        <button onClick={reset} className="btn-secondary">
          Buat Konsultasi Baru
        </button>
        <Link href="/galeri" className="btn-primary">
          Lihat Portofolio <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
