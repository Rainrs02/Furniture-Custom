"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProdukHero() {
  return (
    <section
      className="relative min-h-[55vh] flex items-end pb-20 pt-36 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--color-wood-dark)" }}
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85"
          alt="Produk furnitur custom"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(46,31,20,0.6) 0%, rgba(46,31,20,0.97) 100%)" }} />
      </div>
      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12" style={{ backgroundColor: "var(--color-gold)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
              Produk & Layanan
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
            Furnitur untuk{" "}
            <em className="italic" style={{ color: "var(--color-gold)" }}>
              Setiap Ruangan
            </em>
          </h1>
          <p className="text-lg max-w-2xl opacity-75" style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}>
            Dari dapur hingga kamar tidur, dari material solid wood hingga HPL premium — kami mewujudkan furnitur impian Anda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
