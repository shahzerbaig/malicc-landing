export default function Hero() {
  return (
    <section className="px-8 py-32 text-center max-w-5xl mx-auto">
      <h1 className="hero-title text-5xl md:text-6xl font-extrabold leading-tight">
        Ecommerce built to <span className="hero-highlight">convert</span>,  
        not just exist.
      </h1>

      <p className="mt-6 text-lg text-secondary">
        malicc is a neuromarketing-driven D2C ecommerce SaaS that embeds consumer
        psychology directly into your store, checkout, and messaging —
        ethically, transparently, and at scale.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href="#cta"
          className="btn-primary px-6 py-3 rounded-lg font-semibold"
        >
          Join the Waitlist
        </a>

        <a
          href="#features"
          className="btn-secondary px-6 py-3 rounded-lg"
        >
          See how it works
        </a>
      </div>
    </section>
  );
}
