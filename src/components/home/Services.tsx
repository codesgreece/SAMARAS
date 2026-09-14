import Link from "next/link";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section className="relative bg-off-white section-pad">
      <div className="absolute inset-0 technical-grid-light" />
      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            eyebrow="Υπηρεσίες"
            title="Πέρα από την κατασκευή"
            description="Ολοκληρωμένες μηχανολογικές και τεχνικές υπηρεσίες."
          />
        </Reveal>

        <div className="mt-12 border-t border-charcoal/10">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <Link
                href={`/ypiresies#${service.id}`}
                className="group grid grid-cols-[4rem_1fr_auto] items-center gap-4 border-b border-charcoal/10 py-6 transition-colors hover:bg-charcoal/[0.02] md:grid-cols-[6rem_1fr_auto] md:gap-8 md:py-7"
              >
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.16em] text-brand">
                  {service.number}
                </span>
                <span className="display-title text-lg text-charcoal transition-colors group-hover:text-brand md:text-2xl">
                  {service.title}
                </span>
                <span className="text-sm text-metal transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
