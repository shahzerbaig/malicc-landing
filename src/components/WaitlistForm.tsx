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
    <div className="mt-12 max-w-xl mx-auto">
      {submitted ? (
        <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
          <h3 className="text-2xl font-semibold text-green-300">
            You’re in.
          </h3>
          <p className="mt-3 text-green-200/80">
            Early access secured. We’ll reach out before the crowd does.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold">
            Join the early access list
          </h3>

          <p className="mt-2 text-gray-400 text-sm">
            For builders who care about conversion, not cosmetics.
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
                px-4 py-3 rounded-lg
                bg-zinc-900 text-white
                border border-zinc-700
                focus:outline-none focus:ring-2 focus:ring-purple-500
                placeholder:text-zinc-500
              "
            />

            {/* Brand */}
            <input
              type="text"
              name="entry.1582825926"
              placeholder="Brand or company (optional)"
              className="
                px-4 py-3 rounded-lg
                bg-zinc-900 text-white
                border border-zinc-700
                focus:outline-none focus:ring-2 focus:ring-purple-500
                placeholder:text-zinc-500
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                mt-2 flex items-center justify-center gap-2
                bg-gradient-to-r from-purple-500 to-indigo-500
                hover:from-purple-600 hover:to-indigo-600
                text-white font-semibold
                px-6 py-3 rounded-lg
                transition-all
                disabled:opacity-60
              "
            >
              {loading ? "Joining…" : "Join the waitlist"}
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500 text-center">
            No spam. No selling. Just early access.
          </p>
        </div>
      )}
    </div>
  );
}
