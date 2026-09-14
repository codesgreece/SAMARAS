"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark border border-transparent",
  secondary:
    "bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/5",
  ghost:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-brand hover:text-brand",
  "outline-light":
    "bg-transparent text-white border border-white/30 hover:bg-white hover:text-charcoal",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
