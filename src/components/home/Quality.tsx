import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const blocks = [
  "Ελληνική κατασκευή",
  "81 χρόνια εμπειρίας",
  "Μηχανολογική τεχνογνωσία",
  "Πιστοποιήσεις",
  "Τεχνική υποστήριξη",
];

export function Quality() {
  return (
    <section id="poiotita" className="relative bg-off-white section-pad">
      <div className="absolute inset-0 technical-grid-light" />
      <div className="container-site relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.2fr]">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md border border-charcoal/10 bg-white p-10 shadow-[0_30px_80px_rgba(20,22,24,0.08)]">
              <div className="absolute left-0 top-0 h-1 w-full bg-brand" />
              <Image
                src="/brand/logo-samaras.png"
                alt="ΣΑΜΑΡΑΣ logo"
                width={280}
                height={80}
                className="mx-auto h-16 w-auto object-contain md:h-20"
              />
              <p className="mt-6 text-center text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-metal">
                Ποιότητα και αξιοπιστία από το 1945
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Δέσμευση"
                title="Ποιότητα & αξιοπιστία"
              />
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {blocks.map((block, index) => (
                <Reveal key={block} delay={index * 0.05}>
                  <div className="flex items-center gap-4 border border-charcoal/10 bg-white/70 px-5 py-4">
                    <span className="h-px w-6 shrink-0 bg-brand" />
                    <p className="text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-charcoal">
                      {block}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
