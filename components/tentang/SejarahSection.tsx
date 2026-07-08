"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  { year: "2012", title: "Awal Berdiri", desc: "Didirikan oleh Bapak Hendra Wijaya dengan workshop kecil seluas 200 m² dan 5 pengrajin." },
  { year: "2015", title: "Ekspansi Pertama", desc: "Workshop diperluas menjadi 800 m². Mulai menerima klien komersial pertama." },
  { year: "2018", title: "100 Proyek Tercapai", desc: "Mencapai 100 proyek sukses. Menambah divisi desain interior dan pengembangan tim." },
  { year: "2020", title: "Digitalisasi & Inovasi", desc: "Mengadopsi teknologi CNC untuk presisi tinggi dan meluncurkan layanan konsultasi online." },
  { year: "2022", title: "Penghargaan Industri", desc: "Menerima penghargaan 'Best Custom Furniture Workshop' dari Asosiasi Industri Mebel Indonesia." },
  { year: "2024", title: "500+ Proyek", desc: "Melampaui 500 proyek selesai dengan tim 45+ pengrajin dan workshop 2.000 m²." },
];

export default function SejarahSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding grain-texture" style={{ backgroundColor: "var(--color-stone)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="wood-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
            Perjalanan Kami
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}>
            Dari workshop kecil menuju perusahaan furnitur terpercaya di Jabodetabek
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block" style={{ backgroundColor: "var(--color-gold)", opacity: 0.3 }} />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`p-6 rounded-sm ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-stone)" }}
                  >
                    <p className="text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                      {m.year}
                    </p>
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                      {m.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-75" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
                      {m.desc}
                    </p>
                  </div>
                </div>

                {/* Year Badge */}
                <div
                  className="w-16 h-16 rounded-sm flex items-center justify-center font-bold text-sm flex-shrink-0 z-10"
                  style={{ backgroundColor: "var(--color-wood)", color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
                >
                  {m.year.slice(2)}
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
