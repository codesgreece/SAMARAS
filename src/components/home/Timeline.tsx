"use client";

import { useEffect, useRef, useState } from "react";
import { timelineEvents } from "@/data/timeline";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Timeline() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = trackRef.current?.children[active] as HTMLElement | undefined;
    node?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const current = timelineEvents[active];

  return (
    <section className="relative overflow-hidden bg-graphite section-pad text-white">
      <div className="absolute inset-0 technical-grid opacity-30" />
      <div className="container-site relative">
        <Reveal>
          <SectionHeading eyebrow="Χρονολόγιο" title="Η ιστορία μας" light />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <div
              ref={trackRef}
              className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin"
              role="tablist"
              aria-label="Χρονολόγιο ΣΑΜΑΡΑΣ"
            >
              {timelineEvents.map((event, index) => (
                <button
                  key={event.year}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  onClick={() => setActive(index)}
                  className={cn(
                    "group relative min-w-[140px] shrink-0 border px-4 py-4 text-left transition-all duration-300 md:min-w-[160px]",
                    active === index
                      ? "border-brand bg-brand/10"
                      : "border-white/10 hover:border-white/30",
                  )}
                >
                  <span
                    className={cn(
                      "text-[0.68rem] font-semibold tracking-[0.18em] uppercase",
                      active === index ? "text-brand" : "text-white/40",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 display-title text-xl text-white md:text-2xl">
                    {event.year}
                  </p>
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-300",
                      active === index ? "w-full" : "w-0 group-hover:w-1/2",
                    )}
                  />
                </button>
              ))}
            </div>

            <div className="relative mt-2 h-px w-full bg-white/10">
              <div
                className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand transition-all duration-500"
                style={{
                  left: `calc(${(active / Math.max(timelineEvents.length - 1, 1)) * 100}% - 4px)`,
                }}
              />
            </div>

            <div className="mt-10 grid gap-8 border border-white/10 bg-charcoal/60 p-6 md:grid-cols-[0.9fr_1.4fr] md:p-10 lg:gap-14">
              <div>
                <p className="eyebrow">Ορόσημο</p>
                <p className="mt-4 display-title text-[clamp(2.5rem,6vw,4.5rem)] text-brand">
                  {current.year}
                </p>
                <h3 className="mt-4 display-title text-2xl text-white md:text-3xl">
                  {current.title}
                </h3>
              </div>
              <div className="flex flex-col justify-center border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <p className="text-base leading-relaxed text-white/70 md:text-lg">
                  {current.description}
                </p>
                {current.extra ? (
                  <p className="mt-5 border-l-2 border-brand/70 pl-4 text-sm leading-relaxed text-white/55">
                    {current.extra}
                  </p>
                ) : null}
                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    className="border border-white/20 px-4 py-2 text-[0.68rem] tracking-[0.16em] uppercase text-white/70 transition hover:border-white disabled:opacity-30"
                    onClick={() => setActive((v) => Math.max(0, v - 1))}
                    disabled={active === 0}
                  >
                    ← Προηγούμενο
                  </button>
                  <button
                    type="button"
                    className="border border-white/20 px-4 py-2 text-[0.68rem] tracking-[0.16em] uppercase text-white/70 transition hover:border-white disabled:opacity-30"
                    onClick={() =>
                      setActive((v) =>
                        Math.min(timelineEvents.length - 1, v + 1),
                      )
                    }
                    disabled={active === timelineEvents.length - 1}
                  >
                    Επόμενο →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
