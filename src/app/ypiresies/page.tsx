import type { Metadata } from "next";
import { services } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Υπηρεσίες",
  description:
    "Μηχανολογικές μελέτες, άδειες, ανακαινίσεις, πιστοποιητικά, επιβλέψεις και συντηρήσεις.",
};

export default function YpiresiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Υπηρεσίες"
        title="Πέρα από την κατασκευή"
        description="Ολοκληρωμένες μηχανολογικές και τεχνικές υπηρεσίες για κάθε στάδιο του έργου."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-off-white section-pad">
        <div className="container-site">
          <div className="border-t border-charcoal/10">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.04}>
                <article
                  id={service.id}
                  className="scroll-mt-28 grid gap-4 border-b border-charcoal/10 py-8 md:grid-cols-[7rem_1fr] md:gap-10 md:py-10"
                >
                  <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-brand">
                    {service.number}
                  </p>
                  <div>
                    <h2 className="display-title text-2xl text-charcoal md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-metal md:text-base">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-charcoal/10 bg-white p-8 md:flex-row md:items-center">
              <div>
                <h3 className="display-title text-2xl text-charcoal">
                  Χρειάζεστε τεχνική υποστήριξη;
                </h3>
                <p className="mt-2 text-sm text-metal">
                  Επικοινωνήστε μαζί μας για μελέτη, επίβλεψη ή συντήρηση.
                </p>
              </div>
              <Button href="/epikoinonia">Επικοινωνία</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
