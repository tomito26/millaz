import React from "react";
import { stats } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

/**
 * Stage-black impact band with oversized gold numerals — credibility at a
 * glance (entertain / empower / educate in numbers).
 */
export function StatsBand() {
  return (
    <section className="grain vignette relative overflow-hidden bg-stage py-16">
      <div className="section-x relative z-10 grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 100}
            className="text-center"
          >
            <p className="font-display text-4xl font-bold text-footlight md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-paper-dim md:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default StatsBand;
