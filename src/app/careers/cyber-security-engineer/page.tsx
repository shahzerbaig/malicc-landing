export default function CyberSecurityEngineerJob() {
  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Cyber Security Engineer",

    description: `
      Malicc is hiring a Cyber Security Engineer to help build secure products and infrastructure from the ground up.

      Responsibilities:
      - Design and implement security best practices across applications and infrastructure
      - Perform security assessments, code reviews, and vulnerability analysis
      - Secure cloud infrastructure, Linux servers, and containerized workloads
      - Monitor security events, investigate incidents, and respond to threats
      - Conduct penetration testing and identify security weaknesses
      - Improve authentication, authorization, encryption, and secrets management
      - Build secure CI/CD pipelines and automate security checks
      - Collaborate with engineering teams to build security into every stage of development

      Requirements:
      - Strong understanding of application security principles
      - Experience with Linux, networking, and operating system security
      - Knowledge of OWASP Top 10 and secure coding practices
      - Experience performing vulnerability assessments and penetration testing
      - Understanding of cloud security and container security
      - Familiarity with authentication protocols such as OAuth2, JWT, and SSO
      - Experience with Git and CI/CD workflows

      Nice to Have:
      - Kubernetes security
      - Web Application Firewall (WAF)
      - SIEM platforms
      - Threat modeling
      - Reverse engineering or malware analysis
      - Security certifications such as Security+, CEH, PNPT, OSCP, or CISSP

      Ideal Candidate:
      A security-first engineer who enjoys breaking systems to make them stronger, automating security processes, and helping build reliable, secure software products. You'll work closely with developers and infrastructure engineers to integrate security throughout the software development lifecycle.
    `,

    identifier: {
      "@type": "PropertyValue",
      name: "Malicc",
      value: "cyber-security-001",
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
          Cyber Security Engineer
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Join Malicc and help secure the next generation of commerce
          infrastructure. You&apos;ll work across applications, cloud platforms,
          networks, and infrastructure to build secure systems by design rather
          than as an afterthought.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Responsibilities
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Perform application and infrastructure security assessments.</li>
          <li>Conduct vulnerability assessments and penetration testing.</li>
          <li>Secure cloud infrastructure, Linux servers, and containers.</li>
          <li>Review code for security vulnerabilities and recommend improvements.</li>
          <li>Monitor security events and investigate incidents.</li>
          <li>Implement authentication, authorization, and encryption best practices.</li>
          <li>Automate security testing within CI/CD pipelines.</li>
          <li>Develop security policies, standards, and operational procedures.</li>
          <li>Collaborate with developers to build secure software from day one.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Requirements
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Strong understanding of application security.</li>
          <li>Knowledge of Linux, networking, and operating system security.</li>
          <li>Experience with OWASP Top 10 and secure coding practices.</li>
          <li>Experience performing penetration testing and vulnerability assessments.</li>
          <li>Knowledge of cloud security concepts.</li>
          <li>Understanding of OAuth2, JWT, TLS, and encryption fundamentals.</li>
          <li>Experience with Git and modern development workflows.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Nice to Have
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Kubernetes security</li>
          <li>Docker security</li>
          <li>SIEM platforms</li>
          <li>Threat modeling</li>
          <li>Security automation</li>
          <li>Digital forensics or incident response</li>
          <li>Security certifications (OSCP, PNPT, CEH, Security+, CISSP)</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Why Join Us?
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Help design security architecture from the ground up.</li>
          <li>Work across cloud infrastructure, applications, APIs, and distributed systems.</li>
          <li>Influence engineering practices across the entire company.</li>
          <li>Solve challenging security problems in a fast-moving startup environment.</li>
          <li>Grow alongside a team building products used by businesses across industries.</li>
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