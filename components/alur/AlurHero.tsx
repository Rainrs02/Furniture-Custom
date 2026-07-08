"use client";

import { motion } from "framer-motion";

export default function AlurHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-end pb-20 pt-36 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--color-wood)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)" }}
      />
      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: "var(--color-gold)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
              Proses & Alur
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
            Alur Pemesanan{" "}
            <em className="italic" style={{ color: "var(--color-gold)" }}>
              Mudah & Transparan
            </em>
          </h1>
          <p className="text-lg max-w-2xl opacity-75" style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}>
            8 langkah terstruktur dari konsultasi pertama hingga furnitur terpasang sempurna di rumah Anda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
