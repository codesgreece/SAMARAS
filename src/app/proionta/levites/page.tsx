import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { ProductTemplate } from "@/components/products/ProductTemplate";

export const metadata: Metadata = {
  title: "Λέβητες",
  description:
    "Χυτοσιδηροί και χαλύβδινοι λέβητες κεντρικής θέρμανσης, πετρελαίου, αερίου και στερεών καυσίμων.",
};

export default function LevitesPage() {
  const product = getProductBySlug("levites");
  if (!product) notFound();
  return (
    <div id="sterea">
      <ProductTemplate product={product} />
    </div>
  );
}
