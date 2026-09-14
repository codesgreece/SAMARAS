export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Αρχική", href: "/" },
  { label: "Εταιρεία", href: "/etaireia" },
  {
    label: "Προϊόντα",
    href: "/proionta",
    children: [
      { label: "Λέβητες", href: "/proionta/levites" },
      { label: "Ενεργειακά Τζάκια", href: "/proionta/energeiaka-tzakia" },
      { label: "Αντλίες Θερμότητας", href: "/proionta/antlies-thermotitas" },
      { label: "Ηλιοθερμία", href: "/proionta/iliothermia" },
    ],
  },
  { label: "Υπηρεσίες", href: "/ypiresies" },
  { label: "Ιστορία", href: "/istoria" },
  { label: "Επικοινωνία", href: "/epikoinonia" },
];

export const footerColumns = [
  {
    title: "Προϊόντα",
    links: [
      { label: "Λέβητες", href: "/proionta/levites" },
      { label: "Ενεργειακά Τζάκια", href: "/proionta/energeiaka-tzakia" },
      { label: "Αντλίες Θερμότητας", href: "/proionta/antlies-thermotitas" },
      { label: "Ηλιοθερμία", href: "/proionta/iliothermia" },
      { label: "Όλα τα προϊόντα", href: "/proionta" },
    ],
  },
  {
    title: "Εταιρεία",
    links: [
      { label: "Η Εταιρεία", href: "/etaireia" },
      { label: "Η Ιστορία μας", href: "/istoria" },
      { label: "Ποιότητα", href: "/etaireia#poiotita" },
    ],
  },
  {
    title: "Υπηρεσίες",
    links: [
      { label: "Όλες οι υπηρεσίες", href: "/ypiresies" },
      { label: "Μηχανολογικές μελέτες", href: "/ypiresies#meletes" },
      { label: "Συντηρήσεις", href: "/ypiresies#syntiriseis" },
    ],
  },
  {
    title: "Επικοινωνία",
    links: [
      { label: "Επικοινωνήστε μαζί μας", href: "/epikoinonia" },
      { label: "Ζητήστε προσφορά", href: "/epikoinonia#prosfora" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Όροι χρήσης", href: "/oroi" },
];
