import React from "react";

interface LogoProps {
  scrolled?: boolean;
  variant?: "navbar" | "footer";
}

export default function Logo({ scrolled = false, variant = "navbar" }: LogoProps) {
  // Determine primary color based on context
  const primaryColor =
    variant === "footer"
      ? "var(--color-linen)"
      : scrolled
      ? "var(--color-wood)"
      : "var(--color-linen)";
      
  const accentColor = "var(--color-gold)";

  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      {/* Icon */}
      <div className="relative flex items-center justify-center w-11 h-11 transition-transform duration-500 group-hover:scale-105">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Frame */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="8"
            stroke={primaryColor}
            strokeWidth="1.5"
            strokeOpacity="0.2"
          />
          
          {/* Inner Fill for depth */}
          <rect
            x="6"
            y="6"
            width="32"
            height="32"
            rx="5"
            fill={primaryColor}
            fillOpacity="0.03"
          />

          {/* 
            Abstract Monogram: W + F + Furniture Motif 
            Represents a structural design, precision (ruler-like), and elegance
          */}
          {/* Base W Shape */}
          <path
            d="M 13 15 L 17 31 L 22 21 L 27 31 L 31 15"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Top Structural Line (Table/Desk metaphor) */}
          <path
            d="M 10 15 L 34 15"
            stroke={primaryColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Point - Precision */}
          <circle cx="22" cy="15" r="3" fill={primaryColor} />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className="text-2xl font-bold tracking-tight transition-colors duration-300"
          style={{ fontFamily: "var(--font-playfair)", color: primaryColor }}
        >
          Wasilah Furniture
        </span>
        <span
          className="text-[10px] tracking-[0.2em] uppercase font-medium mt-1.5 transition-colors duration-300"
          style={{ fontFamily: "var(--font-mono)", color: accentColor }}
        >
          Custom &amp; Premium
        </span>
      </div>
    </div>
  );
}
