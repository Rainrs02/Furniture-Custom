"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const team = [
  { name: "Hendra Wijaya", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", bio: "15 tahun pengalaman di industri furnitur custom." },
  { name: "Dewi Sartika", role: "Head Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", bio: "Lulusan desain interior ITB dengan spesialisasi ergonomi." },
  { name: "Rudi Hartono", role: "Master Craftsman", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", bio: "20 tahun pengalaman pengerjaan kayu solid berkualitas." },
  { name: "Ani Kurniawati", role: "Project Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", bio: "Memastikan setiap proyek on-time dan on-budget." },
];

export default function TimSection() {
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
          className="text-center mb-16"
        >
          <span className="wood-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
            Tim Profesional
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--color-wood-light)", fontFamily: "var(--font-inter)" }}>
            Kami dibentuk dari para ahli yang berdedikasi pada kerajinan dan kepuasan pelanggan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div
                className="relative mx-auto mb-5 overflow-hidden rounded-sm"
                style={{ width: 180, height: 220, border: "1px solid var(--color-stone)" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(74,55,40,0.15)" }}
                />
              </div>
              <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-wood)" }}>
                {member.name}
              </h3>
              <p className="text-xs uppercase tracking-widest mt-1 mb-2" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
                {member.role}
              </p>
              <p className="text-sm opacity-70" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)" }}>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
