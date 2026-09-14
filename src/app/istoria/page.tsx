import type { Metadata } from "next";
import { Timeline } from "@/components/home/Timeline";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { timelineEvents } from "@/data/timeline";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Η Ιστορία μας",
  description:
    "Η πορεία της ΣΑΜΑΡΑΣ από το 1945 έως σήμερα: κατασκευή, εξέλιξη και πιστοποιήσεις.",
};

export default function IstoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Η Ιστορία μας"
        title="Οκτώ δεκαετίες μηχανολογικής εξέλιξης."
        description="Από τις πρώτες μηχανολογικές εγκαταστάσεις κεντρικών θερμάνσεων μέχρι τις σύγχρονες ενεργειακές λύσεις."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
      />

      <Timeline />

      <section className="bg-off-white section-pad">
        <div className="container-site">
          <Reveal>
            <h2 className="display-title text-3xl text-charcoal md:text-4xl">
              Ορόσημα σε βάθος
            </h2>
            <div className="tech-line mt-6 w-24" />
          </Reveal>
          <div className="mt-12 space-y-0 border-t border-charcoal/10">
            {timelineEvents.map((event, index) => (
              <Reveal key={event.year} delay={index * 0.04}>
                <article className="grid gap-4 border-b border-charcoal/10 py-8 md:grid-cols-[10rem_1fr] md:gap-10">
                  <p className="display-title text-2xl text-brand">{event.year}</p>
                  <div>
                    <h3 className="display-title text-xl text-charcoal md:text-2xl">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-metal md:text-base">
                      {event.description}
                    </p>
                    {event.extra ? (
                      <p className="mt-3 border-l-2 border-brand/60 pl-4 text-sm leading-relaxed text-metal">
                        {event.extra}
                      </p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
