"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    num: "01",
    title: "Consistent quality control",
    desc: "Every input, every batch, every delivery — checked against our own standards.",
  },
  {
    num: "02",
    title: "Reliable bulk supply",
    desc: "Trade volumes available with scheduling that works for farmers and retailers.",
  },
  {
    num: "03",
    title: "Fair, transparent pricing",
    desc: "Clear quotes. No hidden costs. Volume discounts for partnered buyers.",
  },
  {
    num: "04",
    title: "Locally formulated feed",
    desc: "Made for Zimbabwean conditions, not imported guesswork.",
  },
  {
    num: "05",
    title: "Care for the animal & the land",
    desc: "Ethical farming and biosecurity practices that protect everything we produce.",
  },
];

export default function WhyUs() {
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
    <section id="why" className="why" ref={ref}>
      <div className="container">
        <div className="why-grid">
          <div className="why-left">
            <span className="eyebrow reveal">Why Poultney</span>
            <h2 className="reveal">
              Trade with people who actually <em>farm</em>.
            </h2>
            <p className="reveal">
              We aren't just middlemen. We're growers, producers and feed makers
              who built this business the long way — relationship by
              relationship, batch by batch.
            </p>
          </div>

          <ul className="feature-list">
            {features.map((f, i) => (
              <li
                key={i}
                className="feature-item reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="feature-num">{f.num}</span>
                <div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
                <span className="feature-arrow">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
