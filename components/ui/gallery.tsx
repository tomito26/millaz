"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = { id: number; path: string };

/**
 * Masonry-ish gallery of production stills. Thumbnails render as a red duotone
 * that blooms into full colour on hover; clicking opens a full-screen lightbox
 * with keyboard + button navigation.
 */
export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActive(i)}
            aria-label="Open image"
            className="group relative block h-[200px] w-full overflow-hidden rounded-md xl:h-[280px]"
          >
            <Image
              src={item.path}
              fill
              alt="Millaz production still"
              className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
            {/* Red duotone wash, fades on hover */}
            <div className="pointer-events-none absolute inset-0 bg-curtain mix-blend-color opacity-70 transition-opacity duration-500 group-hover:opacity-0" />
            <div className="pointer-events-none absolute inset-0 bg-stage/30 transition-opacity duration-500 group-hover:opacity-0" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stage/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full p-2 text-white/80 transition-colors hover:text-footlight"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-3 rounded-full p-2 text-white/80 transition-colors hover:text-footlight md:left-8"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <div
            className="relative h-[75vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[active].path}
              fill
              alt="Millaz production still"
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-3 rounded-full p-2 text-white/80 transition-colors hover:text-footlight md:right-8"
          >
            <ChevronRight className="h-9 w-9" />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm tracking-widest text-paper-dim">
            {active + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}

export default Gallery;
