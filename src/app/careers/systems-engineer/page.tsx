export default function SystemsEngineerJob() {
  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Systems Engineer",

    description: `
      Malicc is hiring a Systems Engineer to help build the infrastructure powering the next generation of commerce platforms.

      Responsibilities:
      - Design, build, and maintain scalable infrastructure
      - Automate deployments using CI/CD pipelines
      - Manage Linux servers, networking, containers, and cloud infrastructure
      - Monitor application health, performance, and system reliability
      - Troubleshoot production incidents and optimize system performance
      - Improve observability using logs, metrics, and distributed tracing
      - Build internal developer tools and automation
      - Improve security, backups, disaster recovery, and high availability

      Requirements:
      - Strong understanding of Linux systems
      - Experience with Docker and containerized applications
      - Knowledge of networking fundamentals (DNS, HTTP, TCP/IP, SSL)
      - Experience with cloud platforms (AWS, GCP, Azure, or DigitalOcean)
      - Familiarity with Infrastructure as Code and automation tools
      - Experience with Git and CI/CD workflows
      - Ability to debug complex distributed systems

      Nice to Have:
      - Kubernetes
      - PostgreSQL administration
      - Nginx
      - Monitoring tools such as Prometheus or Grafana
      - Scripting with Bash or Python

      Ideal Candidate:
      A curious engineer who enjoys building reliable systems, automating repetitive work, solving infrastructure challenges, and learning new technologies. You'll work closely with software engineers to build scalable and secure platforms from the ground up.
    `,

    identifier: {
      "@type": "PropertyValue",
      name: "Malicc",
      value: "systems-engineer-001",
    },

    datePosted: "2026-07-07",

    employmentType: "CONTRACTOR",

    hiringOrganization: {
      "@type": "Organization",
      name: "Malicc",
      sameAs: "https://malicc.com",
      logo: "https://malicc.com/logo.png",
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

      <main className="container mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl font-bold">
          Systems Engineer
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Join Malicc and help build the infrastructure behind a modern commerce
          platform. You'll work on scalable backend systems, cloud
          infrastructure, automation, monitoring, and platform reliability.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Responsibilities
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Design and maintain scalable infrastructure.</li>
          <li>Build and improve CI/CD pipelines.</li>
          <li>Manage Linux servers and cloud infrastructure.</li>
          <li>Deploy and maintain Docker-based services.</li>
          <li>Improve monitoring, logging, and alerting.</li>
          <li>Troubleshoot production issues.</li>
          <li>Optimize application performance and reliability.</li>
          <li>Implement backup and disaster recovery strategies.</li>
          <li>Collaborate with developers to improve deployment workflows.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Requirements
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Strong Linux administration skills.</li>
          <li>Experience with Docker and containerization.</li>
          <li>Knowledge of networking fundamentals.</li>
          <li>Experience with cloud platforms.</li>
          <li>Understanding of Git and CI/CD.</li>
          <li>Ability to debug distributed systems.</li>
          <li>Strong scripting skills (Bash or Python preferred).</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Nice to Have
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Kubernetes</li>
          <li>Terraform or Ansible</li>
          <li>PostgreSQL administration</li>
          <li>Nginx</li>
          <li>Prometheus & Grafana</li>
          <li>GitHub Actions or GitLab CI</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Why Join Us?
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Work on real-world distributed systems.</li>
          <li>Own infrastructure decisions from day one.</li>
          <li>Build products used by businesses across industries.</li>
          <li>Learn directly from experienced software engineers.</li>
          <li>Opportunity to grow with a fast-moving startup.</li>
        </ul>

        <a
          href="mailto:shahzer.baig@gmail.com"
          className="inline-block mt-10 rounded-lg border px-5 py-3"
        >
          Apply Now
        </a>
      </main>
    </>
  );
}