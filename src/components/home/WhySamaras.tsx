import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "81+", label: "Χρόνια εμπειρίας" },
  { value: "1945", label: "Έτος ίδρυσης" },
  { value: "Ελλάδα", label: "Ελληνική κατασκευαστική παράδοση" },
  { value: "Μηχανολογία", label: "Τεχνογνωσία & εξειδίκευση" },
];

export function WhySamaras() {
  return (
    <section className="relative overflow-hidden bg-off-white section-pad">
      <div className="absolute inset-0 technical-grid-light" />
      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            eyebrow="Γιατί ΣΑΜΑΡΑΣ"
            title="Η εμπειρία δεν αντιγράφεται."
          />
        </Reveal>

        <div className="mt-14 grid border border-charcoal/10 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="relative min-h-[220px] border-charcoal/10 p-8 max-md:border-b md:border-r md:[&:nth-child(2n)]:border-r-0 xl:border-b-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(4n)]:border-r-0 max-md:last:border-b-0">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-brand via-brand/25 to-transparent" />
                <p className="display-title text-[clamp(1.8rem,3.5vw,2.75rem)] text-charcoal">
                  {stat.value}
                </p>
                <p className="mt-4 max-w-[14rem] text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-metal">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
