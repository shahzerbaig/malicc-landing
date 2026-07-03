import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">
        Careers at Malicc
      </h1>

      <p className="mb-8 text-gray-600">
        Help local businesses grow with Malicc.
      </p>

      <div className="border rounded-xl p-6">
        <h2 className="text-2xl font-semibold">
          Sales Executive
        </h2>


        <Link
          href="/careers/sales-executive"
          className="inline-block mt-4 px-4 py-2 border rounded-lg"
        >
          View Job
        </Link>
      </div>
    </main>
  );
}