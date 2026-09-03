export type ProductStep = {
  title: string;
  description: string;
};

export type ProductHowItWorksData = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ProductStep[];
};

type ProductHowItWorksProps = {
  data: ProductHowItWorksData;
};

export default function ProductHowItWorks({
  data,
}: ProductHowItWorksProps) {
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

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {data.steps.map((step, index) => (
            <article key={`${step.title}-${index}`}>
              <div className="mb-6 text-sm font-medium opacity-40">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 opacity-65">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}