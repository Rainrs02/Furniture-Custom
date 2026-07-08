"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AlurCTA() {
  return (
    <section className="section-padding grain-texture" style={{ backgroundColor: "var(--color-stone)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <span className="wood-line mx-auto" />
        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
          Siap Memulai Proyek Anda?
        </h2>
        <p className="text-base mb-10 opacity-75" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
          Langkah pertama dimulai dari konsultasi gratis. Hubungi kami sekarang dan wujudkan furnitur impian Anda.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/kontak" className="btn-primary">
            Mulai Konsultasi Gratis <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memulai%20konsultasi%20furnitur%20custom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
