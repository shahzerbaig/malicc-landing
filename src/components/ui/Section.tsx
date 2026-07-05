// components/ui/Section.tsx

import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={clsx(
        "mx-auto w-full max-w-7xl px-6 py-24 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  );
}