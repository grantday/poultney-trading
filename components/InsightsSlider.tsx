"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { Insight } from "@/lib/insights";

export default function InsightsSlider({ insights }: { insights: Insight[] }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // No insights? render nothing
  if (!insights || insights.length === 0) return null;

  const slide = (dir: number) => {
    const max = Math.max(0, insights.length - 1);
    setIndex((i) => Math.max(0, Math.min(max, i + dir)));
  };

  const trackStyle = {
    transform: `translateX(calc(${-index} * (var(--card-w) + var(--card-gap))))`,
  } as React.CSSProperties;

  return (
    <section id="insights-preview" className="insights-slider" ref={sectionRef}>
      <div className="container">
        <header className="insights-head">
          <div>
            <span className="eyebrow reveal">Market Insights</span>
            <h2 className="reveal">
              What we're <em>watching</em>.
            </h2>
          </div>
          <div className="insights-head-right reveal">
            <p>
              Notes from the field — prices, supply, opportunities, and what
              we're seeing across the region.
            </p>
            <Link href="/insights" className="insights-all-link">
              View all insights
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </header>

        <div className="insights-track-wrap reveal">
          <div className="insights-track" ref={trackRef} style={trackStyle}>
            {insights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="insight-card"
              >
                <div
                  className="insight-card-img"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <span className="insight-card-tag">{post.category}</span>
                </div>
                <div className="insight-card-body">
                  <div className="insight-card-meta">
                    <span>{post.dateLabel}</span>
                    <span className="dot-sep">·</span>
                    <span>{post.readingMins} min read</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="insight-card-link">
                    Read insight
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="insights-controls">
          <div className="insights-progress">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="bar"><span className="bar-fill" style={{ width: `${((index + 1) / insights.length) * 100}%` }} /></span>
            <span className="muted">{String(insights.length).padStart(2, "0")}</span>
          </div>
          <div className="insights-arrows">
            <button onClick={() => slide(-1)} disabled={index === 0} className="arrow-btn-light" aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={() => slide(1)} disabled={index >= insights.length - 1} className="arrow-btn-light" aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
