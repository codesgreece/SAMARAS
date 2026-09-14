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
            ? "nav-blur border-b border-white/10 bg-charcoal/92"
            : "bg-charcoal/55 nav-blur",
        )}
      >
        <div className="container-site flex h-[4.75rem] items-center justify-between gap-4 md:h-[5.25rem] md:gap-6">
          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center bg-white px-3 py-2 md:px-3.5 md:py-2.5"
            aria-label="ΣΑΜΑΡΑΣ — Αρχική"
          >
            <Image
              src="/brand/logo-samaras.png"
              alt="ΣΑΜΑΡΑΣ"
              width={168}
              height={48}
              className="h-8 w-auto object-contain md:h-9"
              priority
            />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center xl:flex"
            aria-label="Κύριο μενού"
          >
            {mainNav.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <div key={item.href} className="flex items-center">
                  {index > 0 ? (
                    <span
                      className="mx-2 h-px w-4 shrink-0 bg-white/35 lg:mx-3 lg:w-5"
                      aria-hidden
                    />
                  ) : null}

                  {item.children ? (
                    <div className="group relative">
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex items-center gap-1.5 px-1 py-2 text-[0.68rem] font-medium tracking-[0.2em] uppercase transition-colors",
                          active
                            ? "text-white"
                            : "text-white/70 hover:text-white",
                        )}
                      >
                        {item.label}
                        <span className="text-[0.5rem] opacity-60">▾</span>
                      </Link>
                      <div className="invisible absolute left-1/2 top-full min-w-[240px] -translate-x-1/2 translate-y-2 border border-white/10 bg-graphite/98 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-1 py-2 text-[0.68rem] font-medium tracking-[0.2em] uppercase transition-colors",
                        active
                          ? "text-white"
                          : "text-white/70 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center xl:flex">
            <Button
              href="/epikoinonia#prosfora"
              className="!rounded-none !px-5 !py-3 !text-[0.68rem] !tracking-[0.16em]"
            >
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
          <Button href="/epikoinonia#prosfora" className="mt-6 w-full !rounded-none">
            Ζητήστε Προσφορά
          </Button>
        </div>
      </div>
    </>
  );
}
