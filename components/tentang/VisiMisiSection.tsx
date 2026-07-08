"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VisiMisiSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-wood)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="wood-line" />
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
              Visi Kami
            </h2>
            <p
              className="text-xl leading-relaxed italic mb-6"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;Menjadi mitra furnitur custom terpercaya yang menghadirkan kehangatan, keindahan, dan fungsi ke setiap hunian Indonesia.&rdquo;
            </p>
            <p className="text-base leading-relaxed opacity-75" style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}>
              Kami membayangkan masa depan di mana setiap keluarga Indonesia bisa memiliki furnitur yang benar-benar mencerminkan kepribadian dan kebutuhan mereka — bukan sekadar produk massal dari rak.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="wood-line" />
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
              Misi Kami
            </h2>
            <ul className="space-y-4">
              {[
                "Memproduksi furnitur custom dengan standar kualitas tertinggi menggunakan material pilihan",
                "Memberikan pengalaman konsultasi dan desain yang menyenangkan dan transparan",
                "Mengutamakan kepuasan pelanggan dari konsep hingga purna jual",
                "Melestarikan keahlian pengerjaan kayu tradisional dengan sentuhan teknologi modern",
                "Berkontribusi pada industri furnitur lokal yang berkelanjutan dan bertanggung jawab",
              ].map((misi, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span
                    className="w-6 h-6 rounded-sm flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ backgroundColor: "var(--color-gold)", color: "var(--color-wood-dark)", fontFamily: "var(--font-mono)" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed opacity-80" style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}>
                    {misi}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
