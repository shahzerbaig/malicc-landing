// src/components/Pricing.tsx
"use client";

import { useState } from "react";

export default function Pricing() {
  const [showDetails, setShowDetails] = useState(false);

  const plans = [
    {
      name: "Maker",
      tagline: "For artisan & micro-brands",
      setupFee: "$588",
      description: "One-time setup, then pay only for what you use",
      cta: "Start Building",
      href: "#cta",
      neuromarketingBadge: "Conversion Essentials",
      popular: false,
      features: [
        { text: "Store setup & configuration", included: true },
        { text: "Basic neuromarketing templates", included: true },
        { text: "Trust signals & social proof integration", included: true },
        { text: "Essential conversion analytics", included: true },
        { text: "Up to 50 product slots", included: true },
        { text: "Email support", included: true },
        { text: "Pay-as-you-go hosting", included: true },
        { text: "Standard checkout psychology", included: true },
      ],
      usageCosts: [
        { item: "Hosting & bandwidth", price: "$0.05 per 100 visitors" },
        { item: "Transaction processing", price: "2.9% + $0.30" },
        { item: "Additional products", price: "$1 per product/month" },
      ],
    },
    {
      name: "Growth",
      tagline: "For scaling D2C brands",
      setupFee: "$1,188",
      description: "Advanced conversion tools for serious brands",
      cta: "Join Waitlist →",
      href: "#cta",
      neuromarketingBadge: "Pro Conversion",
      popular: true,
      features: [
        { text: "Premium store setup", included: true },
        { text: "All neuromarketing templates", included: true },
        { text: "Advanced trust & social proof systems", included: true },
        { text: "Real-time conversion dashboard", included: true },
        { text: "Up to 250 product slots", included: true },
        { text: "Priority support (12h response)", included: true },
        { text: "A/B testing tools", included: true },
        { text: "Multi-step checkout psychology", included: true },
        { text: "Custom branding options", included: true },
        { text: "Web3-ready infrastructure", included: true },
      ],
      usageCosts: [
        { item: "Hosting & bandwidth", price: "$0.04 per 100 visitors" },
        { item: "Transaction processing", price: "2.7% + $0.30" },
        { item: "Additional products", price: "$0.75 per product/month" },
      ],
    },
    {
      name: "Scale",
      tagline: "For established D2C brands",
      setupFee: "$2,400",
      description: "Enterprise-grade conversion optimization",
      cta: "Contact Sales",
      href: "mailto:sales@malicc.com",
      neuromarketingBadge: "Strategic Partnership",
      popular: false,
      features: [
        { text: "Custom store strategy & setup", included: true },
        { text: "Dedicated conversion engineer", included: true },
        { text: "Custom neuromarketing implementation", included: true },
        { text: "Advanced real-time analytics", included: true },
        { text: "Unlimited product slots", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom A/B testing suite", included: true },
        { text: "White-label options", included: true },
        { text: "Custom integrations & APIs", included: true },
        { text: "Quarterly strategy reviews", included: true },
      ],
      usageCosts: [
        { item: "Hosting & bandwidth", price: "$0.03 per 100 visitors" },
        { item: "Transaction processing", price: "2.5% + $0.30" },
        { item: "Custom feature development", price: "Hourly rate" },
      ],
    },
  ];

  return (
    <section id="pricing" className="section py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-indigo-900/30 text-primary border border-purple-800/50 text-sm font-medium mb-4">
            Pay once, grow forever
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            One-time setup, <span className="text-purple-400">then pay-as-you-go</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-10">
            No monthly subscriptions. Pay only for setup, then usage-based costs that scale with your success.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl p-8 border transition-all duration-300 h-full flex flex-col
                ${plan.popular
                  ? "border-purple-500 bg-gradient-to-b from-purple-900/20 via-black to-black shadow-2xl shadow-purple-900/20"
                  : "border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-black"
                }
                hover:border-zinc-600 hover:shadow-xl hover:shadow-purple-900/10
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Neuromarketing Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800/50 text-purple-300 text-xs font-medium">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {plan.neuromarketingBadge}
                </span>
              </div>

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-sm text-purple-300 mb-3">{plan.tagline}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-primary">
                    {plan.setupFee}
                  </span>
                  <span className="text-secondary ml-2 text-sm">
                    one-time setup
                  </span>
                </div>
                <p className="text-secondary text-sm">{plan.description}</p>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <a
                  href={plan.href}
                  className={`
                    block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all
                    ${plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      : "bg-zinc-800 hover:bg-zinc-700"
                    }
                  `}
                >
                  {plan.cta}
                </a>
              </div>

              {/* Features */}
              <div className="grow">
                <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                  What&apos;s included
                </h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-400 mr-3 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-secondary">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Usage Costs */}
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Pay-as-you-go costs
                    </h4>
                    <span className="text-xs text-purple-400 bg-purple-900/30 px-2 py-1 rounded">
                      Usage-based
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.usageCosts.map((cost, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span className="text-secondary">{cost.item}</span>
                        <span className="text-primary font-medium">{cost.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Example ROI */}
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-sm text-purple-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                  </svg>
                  <span>Typical ROI: 3-6x within 6 months</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Details Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-primary font-medium transition-all"
          >
            {showDetails ? "Hide" : "Show"} detailed comparison
            <svg
              className={`w-4 h-4 transition-transform ${showDetails ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Detailed Comparison Table */}
        {showDetails && (
          <div className="max-w-4xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Detailed Plan Comparison
            </h3>
            <div className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left p-4 text-primary font-semibold">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="p-4 text-center">
                        <div className="font-semibold text-primary">{plan.name}</div>
                        <div className="text-sm text-purple-300">{plan.setupFee}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Setup & Configuration", maker: "Basic", growth: "Premium", scale: "Custom" },
                    { feature: "Neuromarketing Templates", maker: "3 templates", growth: "All templates", scale: "Custom implementation" },
                    { feature: "Product Slots", maker: "50 included", growth: "250 included", scale: "Unlimited" },
                    { feature: "Support", maker: "Email", growth: "Priority (12h)", scale: "24/7 + Dedicated" },
                    { feature: "A/B Testing", maker: "Basic", growth: "Advanced", scale: "Custom suite" },
                    { feature: "Transaction Fees", maker: "2.9% + $0.30", growth: "2.7% + $0.30", scale: "2.5% + $0.30" },
                    { feature: "Bandwidth Cost", maker: "$0.05/100 visitors", growth: "$0.04/100 visitors", scale: "$0.03/100 visitors" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-zinc-900/30" : ""}>
                      <td className="p-4 text-secondary">{row.feature}</td>
                      <td className="p-4 text-center text-primary">{row.maker}</td>
                      <td className="p-4 text-center text-primary">{row.growth}</td>
                      <td className="p-4 text-center text-primary">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ROI Calculator */}
        <div className="mt-20 max-w-3xl mx-auto bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-purple-800/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">
              See the value for your brand
            </h3>
            <p className="text-secondary mb-6">
              One-time investment that pays for itself through increased conversions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">$588</div>
              <div className="text-sm text-secondary">Starter investment</div>
              <div className="mt-2 text-xs text-muted">≈ 10-15 extra sales</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">→</div>
              <div className="text-sm text-secondary">Pays for itself with</div>
              <div className="mt-2 text-xs text-muted">5-15% conversion increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">3-6x</div>
              <div className="text-sm text-secondary">Typical ROI</div>
              <div className="mt-2 text-xs text-muted">Within 6 months</div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a
              href="#cta"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-semibold transition-all"
            >
              Calculate Your ROI →
            </a>
            <p className="mt-4 text-sm text-muted">
              No monthly fees, only pay for actual usage
            </p>
          </div>
        </div>

        {/* No Hidden Fees Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-green-900/20 border border-green-800/30 rounded-lg px-6 py-4">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-green-300 font-medium">No monthly subscriptions. No surprise fees. Pay only for what you use.</span>
          </div>
        </div>
      </div>
    </section>
  );
}