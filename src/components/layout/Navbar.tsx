"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "nav-blur border-b border-white/10 bg-charcoal/95"
            : "bg-transparent",
        )}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-6 md:h-[5rem]">
          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center"
            aria-label="ΣΑΜΑΡΑΣ — Αρχική"
          >
            <Image
              src="/brand/logo-samaras.png"
              alt="ΣΑΜΑΡΑΣ"
              width={168}
              height={48}
              className="h-9 w-auto object-contain md:h-11"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Κύριο μενού">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.children) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-2 text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition-colors",
                        active
                          ? "text-brand"
                          : "text-white/75 hover:text-white",
                      )}
                    >
                      {item.label}
                      <span className="text-[0.55rem] opacity-70">▾</span>
                    </Link>
                    <div className="invisible absolute left-0 top-full min-w-[240px] translate-y-2 border border-white/10 bg-graphite/98 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="h-px w-full bg-brand" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block border-b border-white/5 px-4 py-3 text-[0.72rem] tracking-[0.08em] text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition-colors",
                    active ? "text-brand" : "text-white/75 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Button href="/epikoinonia#prosfora" className="!py-3 !px-5">
              Ζητήστε Προσφορά
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center border border-white/20 text-white xl:hidden"
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-full bg-white transition-transform duration-300",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-white transition-opacity duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-white transition-transform duration-300",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-charcoal transition-transform duration-500 xl:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="technical-grid absolute inset-0 opacity-30" />
        <div className="relative flex h-full flex-col px-6 pb-10 pt-28">
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-white/10">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold tracking-[0.18em] uppercase text-white"
                      onClick={() => setProductsOpen((v) => !v)}
                    >
                      {item.label}
                      <span>{productsOpen ? "−" : "+"}</span>
                    </button>
                    {productsOpen ? (
                      <div className="mb-3 space-y-1 pb-2 pl-3">
                        <Link
                          href={item.href}
                          className="block py-2 text-sm text-white/65"
                          onClick={() => setOpen(false)}
                        >
                          Όλα τα προϊόντα
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-white/65"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-4 text-sm font-semibold tracking-[0.18em] uppercase text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <Button href="/epikoinonia#prosfora" className="mt-6 w-full">
            Ζητήστε Προσφορά
          </Button>
        </div>
      </div>
    </>
  );
}
