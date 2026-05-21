"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Our Range" },
  { href: "/insights", label: "Insights" },
  { href: "/#why", label: "Why Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Poultney Trading home" onClick={closeMenu}>
          <img src="/logo.svg" alt="" className="logo-mark-img" width={42} height={42} />
          <span className="logo-text">
            Poultney
            <span>Trading Co.</span>
          </span>
        </Link>

        <div
          id="nav-mobile-menu"
          className={`nav-menu ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
            Get a Quote
            <svg className="arrow" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <button
          type="button"
          className={`nav-burger ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="nav-burger-icon" width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path className="nav-burger-line" d="M0 1h18" stroke="currentColor" strokeWidth="1.5" />
            <path className="nav-burger-line" d="M0 7h18" stroke="currentColor" strokeWidth="1.5" />
            <path className="nav-burger-line" d="M0 13h12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <button
        type="button"
        className={`nav-backdrop ${menuOpen ? "open" : ""}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </nav>
  );
}
