"use client";

import { useEffect, useState, useCallback } from "react";

type Slide = {
  eyebrow: string;
  titleWords: { text: string; italic?: boolean }[];
  sub: string;
  metaLabel: string;
  meta: string[];
  bg: string;
};

const slides: Slide[] = [
  {
    eyebrow: "01 — Horticulture",
    titleWords: [
      { text: "From" },
      { text: "fertile" },
      { text: "soil," },
      { text: "real", italic: true },
      { text: "harvest." },
    ],
    sub: "Premium horticultural produce, grown in Zimbabwe's richest belts under careful agronomy and ethical farming practices.",
    metaLabel: "We grow",
    meta: ["Leafy greens & herbs", "Seasonal vegetables", "Fresh produce for trade"],
    bg: "/images/hero-horticulture.jpg",
  },
  {
    eyebrow: "02 — Poultry & Livestock",
    titleWords: [
      { text: "Healthy" },
      { text: "birds." },
      { text: "Stronger", italic: true },
      { text: "yields." },
    ],
    sub: "Day-old chicks, broilers, layers and quality pigs raised on best-practice biosecurity. Stock you can build a farm on.",
    metaLabel: "We supply",
    meta: ["Day-old chicks (broiler & layer)", "Live & dressed chickens", "Pigs & weaners"],
    bg: "/images/hero-poultry.jpg",
  },
  {
    eyebrow: "03 — Feed & Nutrition",
    titleWords: [
      { text: "Feed" },
      { text: "that" },
      { text: "performs", italic: true },
      { text: "—" },
      { text: "always." },
    ],
    sub: "Balanced, locally-formulated animal feed and trusted dog food. Made for growth, milk, eggs and the loyal companions at home.",
    metaLabel: "We formulate",
    meta: ["Layer, broiler & pig feed", "Calf, dairy & beef rations", "Premium dog food"],
    bg: "/images/hero-feed.jpg",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [active, next]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section className="hero" aria-label="Poultney Trading showcase">
      {slides.map((slide, i) => (
        <article
          key={i}
          className={`slide ${i === active ? "active" : ""}`}
          aria-hidden={i !== active}
        >
          {/* LAYER 1 — Background image */}
          <div
            className="slide-bg"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />

          {/* LAYER 2 — Color overlay */}
          <div className="slide-overlay" />

          {/* LAYER 3 — Decorative organic shapes */}
          <div className="slide-deco">
            <div className="deco-circle c1" />
            <div className="deco-circle c2" />
            <div className="deco-circle c3" />
            <svg
              className="deco-leaf"
              viewBox="0 0 200 200"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M100 20c-30 30-60 60-60 100a60 60 0 00120 0c0-40-30-70-60-100zm0 130a40 40 0 01-40-40c0-25 15-50 40-75 25 25 40 50 40 75a40 40 0 01-40 40z" />
            </svg>
          </div>

          {/* LAYER 4 — Foreground content */}
          <div className="slide-content">
            <div className="container">
              <div className="slide-text">
                <span className="eyebrow light slide-eyebrow">
                  {slide.eyebrow}
                </span>
                <h1 className="slide-title">
                  {slide.titleWords.map((w, j) => (
                    <span key={j} className="word">
                      {w.italic ? <em>{w.text}</em> : w.text}
                      {j < slide.titleWords.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
                <p className="slide-sub">{slide.sub}</p>
                <div className="slide-actions">
                  <a href="#products" className="btn btn-primary">
                    Explore Our Range
                    <svg className="arrow" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#contact" className="btn btn-ghost">Talk to us</a>
                </div>
              </div>

              <aside className="slide-meta">
                <div className="slide-meta-num">{slide.metaLabel.toUpperCase()}</div>
                <ul className="slide-meta-list">
                  {slide.meta.map((m, j) => (
                    <li key={j}>{m}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </article>
      ))}

      {/* Slider controls */}
      <div className="slider-controls">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="slide-counter">
            <span className="slide-counter-num">
              {String(active + 1).padStart(2, "0")}
              <span className="sep">/</span>
              <span className="slide-counter-total">{String(slides.length).padStart(2, "0")}</span>
            </span>
            <span className="slide-counter-label">Three pillars</span>
          </div>

          <div className="slider-nav">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <button className="arrow-btn" onClick={prev} aria-label="Previous slide">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="arrow-btn" onClick={next} aria-label="Next slide">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
