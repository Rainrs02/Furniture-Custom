"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = ["Semua", "Inspirasi Interior", "Tips Material", "Tips Perawatan", "Tren Interior", "Berita Perusahaan"];

const articles = [
  { id: 1, title: "5 Tips Memilih Material Dapur yang Tahan Lama dan Mudah Dirawat", slug: "5-tips-memilih-material-dapur-yang-tahan-lama-dan-mudah-dirawat", category: "Tips Material", date: "10 Jan 2024", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", excerpt: "Memilih material untuk kitchen set bukan hanya soal estetika, tetapi juga ketahanan jangka panjang. Berikut panduan lengkapnya.", readTime: "5 menit" },
  { id: 2, title: "Tren Desain Interior 2024: Minimalisme Hangat yang Bersahaja", slug: "tren-desain-interior-2024-minimalisme-hangat-yang-bersahaja", category: "Tren Interior", date: "5 Jan 2024", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", excerpt: "Tahun 2024 membawa pergeseran desain menuju kehangatan dan keaslian material alami dengan palet netral yang hangat.", readTime: "7 menit" },
  { id: 3, title: "Cara Merawat Furnitur Kayu Solid agar Awet Bertahun-tahun", slug: "cara-merawat-furnitur-kayu-solid-agar-awet-bertahun-tahun", category: "Tips Perawatan", date: "28 Des 2023", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", excerpt: "Furnitur kayu solid yang dirawat dengan benar bisa bertahan puluhan tahun dan menjadi warisan keluarga.", readTime: "4 menit" },
  { id: 4, title: "Panduan Lengkap Walk In Closet: Dari Perencanaan hingga Instalasi", slug: "panduan-lengkap-walk-in-closet-dari-perencanaan-hingga-instalasi", category: "Inspirasi Interior", date: "20 Des 2023", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&q=80", excerpt: "Memiliki walk in closet impian kini bukan sekadar angan. Panduan ini memandu Anda dari awal hingga akhir.", readTime: "9 menit" },
  { id: 5, title: "HPL vs Veneer: Mana yang Lebih Baik untuk Furnitur Anda?", slug: "hpl-vs-veneer-mana-yang-lebih-baik-untuk-furnitur-anda", category: "Tips Material", date: "15 Des 2023", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80", excerpt: "Kedua material ini sering membingungkan. Kami uraikan kelebihan, kekurangan, dan situasi terbaik penggunaannya.", readTime: "6 menit" },
  { id: 6, title: "Wasilah Furniture Raih Penghargaan Best Workshop 2023", slug: "wasilah-furniture-raih-penghargaan-best-workshop-2023", category: "Berita Perusahaan", date: "10 Des 2023", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80", excerpt: "Kami bangga mengumumkan penghargaan bergengsi dari Asosiasi Industri Mebel Indonesia untuk kategori Best Custom Furniture Workshop.", readTime: "3 menit" },
];

export default function ArtikelList() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeCategory === "Semua" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-20 pt-36 px-6 overflow-hidden" style={{ backgroundColor: "var(--color-wood)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12" style={{ backgroundColor: "var(--color-gold)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>Artikel & Blog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
              Tips &{" "}
              <em className="italic" style={{ color: "var(--color-gold)" }}>Inspirasi Interior</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
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

          {/* Featured Article */}
          {filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link href={`/artikel/${filtered[0].slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-sm overflow-hidden" style={{ border: "1px solid var(--color-stone)" }}>
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <Image src={filtered[0].image} alt={filtered[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-10 flex flex-col justify-center" style={{ backgroundColor: "var(--color-broken-white)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs px-2 py-1 rounded-sm" style={{ backgroundColor: "rgba(201,169,110,0.2)", color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                      {filtered[0].category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-mono)" }}>
                      {filtered[0].date} · {filtered[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 group-hover:underline underline-offset-4" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                    {filtered[0].title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6 opacity-75" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
                    {filtered[0].excerpt}
                  </p>
                  <span className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}>
                    Baca Selengkapnya <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Rest of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(1).map((art, i) => (
              <motion.article
                key={art.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              >
                <Link href={`/artikel/${art.slug}`} className="group block rounded-sm overflow-hidden" style={{ border: "1px solid var(--color-stone)" }}>
                  <div className="relative h-52 overflow-hidden">
                    <Image src={art.image} alt={art.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6" style={{ backgroundColor: "var(--color-broken-white)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                        {art.category}
                      </span>
                      <span className="text-xs opacity-60" style={{ color: "var(--color-wood)", fontFamily: "var(--font-mono)" }}>
                        {art.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-snug mb-3 group-hover:underline underline-offset-4" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                      {art.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-70" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
                      {art.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
