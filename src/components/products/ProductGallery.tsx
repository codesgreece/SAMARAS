"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden border border-charcoal/10 bg-steel">
        <Image
          src={images[active]}
          alt={`${alt} — εικόνα ${active + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
        />
        <div className="absolute left-4 top-4 border border-white/20 bg-charcoal/70 px-3 py-1 text-[0.65rem] tracking-[0.16em] uppercase text-white/80">
          Placeholder
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={image + index}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden border transition",
              active === index
                ? "border-brand"
                : "border-charcoal/10 opacity-70 hover:opacity-100",
            )}
            aria-label={`Προβολή εικόνας ${index + 1}`}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              sizes="200px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
