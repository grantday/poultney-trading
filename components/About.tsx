"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <img
              className="about-img"
              src="/images/about.jpg"
              alt="Poultney Trading farm operations"
            />
            <div className="about-badge">
              <div className="about-badge-num">15+</div>
              <div className="about-badge-label">Years of Trade</div>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow reveal">Who We Are</span>
            <h2 className="reveal">
              Rooted in the land. <em>Built</em> for the trade.
            </h2>
            <p className="reveal">
              Poultney Trading is a Zimbabwean agribusiness with a simple
              promise: quality from soil to feed. We grow, we raise, we
              formulate — and everything we put our name on has to be the
              standard we would buy ourselves.
            </p>
            <p className="reveal">
              From day-old chicks and pigs through to balanced feed for layers,
              broilers, livestock and the family dog — we serve farmers,
              traders, retailers and households across the region.
            </p>

            <div className="about-stats reveal">
              <div>
                <div className="stat-num">6</div>
                <div className="stat-label">Product Lines</div>
              </div>
              <div>
                <div className="stat-num">3</div>
                <div className="stat-label">Provinces Served</div>
              </div>
              <div>
                <div className="stat-num">1k+</div>
                <div className="stat-label">Loyal Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
