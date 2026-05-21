"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Poultney Trading home">
          <img src="/logo.svg" alt="" className="logo-mark-img" width={42} height={42} />
          <span className="logo-text">
            Poultney
            <span>Trading Co.</span>
          </span>
        </Link>

        <ul className="nav-links">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#products">Our Range</Link></li>
          <li><Link href="/insights">Insights</Link></li>
          <li><Link href="/#why">Why Us</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        <Link href="/#contact" className="btn btn-primary nav-cta">
          Get a Quote
          <svg className="arrow" viewBox="0 0 16 16" fill="none">
            <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        <button className="nav-burger" aria-label="Menu">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M0 1h18M0 7h18M0 13h12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
