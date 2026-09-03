export type ProductProblemData = {
  eyebrow?: string;
  title: string;
  description: string;
};

type ProductProblemProps = {
  data: ProductProblemData;
};

export default function ProductProblem({
  data,
}: ProductProblemProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {data.eyebrow && (
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] opacity-60">
            {data.eyebrow}
          </p>
        )}

        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {data.title}
          </h2>

          <p className="mt-6 text-lg leading-8 opacity-70">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}