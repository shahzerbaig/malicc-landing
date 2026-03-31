export default function TermsPage() {
  return (
    <section className="px-8 py-24 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center">
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold leading-tight">
          Terms that keep things <span className="hero-highlight">fair</span>.
        </h1>

        <p className="mt-4 text-secondary">
          Simple rules so creators can build, sell, and scale without chaos.
        </p>

        <div className="mt-4 text-sm text-secondary">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-12 space-y-8 text-base leading-relaxed">
        
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Use of Service</h2>
          <p className="text-secondary">
            Use the platform responsibly and legally. No abuse, no shortcuts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Accounts</h2>
          <p className="text-secondary">
            You’re responsible for your account and credentials.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Platform</h2>
          <p className="text-secondary">
            Malicc helps creators sell products, manage customers, and automate messaging.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Payments</h2>
          <p className="text-secondary">
            Fees may apply. Payments are handled via third-party providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. User Content</h2>
          <p className="text-secondary">
            You own your content. We only use it to run the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Prohibited Use</h2>
          <ul className="list-disc pl-5 space-y-1 text-secondary">
            <li>Illegal activities</li>
            <li>Spam or harassment</li>
            <li>Breaking platform security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Third-Party Services</h2>
          <p className="text-secondary">
            Integrations (WhatsApp, Instagram, payments) follow their own rules too.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
          <p className="text-secondary">
            We can suspend accounts that violate these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Liability</h2>
          <p className="text-secondary">
            We’re not liable for indirect or unexpected damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p className="text-secondary">
            Governed by the laws of India.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
          <p className="text-secondary">
            support@malicc.store
          </p>
        </section>

      </div>
    </section>
  );
}