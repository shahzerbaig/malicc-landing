const features = [
  {
    title: "Neuromarketing by default",
    desc: "Trust signals, social proof, and friction reduction are built into every store component.",
  },
  {
    title: "Web3-ready SaaS architecture",
    desc: "Modern, scalable infrastructure designed for ownership, extensibility, and future digital assets.",
  },
  {
    title: "Conversion-first checkout",
    desc: "Multi-step flows engineered to reduce hesitation and abandonment.",
  },
  {
    title: "No plugins. No chaos.",
    desc: "Everything you need is native — no duct-taped third-party tools.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section section-tight surface-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((f) => (
          <div key={f.title} className="card p-8">
            <h3 className="text-xl font-semibold text-primary mb-3">
              {f.title}
            </h3>
            <p className="text-secondary">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
