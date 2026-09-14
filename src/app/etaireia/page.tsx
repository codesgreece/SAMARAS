import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Quality } from "@/components/home/Quality";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Η Εταιρεία",
  description:
    "Η ΣΑΜΑΡΑΣ εξελίσσεται από το 1945 μαζί με την τεχνολογία της θέρμανσης και της ενέργειας.",
};

export default function EtaireiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Η Εταιρεία"
        title="Κατασκευαστική παράδοση με σύγχρονη ματιά."
        description="Από το 1945 μέχρι σήμερα, η ΣΑΜΑΡΑΣ παραμένει προσηλωμένη στην ποιότητα, την αξιοπιστία και την τεχνική αρτιότητα."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="relative bg-off-white section-pad">
        <div className="absolute inset-0 technical-grid-light" />
        <div className="container-site relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Ταυτότητα</p>
            <h2 className="display-title text-[clamp(2rem,4vw,3.4rem)] text-charcoal">
              81 χρόνια.
              <br />
              Μια παράδοση που συνεχίζεται.
            </h2>
            <div className="tech-line mt-6 w-24" />
            <p className="mt-6 text-base leading-relaxed text-metal md:text-lg">
              Από το 1945 μέχρι σήμερα, η ΣΑΜΑΡΑΣ εξελίσσεται μαζί με την
              τεχνολογία της θέρμανσης και της ενέργειας, διατηρώντας σταθερή τη
              δέσμευσή της στην ποιότητα, την αξιοπιστία και την τεχνική
              αρτιότητα.
            </p>
            <p className="mt-4 text-base leading-relaxed text-metal md:text-lg">
              Με μηχανολογική τεχνογνωσία και ελληνική κατασκευαστική εμπειρία,
              σχεδιάζουμε και διαθέτουμε λύσεις θέρμανσης και ενεργειακής
              αξιοποίησης για σύγχρονες ανάγκες.
            </p>
            <div className="mt-8">
              <Button href="/istoria" variant="ghost">
                Δείτε την ιστορία μας →
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden border border-charcoal/10">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80"
                alt="Μηχανολογικός χώρος εργασίας"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-charcoal/80 p-6">
                <p className="display-title text-3xl text-white">1945</p>
                <p className="mt-1 text-[0.7rem] tracking-[0.18em] uppercase text-brand">
                  Έτος ίδρυσης
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Quality />
      <FinalCTA />
    </>
  );
}
