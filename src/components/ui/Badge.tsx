// components/ui/Badge.tsx

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-border
        bg-surface-hover
        px-3
        py-1
        text-xs
        font-semibold
        uppercase
        tracking-wide
      "
    >
      {children}
    </span>
  );
}