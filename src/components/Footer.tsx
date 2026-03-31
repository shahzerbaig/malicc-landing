import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section py-10 text-center text-muted text-sm">
      © {new Date().getFullYear()} malicc. Built for modern D2C brands.

      <Link href="/privacy">Privacy Policy</Link>
    </footer>
  );
}
