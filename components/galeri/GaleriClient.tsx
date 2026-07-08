"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = [
  "Semua",
  "Kitchen Set",
  "Wardrobe",
  "Walk In Closet",
  "TV Cabinet",
  "Bedroom",
  "Living Room",
  "Home Office",
];

const galleryItems = [
  { id: 1, title: "Kitchen Set Modern Minimalis", location: "Jakarta Selatan", category: "Kitchen Set", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80", material: "HPL + Duco Putih" },
  { id: 2, title: "Walk In Closet Mewah", location: "BSD City", category: "Walk In Closet", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=700&q=80", material: "MDF Duco" },
  { id: 3, title: "Ruang Kerja Produktif", location: "Tangerang", category: "Home Office", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80", material: "Multiplek HPL" },
  { id: 4, title: "Living Room Kontemporer", location: "Jakarta Barat", category: "Living Room", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80", material: "Solid Wood + Fabric" },
  { id: 5, title: "TV Cabinet Built-in", location: "Depok", category: "TV Cabinet", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80", material: "MDF + HPL" },
  { id: 6, title: "Kamar Tidur Elegan", location: "Bekasi", category: "Bedroom", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80", material: "Duco Putih + Multiplek" },
  { id: 7, title: "Kitchen Set L-Shape", location: "Cikarang", category: "Kitchen Set", image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&q=80", material: "HPL Woodgrain" },
  { id: 8, title: "Wardrobe Sliding", location: "Bogor", category: "Wardrobe", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=700&q=80", material: "Mirror + HPL" },
  { id: 9, title: "Study Room Complete", location: "Jakarta Timur", category: "Home Office", image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=700&q=80", material: "Multiplek Veneer" },
  { id: 10, title: "Master Bedroom Set", location: "Serpong", category: "Bedroom", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80", material: "Duco + Solid Wood" },
  { id: 11, title: "Dapur Industrial", location: "Jakarta Utara", category: "Kitchen Set", image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&q=80", material: "HPL Concrete Look" },
  { id: 12, title: "Living Room Scandinavian", location: "Tangerang Selatan", category: "Living Room", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80", material: "Solid Wood Natural" },
];

export default function GaleriClient() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeCategory === "Semua"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 pt-36 px-6 overflow-hidden" style={{ backgroundColor: "var(--color-wood-dark)" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1920&q=85" alt="Galeri portofolio" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(46,31,20,0.7) 0%, rgba(46,31,20,0.97) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12" style={{ backgroundColor: "var(--color-gold)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>Galeri & Portofolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
              Karya Kami,{" "}
              <em className="italic" style={{ color: "var(--color-gold)" }}>Kebanggaan Anda</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div ref={ref} className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-xs uppercase tracking-widest font-medium rounded-sm transition-all"
                style={{
                  fontFamily: "var(--font-mono)",
                  backgroundColor: activeCategory === cat ? "var(--color-wood)" : "var(--color-stone)",
                  color: activeCategory === cat ? "var(--color-linen)" : "var(--color-wood)",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "var(--color-wood)" : "var(--color-stone)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-sm cursor-pointer"
                  style={{ border: "1px solid var(--color-stone)" }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(46,31,20,0.85))" }}>
                      <div>
                        <span className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-wood-dark)", fontFamily: "var(--font-mono)" }}>
                          {item.category}
                        </span>
                        <h3 className="text-sm font-semibold mt-2" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
                          {item.title}
                        </h3>
                        <p className="text-xs opacity-75 mt-0.5" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                          {item.location} · {item.material}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
