import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Running-order number shown as a large outlined "ghost" numeral */
  index?: string;
  kicker: string;
  title: React.ReactNode;
  /** Accent-colored tail appended to the title */
  accent?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Playbill-style section heading: a gold kicker, a two-tone Playfair title,
 * and an optional oversized outlined "running order" number behind it.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  accent,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "relative",
        centered && "text-center",
        className
      )}
    >
      {index && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-10 select-none font-display text-8xl font-bold leading-none md:text-9xl",
            centered ? "left-1/2 -translate-x-1/2" : "-left-1",
            tone === "dark" ? "text-white/[0.06]" : "text-ink/[0.05]"
          )}
        >
          {index}
        </span>
      )}
      <p className="kicker relative mb-3">{kicker}</p>
      <h2
        className={cn(
          "relative text-3xl font-bold md:text-4xl",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}{" "}
        {accent && (
          <span className={tone === "dark" ? "text-footlight" : "text-curtain"}>
            {accent}
          </span>
        )}
      </h2>
    </div>
  );
}

export default SectionHeading;
