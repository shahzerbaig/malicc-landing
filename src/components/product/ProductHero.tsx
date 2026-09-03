import Link from "next/link";

export type ProductHeroData = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

type ProductHeroProps = {
  data: ProductHeroData;
};

export default function ProductHero({ data }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {data.eyebrow && (
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em]">
            {data.eyebrow}
          </p>
        )}

        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          {data.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 opacity-70 md:text-xl">
          {data.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={data.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium"
          >
            {data.primaryCta.label}
          </Link>

          {data.secondaryCta && (
            <Link
              href={data.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-medium"
            >
              {data.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}