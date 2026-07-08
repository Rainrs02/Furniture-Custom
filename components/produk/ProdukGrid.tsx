"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CustomIcon from "@/components/icons/CustomIcon";

const products = [
  { id: "kitchen-set", name: "Kitchen Set", icon: "kitchen" as const, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", desc: "Dapur impian dengan layout fungsional dan material premium tahan panas & air.", tags: ["HPL", "Duco", "Solid Wood"] },
  { id: "sofa", name: "Sofa Custom", icon: "sofa" as const, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", desc: "Sofa dengan dimensi, warna, dan material kain sesuai selera dan ukuran ruangan.", tags: ["Fabric", "Leather", "Busa HD"] },
  { id: "meja-makan", name: "Meja Makan", icon: "table" as const, image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80", desc: "Meja makan solid wood atau multiplek dengan kaki custom dan finishing eksklusif.", tags: ["Solid Wood", "Multiplek", "Veneer"] },
  { id: "meja-kerja", name: "Meja Kerja", icon: "table" as const, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80", desc: "Workstation ergonomis dengan laci terintegrasi, kabel management, dan rak monitor.", tags: ["HPL", "MDF", "Multiplek"] },
  { id: "tv-cabinet", name: "TV Cabinet", icon: "tv-cabinet" as const, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", desc: "TV cabinet modern dengan rak media, laci tersembunyi, dan integrasi kabel rapi.", tags: ["HPL", "Duco", "MDF"] },
  { id: "wardrobe", name: "Lemari Pakaian", icon: "wardrobe" as const, image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80", desc: "Lemari pakaian dengan sistem geser atau engsel, partisi dalam sesuai kebutuhan.", tags: ["Multiplek", "HPL", "Mirror"] },
  { id: "walk-in-closet", name: "Walk In Closet", icon: "wardrobe" as const, image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&q=80", desc: "Ruang pakaian mewah dengan sistem gantungan, laci, rak sepatu, dan pencahayaan.", tags: ["MDF Duco", "Veneer", "LED"] },
  { id: "rak-buku", name: "Rak Buku", icon: "shelf" as const, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", desc: "Rak buku built-in atau freestanding dengan desain yang menyatu dengan dinding.", tags: ["Multiplek", "MDF", "Solid Wood"] },
  { id: "tempat-tidur", name: "Tempat Tidur", icon: "bed" as const, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", desc: "Ranjang custom dengan headboard, storage bawah, dan dimensi sesuai ruangan.", tags: ["Multiplek", "Duco", "Busa HD"] },
  { id: "nakas", name: "Nakas & Meja Rias", icon: "table" as const, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", desc: "Nakas dan meja rias dengan cermin terintegrasi dan storage tersembunyi.", tags: ["MDF", "Duco", "Mirror"] },
  { id: "kamar-mandi-cabinet", name: "Kamar Mandi Cabinet", icon: "wardrobe" as const, image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", desc: "Vanity unit dan kabinet kamar mandi tahan air dengan material anti-lembab.", tags: ["HPL", "Waterproof MDF", "ACP"] },
  { id: "partisi", name: "Partisi & Wall Panel", icon: "plank" as const, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", desc: "Partisi ruangan dan wall panel dekoratif yang membagi ruang dengan elegan.", tags: ["Multiplek", "MDF", "HPL"] },
];

export default function ProdukGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="produk-list" className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
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
            Semua Produk
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-sm overflow-hidden"
              style={{ border: "1px solid var(--color-stone)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-3 right-3 p-2 rounded-sm" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-wood-dark)" }}>
                  <CustomIcon name={product.icon} size={16} strokeWidth={2} />
                </div>
              </div>
              <div className="p-5" style={{ backgroundColor: "var(--color-linen)" }}>
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                  {product.name}
                </h3>
                <p className="text-xs leading-relaxed mb-3 opacity-75" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: "var(--color-stone)", color: "var(--color-wood-light)", fontFamily: "var(--font-mono)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/kontak?produk=${encodeURIComponent(product.name)}`}
                  className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider transition-colors"
                  style={{ color: "var(--color-gold)", fontFamily: "var(--font-inter)" }}
                >
                  Konsultasi <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
