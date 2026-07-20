import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ticket" | "outline-light" | "outline-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footlight focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Red — the star: primary calls to action
  primary:
    "bg-curtain text-white hover:bg-curtain-dark shadow-sm hover:shadow-md",
  // Green — supporting cast: buy tickets
  ticket: "bg-spotlight text-white hover:bg-spotlight-dark shadow-sm",
  // Outline on dark (stage) backgrounds
  "outline-light":
    "border-2 border-white/80 text-white hover:bg-white hover:text-stage",
  // Outline on light (paper) backgrounds
  "outline-dark":
    "border-2 border-curtain text-curtain hover:bg-curtain hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "py-2.5 px-5 md:px-7 text-sm md:text-base",
  lg: "py-3 px-7 md:px-9 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & { href: string };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}

export default Button;
