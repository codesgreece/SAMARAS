import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { ProductTemplate } from "@/components/products/ProductTemplate";

export const metadata: Metadata = {
  title: "Αντλίες Θερμότητας",
  description: "Σύγχρονες αντλίες θερμότητας για αποδοτική και οικονομική θέρμανση.",
};

export default function AntliesThermotitasPage() {
  const product = getProductBySlug("antlies-thermotitas");
  if (!product) notFound();
  return <ProductTemplate product={product} />;
}
