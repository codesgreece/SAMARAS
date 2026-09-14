export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductFeature = {
  title: string;
  description?: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  categoryNumber: string;
  href: string;
  cardImage: string;
  gallery: string[];
  shortDescription: string;
  detailedDescription: string;
  features: ProductFeature[];
  specifications: ProductSpec[];
  manualUrl?: string;
  relatedSlugs: string[];
  placeholderNote?: string;
};

export const productCategories = [
  {
    number: "01",
    title: "Λέβητες Πετρελαίου & Αερίου",
    description: "Χυτοσιδηροί και χαλύβδινοι λέβητες κεντρικής θέρμανσης.",
    href: "/proionta/levites",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "02",
    title: "Λέβητες Στερεών Καυσίμων",
    description: "Αξιόπιστες λύσεις θέρμανσης για διαφορετικές εφαρμογές.",
    href: "/proionta/levites#sterea",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "03",
    title: "Ενεργειακά Τζάκια",
    description: "Λύσεις νερού και αέρα για αποδοτική θέρμανση.",
    href: "/proionta/energeiaka-tzakia",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "04",
    title: "Αντλίες Θερμότητας",
    description: "Σύγχρονες λύσεις για αποδοτική και οικονομική θέρμανση.",
    href: "/proionta/antlies-thermotitas",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "05",
    title: "Ηλιοθερμία",
    description: "Αξιοποίηση της ηλιακής ενέργειας για θέρμανση και ζεστό νερό.",
    href: "/proionta/iliothermia",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a76b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    number: "06",
    title: "Εξοικονόμηση Ενέργειας",
    description: "Συστήματα και λύσεις για μεγαλύτερη ενεργειακή αποδοτικότητα.",
    href: "/proionta#eksikonomisi",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export const products: Product[] = [
  {
    slug: "levites",
    name: "Λέβητες Πετρελαίου, Αερίου & Στερεών Καυσίμων",
    shortName: "Λέβητες",
    category: "Θέρμανση",
    categoryNumber: "01",
    href: "/proionta/levites",
    cardImage:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Χυτοσιδηροί και χαλύβδινοι λέβητες κεντρικής θέρμανσης, καθώς και λύσεις στερεών καυσίμων.",
    detailedDescription:
      "Η ΣΑΜΑΡΑΣ διαθέτει χυτοσιδηρούς και χαλύβδινους λέβητες κεντρικής θέρμανσης για πετρέλαιο και αέριο, καθώς και λέβητες στερεών καυσίμων για διαφορετικές εφαρμογές. Η κατασκευαστική μας παράδοση από το 1945 διασφαλίζει αξιοπιστία και τεχνική αρτιότητα σε κάθε εγκατάσταση.",
    features: [
      {
        title: "Χυτοσιδηροί λέβητες",
        description: "Ανθεκτικές λύσεις κεντρικής θέρμανσης με μακρόχρονη παράδοση κατασκευής.",
      },
      {
        title: "Χαλύβδινοι λέβητες",
        description: "Κατασκευές για πετρέλαιο, αέριο και εφαρμογές ατμού χαμηλής πίεσης.",
      },
      {
        title: "Στερεά καύσιμα",
        description: "Αξιόπιστες λύσεις θέρμανσης για διαφορετικές ανάγκες και εφαρμογές.",
      },
    ],
    specifications: [
      { label: "Κατηγορίες", value: "Πετρέλαιο / Αέριο / Στερεά καύσιμα" },
      { label: "Τύποι", value: "Χυτοσίδηρος / Χάλυβας" },
      { label: "Εφαρμογή", value: "Κεντρική θέρμανση" },
      { label: "Τεχνικά στοιχεία", value: "Διαθέσιμα κατόπιν επικοινωνίας" },
    ],
    manualUrl: "#",
    relatedSlugs: ["energeiaka-tzakia", "antlies-thermotitas", "iliothermia"],
    placeholderNote:
      "Τα αναλυτικά τεχνικά χαρακτηριστικά ανά μοντέλο θα συμπληρωθούν με τα επίσημα στοιχεία της εταιρείας.",
  },
  {
    slug: "energeiaka-tzakia",
    name: "Ενεργειακά Τζάκια",
    shortName: "Ενεργειακά Τζάκια",
    category: "Θέρμανση",
    categoryNumber: "03",
    href: "/proionta/energeiaka-tzakia",
    cardImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "Λύσεις νερού και αέρα για αποδοτική θέρμανση.",
    detailedDescription:
      "Τα ενεργειακά τζάκια της ΣΑΜΑΡΑΣ προσφέρουν λύσεις νερού και αέρα για αποδοτική θέρμανση, συνδυάζοντας την αίσθηση της εστίας με σύγχρονη ενεργειακή αξιοποίηση. Αποτελούν μέρος της μακράς κατασκευαστικής μας εμπειρίας στον χώρο της θέρμανσης.",
    features: [
      {
        title: "Λύσεις νερού",
        description: "Συστήματα για σύνδεση με το δίκτυο θέρμανσης.",
      },
      {
        title: "Λύσεις αέρα",
        description: "Αποδοτική διάχυση θερμότητας στον χώρο.",
      },
      {
        title: "Ενεργειακή αξιοποίηση",
        description: "Σχεδιασμός με έμφαση στην απόδοση και την αξιοπιστία.",
      },
    ],
    specifications: [
      { label: "Τύποι", value: "Νερού / Αέρα" },
      { label: "Εφαρμογή", value: "Οικιακή & επαγγελματική θέρμανση" },
      { label: "Τεχνικά στοιχεία", value: "Διαθέσιμα κατόπιν επικοινωνίας" },
    ],
    manualUrl: "#",
    relatedSlugs: ["levites", "iliothermia", "antlies-thermotitas"],
    placeholderNote:
      "Φωτογραφίες προϊόντων και αναλυτικά specs θα αντικατασταθούν με υλικό της εταιρείας.",
  },
  {
    slug: "antlies-thermotitas",
    name: "Αντλίες Θερμότητας",
    shortName: "Αντλίες Θερμότητας",
    category: "Ενέργεια",
    categoryNumber: "04",
    href: "/proionta/antlies-thermotitas",
    cardImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription: "Σύγχρονες λύσεις για αποδοτική και οικονομική θέρμανση.",
    detailedDescription:
      "Οι αντλίες θερμότητας αποτελούν σύγχρονη πρόταση για αποδοτική και οικονομική θέρμανση. Η ΣΑΜΑΡΑΣ εντάσσει τις λύσεις αυτές στο εύρος προϊόντων της, συνδυάζοντας τη μηχανολογική τεχνογνωσία με τις ανάγκες της σύγχρονης ενεργειακής αγοράς.",
    features: [
      {
        title: "Υψηλή απόδοση",
        description: "Σύγχρονες λύσεις για μείωση ενεργειακού κόστους.",
      },
      {
        title: "Ευελιξία εφαρμογής",
        description: "Κατάλληλες για νέες εγκαταστάσεις και αναβαθμίσεις.",
      },
      {
        title: "Τεχνική υποστήριξη",
        description: "Συμβουλευτική και υποστήριξη από την ομάδα της ΣΑΜΑΡΑΣ.",
      },
    ],
    specifications: [
      { label: "Εφαρμογή", value: "Θέρμανση / Ζεστό νερό χρήσης" },
      { label: "Προφίλ", value: "Αποδοτική & οικονομική λειτουργία" },
      { label: "Τεχνικά στοιχεία", value: "Διαθέσιμα κατόπιν επικοινωνίας" },
    ],
    manualUrl: "#",
    relatedSlugs: ["iliothermia", "levites", "energeiaka-tzakia"],
    placeholderNote:
      "Μοντέλα, ισχύς και τεχνικά φυλλάδια θα προστεθούν όταν είναι διαθέσιμα.",
  },
  {
    slug: "iliothermia",
    name: "Ηλιοθερμία",
    shortName: "Ηλιοθερμία",
    category: "Ενέργεια",
    categoryNumber: "05",
    href: "/proionta/iliothermia",
    cardImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a76b?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a76b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80",
    ],
    shortDescription:
      "Αξιοποίηση της ηλιακής ενέργειας για θέρμανση και ζεστό νερό.",
    detailedDescription:
      "Τα συστήματα ηλιοθερμίας αξιοποιούν την ηλιακή ενέργεια για θέρμανση και παραγωγή ζεστού νερού χρήσης. Η ΣΑΜΑΡΑΣ διαθέτει λύσεις ηλιοθερμίας ως μέρος της ολοκληρωμένης πρότασής της σε θέρμανση και ενεργειακή αξιοποίηση, με ρίζες που φτάνουν στις πρώτες εισαγωγές ηλιακών συστημάτων της εταιρείας.",
    features: [
      {
        title: "Ηλιακή αξιοποίηση",
        description: "Μείωση ενεργειακού κόστους με αξιοποίηση του ήλιου.",
      },
      {
        title: "Θέρμανση & ΖΝΧ",
        description: "Λύσεις για θέρμανση και ζεστό νερό χρήσης.",
      },
      {
        title: "Συνδυαστικά συστήματα",
        description: "Δυνατότητα ένταξης σε ευρύτερα ενεργειακά συστήματα.",
      },
    ],
    specifications: [
      { label: "Εφαρμογή", value: "Θέρμανση / Ζεστό νερό χρήσης" },
      { label: "Πηγή ενέργειας", value: "Ηλιακή" },
      { label: "Τεχνικά στοιχεία", value: "Διαθέσιμα κατόπιν επικοινωνίας" },
    ],
    manualUrl: "#",
    relatedSlugs: ["antlies-thermotitas", "levites", "energeiaka-tzakia"],
    placeholderNote:
      "Τεχνικά φυλλάδια και φωτογραφίες συστημάτων θα αντικατασταθούν με επίσημο υλικό.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return product.relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => Boolean(p));
}
