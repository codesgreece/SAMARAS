import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Πολιτική cookies της ΣΑΜΑΡΑΣ.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Νομικά"
        title="Cookies"
        description="Το περιεχόμενο της πολιτικής cookies θα συμπληρωθεί με τα επίσημα κείμενα της εταιρείας."
      />
      <section className="container-site section-pad">
        <p className="max-w-3xl text-metal">
          Placeholder σελίδας cookies. Εδώ θα προστεθεί η πολιτική χρήσης
          cookies.
        </p>
      </section>
    </>
  );
}
