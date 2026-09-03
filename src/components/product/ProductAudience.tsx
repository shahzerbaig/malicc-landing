export type ProductAudienceItem = {
  title: string;
  description: string;
};

export type ProductAudienceData = {
  eyebrow?: string;
  title: string;
  description?: string;
  audiences: ProductAudienceItem[];
};

type ProductAudienceProps = {
  data: ProductAudienceData;
};

export default function ProductAudience({
  data,
}: ProductAudienceProps) {
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.audiences.map((audience, index) => (
            <article
              key={`${audience.title}-${index}`}
              className="rounded-2xl border p-6"
            >
              <h3 className="text-lg font-semibold">
                {audience.title}
              </h3>

              <p className="mt-3 text-sm leading-6 opacity-65">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}