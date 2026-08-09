"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#details", label: "Details" },
  { href: "#buy", label: "Wishlist" },
  { href: "#beta", label: "Beta" },
];

export default function MobileHeroMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className={`heroMenu ${isOpen ? "isOpen" : ""}`}>
      <button
        className="heroMenuButton"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-hero-nav"
        onClick={() => setIsOpen((current) => !current)}
      >
        Menu
      </button>
      <nav
        className="heroNav heroNavMobile"
        id="mobile-hero-nav"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a
            href={link.href}
            key={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
