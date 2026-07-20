"use client";
import React, { useEffect, useRef } from "react";

/**
 * A full-bleed overlay whose radial "spotlight" follows the cursor across its
 * parent (e.g. the hero). Purely decorative: it stays click-through and
 * listens on the parent element so hero buttons remain interactive.
 */
export function CursorSpotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${mx}%`);
      el.style.setProperty("--my", `${my}%`);
    };

    parent.addEventListener("mousemove", handleMove);
    return () => parent.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`spotlight-cursor pointer-events-none absolute inset-0 ${className}`}
    />
  );
}

export default CursorSpotlight;
