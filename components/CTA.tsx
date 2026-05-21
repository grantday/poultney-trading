import Link from "next/link";
import { contact } from "@/lib/contact";

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta-bg" />
      <div className="container cta-inner">
        <div>
          <span className="eyebrow light">Get in Touch</span>
          <h2 style={{ marginTop: 24 }}>
            Let's talk about your <em>next order</em>.
          </h2>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              Request a Quote
              <svg className="arrow" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Full contact details
            </Link>
          </div>
        </div>

        <div className="cta-contact">
          <div className="cta-row">
            <span className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <div className="label">Call us</div>
              <a href={`tel:${contact.phoneTel}`} className="value">{contact.phoneDisplay}</a>
            </div>
          </div>

          <div className="cta-row">
            <span className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 6l9 7 9-7M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <div className="label">Email us</div>
              <a href={`mailto:${contact.email}`} className="value">{contact.email}</a>
            </div>
          </div>

          <div className="cta-row">
            <span className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
            </span>
            <div>
              <div className="label">Visit us</div>
              <div className="value">{contact.address}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
