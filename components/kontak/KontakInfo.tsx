"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Alamat Workshop", value: "Jl. Raya Pertukangan No. 45, Kebayoran Lama, Jakarta Selatan 12240", link: "https://maps.google.com/?q=Jakarta+Selatan" },
  { icon: Phone, label: "Telepon", value: "+62 812-3456-7890", link: "tel:+6281234567890" },
  { icon: MessageCircle, label: "WhatsApp", value: "+62 812-3456-7890", link: "https://wa.me/6281234567890" },
  { icon: Mail, label: "Email", value: "info@furniturerumahcustom.id", link: "mailto:info@furniturerumahcustom.id" },
];

export default function KontakInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding grain-texture" style={{ backgroundColor: "var(--color-stone)" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Cards */}
          <div>
            <span className="wood-line" />
            <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
              Informasi Kontak
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start p-5 rounded-sm group transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-stone)" }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--color-wood)", color: "var(--color-gold)" }}
                  >
                    <info.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                      {info.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 p-5 rounded-sm"
              style={{ backgroundColor: "var(--color-linen)", border: "1px solid var(--color-stone)" }}
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--color-wood)", color: "var(--color-gold)" }}>
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>Jam Operasional</p>
                  <p className="text-sm" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>Senin – Jumat: 08.00 – 17.00 WIB</p>
                  <p className="text-sm" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>Sabtu: 08.00 – 15.00 WIB</p>
                  <p className="text-sm" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>Minggu: 09.00 – 13.00 WIB</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                Ikuti Kami
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm flex items-center justify-center transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--color-wood)", color: "var(--color-gold)" }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="wood-line" />
            <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
              Lokasi Workshop
            </h2>
            <div className="rounded-sm overflow-hidden" style={{ border: "1px solid var(--color-stone)", height: 450 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63449.28854843025!2d106.7697454!3d-6.2146827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Wasilah Furniture"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
