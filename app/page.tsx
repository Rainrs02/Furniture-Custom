"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ChevronRight } from "lucide-react";
import CustomIcon from "@/components/icons/CustomIcon";

// ─── SECTION: Hero ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--color-wood-dark)" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1920&q=85"
          alt="Custom furniture living room"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(46,31,20,0.92) 50%, rgba(46,31,20,0.5) 100%)",
          }}
        />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 6px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span
              className="h-px w-12"
              style={{ backgroundColor: "var(--color-gold)" }}
            />
            <span
              className="text-xs uppercase tracking-widest font-medium"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
            >
              Furnitur Custom Premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--color-linen)",
            }}
          >
            Wujudkan{" "}
            <em className="italic" style={{ color: "var(--color-gold)" }}>
              Furniture yang Tepat
            </em>{" "}
            untuk Setiap Ruangan
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{
              color: "rgba(253,251,247,0.75)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Kami merancang dan memproduksi furnitur custom sesuai kebutuhan unik hunian Anda —
            dari konsultasi desain hingga instalasi sempurna.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/kontak" className="btn-gold">
              Mulai Konsultasi
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all rounded-sm border"
              style={{
                borderColor: "rgba(253,251,247,0.3)",
                color: "var(--color-linen)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Lihat Portofolio
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-10 mt-16 pt-10 border-t"
            style={{ borderColor: "rgba(253,251,247,0.1)" }}
          >
            {[
              { value: "500+", label: "Proyek Selesai" },
              { value: "12+", label: "Tahun Pengalaman" },
              { value: "98%", label: "Klien Puas" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--color-gold)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm opacity-60 mt-1"
                  style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(253,251,247,0.4)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
          Scroll
        </span>
        <div className="w-px h-10" style={{ backgroundColor: "rgba(253,251,247,0.3)" }} />
      </motion.div>
    </section>
  );
}

// ─── SECTION: Featured Collection ──────────────────────────────────────────────
const featuredItems = [
  {
    id: 1,
    title: "Kitchen Set Minimalis", slug: "kitchen-set-minimalis",
    subtitle: "Dapur Premium",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    material: "Multiplek HPL",
    icon: "kitchen" as const,
  },
  {
    id: 2,
    title: "Walk In Closet", slug: "walk-in-closet",
    subtitle: "Ruang Pakaian",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
    material: "MDF Duco",
    icon: "wardrobe" as const,
  },
  {
    id: 3,
    title: "Meja Makan Custom", slug: "meja-makan-custom",
    subtitle: "Ruang Makan",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
    material: "Solid Wood Jati",
    icon: "table" as const,
  },
  {
    id: 4,
    title: "Rak Display & Buku", slug: "rak-display-buku",
    subtitle: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    material: "Multiplek Veneer",
    icon: "shelf" as const,
  },
];

function FeaturedCollection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding grain-texture" style={{ backgroundColor: "var(--color-broken-white)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="wood-line" />
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
            >
              Koleksi Unggulan
            </h2>
          </div>
          <p
            className="text-base max-w-sm leading-relaxed"
            style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}
          >
            Setiap karya merupakan hasil kolaborasi antara keahlian pengrajin dan visi desainer modern.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              style={{ border: "1px solid var(--color-stone)" }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(46,31,20,0.8))" }}
                />
                {/* Icon badge */}
                <div
                  className="absolute top-4 right-4 p-2 rounded-sm"
                  style={{ backgroundColor: "var(--color-gold)", color: "var(--color-wood-dark)" }}
                >
                  <CustomIcon name={item.icon} size={18} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5" style={{ backgroundColor: "var(--color-linen)" }}>
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
                >
                  {item.subtitle}
                </p>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-mono)" }}
                >
                  {item.material}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/produk" className="btn-secondary">
            Lihat Semua Produk
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Room Inspiration ─────────────────────────────────────────────────
const rooms = [
  { name: "Dapur", icon: "kitchen" as const, count: 24, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { name: "Ruang Tamu", icon: "sofa" as const, count: 18, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { name: "Kamar Tidur", icon: "bed" as const, count: 32, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80" },
  { name: "Ruang Kerja", icon: "table" as const, count: 15, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80" },
  { name: "Walk In Closet", icon: "wardrobe" as const, count: 20, image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&q=80" },
  { name: "Ruang Makan", icon: "table" as const, count: 12, image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80" },
];

function RoomInspiration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
          >
            Inspirasi Berdasarkan Ruangan
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}
          >
            Temukan inspirasi furnitur custom yang tepat untuk setiap ruangan di rumah Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/produk?ruangan=${encodeURIComponent(room.name)}`}
                className="group block relative overflow-hidden rounded-sm"
                style={{ border: "1px solid var(--color-stone)" }}
              >
                <div className="relative h-36">
                  <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(46,31,20,0.75))" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <CustomIcon name={room.icon} size={16} className="mb-1" style={{ color: "var(--color-gold)" }} />
                    <p className="text-xs font-semibold" style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}>
                      {room.name}
                    </p>
                    <p className="text-xs opacity-70" style={{ color: "var(--color-stone)", fontFamily: "var(--font-mono)" }}>
                      {room.count} produk
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Why Choose Us ────────────────────────────────────────────────────
const reasons = [
  { icon: "design" as const, title: "Desain Eksklusif", desc: "Setiap furnitur dirancang sesuai kebutuhan dan dimensi ruangan Anda secara unik." },
  { icon: "quality" as const, title: "Material Premium", desc: "Kami hanya menggunakan material berkualitas tinggi: solid wood, multiplek grade A, dan finishing terbaik." },
  { icon: "ruler" as const, title: "Presisi Pengerjaan", desc: "Diukur dan diproduksi dengan toleransi milimeter oleh pengrajin berpengalaman." },
  { icon: "delivery" as const, title: "Instalasi Tuntas", desc: "Layanan one-stop dari desain, produksi, hingga instalasi dan after-sales." },
  { icon: "measure" as const, title: "Survey & Pengukuran", desc: "Tim kami datang langsung ke lokasi untuk pengukuran presisi." },
  { icon: "hammer" as const, title: "Garansi 2 Tahun", desc: "Setiap produk kami berikan garansi resmi 2 tahun untuk ketenangan pikiran Anda." },
];

function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding grain-texture"
      style={{ backgroundColor: "var(--color-wood)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="wood-line mx-auto" />
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}
          >
            Mengapa Memilih Kami?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(253,251,247,0.05)",
                border: "1px solid rgba(253,251,247,0.1)",
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-sm mb-6 transition-all duration-300 group-hover:bg-opacity-100"
                style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--color-gold)" }}
              >
                <CustomIcon name={reason.icon} size={24} strokeWidth={1.5} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-sm leading-relaxed opacity-70"
                style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}
              >
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Materials ─────────────────────────────────────────────────────────
const materials = [
  { name: "Solid Wood", code: "SW-01", desc: "Kayu jati, mahoni, atau merbau asli", color: "#6B4E3D" },
  { name: "Multiplek/Plywood", code: "MP-02", desc: "Grade A 18mm, lapisan veneer pilihan", color: "#8B6F5E" },
  { name: "MDF Premium", code: "MF-03", desc: "Medium Density Fiberboard kualitas tinggi", color: "#A67C6F" },
  { name: "HPL", code: "HP-04", desc: "High Pressure Laminate, 400+ pilihan motif", color: "#C4956A" },
  { name: "Duco Finishing", code: "DC-05", desc: "Cat duco halus, smooth touch, anti-gores", color: "#E9E5DE" },
  { name: "Veneer", code: "VN-06", desc: "Laminasi kayu asli tipis, tampilan natural", color: "#D4A76A" },
];

function MaterialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          <div className="lg:w-2/5">
            <span className="wood-line" />
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
            >
              Material &<br />Finishing
              <br />
              <em className="italic" style={{ color: "var(--color-gold)" }}>Pilihan Terbaik</em>
            </h2>
            <p
              className="mt-6 text-base leading-relaxed"
              style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}
            >
              Kami bekerja hanya dengan material pilihan yang telah teruji. Setiap bahan dipilih 
              secara ketat untuk memastikan hasil akhir yang tahan lama dan estetis.
            </p>
            <Link href="/produk#material" className="btn-primary mt-8">
              Pelajari Material
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-4">
            {materials.map((mat, i) => (
              <motion.div
                key={mat.code}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 rounded-sm transition-all hover:-translate-y-1"
                style={{
                  border: "1px solid var(--color-stone)",
                  backgroundColor: "var(--color-broken-white)",
                }}
              >
                <div
                  className="w-full h-3 rounded-sm mb-4 transition-all group-hover:h-4"
                  style={{ backgroundColor: mat.color }}
                />
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
                >
                  {mat.code}
                </p>
                <h4
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
                >
                  {mat.name}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}
                >
                  {mat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SECTION: Portfolio ─────────────────────────────────────────────────────────
const portfolioItems = [
  { id: 1, title: "Kitchen Set Modern Minimalis", slug: "kitchen-set-modern-minimalis", location: "Jakarta Selatan", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80", cat: "Kitchen Set" },
  { id: 2, title: "Walk In Closet Mewah", slug: "walk-in-closet-mewah", location: "BSD City", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=700&q=80", cat: "Wardrobe" },
  { id: 3, title: "Ruang Kerja Produktif", slug: "ruang-kerja-produktif", location: "Tangerang", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80", cat: "Home Office" },
  { id: 4, title: "Meja Makan Solid Wood", slug: "meja-makan-solid-wood", location: "Bekasi", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=700&q=80", cat: "Ruang Makan" },
  { id: 5, title: "TV Cabinet Kontemporer", slug: "tv-cabinet-kontemporer", location: "Depok", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80", cat: "Living Room" },
  { id: 6, title: "Kamar Tidur Elegan", slug: "kamar-tidur-elegan", location: "Jakarta Barat", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80", cat: "Bedroom" },
];

function PortfolioSection() {
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="wood-line" />
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
            >
              Portofolio Pilihan
            </h2>
          </div>
          <Link href="/galeri" className="btn-secondary shrink-0">
            Lihat Semua <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(46,31,20,0.7)" }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs px-2 py-1 rounded-sm font-medium uppercase tracking-wider"
                    style={{ backgroundColor: "var(--color-gold)", color: "var(--color-wood-dark)", fontFamily: "var(--font-mono)" }}
                  >
                    {item.cat}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-80" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                      📍 {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Testimonials ──────────────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pemilik Rumah, Jakarta Selatan",
    rating: 5,
    text: "Kitchen set yang dibuat benar-benar melebihi ekspektasi saya. Ukurannya presisi, finishing HPL-nya rapi, dan tim instalasi sangat profesional. Rekomendasikan banget!",
  },
  {
    id: 2,
    name: "Rina Melati",
    role: "Interior Enthusiast, BSD City",
    rating: 5,
    text: "Walk in closet impian saya akhirnya terwujud! Tim desainernya sabar dan kreatif, banyak memberikan solusi yang tidak saya pikirkan sebelumnya. Hasilnya luar biasa.",
  },
  {
    id: 3,
    name: "PT Karya Mandiri",
    role: "Klien Komersial, Tangerang",
    rating: 5,
    text: "Kami mempercayakan furnitur kantor seluruh lantai 3 kepada mereka. Hasilnya profesional, on-time, dan within budget. Akan lanjut untuk proyek berikutnya.",
  },
];

function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
          >
            Kata Pelanggan Kami
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-sm"
              style={{
                backgroundColor: "var(--color-broken-white)",
                border: "1px solid var(--color-stone)",
              }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" style={{ color: "var(--color-gold)" }} />
                ))}
              </div>
              <blockquote
                className="text-base leading-relaxed mb-6 italic"
                style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div
                className="pt-4 border-t"
                style={{ borderColor: "var(--color-stone)" }}
              >
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                  {t.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: Blog Preview ──────────────────────────────────────────────────────
const articles = [
  {
    id: 1,
    title: "5 Tips Memilih Material Dapur yang Tahan Lama dan Mudah Dirawat", slug: "5-tips-memilih-material-dapur-yang-tahan-lama-dan-mudah-dirawat",
    category: "Tips Material",
    date: "10 Jan 2024",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    excerpt: "Memilih material untuk kitchen set bukan hanya soal estetika, tetapi juga ketahanan jangka panjang...",
  },
  {
    id: 2,
    title: "Tren Desain Interior 2024: Minimalisme Hangat yang Bersahaja", slug: "tren-desain-interior-2024-minimalisme-hangat-yang-bersahaja",
    category: "Tren Interior",
    date: "5 Jan 2024",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    excerpt: "Tahun 2024 membawa pergeseran desain menuju kehangatan dan keaslian material alami...",
  },
  {
    id: 3,
    title: "Cara Merawat Furnitur Kayu Solid agar Awet Bertahun-tahun", slug: "cara-merawat-furnitur-kayu-solid-agar-awet-bertahun-tahun",
    category: "Tips Perawatan",
    date: "28 Des 2023",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    excerpt: "Furnitur kayu solid yang dirawat dengan benar bisa bertahan puluhan tahun bahkan menjadi warisan...",
  },
];

function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding grain-texture" style={{ backgroundColor: "var(--color-broken-white)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="wood-line" />
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
            >
              Tips & Inspirasi
            </h2>
          </div>
          <Link href="/artikel" className="btn-secondary shrink-0">
            Semua Artikel <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/artikel/${art.slug}`} className="group block">
                <div className="relative h-52 overflow-hidden rounded-sm mb-5">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs uppercase tracking-wider font-medium px-2 py-1 rounded-sm"
                      style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
                    >
                      {art.category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-mono)" }}>
                      {art.date}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-semibold leading-snug mb-2 group-hover:underline underline-offset-4"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}
                  >
                    {art.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed opacity-70"
                    style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}
                  >
                    {art.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: CTA ───────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--color-emerald)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 12px)",
        }}
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <span className="wood-line mx-auto" />
        <h2
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}
        >
          Wujudkan Rumah Impian Anda
        </h2>
        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-85"
          style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}
        >
          Konsultasikan kebutuhan furnitur Anda dengan tim ahli kami secara gratis. 
          Kami siap membantu dari konsep hingga instalasi.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/kontak" className="btn-gold">
            Konsultasi Gratis Sekarang
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20furnitur%20custom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wide rounded-sm border transition-all hover:bg-white hover:text-emerald-800"
            style={{
              borderColor: "var(--color-linen)",
              color: "var(--color-linen)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Chat WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection />
      <RoomInspiration />
      <WhyChooseUs />
      <MaterialSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
