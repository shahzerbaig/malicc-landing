export type ProductFeature = {
  title: string;
  description: string;
  eyebrow?: string;
};

export type ProductFeaturesData = {
  eyebrow?: string;
  title: string;
  description?: string;
  features: ProductFeature[];
};

type ProductFeaturesProps = {
  data: ProductFeaturesData;
};

export default function ProductFeatures({
  data,
}: ProductFeaturesProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {data.eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] opacity-60">
              {data.eyebrow}
            </p>
          )}

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {data.title}
          </h2>

          {data.description && (
            <p className="mt-6 text-lg leading-8 opacity-70">
              {data.description}
            </p>
          )}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2">
          {data.features.map((feature, index) => (
            <article
              key={`${feature.title}-${index}`}
              className="border-b p-8 md:p-10"
            >
              {feature.eyebrow && (
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] opacity-50">
                  {feature.eyebrow}
                </p>
              )}

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 opacity-65">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}