import Image from "next/image";
import Link from "next/link";
import { footerColumns, legalLinks } from "@/data/navigation";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 technical-grid opacity-25" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div className="container-site relative section-pad !pb-10 !pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Image
              src="/brand/logo-samaras.png"
              alt="ΣΑΜΑΡΑΣ"
              width={180}
              height={52}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-[0.78rem] font-semibold tracking-[0.18em] uppercase text-white/70">
              Ποιότητα και αξιοπιστία από το 1945
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Μηχανολογική τεχνογνωσία, κατασκευαστική παράδοση και λύσεις
              θέρμανσης & ενέργειας για 81 χρόνια.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="border border-white/15 px-3 py-2 text-[0.65rem] tracking-[0.14em] uppercase text-white/55 transition-colors hover:border-brand hover:text-white"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-brand">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ΣΑΜΑΡΑΣ. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
