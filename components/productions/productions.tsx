import React from "react";
import { productions, marqueeItems } from "@/lib/constants";
import { TicketCard } from "@/components/ui/ticket-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { Newsletter } from "@/components/ui/newsletter";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

const Productions = () => {
  return (
    <div>
      {/* ---------- HERO ---------- */}
      <header
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,17,15,0.72), rgba(22,17,15,0.82)), url('/assets/BLLE6221.JPG')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="grain vignette relative flex min-h-[58vh] items-center bg-stage"
      >
        <CursorSpotlight />
        <div className="section-x relative z-10 w-full py-28">
          <p className="kicker mb-4">On Stage</p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Our <span className="text-footlight">Productions</span>
          </h1>
          <p className="max-w-2xl text-sm text-paper-dim md:text-base">
            From gripping drama to sharp satire, explore the shows Millaz is
            bringing to the stage — and secure your seat before the curtain
            rises.
          </p>
        </div>
      </header>

      <Marquee items={marqueeItems} />

      {/* ---------- PRODUCTIONS GRID ---------- */}
      <section className="section-x py-20">
        <SectionHeading
          kicker="Now Booking"
          title="Upcoming"
          accent="Shows"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productions.map((production, i) => (
            <Reveal key={production.id} delay={i * 120}>
              <TicketCard
                production={production}
                showDescription
                surface="paper"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- NEWSLETTER ---------- */}
      <Newsletter />
    </div>
  );
};

export default Productions;
