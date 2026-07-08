"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/produk", label: "Produk & Layanan" },
  { href: "/alur-pemesanan", label: "Alur Pemesanan" },
  { href: "/galeri", label: "Galeri" },
  { href: "/artikel", label: "Artikel" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo scrolled={scrolled} variant="navbar" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium tracking-wide transition-colors group"
                style={{
                  color: pathname === link.href
                    ? "var(--color-gold)"
                    : scrolled
                    ? "var(--color-wood)"
                    : "var(--color-linen)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px bg-current origin-left transition-transform duration-300"
                  style={{
                    width: "100%",
                    transform: pathname === link.href ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/kontak"
            className="inline-flex btn-primary"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-wood-dark)",
              borderColor: "var(--color-gold)",
              fontSize: "0.8rem",
              padding: "0.5rem 1.25rem",
            }}
          >
            Konsultasi Gratis
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 transition-colors"
          style={{ color: scrolled ? "var(--color-wood)" : "var(--color-linen)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t"
            style={{
              backgroundColor: "var(--color-linen)",
              borderColor: "var(--color-stone)",
            }}
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b last:border-b-0" style={{ borderColor: "var(--color-stone)" }}>
                  <Link
                    href={link.href}
                    className="block px-6 py-4 text-sm font-medium transition-colors"
                    style={{
                      color: pathname === link.href ? "var(--color-gold)" : "var(--color-wood)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 py-4">
                <Link href="/kontak" className="btn-primary w-full justify-center">
                  Konsultasi Gratis
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
