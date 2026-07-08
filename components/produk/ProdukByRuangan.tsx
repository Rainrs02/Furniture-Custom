"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CustomIcon from "@/components/icons/CustomIcon";

const rooms = [
  { id: "dapur", name: "Dapur", icon: "kitchen" as const, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", products: ["Kitchen Set", "Kitchen Island", "Pantry Cabinet", "Lemari Dapur"] },
  { id: "ruang-tamu", name: "Ruang Tamu", icon: "sofa" as const, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", products: ["Sofa Custom", "TV Cabinet", "Rak Buku", "Wall Panel"] },
  { id: "ruang-keluarga", name: "Ruang Keluarga", icon: "sofa" as const, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", products: ["Sofa Sectional", "Coffee Table", "Rak Display", "Partisi Ruangan"] },
  { id: "kamar-tidur", name: "Kamar Tidur", icon: "bed" as const, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", products: ["Tempat Tidur", "Lemari Pakaian", "Walk In Closet", "Nakas & Meja Rias"] },
  { id: "ruang-kerja", name: "Ruang Kerja", icon: "table" as const, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80", products: ["Meja Kerja", "Rak Buku", "Lemari Arsip", "Panel Akustik"] },
  { id: "ruang-makan", name: "Ruang Makan", icon: "table" as const, image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80", products: ["Meja Makan", "Kursi Makan", "Buffet", "Display Cabinet"] },
  { id: "kamar-mandi", name: "Kamar Mandi", icon: "wardrobe" as const, image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", products: ["Bathroom Cabinet", "Mirror Cabinet", "Vanity Unit"] },
  { id: "komersial", name: "Area Komersial", icon: "shelf" as const, image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&q=80", products: ["Meja Cafe", "Counter Bar", "Rak Ritel", "Workstation Kantor"] },
];

export default function ProdukByRuangan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ruangan" className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
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
            Berdasarkan Ruangan
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              id={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-sm overflow-hidden"
              style={{ border: "1px solid var(--color-stone)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(46,31,20,0.75))" }} />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span style={{ color: "var(--color-gold)" }}>
                    <CustomIcon name={room.icon} size={18} strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "var(--color-linen)", fontFamily: "var(--font-playfair)" }}>
                    {room.name}
                  </span>
                </div>
              </div>
              <div className="p-4" style={{ backgroundColor: "var(--color-broken-white)" }}>
                <ul className="space-y-1">
                  {room.products.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-gold)" }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
