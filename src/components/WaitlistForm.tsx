"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      mode: "no-cors",
    });

    setLoading(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="mt-12 max-w-xl mx-auto px-4 sm:px-0">
      {submitted ? (
        /* ---------- Success State ---------- */
        <div className="surface-glass p-8 text-center">
          <h3 className="text-2xl font-semibold text-success">
            You’re in.
          </h3>

          <p className="mt-3 text-secondary">
            Early access secured. We’ll reach out before the crowd does.
          </p>
        </div>
      ) : (
        /* ---------- Form State ---------- */
        <div className="surface-glass p-8">
          <h3 className="text-2xl font-semibold text-primary">
            Join the early access list
          </h3>

          <p className="mt-2 text-muted text-sm">
            Built for founders who care about conversion, not cosmetics.
          </p>

          <form
            onSubmit={handleSubmit}
            action="https://docs.google.com/forms/d/e/1FAIpQLScGyJ7duY3FKqbxJEOMFzVkx9UEIBS19CmMdo66ZkLfwfhdzw/formResponse"
            className="mt-6 flex flex-col gap-4"
          >
            {/* Email */}
            <input
              type="email"
              name="entry.562914986"
              required
              placeholder="you@brand.com"
              className="
                w-full
                px-4 py-3
                rounded-lg
                bg-zinc-900 text-primary
                border border-zinc-700
                focus:outline-none focus:ring-2 focus:ring-purple-500
                placeholder:text-muted
              "
            />

            {/* Brand */}
            <input
              type="text"
              name="entry.1582825926"
              placeholder="Brand or company (optional)"
              className="
                w-full
                px-4 py-3
                rounded-lg
                bg-zinc-900 text-primary
                border border-zinc-700
                focus:outline-none focus:ring-2 focus:ring-purple-500
                placeholder:text-muted
              "
            />

            <button
              type="submit"
              disabled={loading}
              className={`
                mt-2
                w-full
                px-6 py-3
                rounded-lg
                font-semibold
                transition-all
                btn-primary
                ${loading ? "btn-disabled" : ""}
              `}
            >
              {loading ? "Joining…" : "Join the waitlist"}
            </button>
          </form>

          <p className="mt-4 text-xs text-muted text-center">
            No spam. No selling. Just early access.
          </p>
        </div>
      )}
    </div>
  );
}
