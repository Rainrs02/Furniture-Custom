"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function ProfilPerusahaan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="wood-line" />
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
            >
              Profil Perusahaan
            </h2>
            <p
              className="text-base leading-relaxed mb-6 opacity-80"
              style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}
            >
              <strong>Wasilah Furniture</strong> adalah perusahaan furnitur custom berbasis di Jakarta 
              yang berfokus pada pembuatan furnitur berkualitas tinggi sesuai pesanan. Didirikan sejak 2012, 
              kami telah melayani lebih dari 500 klien residensial dan komersial di seluruh Jabodetabek.
            </p>
            <p
              className="text-base leading-relaxed opacity-80"
              style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}
            >
              Kami percaya bahwa setiap rumah memiliki cerita unik, dan furnitur yang tepat adalah medium 
              terbaik untuk mengekspresikannya. Dengan workshop seluas 2.000 m² dan 45 pengrajin berpengalaman, 
              kami mampu menghadirkan solusi furnitur yang sepenuhnya personal.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "Legalitas", value: "PT Wasilah Furniture" },
                { label: "Berdiri", value: "Tahun 2012" },
                { label: "Luas Workshop", value: "2.000 m²" },
                { label: "Tim Ahli", value: "45+ Pengrajin" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-sm" style={{ backgroundColor: "var(--color-broken-white)", border: "1px solid var(--color-stone)" }}>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                    {item.label}
                  </p>
                  <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-sm overflow-hidden" style={{ border: "1px solid var(--color-stone)" }}>
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=85"
                alt="Workshop Wasilah Furniture"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 p-6 rounded-sm"
              style={{ backgroundColor: "var(--color-gold)", color: "var(--color-wood-dark)" }}
            >
              <p className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>12+</p>
              <p className="text-xs uppercase tracking-wider mt-1" style={{ fontFamily: "var(--font-mono)" }}>Tahun Pengalaman</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
