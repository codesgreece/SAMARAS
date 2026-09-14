import Image from "next/image";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[58vh] items-end overflow-hidden bg-charcoal",
        className,
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/35" />
      <div className="absolute inset-0 technical-grid opacity-40" />
      <div className="container-site relative z-10 pb-16 pt-36 md:pb-20">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h1 className="display-title max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] text-white">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="tech-line mt-8 w-24" />
      </div>
    </section>
  );
}
