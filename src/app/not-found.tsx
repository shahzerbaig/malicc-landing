import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page not found
      </h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
      >
        Back to Home
      </Link>
    </main>
  );
}