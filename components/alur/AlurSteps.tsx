"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CustomIcon from "@/components/icons/CustomIcon";

const steps = [
  {
    number: "01",
    title: "Konsultasi",
    icon: "design" as const,
    duration: "Gratis",
    desc: "Hubungi kami via WhatsApp, telepon, atau kunjungi showroom. Ceritakan kebutuhan furnitur dan ruangan Anda. Tim konsultan kami akan mendengarkan dan memberikan rekomendasi awal.",
    detail: ["Konsultasi tatap muka atau online", "Diskusi referensi dan inspirasi desain", "Estimasi biaya awal (gratis)"],
  },
  {
    number: "02",
    title: "Survey & Pengukuran",
    icon: "measure" as const,
    duration: "1-2 Hari",
    desc: "Tim surveyor kami datang ke lokasi untuk mengukur ruangan secara presisi. Kami juga mengevaluasi kondisi dinding, lantai, dan instalasi yang ada.",
    detail: ["Kunjungan ke lokasi (berbayar)", "Pengukuran presisi milimeter", "Evaluasi kondisi ruangan"],
  },
  {
    number: "03",
    title: "Penawaran Harga",
    icon: "ruler" as const,
    duration: "2-3 Hari",
    desc: "Berdasarkan hasil survey, kami menyiapkan penawaran harga detail termasuk material, dimensi, dan estimasi waktu pengerjaan. Transparansi penuh tanpa biaya tersembunyi.",
    detail: ["Rincian harga per komponen", "Pilihan material & finishing", "Timeline pengerjaan jelas"],
  },
  {
    number: "04",
    title: "Desain & Approval",
    icon: "design" as const,
    duration: "3-7 Hari",
    desc: "Desainer kami membuat gambar 3D render yang detail. Anda dapat meminta revisi hingga desain benar-benar sesuai keinginan sebelum produksi dimulai.",
    detail: ["Gambar 3D render detail", "Revisi desain bebas biaya", "Approval sebelum produksi"],
  },
  {
    number: "05",
    title: "Produksi",
    icon: "saw" as const,
    duration: "14-30 Hari",
    desc: "Setelah approval, pengerjaan dimulai di workshop kami. Menggunakan mesin CNC presisi dan dikerjakan oleh pengrajin berpengalaman dengan standar kualitas ketat.",
    detail: ["Workshop bersertifikat", "Teknologi CNC + keahlian tangan", "Update progres berkala"],
  },
  {
    number: "06",
    title: "Quality Control",
    icon: "quality" as const,
    duration: "2-3 Hari",
    desc: "Sebelum pengiriman, setiap komponen melewati quality control menyeluruh. Kami memeriksa finishing, dimensi, mekanisme, dan estetika sesuai spesifikasi.",
    detail: ["Checklist QC 25+ poin", "Test fungsi & mekanisme", "Foto dokumentasi"],
  },
  {
    number: "07",
    title: "Instalasi",
    icon: "hammer" as const,
    duration: "1-3 Hari",
    desc: "Tim instalasi kami yang berpengalaman memasang furnitur di lokasi dengan rapi dan bersih. Kami memastikan tidak ada kerusakan pada dinding dan lantai.",
    detail: ["Tim instalasi profesional", "Proses bersih & rapi", "Selesai tepat waktu"],
  },
  {
    number: "08",
    title: "Garansi & After Sales",
    icon: "quality" as const,
    duration: "2 Tahun",
    desc: "Garansi resmi 2 tahun mencakup kerusakan material dan mekanisme. Tim after sales kami siap membantu untuk penyesuaian dan perawatan setelah instalasi.",
    detail: ["Garansi 2 tahun resmi", "Free maintenance check (6 bulan)", "Layanan perbaikan prioritas"],
  },
];

export default function AlurSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* Step Number */}
              <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:text-right lg:items-end">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-sm font-bold text-2xl flex-shrink-0"
                  style={{ backgroundColor: "var(--color-wood)", color: "var(--color-gold)", fontFamily: "var(--font-playfair)" }}
                >
                  {step.number}
                </div>
                <span
                  className="text-xs px-2 py-1 rounded-sm"
                  style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
                >
                  {step.duration}
                </span>
              </div>

              {/* Connector */}
              <div className="hidden lg:flex lg:col-span-1 items-start pt-6 justify-center">
                <div className="w-px h-full min-h-[60px]" style={{ backgroundColor: "var(--color-stone)" }} />
              </div>

              {/* Content */}
              <div
                className="lg:col-span-9 p-8 rounded-sm"
                style={{ backgroundColor: "var(--color-broken-white)", border: "1px solid var(--color-stone)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ color: "var(--color-gold)" }}>
                    <CustomIcon name={step.icon} size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed mb-5 opacity-80" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
                  {step.desc}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {step.detail.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-sm"
                      style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-stone)", color: "var(--color-wood-light)", fontFamily: "var(--font-mono)" }}
                    >
                      <span style={{ color: "var(--color-gold)" }}>✓</span>
                      {d}
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
