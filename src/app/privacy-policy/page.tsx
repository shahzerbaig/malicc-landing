

export default function PrivacyPage() {
  return (
    
    <section className="px-8 py-24 max-w-4xl mx-auto">
        
      {/* Header */}
      <div className="text-center">
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold leading-tight">
          Privacy, but <span className="hero-highlight">transparent</span>.
        </h1>

        <p className="mt-4 text-secondary">
          We don’t play games with your data. Here’s exactly how it works.
        </p>

        <div className="mt-4 text-sm text-secondary">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-12 space-y-8 text-base leading-relaxed">
        
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1 text-secondary">
            <li>Personal info (name, email, phone)</li>
            <li>Usage data (IP, device, activity)</li>
            <li>Customer & transaction data (for creators)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use It</h2>
          <ul className="list-disc pl-5 space-y-1 text-secondary">
            <li>Run and improve the platform</li>
            <li>Process payments</li>
            <li>Communicate with you</li>
            <li>Prevent fraud & abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Sharing</h2>
          <p className="text-secondary">
            We don’t sell your data. Period.  
            We only share with essential services like payments and messaging
            (e.g., WhatsApp, Instagram) to operate the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
          <p className="text-secondary">
            We keep data only as long as necessary for operations and legal compliance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Security</h2>
          <p className="text-secondary">
            Encryption, access control, and secure infrastructure — standard practice here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-secondary">
            You can request access, correction, or deletion anytime.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
          <p className="text-secondary">
            support@malicc.store
          </p>
        </section>

      </div>
    </section>
 
  );
}