import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal section-pad">
      <div className="absolute inset-0 metal-sheen" />
      <div className="absolute inset-0 technical-grid opacity-30" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/5" />

      <div className="container-site relative text-center">
        <Reveal>
          <p className="eyebrow mb-5">Επόμενο βήμα</p>
          <h2 className="display-title mx-auto max-w-4xl text-[clamp(2.1rem,5vw,4rem)] text-white">
            Η επόμενη λύση θέρμανσης
            <br />
            ξεκινά εδώ.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            Επικοινωνήστε μαζί μας για πληροφορίες σχετικά με τα προϊόντα και
            τις υπηρεσίες μας.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/epikoinonia">Επικοινωνήστε μαζί μας →</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
