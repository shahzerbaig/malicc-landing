export default function DataDeletionPage() {
  return (
    <section className="px-8 py-24 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center">
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold leading-tight">
          Delete your data, <span className="hero-highlight">on your terms</span>.
        </h1>

        <p className="mt-4 text-secondary">
          You’re always in control. Request deletion anytime — no friction.
        </p>
      </div>

      {/* Content */}
      <div className="mt-12 space-y-8 text-base leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold mb-2">How to Request Deletion</h2>
          <p className="text-secondary">
            To request deletion of your data from Malicc, please send an email to:
          </p>

          <div className="mt-3 p-4 rounded-lg border border-primary text-center font-semibold">
            support@malicc.store
          </div>

          <p className="mt-3 text-secondary">
            Use the subject line: <strong>"Data Deletion Request"</strong> and include your account email or identifier.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">What Happens Next</h2>
          <ul className="list-disc pl-5 space-y-1 text-secondary">
            <li>We verify your identity to prevent unauthorized requests</li>
            <li>Your data is queued for deletion</li>
            <li>Deletion is completed within 7–14 business days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">What Gets Deleted</h2>
          <ul className="list-disc pl-5 space-y-1 text-secondary">
            <li>Account information</li>
            <li>Stored personal data</li>
            <li>Associated activity data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">What May Be Retained</h2>
          <p className="text-secondary">
            Certain data may be retained if required for legal, security, or fraud prevention purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Third-Party Data</h2>
          <p className="text-secondary">
            If your data has been shared with third-party services (e.g., payment processors or messaging platforms),
            you may need to contact them directly for deletion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-secondary">
            support@malicc.store
          </p>
        </section>

      </div>
    </section>
  );
}