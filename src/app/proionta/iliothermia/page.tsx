import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { ProductTemplate } from "@/components/products/ProductTemplate";

export const metadata: Metadata = {
  title: "Ηλιοθερμία",
  description:
    "Συστήματα ηλιοθερμίας για θέρμανση και ζεστό νερό χρήσης από τη ΣΑΜΑΡΑΣ.",
};

export default function IliothermiaPage() {
  const product = getProductBySlug("iliothermia");
  if (!product) notFound();
  return <ProductTemplate product={product} />;
}
