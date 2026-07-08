"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "Harga & Pembayaran",
    icon: "💰",
    items: [
      { q: "Berapa kisaran harga kitchen set custom?", a: "Harga kitchen set custom dimulai dari Rp 3.500.000/meter lari untuk material HPL, Rp 5.000.000/meter lari untuk material duco, dan Rp 8.000.000+ untuk material premium. Harga bervariasi tergantung dimensi, material, dan aksesori yang dipilih. Konsultasi gratis untuk mendapatkan estimasi yang akurat." },
      { q: "Apakah ada biaya konsultasi dan pengukuran?", a: "Konsultasi awal kami berikan gratis. Namun, untuk kunjungan survey dan pengukuran lokasi akan dikenakan biaya yang nantinya dapat dipotong dari total biaya proyek jika Anda melanjutkan pemesanan." },
      { q: "Bagaimana sistem pembayaran?", a: "Sistem pembayaran kami: DP 50% di awal setelah desain disetujui, 30% setelah produksi 70% selesai, dan 20% pelunasan setelah instalasi selesai. Kami menerima transfer bank, tunai, dan pembayaran digital." },
      { q: "Apakah harga sudah termasuk instalasi?", a: "Ya, harga yang kami tawarkan sudah termasuk biaya instalasi untuk area Jabodetabek. Untuk luar Jabodetabek, biaya instalasi akan dihitung terpisah berdasarkan jarak dan volume pekerjaan." },
    ],
  },
  {
    category: "Material Furniture",
    icon: "🪵",
    items: [
      { q: "Material apa yang paling direkomendasikan untuk dapur?", a: "Untuk dapur, kami merekomendasikan multiplek grade A dengan finishing HPL (High Pressure Laminate) untuk lemari bawah yang sering terpapar air, dan MDF dengan finishing duco atau HPL untuk lemari atas. Keduanya tahan air dan mudah dibersihkan." },
      { q: "Apa perbedaan HPL dan duco?", a: "HPL adalah laminasi plastik bertekanan tinggi yang ditempel pada permukaan kayu — tersedia dalam ratusan motif dan sangat tahan goresan. Duco adalah cat khusus furnitur yang diaplikasikan dengan semprot — menghasilkan tampilan mulus, modern, dan bisa dikustomisasi warnanya sesuai kode RAL." },
      { q: "Berapa ketahanan solid wood dibanding multiplek?", a: "Solid wood memiliki ketahanan alami yang sangat tinggi, bisa bertahan 30-50 tahun dengan perawatan minimal. Multiplek grade A juga sangat kuat dan tahan lama (10-20 tahun), namun lebih rentan terhadap kelembaban ekstrem. Keduanya pilihan excellent — solid wood lebih premium, multiplek lebih ekonomis." },
    ],
  },
  {
    category: "Desain Custom",
    icon: "✏️",
    items: [
      { q: "Apakah saya bisa membawa referensi desain sendiri?", a: "Tentu! Kami sangat terbuka menerima referensi dari manapun — Pinterest, Instagram, majalah, atau foto langsung. Tim desainer kami akan mengadaptasi referensi tersebut sesuai dimensi ruangan, kebutuhan, dan anggaran Anda." },
      { q: "Berapa kali bisa revisi desain?", a: "Kami memberikan 3 kali revisi gratis untuk setiap proyek. Revisi tambahan dikenakan biaya minimal. Namun pengalaman kami, mayoritas klien sudah puas pada revisi ke-1 atau ke-2." },
      { q: "Apakah saya bisa melihat simulasi 3D sebelum produksi?", a: "Ya, absolutely! Setiap proyek mendapatkan render 3D detail sebelum produksi dimulai. Anda bisa melihat bagaimana furnitur akan terlihat di ruangan dari berbagai sudut pandang." },
    ],
  },
  {
    category: "Produksi",
    icon: "⚙️",
    items: [
      { q: "Berapa lama waktu pengerjaan?", a: "Waktu pengerjaan bervariasi: kitchen set 3x3m membutuhkan 14-21 hari kerja, walk in closet 14-25 hari, lemari pakaian 10-14 hari. Proyek yang lebih besar atau kompleks bisa membutuhkan waktu lebih lama. Kami selalu memberikan timeline yang realistis dan menepatinya." },
      { q: "Di mana proses produksi berlangsung?", a: "Seluruh produksi dilakukan di workshop kami di Jakarta Selatan. Kami menggunakan mesin CNC modern untuk presisi, dipadukan dengan keahlian tangan para pengrajin berpengalaman untuk detail-detail khusus." },
      { q: "Apakah saya bisa melihat proses produksi?", a: "Ya! Kami sangat terbuka untuk kunjungan workshop selama jam operasional. Anda bisa melihat langsung proses pengerjaan furnitur Anda. Silakan hubungi kami untuk menjadwalkan kunjungan." },
    ],
  },
  {
    category: "Instalasi",
    icon: "🔧",
    items: [
      { q: "Apakah tim instalasi berpengalaman?", a: "Semua teknisi instalasi kami adalah karyawan tetap yang terlatih dan berpengalaman. Mereka bekerja dengan standar kebersihan tinggi — menggunakan alas pelindung lantai dan membersihkan area setelah selesai." },
      { q: "Berapa lama waktu instalasi?", a: "Instalasi kitchen set standar membutuhkan 1-2 hari, walk in closet 1-3 hari, dan lemari besar 1-2 hari. Kami akan memberikan jadwal instalasi yang tepat sebelum hari H." },
    ],
  },
  {
    category: "Garansi & After Sales",
    icon: "🛡️",
    items: [
      { q: "Apa yang tercover dalam garansi 2 tahun?", a: "Garansi kami mencakup: kerusakan material akibat cacat produksi, masalah engsel, rel laci, dan mekanisme lainnya, serta penurunan kualitas finishing yang tidak normal. Garansi tidak mencakup kerusakan akibat penggunaan yang tidak semestinya, bencana alam, atau modifikasi pihak ketiga." },
      { q: "Bagaimana cara klaim garansi?", a: "Sangat mudah. Hubungi kami via WhatsApp atau telepon, ceritakan masalah yang dialami, kirim foto, dan tim kami akan menindaklanjuti dalam 1x24 jam. Untuk kasus yang membutuhkan kunjungan, kami jadwalkan teknisi tanpa biaya." },
      { q: "Apakah ada layanan maintenance rutin?", a: "Ya! Kami menawarkan paket maintenance tahunan (opsional) yang mencakup pengecekan dan pelumasan mekanisme, touch-up minor finishing, dan konsultasi perawatan. Klien dengan garansi aktif mendapatkan 1 kali free maintenance check di bulan ke-6." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b last:border-0"
      style={{ borderColor: "var(--color-stone)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
          style={{ color: "var(--color-gold)" }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed opacity-75" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQClient() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-20 pt-36 px-6 overflow-hidden" style={{ backgroundColor: "var(--color-wood-dark)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)" }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12" style={{ backgroundColor: "var(--color-gold)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>Pertanyaan Umum</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
              Ada Pertanyaan?{" "}
              <em className="italic" style={{ color: "var(--color-gold)" }}>Kami Jawab</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-linen)" }}>
        <div ref={ref} className="max-w-4xl mx-auto">
          {faqData.map((section, si) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: si * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                  {section.category}
                </h2>
              </div>
              <div
                className="rounded-sm overflow-hidden"
                style={{ backgroundColor: "var(--color-broken-white)", border: "1px solid var(--color-stone)" }}
              >
                <div className="px-8">
                  {section.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Still have questions CTA */}
          <div className="text-center p-10 rounded-sm" style={{ backgroundColor: "var(--color-wood)", border: "1px solid var(--color-stone)" }}>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
              Masih ada pertanyaan?
            </h3>
            <p className="text-sm mb-6 opacity-70" style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}>
              Tim konsultan kami siap menjawab pertanyaan Anda secara personal
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Chat WhatsApp
              </a>
              <a href="tel:+6281234567890" className="btn-secondary" style={{ borderColor: "var(--color-linen)", color: "var(--color-linen)" }}>
                Telepon Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
