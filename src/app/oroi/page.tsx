import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Όροι χρήσης",
  description: "Όροι χρήσης της ιστοσελίδας ΣΑΜΑΡΑΣ.",
};

export default function OroiPage() {
  return (
    <>
      <PageHero
        eyebrow="Νομικά"
        title="Όροι χρήσης"
        description="Το περιεχόμενο των όρων χρήσης θα συμπληρωθεί με τα επίσημα νομικά κείμενα της εταιρείας."
      />
      <section className="container-site section-pad">
        <p className="max-w-3xl text-metal">
          Placeholder σελίδας όρων χρήσης. Εδώ θα προστεθεί το πλήρες νομικό
          κείμενο.
        </p>
      </section>
    </>
  );
}
