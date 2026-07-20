import React from "react";
import { pressLogos } from "@/lib/constants";

/**
 * Muted "As featured in" row for social proof. Uses wordmarks (client can
 * swap in real SVG logos later).
 */
export function PressStrip() {
  return (
    <section className="section-x py-12">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-ink-muted">
        As featured in
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {pressLogos.map((name) => (
          <span
            key={name}
            className="font-display text-lg font-semibold text-ink/45 transition-colors hover:text-curtain md:text-xl"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default PressStrip;
