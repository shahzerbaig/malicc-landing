import Link from "next/link";

const jobs = [
  {
    title: "Sales Executive",
    href: "/careers/sales-executive",
    description:
      "Help local businesses discover and grow with Malicc.",
  },
  {
    title: "Machine Learning Engineer",
    href: "/careers/machine-learning-engineer",
    description:
      "Build AI-powered products, train models, and deploy production-ready machine learning systems.",
  },
  {
    title: "Systems Engineer",
    href: "/careers/systems-engineer",
    description:
      "Design scalable infrastructure, automate deployments, and build reliable distributed systems.",
  },
  {
    title: "Cyber Security Engineer",
    href: "/careers/cyber-security-engineer",
    description:
      "Secure our applications and infrastructure through proactive security engineering and testing.",
  },
];

export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">
        Careers at Malicc
      </h1>

      <p className="mb-10 text-gray-600 max-w-2xl">
        Join us in building the future of commerce infrastructure. We&apos;re looking
        for passionate engineers and business professionals who enjoy solving
        challenging problems and creating products that empower businesses.
      </p>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.href}
            className="border rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold">
              {job.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {job.description}
            </p>

            <Link
              href={job.href}
              className="inline-block mt-6 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              View Job
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}