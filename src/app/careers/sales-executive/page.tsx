export default function GrowthSalesJob() {
  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Sales Executive",

    description: `
      Malicc is hiring a Growth / Sales Generalist.

      Responsibilities:
      - Cold outreach (WhatsApp, email, LinkedIn)
      - Lead generation
      - Demo scheduling
      - Store onboarding


      Ideal Candidate:
      Self-motivated, good communication skills,
      interested in sales and local business growth.
    `,

    identifier: {
      "@type": "PropertyValue",
      name: "Malicc",
      value: "growth-sales-001",
    },

    datePosted: "2026-05-11",

    employmentType: "CONTRACTOR",

    hiringOrganization: {
      "@type": "Organization",
      name: "Malicc",
      sameAs: "https://yourdomain.com",
      logo: "https://yourdomain.com/logo.png",
    },

    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },

    directApply: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPosting),
        }}
      />

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold">
          Sales Executive
        </h1>

        <h2 className="mt-10 text-2xl font-semibold">
          Responsibilities
        </h2>

        <ul className="list-disc ml-6 mt-4">
          <li>Cold outreach</li>
          <li>Lead generation</li>
          <li>Schedule demos</li>
          <li>Onboard local stores</li>
        </ul>

        <a
          href="mailto:shahzer.baig@gmail.com"
          className="inline-block mt-8 px-5 py-3 border rounded-lg"
        >
          Apply Now
        </a>
      </main>
    </>
  );
}