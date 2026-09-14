import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Manufacturing() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-charcoal">
      <Image
        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2400&q=80"
        alt="Μηχανολογικός εξοπλισμός και βιομηχανική κατασκευή"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="absolute inset-0 technical-grid opacity-35" />
      <div className="absolute left-0 top-0 h-full w-px bg-brand/60" />
      <div className="absolute right-0 top-0 h-full w-px bg-white/10" />

      <div className="container-site relative flex min-h-[70vh] items-center py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Κατασκευή</p>
            <h2 className="display-title text-[clamp(2.1rem,5vw,4rem)] text-white">
              Κατασκευάζουμε με την εμπειρία του χρόνου.
            </h2>
            <div className="tech-line mt-7 w-28" />
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Έχοντας στη διάθεσή μας τον κατάλληλο μηχανολογικό εξοπλισμό και
              εμπειρία δεκαετιών, συνεχίζουμε να αναπτύσσουμε και να διαθέτουμε
              λύσεις για σύγχρονες ανάγκες θέρμανσης και ενεργειακής
              εξοικονόμησης.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
