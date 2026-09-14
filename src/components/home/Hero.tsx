"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
      <Image
        src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2400&q=80"
        alt="Βιομηχανική παραγωγή και μηχανολογικός εξοπλισμός"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,22,24,0.92)_0%,rgba(20,22,24,0.72)_48%,rgba(20,22,24,0.45)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />
      <div className="absolute inset-0 technical-grid opacity-30" />

      <div className="container-site relative z-10 w-full pb-16 pt-32 md:pb-20 md:pt-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/brand/logo-samaras.png"
              alt="ΣΑΜΑΡΑΣ"
              width={140}
              height={40}
              className="h-8 w-auto opacity-90 md:h-9"
              priority
            />
            <span className="hidden h-px w-12 bg-brand/80 sm:block" />
            <p className="eyebrow !text-white/70">Από το 1945</p>
          </div>

          <h1 className="display-title text-[clamp(2.35rem,6.2vw,5rem)] text-white">
            Μηχανολογική τεχνογνωσία.
            <br />
            Κατασκευαστική παράδοση.
            <br />
            <span className="text-brand">Λύσεις για το αύριο.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Για 81 χρόνια σχεδιάζουμε και κατασκευάζουμε λύσεις θέρμανσης και
            ενεργειακής αξιοποίησης, συνδυάζοντας ελληνική κατασκευαστική
            εμπειρία με σύγχρονη τεχνολογία.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/proionta">Δείτε τα προϊόντα</Button>
            <Button href="/epikoinonia" variant="secondary">
              Επικοινωνία
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 flex items-end justify-between gap-6 border-t border-white/10 pt-6"
        >
          <div className="hidden items-center gap-3 text-[0.68rem] tracking-[0.2em] uppercase text-white/45 md:flex">
            <span className="h-px w-8 bg-brand" />
            Ποιότητα και αξιοπιστία από το 1945
          </div>
          <div className="ml-auto text-right">
            <p className="display-title text-3xl text-white md:text-4xl">81</p>
            <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-brand">
              Χρόνια εμπειρίας
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
