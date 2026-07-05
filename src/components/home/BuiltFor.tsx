import {
  ProductCard,
  Section,
  SectionHeading,
} from "../ui";

import { builtFor } from "./built-for-data";

export default function BuiltFor() {
  return (
    <Section>

      <SectionHeading
        eyebrow="Built For"
        title="Designed for every stage of business growth."
        description="Whether you're launching your first business or scaling an enterprise, Malicc adapts to your journey."
        align="center"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {builtFor.map((item) => (
          <ProductCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}

      </div>

    </Section>
  );
}