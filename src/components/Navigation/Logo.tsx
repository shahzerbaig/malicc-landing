import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="h-9 w-9 rounded-xl bg-primary" />

      <div className="leading-none">
        <div className="font-bold text-lg">
          malicc
        </div>

        <div className="text-xs text-secondary">
          AI Business Platform
        </div>
      </div>
    </Link>
  );
}