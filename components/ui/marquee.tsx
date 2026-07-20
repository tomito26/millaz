import React from "react";

/**
 * Cinema-marquee ticker: an infinite horizontal scroll of items separated by
 * gold stars. The list is duplicated and each item carries its own trailing
 * space so the -50% loop is perfectly seamless.
 */
export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const sequence = [...items, ...items];
  return (
    <div
      className={`group relative flex overflow-hidden border-y border-footlight/25 bg-stage py-3 ${className}`}
    >
      <div className="flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
        {sequence.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-8 pr-8 font-display text-lg italic tracking-wide text-paper-dim"
          >
            {item}
            <span className="text-footlight not-italic">✦</span>
          </span>
        ))}
      </div>
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stage to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stage to-transparent" />
    </div>
  );
}

export default Marquee;
