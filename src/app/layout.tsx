import type { Metadata } from "next";
import { Fira_Sans, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const display = Fira_Sans({
  variable: "--font-display",
  subsets: ["latin", "greek"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600"],
  display: "swap",
});export const metadata: Metadata = {
  metadataBase: new URL("https://samaras.gr"),
  title: {
    default: "ΣΑΜΑΡΑΣ | Ποιότητα και αξιοπιστία από το 1945",
    template: "%s | ΣΑΜΑΡΑΣ",
  },
  description:
    "Από το 1945, η ΣΑΜΑΡΑΣ σχεδιάζει και κατασκευάζει λύσεις θέρμανσης και ενεργειακής αξιοποίησης με ελληνική κατασκευαστική εμπειρία και σύγχρονη τεχνολογία.",
  openGraph: {
    title: "ΣΑΜΑΡΑΣ | Ποιότητα και αξιοπιστία από το 1945",
    description:
      "Μηχανολογική τεχνογνωσία, κατασκευαστική παράδοση και λύσεις για το αύριο.",
    locale: "el_GR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
