import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Πολιτική απορρήτου της ΣΑΜΑΡΑΣ.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Νομικά"
        title="Privacy Policy"
        description="Το περιεχόμενο της πολιτικής απορρήτου θα συμπληρωθεί με τα επίσημα νομικά κείμενα της εταιρείας."
      />
      <section className="container-site section-pad">
        <p className="max-w-3xl text-metal">
          Placeholder σελίδας απορρήτου. Εδώ θα προστεθεί το πλήρες νομικό
          κείμενο GDPR / Privacy Policy.
        </p>
      </section>
    </>
  );
}
