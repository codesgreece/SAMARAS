import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import {
  ContactAside,
  ContactForm,
} from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με τη ΣΑΜΑΡΑΣ για προϊόντα, υπηρεσίες και προσφορές.",
};

export default function EpikoinoniaPage() {
  return (
    <>
      <PageHero
        eyebrow="Επικοινωνία"
        title="Ας μιλήσουμε για το επόμενο έργο σας."
        description="Επικοινωνήστε μαζί μας για πληροφορίες σχετικά με τα προϊόντα και τις υπηρεσίες μας."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-off-white section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.2fr]">
          <ContactAside />
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
