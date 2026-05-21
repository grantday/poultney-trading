import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { getInsight, getInsightSlugs, getAllInsights } from "@/lib/insights";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getInsight(params.slug);
  if (!post) return { title: "Insight not found" };
  return {
    title: `${post.title} — Poultney Trading`,
    description: post.excerpt,
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const post = getInsight(params.slug);
  if (!post) notFound();

  const others = getAllInsights().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <Navbar />

      <article className="insight-article">
        <div
          className="insight-article-hero"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="insight-article-hero-overlay" />
          <div className="container insight-article-hero-inner">
            <Link href="/insights" className="insight-back">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M14 8H2m0 0l5 5m-5-5l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All insights
            </Link>
            <span className="insight-card-tag" style={{ position: "relative", top: 0, left: 0 }}>
              {post.category}
            </span>
            <h1 className="insight-article-title">{post.title}</h1>
            <div className="insight-article-meta">
              <span>{post.dateLabel}</span>
              <span className="dot-sep">·</span>
              <span>{post.readingMins} min read</span>
              {post.author && (
                <>
                  <span className="dot-sep">·</span>
                  <span>by {post.author}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="container insight-article-body">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {others.length > 0 && (
          <section className="insight-related">
            <div className="container">
              <span className="eyebrow">Read next</span>
              <div className="insight-related-grid">
                {others.map((p) => (
                  <Link key={p.slug} href={`/insights/${p.slug}`} className="insight-grid-card">
                    <div
                      className="insight-grid-img"
                      style={{ backgroundImage: `url(${p.image})` }}
                    >
                      <span className="insight-card-tag">{p.category}</span>
                    </div>
                    <div className="insight-grid-body">
                      <div className="insight-card-meta">
                        <span>{p.dateLabel}</span>
                        <span className="dot-sep">·</span>
                        <span>{p.readingMins} min read</span>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTA />
      <Footer />
    </main>
  );
}
