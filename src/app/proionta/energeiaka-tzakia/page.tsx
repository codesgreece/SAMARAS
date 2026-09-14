import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { ProductTemplate } from "@/components/products/ProductTemplate";

export const metadata: Metadata = {
  title: "Ενεργειακά Τζάκια",
  description: "Ενεργειακά τζάκια νερού και αέρα για αποδοτική θέρμανση.",
};

export default function EnergeiakaTzakiaPage() {
  const product = getProductBySlug("energeiaka-tzakia");
  if (!product) notFound();
  return <ProductTemplate product={product} />;
}
