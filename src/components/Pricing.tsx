// src/components/Pricing.tsx
"use client";

import { useState } from "react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually");

  // Updated pricing in your Pricing.tsx component
  const plans = [
    {
      name: "Maker",
      tagline: "Perfect for artisans & micro-brands",
      price: {
        monthly: "$49",
        annually: "$39", // $12 savings monthly
      },
      description: "Launch with essential conversion tools",
      cta: "Start Free Trial",
      href: "#cta", // Added href
      neuromarketingBadge: "Basic Psychology",
      popular: false,
      features: [
        { text: "Up to 50 products", included: true },
        { text: "Trust signals & social proof", included: true },
        { text: "3 neuromarketing templates", included: true },
        { text: "Basic conversion analytics", included: true },
        { text: "1-click upsell prompts", included: true },
        { text: "1 admin user", included: true },
        { text: "Email support", included: true },
        { text: "A/B testing", included: false },
        { text: "Advanced psychology flows", included: false },
        { text: "Custom branding", included: false },
      ],
    },
    {
      name: "Growth",
      tagline: "For scaling D2C brands",
      price: {
        monthly: "$99",
        annually: "$79", // $20 savings monthly
      },
      description: "Convert more customers with advanced tools",
      cta: "Join Waitlist →",
      href: "#cta", // Added href
      neuromarketingBadge: "Pro Conversion",
      popular: true,
      features: [
        { text: "Up to 250 products", included: true },
        { text: "Trust signals & social proof", included: true },
        { text: "All neuromarketing templates", included: true },
        { text: "Advanced conversion analytics", included: true },
        { text: "Multi-step checkout psychology", included: true },
        { text: "3 admin users", included: true },
        { text: "Priority support (12h)", included: true },
        { text: "A/B testing tools", included: true },
        { text: "Custom branding", included: true },
        { text: "Web3-ready features", included: true },
      ],
    },
    {
      name: "Scale",
      tagline: "For established D2C brands",
      price: {
        monthly: "$199",
        annually: "$159", // $40 savings monthly
      },
      description: "Enterprise-grade conversion optimization",
      cta: "Contact Sales",
      href: "mailto:sales@malicc.com", // Different href for enterprise
      neuromarketingBadge: "Strategic Partner",
      popular: false,
      features: [
        { text: "Unlimited products", included: true },
        { text: "Custom neuromarketing strategy", included: true },
        { text: "Real-time conversion dashboard", included: true },
        { text: "Dedicated success manager", included: true },
        { text: "Unlimited admin users", included: true },
        { text: "Custom integrations", included: true },
        { text: "White-label options", included: true },
        { text: "Quarterly strategy reviews", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Onboarding assistance", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="section py-24 bg-linear-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-purple-900/30 to-indigo-900/30 text-primary border border-purple-800/50 text-sm font-medium mb-4">
            Built exclusively for D2C brands
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Pricing that <span className="text-purple-400">grows with you</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-10">
            From artisan makers to scaling brands, get the neuromarketing tools you need to convert more customers.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-zinc-900 rounded-lg p-1 mb-12">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${billingPeriod === "monthly"
                  ? "bg-zinc-800 text-white"
                  : "text-secondary hover:text-white"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annually")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${billingPeriod === "annually"
                  ? "bg-zinc-800 text-white"
                  : "text-secondary hover:text-white"
                }`}
            >
              Annually
              <span className="px-2 py-0.5 bg-linear-to-r from-purple-600 to-indigo-600 text-xs rounded-full">
                Save 20%
              </span> {/* Changed from 17% to 20% to match pricing */}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl p-8 border transition-all duration-300 h-full flex flex-col
                ${plan.popular
                  ? "border-purple-500 bg-linear-to-b from-purple-900/20 via-black to-black shadow-2xl shadow-purple-900/20"
                  : "border-zinc-800 bg-linear-to-b from-zinc-900/50 to-black"
                }
                hover:border-zinc-600 hover:shadow-xl hover:shadow-purple-900/10
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-lg">
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
                    {plan.price[billingPeriod]}
                  </span>
                  {plan.price[billingPeriod] !== "Custom" && (
                    <span className="text-secondary ml-2">
                      {billingPeriod === "monthly" ? "/month" : "/month, billed annually"}
                    </span>
                  )}
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
                      ? "bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
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
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
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
                      ) : (
                        <svg
                          className="w-5 h-5 text-zinc-600 mr-3 mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span
                        className={`text-sm ${feature.included ? "text-secondary" : "text-zinc-600"
                          }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conversion Guarantee for Growth & Scale */}
              {(plan.name === "Growth" || plan.name === "Scale") && (
                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <div className="flex items-center gap-2 text-sm text-purple-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                    </svg>
                    <span>Conversion-focused support included</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-primary mb-10">
            Common questions from D2C founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How does neuromarketing actually increase my sales?",
                a: "We build principles like scarcity, social proof, and trust signals directly into your store components. This reduces cognitive friction and guides visitors toward purchase decisions naturally."
              },
              {
                q: "Is this suitable for non-technical founders?",
                a: "Absolutely. Our platform is designed specifically for D2C brands who want powerful conversion tools without needing a developer."
              },
              {
                q: "Can I migrate from Shopify/WordPress?",
                a: "Yes, we offer migration tools and support to help you transfer your products, customers, and orders seamlessly."
              },
              {
                q: "How do you compare to other ecommerce platforms?",
                a: "Unlike generic platforms, malicc is built exclusively for D2C conversion. Every feature is optimized using behavioral science to maximize your sales."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <h4 className="font-semibold text-primary mb-2">{faq.q}</h4>
                <p className="text-sm text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Calculator */}
        <div className="mt-20 max-w-3xl mx-auto bg-linear-to-br from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-purple-800/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Calculate your potential ROI
            </h3>
            <p className="text-secondary">
              See how increasing your conversion rate pays for malicc
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">5-15%</div>
              <div className="text-sm text-secondary">Average conversion increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">3-6x</div>
              <div className="text-sm text-secondary">Typical ROI within months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-sm text-secondary">D2C brands already building</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="#cta"
              className="inline-block px-8 py-3 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-semibold transition-all"
            >
              Join the Waitlist →
            </a>
            <p className="mt-4 text-sm text-muted">
              Limited early access spots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}