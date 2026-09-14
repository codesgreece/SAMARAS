import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Manufacturing } from "@/components/home/Manufacturing";
import { Products } from "@/components/home/Products";
import { Quality } from "@/components/home/Quality";
import { Services } from "@/components/home/Services";
import { Timeline } from "@/components/home/Timeline";
import { WhySamaras } from "@/components/home/WhySamaras";

export const metadata: Metadata = {
  title: "Αρχική | ΣΑΜΑΡΑΣ — Ποιότητα και αξιοπιστία από το 1945",
  description:
    "81 χρόνια μηχανολογικής τεχνογνωσίας. Λέβητες, ενεργειακά συστήματα και τεχνικές υπηρεσίες από τη ΣΑΜΑΡΑΣ.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Products />
      <WhySamaras />
      <Timeline />
      <Services />
      <Manufacturing />
      <Quality />
      <FinalCTA />
    </>
  );
}
