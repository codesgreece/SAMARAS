import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-off-white section-pad">
      <div className="absolute inset-0 technical-grid-light opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none font-[family-name:var(--font-display)] text-[clamp(8rem,22vw,18rem)] font-bold leading-none text-charcoal/[0.04] md:block"
      >
        1945
      </div>

      <div className="container-site relative">
        <Reveal>
          <p className="eyebrow mb-5">Η εταιρεία</p>
          <h2 className="display-title max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-charcoal">
            81 χρόνια.
            <br />
            Μια παράδοση που συνεχίζεται.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div className="tech-line w-28" />
            <p className="max-w-2xl text-base leading-relaxed text-metal md:text-lg">
              Από το 1945 μέχρι σήμερα, η ΣΑΜΑΡΑΣ εξελίσσεται μαζί με την
              τεχνολογία της θέρμανσης και της ενέργειας, διατηρώντας σταθερή τη
              δέσμευσή της στην ποιότητα, την αξιοπιστία και την τεχνική
              αρτιότητα.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
