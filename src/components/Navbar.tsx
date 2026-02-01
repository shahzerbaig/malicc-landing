"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-8 py-4 flex items-center justify-between">
      <div className="text-xl font-bold">malicc</div>

      {/* Desktop links */}
      <div className="hidden sm:flex gap-6 text-sm text-gray-300">
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a className="bg-white text-black px-4 py-2 rounded-lg">
          Get Early Access
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="sm:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-zinc-800 sm:hidden">
          <div className="flex flex-col p-4 gap-4 text-gray-300">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#how" onClick={() => setOpen(false)}>How it works</a>
            <a
              href="#cta"
              className="bg-white text-black px-4 py-2 rounded-lg text-center"
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
