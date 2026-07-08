"use client";

import React from "react";

type IconName =
  | "saw"
  | "hammer"
  | "wardrobe"
  | "table"
  | "chair"
  | "sandpaper"
  | "plank"
  | "chisel"
  | "ruler"
  | "square"
  | "kitchen"
  | "sofa"
  | "bed"
  | "shelf"
  | "tv-cabinet"
  | "measure"
  | "quality"
  | "delivery"
  | "design"
  | "wood-grain";

interface CustomIconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const icons: Record<IconName, React.ReactNode> = {
  saw: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h14" />
      <path d="M14 8l4 4-4 4" />
      <path d="M17 12h4" />
      <path d="M5 8l-2 2 2 2" />
      <rect x="6" y="9" width="8" height="6" rx="1" />
    </svg>
  ),
  hammer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4l5 5-11 11-5-5z" />
      <path d="M15 4l2-2 4 4-2 2" />
      <path d="M4 20l1-5" />
    </svg>
  ),
  wardrobe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2" width="18" height="20" rx="1" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <line x1="3" y1="6" x2="21" y2="6" />
    </svg>
  ),
  table: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="3" rx="1" />
      <line x1="6" y1="10" x2="6" y2="21" />
      <line x1="18" y1="10" x2="18" y2="21" />
      <line x1="4" y1="21" x2="20" y2="21" />
    </svg>
  ),
  chair: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="8" rx="2" />
      <line x1="5" y1="11" x2="5" y2="21" />
      <line x1="19" y1="11" x2="19" y2="21" />
      <line x1="3" y1="14" x2="21" y2="14" />
      <line x1="8" y1="14" x2="8" y2="21" />
      <line x1="16" y1="14" x2="16" y2="21" />
    </svg>
  ),
  sandpaper: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="12" rx="1" />
      <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <line x1="6" y1="12" x2="18" y2="12" strokeDasharray="2 2" />
      <line x1="6" y1="15" x2="18" y2="15" strokeDasharray="2 2" />
    </svg>
  ),
  plank: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="9" width="20" height="6" rx="1" />
      <line x1="6" y1="9" x2="6" y2="15" strokeDasharray="1 3" />
      <line x1="10" y1="9" x2="10" y2="15" strokeDasharray="1 3" />
      <line x1="14" y1="9" x2="14" y2="15" strokeDasharray="1 3" />
      <line x1="18" y1="9" x2="18" y2="15" strokeDasharray="1 3" />
    </svg>
  ),
  chisel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="14" rx="1" />
      <path d="M9 14l-2 6h8l-2-6" />
      <line x1="11" y1="6" x2="13" y2="6" />
      <line x1="11" y1="9" x2="13" y2="9" />
    </svg>
  ),
  ruler: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="9" width="20" height="6" rx="1" />
      <line x1="6" y1="9" x2="6" y2="12" />
      <line x1="9" y1="9" x2="9" y2="11" />
      <line x1="12" y1="9" x2="12" y2="12" />
      <line x1="15" y1="9" x2="15" y2="11" />
      <line x1="18" y1="9" x2="18" y2="12" />
    </svg>
  ),
  square: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <rect x="3" y="3" width="6" height="4" rx="1" />
      <path d="M9 3h12v4H9" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="13" width="20" height="8" rx="1" />
      <rect x="2" y="3" width="20" height="8" rx="1" />
      <line x1="2" y1="8" x2="22" y2="8" />
      <line x1="12" y1="13" x2="12" y2="21" />
      <circle cx="7" cy="17" r="1" />
      <circle cx="17" cy="17" r="1" />
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="9" width="14" height="8" rx="2" />
      <rect x="2" y="12" width="3" height="5" rx="1" />
      <rect x="19" y="12" width="3" height="5" rx="1" />
      <line x1="5" y1="17" x2="5" y2="20" />
      <line x1="19" y1="17" x2="19" y2="20" />
      <line x1="8" y1="9" x2="8" y2="12" />
      <line x1="16" y1="9" x2="16" y2="12" />
    </svg>
  ),
  bed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <rect x="2" y="12" width="20" height="6" rx="1" />
      <line x1="3" y1="18" x2="3" y2="21" />
      <line x1="21" y1="18" x2="21" y2="21" />
      <rect x="5" y="7" width="6" height="5" rx="1" />
      <rect x="13" y="7" width="6" height="5" rx="1" />
    </svg>
  ),
  shelf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="2" rx="1" />
      <rect x="2" y="11" width="20" height="2" rx="1" />
      <rect x="2" y="19" width="20" height="2" rx="1" />
      <line x1="3" y1="5" x2="3" y2="19" />
      <line x1="21" y1="5" x2="21" y2="19" />
    </svg>
  ),
  "tv-cabinet": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="12" width="20" height="8" rx="1" />
      <line x1="2" y1="16" x2="22" y2="16" />
      <line x1="12" y1="12" x2="12" y2="20" />
      <path d="M8 4l4-2 4 2-4 4-4-4z" />
      <line x1="12" y1="6" x2="12" y2="12" />
    </svg>
  ),
  measure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 3L5 21" />
      <path d="M5 3l4 4M9 3l2 2M13 3l4 4M17 3l2 2" />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h5l3 5v5h-8V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 19l7-7" />
      <path d="M9 12l3-9 9 9-9 3z" />
      <line x1="14" y1="14" x2="19" y2="19" />
    </svg>
  ),
  "wood-grain": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12c3-6 8-6 9 0s6 6 9 0" />
      <path d="M3 7c3-4 8-4 9 0s6 4 9 0" />
      <path d="M3 17c3-4 8-4 9 0s6 4 9 0" />
    </svg>
  ),
};

export default function CustomIcon({ name, size = 24, className = "", strokeWidth = 1.5 }: CustomIconProps) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <span
      className={className}
      style={{ display: "inline-flex", width: size, height: size }}
    >
      {React.cloneElement(icon as React.ReactElement, {
        width: size,
        height: size,
        strokeWidth,
      })}
    </span>
  );
}
