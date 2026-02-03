import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  return (
    <section id="cta" className="section section-loose text-center btn-primary">
      <h2 className="text-4xl font-bold text-primary">
        Stop guessing what converts.
      </h2>

      <p className="mt-4 text-lg text-primary">
        Build stores that understand human decision-making.
      </p>

      <WaitlistForm />
    </section>
  );
}
