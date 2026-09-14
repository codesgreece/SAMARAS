import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getRelatedProducts } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/products/ProductGallery";
import { Reveal } from "@/components/ui/Reveal";

type ProductTemplateProps = {
  product: Product;
};

export function ProductTemplate({ product }: ProductTemplateProps) {
  const related = getRelatedProducts(product.slug);

  return (
    <>
      <section className="bg-off-white pt-28 section-pad md:pt-32">
        <div className="container-site">
          <p className="eyebrow mb-3">
            {product.categoryNumber} / {product.category}
          </p>
          <h1 className="display-title max-w-4xl text-[clamp(2.2rem,5vw,4rem)] text-charcoal">
            {product.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-metal md:text-lg">
            {product.shortDescription}
          </p>
          <div className="tech-line mt-7 w-24" />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <Reveal>
              <ProductGallery images={product.gallery} alt={product.name} />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-charcoal/10 bg-white p-6 md:p-8">
                <h2 className="display-title text-2xl text-charcoal">
                  Επισκόπηση
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-metal md:text-base">
                  {product.detailedDescription}
                </p>

                <div className="mt-8 space-y-3">
                  {product.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="border-l-2 border-brand pl-4"
                    >
                      <p className="text-sm font-semibold tracking-wide text-charcoal">
                        {feature.title}
                      </p>
                      {feature.description ? (
                        <p className="mt-1 text-sm text-metal">
                          {feature.description}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/epikoinonia#prosfora">Ζητήστε προσφορά</Button>
                  <Button
                    href={product.manualUrl || "#"}
                    variant="ghost"
                    className="!border-charcoal/20"
                  >
                    PDF / Manual
                  </Button>
                </div>

                {product.placeholderNote ? (
                  <p className="mt-6 text-xs leading-relaxed text-metal/80">
                    {product.placeholderNote}
                  </p>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white section-pad">
        <div className="container-site">
          <Reveal>
            <h2 className="display-title text-3xl text-charcoal md:text-4xl">
              Τεχνικά χαρακτηριστικά
            </h2>
            <div className="tech-line mt-6 w-24" />
          </Reveal>
          <div className="mt-10 overflow-hidden border border-charcoal/10">
            {product.specifications.map((spec, index) => (
              <div
                key={spec.label}
                className={`grid grid-cols-1 gap-2 px-5 py-4 md:grid-cols-[0.8fr_1.2fr] md:gap-8 ${
                  index % 2 === 0 ? "bg-off-white/80" : "bg-white"
                }`}
              >
                <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-brand">
                  {spec.label}
                </p>
                <p className="text-sm text-charcoal md:text-base">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-charcoal section-pad text-white">
          <div className="container-site">
            <Reveal>
              <h2 className="display-title text-3xl md:text-4xl">
                Σχετικά προϊόντα
              </h2>
              <div className="tech-line mt-6 w-24" />
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="group border border-white/10 bg-graphite transition hover:border-brand/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.cardImage}
                      alt={item.shortName}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.68rem] tracking-[0.16em] uppercase text-brand">
                      {item.category}
                    </p>
                    <h3 className="mt-2 display-title text-xl">
                      {item.shortName}
                    </h3>
                    <p className="mt-2 text-sm text-white/55">
                      {item.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-graphite py-16 text-center text-white">
        <div className="container-site">
          <h2 className="display-title text-3xl md:text-4xl">
            Ενδιαφέρεστε για αυτό το προϊόν;
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Επικοινωνήστε με την ομάδα της ΣΑΜΑΡΑΣ για τεχνικές πληροφορίες και
            προσφορά.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/epikoinonia">Επικοινωνία →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
