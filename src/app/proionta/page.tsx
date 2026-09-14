import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productCategories, products } from "@/data/products";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Προϊόντα",
  description:
    "Λέβητες, ενεργειακά τζάκια, αντλίες θερμότητας, ηλιοθερμία και λύσεις εξοικονόμησης ενέργειας.",
};

export default function ProiontaPage() {
  return (
    <>
      <PageHero
        eyebrow="Προϊόντα"
        title="Λύσεις θέρμανσης & ενέργειας"
        description="Ολοκληρωμένο εύρος προϊόντων για σύγχρονες ανάγκες θέρμανσης και ενεργειακής αξιοποίησης."
      />

      <section className="bg-off-white section-pad">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {productCategories.map((category, index) => (
            <Reveal key={category.number} delay={index * 0.05}>
              <Link
                href={category.href}
                className="group grid overflow-hidden border border-charcoal/10 bg-white md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-brand">
                    {category.number}
                  </span>
                  <h2 className="mt-3 display-title text-2xl text-charcoal">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-metal">
                    {category.description}
                  </p>
                  <span className="mt-6 text-sm text-metal transition group-hover:text-brand">
                    Περισσότερα →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="eksikonomisi"
        className="border-t border-charcoal/10 bg-white section-pad"
      >
        <div className="container-site">
          <Reveal>
            <p className="eyebrow mb-4">Κατάλογος</p>
            <h2 className="display-title text-3xl text-charcoal md:text-4xl">
              Λεπτομερείς σελίδες προϊόντων
            </h2>
            <p className="mt-4 max-w-2xl text-metal">
              Επιλέξτε κατηγορία για gallery, χαρακτηριστικά, τεχνικά στοιχεία
              και σχετικά προϊόντα. Τα αναλυτικά specs θα συμπληρωθούν με τα
              επίσημα δεδομένα της εταιρείας.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="border border-charcoal/10 p-5 transition hover:border-brand"
              >
                <p className="text-[0.68rem] tracking-[0.16em] uppercase text-brand">
                  {product.categoryNumber}
                </p>
                <h3 className="mt-2 display-title text-xl text-charcoal">
                  {product.shortName}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
