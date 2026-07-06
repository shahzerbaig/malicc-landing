"use client";

import Link from "next/link";

import NavigationMenu from "./NavigationMenu";
import { navigation } from "./navigation-data";

export default function DesktopNavigation() {
  return (
    <div className="hidden lg:flex items-center justify-between w-full">

      {/* Left Side */}

      <div className="flex items-center gap-8">

        {navigation.map((group) => (
          <NavigationMenu
            key={group.label}
            group={group}
          />
        ))}

        <Link
          href="/pricing"
          className="text-sm font-medium text-secondary transition hover:text-primary"
        >
          Pricing
        </Link>

        <Link
          href="/resources"
          className="text-sm font-medium text-secondary transition hover:text-primary"
        >
          Resources
        </Link>

        <Link
          href="/company"
          className="text-sm font-medium text-secondary transition hover:text-primary"
        >
          Company
        </Link>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3">

        <Link
          href="/bookademo"
          className="
            rounded-lg
            border
            border-border
            px-4
            py-2
            text-sm
            font-medium
            text-primary
            transition
            hover:bg-surface-hover
          "
        >
          Book Demo
        </Link>

        <Link
          href="/get-started"
          className="
            rounded-lg
            bg-primary
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:opacity-90
          "
        >
          Get Started
        </Link>

      </div>

    </div>
  );
}