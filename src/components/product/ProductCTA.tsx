import Link from "next/link";

export type ProductCTAData = {
  eyebrow?: string;
  title: string;
  description?: string;
  button: {
    label: string;
    href: string;
  };
};

type ProductCTAProps = {
  data: ProductCTAData;
};

export default function ProductCTA({ data }: ProductCTAProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border px-6 py-16 text-center md:px-12 md:py-24">
          {data.eyebrow && (
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] opacity-60">
              {data.eyebrow}
            </p>
          )}

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {data.title}
          </h2>

          {data.description && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 opacity-70">
              {data.description}
            </p>
          )}

          <div className="mt-10">
            <Link
              href={data.button.href}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {data.button.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}