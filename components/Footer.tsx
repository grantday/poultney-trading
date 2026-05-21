import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/logo.svg" alt="" className="logo-mark-img" width={42} height={42} />
              <span className="logo-text">
                Poultney
                <span>Trading Co.</span>
              </span>
            </Link>
            <p>
              A Zimbabwean agribusiness building quality from soil to feed —
              horticulture, poultry, livestock and trusted animal feed.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product Range</h4>
            <ul>
              <li><Link href="/#products">Day-old chicks</Link></li>
              <li><Link href="/#products">Chickens</Link></li>
              <li><Link href="/#products">Pigs</Link></li>
              <li><Link href="/#products">Animal feed</Link></li>
              <li><Link href="/#products">Dog food</Link></li>
              <li><Link href="/#products">Horticulture produce</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/#why">Why us</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+263770000000">+263 77 000 0000</a></li>
              <li><a href="mailto:sales@poultneytrading.co.zw">sales@poultneytrading.co.zw</a></li>
              <li>Harare, Zimbabwe</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Poultney Trading. All rights reserved.</div>
          <div>Grown in Zimbabwe · Built for the trade.</div>
        </div>
      </div>
    </footer>
  );
}
