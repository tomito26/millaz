import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Production = {
  id: number;
  name: string;
  poster_url: string;
  start_date: string;
  end_date: string;
  description?: string;
  venue?: string;
};

const formatRange = (start: string, end: string) => {
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const y = new Date(end).getFullYear();
  return `${new Date(start).toLocaleString("en", opts)} – ${new Date(
    end
  ).toLocaleString("en", opts)}, ${y}`;
};

const POSTER_H = 320;
const SURFACE = { stage: "#16110F", paper: "#FBF7F2" } as const;

/**
 * A production styled as a physical theatre ticket: poster on top, a
 * perforated tear line with punched notches, then a stub with an ADMIT ONE
 * strip, date and a Buy CTA. `surface` should match the section background so
 * the edge notches blend in.
 */
export function TicketCard({
  production,
  showDescription = false,
  surface = "stage",
}: {
  production: Production;
  showDescription?: boolean;
  surface?: keyof typeof SURFACE;
}) {
  const notchColor = SURFACE[surface];
  const notchBase: React.CSSProperties = {
    top: POSTER_H - 10,
    width: 20,
    height: 20,
    background: notchColor,
  };

  return (
    <article className="group w-full">
      <div className="relative overflow-hidden rounded-2xl bg-paper shadow-xl transition-transform duration-300 group-hover:-translate-y-1.5">
        {/* Poster */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: POSTER_H }}
        >
          <Image
            src={production.poster_url}
            alt={production.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-curtain px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow">
            Now Booking
          </span>
        </div>

        {/* Perforated tear line with edge notches */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -left-2.5 rounded-full"
            style={notchBase}
          />
          <div
            aria-hidden
            className="absolute -right-2.5 rounded-full"
            style={notchBase}
          />
          <div className="border-t-2 border-dashed border-ink/15" />
        </div>

        {/* Stub */}
        <div className="flex items-stretch">
          <div className="flex items-center justify-center bg-curtain px-3">
            <span className="rotate-180 text-[10px] font-bold uppercase tracking-[0.3em] text-white [writing-mode:vertical-rl]">
              Admit One
            </span>
          </div>
          <div className="flex-1 p-5">
            <h3 className="text-xl font-bold text-ink">{production.name}</h3>
            <p className="mt-1 font-semibold text-curtain">
              {formatRange(production.start_date, production.end_date)}
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-wide text-ink-muted">
              {production.venue ?? "Kenya National Theatre"}
            </p>
            {showDescription && production.description && (
              <p className="mt-3 line-clamp-2 text-sm text-ink-muted">
                {production.description}
              </p>
            )}
            <div className="mt-4">
              <Button variant="ticket" className="btn-sweep">
                Buy Ticket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TicketCard;
