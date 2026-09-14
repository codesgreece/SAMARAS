"use client";

import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Products() {
  return (
    <section className="relative bg-charcoal section-pad text-white">
      <div className="absolute inset-0 technical-grid opacity-25" />
      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            eyebrow="Προϊόντα"
            title="Λύσεις θέρμανσης & ενέργειας"
            light
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category, index) => (
            <Reveal key={category.number} delay={index * 0.06}>
              <Link
                href={category.href}
                className="group relative block overflow-hidden border border-white/10 bg-graphite"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <span className="absolute left-5 top-5 text-[0.7rem] font-semibold tracking-[0.22em] text-brand">
                    {category.number}
                  </span>
                </div>
                <div className="relative border-t border-white/10 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="display-title text-xl text-white md:text-2xl">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/55">
                        {category.description}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:border-brand group-hover:bg-brand"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
