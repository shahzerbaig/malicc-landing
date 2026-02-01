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
    <section id="features" className="px-8 py-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-8 rounded-xl bg-black border border-zinc-800"
          >
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
