import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  return (
    <section
      id="cta"
      className="px-8 py-32 text-center bg-gradient-to-r from-purple-600 to-indigo-600"
    >
      <h2 className="text-4xl font-bold">
        Stop guessing what converts.
      </h2>

      <p className="mt-4 text-lg text-purple-100">
        Build stores that understand human decision-making.
      </p>

      <WaitlistForm />
    </section>
  );
}
