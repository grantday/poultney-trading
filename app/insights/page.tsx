import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { getAllInsights } from "@/lib/insights";

export const metadata = {
  title: "Market Insights — Poultney Trading",
  description: "Notes from the field on Zimbabwe's poultry, livestock, feed and horticulture markets.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Market Insights</span>
          <h1 className="page-hero-title">
            Notes from the <em>field</em>.
          </h1>
          <p className="page-hero-sub">
            Prices, supply, opportunities, and what we're seeing across the region's
            agriculture trade.
          </p>
        </div>
      </section>

      <section className="insights-grid-section">
        <div className="container">
          {insights.length === 0 ? (
            <div className="empty-state">
              <p>No insights published yet. Check back soon.</p>
            </div>
          ) : (
            <div className="insights-grid">
              {insights.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`} className="insight-grid-card">
                  <div
                    className="insight-grid-img"
                    style={{ backgroundImage: `url(${post.image})` }}
                  >
                    <span className="insight-card-tag">{post.category}</span>
                  </div>
                  <div className="insight-grid-body">
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
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
