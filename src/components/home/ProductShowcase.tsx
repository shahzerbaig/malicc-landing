import {
  ProductCard,
  Section,
  SectionHeading,
} from "../ui";

import { productGroups } from "./product-data";

export default function ProductShowcase() {
  return (
    <Section>

      <SectionHeading
        eyebrow="Products"
        title="One platform. Multiple products."
        description="
        Build your business using AI-powered software designed
        for commerce, sales, and growth.
        "
        align="center"
      />

      <div className="mt-20 space-y-20">

        {productGroups.map((group) => (

          <div key={group.title}>

            <div className="mb-8">

              <h3 className="text-3xl font-bold">
                {group.title}
              </h3>

              <p className="mt-3 max-w-2xl text-secondary">
                {group.description}
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {group.products.map((product) => (

                <ProductCard
                  key={product.title}
                  {...product}
                />

              ))}

            </div>

          </div>

        ))}

      </div>

    </Section>
  );
}