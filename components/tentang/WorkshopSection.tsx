"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function WorkshopSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const images = [
    { src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80", alt: "Proses ukir kayu" },
    { src: "https://images.unsplash.com/photo-1580828369019-2220d5885217?w=600&q=80", alt: "Workshop pengerjaan" },
    { src: "https://images.unsplash.com/photo-1540552796245-779836582531?w=600&q=80", alt: "Finishing detail" },
    { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80", alt: "Quality control" },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
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
            Workshop Produksi
          </h2>
          <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}>
            Dengan peralatan modern dan keahlian tradisional, setiap furnitur lahir dari proses yang teliti dan penuh dedikasi
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm"
              style={{ height: i === 0 || i === 3 ? 320 : 240, border: "1px solid var(--color-stone)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(180deg, transparent, rgba(46,31,20,0.7))" }}
              >
                <p className="text-sm font-medium" style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}>
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workshop stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Luas Workshop", value: "2.000 m²" },
            { label: "Mesin CNC", value: "3 Unit" },
            { label: "Pengrajin Ahli", value: "45+ Orang" },
            { label: "Kapasitas Bulanan", value: "30+ Proyek" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 text-center rounded-sm"
              style={{ backgroundColor: "var(--color-broken-white)", border: "1px solid var(--color-stone)" }}
            >
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider mt-1" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
