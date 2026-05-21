import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contact, whatsappUrl } from "@/lib/contact";

export const metadata = {
  title: "Contact — Poultney Trading",
  description:
    "Get in touch with Poultney Trading for day-old chicks, poultry, pigs, animal feed, dog food, and horticulture produce in Zimbabwe.",
};

const productLinks = [
  { label: "Day-old chicks", href: "/#products" },
  { label: "Chickens", href: "/#products" },
  { label: "Pigs", href: "/#products" },
  { label: "Animal feed", href: "/#products" },
  { label: "Dog food", href: "/#products" },
  { label: "Horticulture produce", href: "/#products" },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="page-hero-title">
            We're here to <em>help</em>.
          </h1>
          <p className="page-hero-sub">
            Call, email, or message us on WhatsApp — whether you're placing an order,
            checking stock, or planning your next season.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <a href={`tel:${contact.phoneTel}`} className="contact-card contact-card-link">
              <span className="contact-card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="contact-card-label">Phone</span>
              <span className="contact-card-value">{contact.phoneDisplay}</span>
              <span className="contact-card-action">Tap to call</span>
            </a>

            <a href={`mailto:${contact.email}`} className="contact-card contact-card-link">
              <span className="contact-card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6l9 7 9-7M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">{contact.email}</span>
              <span className="contact-card-action">Send an email</span>
            </a>

            <a
              href={whatsappUrl()}
              className="contact-card contact-card-link contact-card-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="contact-card-label">WhatsApp</span>
              <span className="contact-card-value">Chat with us</span>
              <span className="contact-card-action">Open WhatsApp</span>
            </a>

            <div className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </span>
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value">{contact.address}</span>
              <span className="contact-card-note">{contact.addressDetail}</span>
            </div>
          </div>

          <div className="contact-aside">
            <div className="contact-hours">
              <h2>Trading hours</h2>
              <ul>
                {contact.hours.map((row) => (
                  <li key={row.days}>
                    <span>{row.days}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-products">
              <h2>What are you looking for?</h2>
              <p>Browse our range on the homepage, or mention your product when you get in touch.</p>
              <ul>
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <a href={`mailto:${contact.email}`} className="btn btn-primary" style={{ marginTop: 28 }}>
                Request a quote
                <svg className="arrow" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
