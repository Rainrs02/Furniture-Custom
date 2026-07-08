"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import CustomIcon from "@/components/icons/CustomIcon";
import Logo from "./Logo";

const productLinks = [
  { href: "/produk#kitchen-set", label: "Kitchen Set" },
  { href: "/produk#wardrobe", label: "Lemari Pakaian" },
  { href: "/produk#walk-in-closet", label: "Walk In Closet" },
  { href: "/produk#meja-makan", label: "Meja Makan" },
  { href: "/produk#sofa", label: "Sofa Custom" },
  { href: "/produk#tv-cabinet", label: "TV Cabinet" },
  { href: "/produk#rak-buku", label: "Rak Buku" },
];

const companyLinks = [
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/alur-pemesanan", label: "Alur Pemesanan" },
  { href: "/galeri", label: "Galeri Portofolio" },
  { href: "/artikel", label: "Artikel & Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak Kami" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-wood-dark)", color: "var(--color-linen)" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="footer" />
            </div>
            <p
              className="text-sm leading-relaxed mb-6 opacity-80"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Spesialis furnitur custom premium untuk hunian dan komersial. 
              Menggabungkan keahlian pengerjaan kayu tradisional dengan desain kontemporer.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--color-gold)" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--color-gold)" }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--color-gold)" }}
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
            >
              Produk
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span
                      className="w-3 h-px transition-all group-hover:w-5"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
            >
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span
                      className="w-3 h-px transition-all group-hover:w-5"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
            >
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                <span className="text-sm opacity-80" style={{ fontFamily: "var(--font-inter)" }}>
                  Jl. Raya Pertukangan No. 45, Jakarta Selatan, DKI Jakarta 12240
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                <a
                  href="tel:+6281234567890"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                <a
                  href="mailto:info@furniturerumahcustom.id"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  info@furniturerumahcustom.id
                </a>
              </li>
            </ul>
            <div
              className="mt-6 p-4 rounded-sm"
              style={{ backgroundColor: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)" }}
            >
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                Jam Operasional
              </p>
              <p className="text-sm opacity-80" style={{ fontFamily: "var(--font-inter)" }}>
                Senin – Sabtu: 08.00 – 17.00
              </p>
              <p className="text-sm opacity-80" style={{ fontFamily: "var(--font-inter)" }}>
                Minggu: 09.00 – 14.00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs opacity-50"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {new Date().getFullYear()} Wasilah Furniture. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-2">
            <CustomIcon name="wood-grain" size={16} className="opacity-30" />
            <p
              className="text-xs opacity-50"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Dibuat dengan keahlian &amp; dedikasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
