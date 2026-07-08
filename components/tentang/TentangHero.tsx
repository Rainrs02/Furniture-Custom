"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TentangHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-end pb-20 pt-36 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--color-wood-dark)" }}
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&q=85"
          alt="Workshop produksi furnitur"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(46,31,20,0.7) 0%, rgba(46,31,20,0.95) 100%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: "var(--color-gold)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
              Tentang Kami
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}
          >
            <em className="italic" style={{ color: "var(--color-gold)" }}>
              Custom Furniture Berkualitas
            </em>{" "}
            untuk Rumah dan Bisnis
          </h1>
          <p
            className="mt-6 text-lg max-w-2xl opacity-75"
            style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}
          >
            Selama lebih dari satu dekade, kami telah membangun kepercayaan pelanggan melalui furnitur custom yang fungsional, estetis, dan tahan lama.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
