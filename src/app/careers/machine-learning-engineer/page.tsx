export default function MachineLearningEngineerJob() {
  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Machine Learning Engineer",

    description: `
      Malicc is hiring a Machine Learning Engineer to build intelligent systems that power the future of commerce.

      Responsibilities:
      - Design, build, and deploy machine learning models into production
      - Develop AI-powered features using traditional ML and Large Language Models (LLMs)
      - Fine-tune and optimize open-source language models
      - Build Retrieval-Augmented Generation (RAG) pipelines and AI agents
      - Work with structured and unstructured datasets
      - Improve model accuracy, latency, and inference performance
      - Develop data pipelines and model evaluation workflows
      - Collaborate with software engineers to integrate AI into production systems

      Requirements:
      - Strong Python programming skills
      - Experience with machine learning and deep learning frameworks
      - Experience with PyTorch or TensorFlow
      - Knowledge of NLP, LLMs, embeddings, and vector databases
      - Understanding of model evaluation and experimentation
      - Experience deploying ML models into production
      - Familiarity with Git and modern software development practices

      Nice to Have:
      - Experience with LangChain, LlamaIndex, DSPy, or similar frameworks
      - Experience fine-tuning open-source LLMs
      - Knowledge of CUDA, GPU optimization, or distributed training
      - MLOps experience
      - Experience with Docker and Kubernetes
      - Knowledge of PostgreSQL and vector databases

      Ideal Candidate:
      A curious engineer who enjoys solving real-world problems with AI. You'll work on everything from recommendation systems and intelligent automation to conversational AI and next-generation commerce experiences.
    `,

    identifier: {
      "@type": "PropertyValue",
      name: "Malicc",
      value: "ml-engineer-001",
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
          Machine Learning Engineer
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Join Malicc and help build the AI engine powering the next generation
          of commerce. You&apos;ll work on machine learning, large language models,
          intelligent automation, recommendation systems, and production AI
          infrastructure used by businesses around the world.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Responsibilities
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Design, train, and deploy machine learning models.</li>
          <li>Build AI-powered product features using LLMs.</li>
          <li>Develop Retrieval-Augmented Generation (RAG) systems.</li>
          <li>Create AI agents and intelligent automation workflows.</li>
          <li>Fine-tune and optimize open-source language models.</li>
          <li>Work with structured and unstructured datasets.</li>
          <li>Evaluate model quality, accuracy, and performance.</li>
          <li>Optimize inference latency and deployment costs.</li>
          <li>Collaborate with software engineers to integrate AI into production applications.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Requirements
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Strong Python programming skills.</li>
          <li>Experience with PyTorch or TensorFlow.</li>
          <li>Knowledge of machine learning and deep learning algorithms.</li>
          <li>Experience working with NLP, embeddings, and LLMs.</li>
          <li>Understanding of vector databases and semantic search.</li>
          <li>Experience deploying ML models into production.</li>
          <li>Knowledge of Git and software engineering best practices.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Nice to Have
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>LangChain, LlamaIndex, DSPy, or similar AI frameworks.</li>
          <li>Experience fine-tuning open-source LLMs.</li>
          <li>MLOps tools such as MLflow, Weights & Biases, or Kubeflow.</li>
          <li>Docker and Kubernetes.</li>
          <li>CUDA or GPU optimization.</li>
          <li>Knowledge of PostgreSQL and vector databases.</li>
          <li>Experience building recommendation systems or AI assistants.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">
          Why Join Us?
        </h2>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Build AI products used in real-world commerce applications.</li>
          <li>Work with the latest open-source AI technologies and LLMs.</li>
          <li>Own projects from research and experimentation to production deployment.</li>
          <li>Collaborate with software, systems, and security engineers on challenging engineering problems.</li>
          <li>Help shape the future of AI-driven commerce in a fast-moving startup.</li>
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