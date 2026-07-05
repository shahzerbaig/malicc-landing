"use client";

import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-border/60
        bg-surface/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-18
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* Logo */}

        <Logo />

        {/* Desktop */}

        <DesktopNavigation />

        {/* Mobile */}

        <MobileNavigation />
      </div>
    </header>
  );
}
