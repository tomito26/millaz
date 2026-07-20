import React from "react";

/**
 * A scalloped red-velvet stage curtain that drapes from the top of a dark
 * section, with a gold valance rule. Decorative only.
 */
export function CurtainDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative w-full ${className}`}>
      <div className="h-1 w-full bg-gradient-to-r from-curtain-dark via-footlight to-curtain-dark" />
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="block h-6 w-full md:h-9"
      >
        <defs>
          <linearGradient id="velvet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CB271E" />
            <stop offset="100%" stopColor="#A81F17" />
          </linearGradient>
        </defs>
        <path
          d="M0 0 H1200 V6 Q1150 40 1100 6 Q1050 40 1000 6 Q950 40 900 6 Q850 40 800 6 Q750 40 700 6 Q650 40 600 6 Q550 40 500 6 Q450 40 400 6 Q350 40 300 6 Q250 40 200 6 Q150 40 100 6 Q50 40 0 6 Z"
          fill="url(#velvet)"
        />
      </svg>
    </div>
  );
}

export default CurtainDivider;
