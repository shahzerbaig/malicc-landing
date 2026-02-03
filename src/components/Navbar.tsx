"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="section py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-primary">malicc</div>

      {/* Desktop */}
      <div className="hidden sm:flex gap-6 text-sm text-secondary">
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a className="btn-primary px-4 py-2 rounded-lg">
          Get Early Access
        </a>
      </div>

      {/* Mobile */}
      <button
        className="sm:hidden text-primary"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full surface-dark border-t border-zinc-800 sm:hidden">
          <div className="flex flex-col p-4 gap-4 text-secondary">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#how" onClick={() => setOpen(false)}>How it works</a>
            <a
              href="#cta"
              className="btn-primary px-4 py-2 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
