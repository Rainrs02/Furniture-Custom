"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const materials = [
  { code: "SW", name: "Solid Wood", color: "#5C3D2E", grade: "Premium", desc: "Kayu jati, mahoni, dan merbau asli berkualitas. Tahan lama, semakin indah seiring waktu.", pros: ["Ketahanan terbaik", "Nilai estetis tinggi", "Dapat dipoles ulang"] },
  { code: "MP", name: "Multiplek / Plywood", color: "#8B6F5E", grade: "Standard+", desc: "Grade A 18mm dengan permukaan halus. Ideal untuk berbagai jenis finishing.", pros: ["Kekuatan tinggi", "Tahan kelembaban", "Harga terjangkau"] },
  { code: "MF", name: "MDF", color: "#A67C6F", grade: "Standard", desc: "Permukaan rata sempurna, ideal untuk finishing duco dan cat enamel.", pros: ["Permukaan halus", "Mudah dicat", "Fleksibel desain"] },
  { code: "BB", name: "Blockboard", color: "#B89075", grade: "Standard+", desc: "Inti kayu solid dengan lapisan multiplek. Ringan namun kuat.", pros: ["Lebih ringan", "Inti kayu solid", "Hemat biaya"] },
  { code: "HP", name: "HPL", color: "#C4956A", grade: "Finishing", desc: "High Pressure Laminate – 400+ motif dan warna. Tahan goresan dan panas.", pros: ["400+ motif pilihan", "Tahan gores", "Mudah dibersihkan"] },
  { code: "DC", name: "Duco", color: "#D4C5B0", grade: "Finishing", desc: "Cat duco smooth touch premium. Tampilan bersih, modern, dan anti-gores.", pros: ["Tampilan mewah", "Anti-gores", "Custom warna RAL"] },
  { code: "VN", name: "Veneer", color: "#D4A76A", grade: "Premium Finishing", desc: "Laminasi kayu asli tipis. Tampilan kayu natural dengan harga lebih efisien.", pros: ["Tampilan kayu asli", "Natural premium", "Lebih hemat"] },
  { code: "AC", name: "ACP", color: "#E5DDD0", grade: "Komersial", desc: "Aluminium Composite Panel – ideal untuk area komersial dan eksterior.", pros: ["Tahan cuaca", "Ringan kuat", "Mudah pemasangan"] },
  { code: "ML", name: "Melamic", color: "#9B7B5E", grade: "Finishing", desc: "Cat melamic transparan atau semi-transparan, memperlihatkan serat kayu.", pros: ["Memperlihatkan serat kayu", "Tahan air", "Tampilan natural"] },
];

export default function ProdukByMaterial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="material" className="section-padding grain-texture" style={{ backgroundColor: "var(--color-stone)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="wood-line" />
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
            Berdasarkan Material
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}>
            Pilih material yang tepat berdasarkan kebutuhan, anggaran, dan estetika yang Anda inginkan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.code}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group p-6 rounded-sm transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-stone)" }}
            >
              {/* Color swatch */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-sm flex-shrink-0" style={{ backgroundColor: mat.color, border: "1px solid rgba(0,0,0,0.1)" }} />
                <div>
                  <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                    [{mat.code}] {mat.grade}
                  </span>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                    {mat.name}
                  </h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 opacity-75" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
                {mat.desc}
              </p>
              <ul className="space-y-1.5">
                {mat.pros.map((pro) => (
                  <li key={pro} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-emerald)", fontFamily: "var(--font-inter)" }}>
                    <span>✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
