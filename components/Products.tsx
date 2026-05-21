"use client";

import { useEffect, useRef } from "react";

type Product = {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  img: number;
};

const products: Product[] = [
  {
    num: "001",
    title: "Day-Old Chicks",
    desc: "Healthy broiler and layer chicks from trusted hatcheries. Vaccinated, sexed and ready for placement.",
    img: 2,
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 14c-9 0-16 6-16 14 0 6 4 11 9 13l-2 7h18l-2-7c5-2 9-7 9-13 0-8-7-14-16-14z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="28" cy="26" r="2" fill="currentColor"/>
        <path d="M30 30l4 2-4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12c1-3 4-4 6-3M42 12c-1-3-4-4-6-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "002",
    title: "Live & Dressed Chickens",
    desc: "Broilers grown to weight and dressed birds delivered fresh. Bulk and trade volumes available.",
    img: 3,
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M20 40c0-10 7-18 16-18s14 5 14 11c0 4-3 7-7 7l3 6h-6l-2-4h-8l-2 4h-6l3-6c-4 0-5-2-5-0z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="43" cy="28" r="1.5" fill="currentColor"/>
        <path d="M48 26l5 1-5 2M36 18l-2-4M40 17l1-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "003",
    title: "Quality Pigs",
    desc: "Weaners, growers and finishers from disciplined breeding lines. Strong genetics, strong yields.",
    img: 4,
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M14 36c0-8 7-14 16-14h6c8 0 14 5 14 12 0 5-3 8-7 10v6h-6v-4h-12v4h-6v-6c-3-2-5-5-5-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="46" cy="32" r="1.5" fill="currentColor"/>
        <circle cx="44" cy="36" r="1" fill="currentColor"/>
        <path d="M48 36c2 0 4 0 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 24l-3-5M28 22l-1-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "004",
    title: "Animal Feed",
    desc: "Balanced rations for layers, broilers, pigs and livestock. Locally formulated, consistently milled.",
    img: 5,
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M18 22h20l4 26H14l4-26z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M22 22V14c0-2 2-4 4-4h4c2 0 4 2 4 4v8" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 32h16M22 38h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "005",
    title: "Dog Food",
    desc: "Nutrient-dense formulas for working dogs and family pets. Real ingredients, dependable formulation.",
    img: 6,
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 18c-8 0-14 5-14 12 0 4 2 7 4 9 1 1 1 3 1 4v6h18v-6c0-1 0-3 1-4 2-2 4-5 4-9 0-7-6-12-14-12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="28" cy="30" r="1.5" fill="currentColor"/>
        <circle cx="36" cy="30" r="1.5" fill="currentColor"/>
        <path d="M30 36c1 1 3 1 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 14c-1 2-1 4 0 6M42 14c1 2 1 4 0 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "006",
    title: "Horticulture Produce",
    desc: "Vegetables, leafy greens and seasonal crops grown in fertile Zimbabwean soils. Trade and retail supply.",
    img: 1,
    icon: (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 50C20 50 14 40 14 30c8 0 14 4 18 10 4-6 10-10 18-10 0 10-6 20-18 20z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M32 50V20M32 20c0-4 2-8 6-10M32 20c0-4-2-8-6-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Products() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="products" className="products" ref={ref}>
      <div className="container">
        <header className="products-head">
          <div>
            <span className="eyebrow orange reveal">Our Range</span>
            <h2 className="reveal">
              Six product lines.<br/>
              <em>One</em> standard of quality.
            </h2>
          </div>
          <p className="reveal">
            Whether you're stocking a farm, supplying a market, or feeding a
            loved companion at home — we have a product, a price point and a
            volume that works for you.
          </p>
        </header>

        <div className="products-grid">
          {products.map((p, i) => (
            <a
              key={i}
              href="#contact"
              className="product-card reveal"
              data-img={p.img}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="product-num">{p.num}</div>
              <div className="product-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="product-link">
                Enquire
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
