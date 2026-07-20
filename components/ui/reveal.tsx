"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra transition-delay in ms for staggered reveals */
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Fades + rises its children in once they scroll into view — a subtle
 * "curtain rising" reveal. Falls back to visible if IntersectionObserver
 * is unavailable, and respects prefers-reduced-motion via globals.css.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Tag,
    {
      ref,
      className: cn("reveal", className),
      "data-visible": visible,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
}

export default Reveal;
