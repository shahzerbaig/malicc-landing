// components/ui/Button.tsx

import Link from "next/link";
import clsx from "clsx";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200",

        variant === "primary"
          ? "bg-primary text-white hover:opacity-90"
          : "border border-border hover:bg-surface-hover"
      )}
    >
      {children}
    </Link>
  );
}