// components/ui/ProductCard.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  href: string;
}

export default function ProductCard({
  title,
  description,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
        group
        block
        rounded-2xl
        border
        border-border
        bg-surface
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:bg-surface-hover
      "
    >
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-secondary">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 font-medium text-primary">
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}