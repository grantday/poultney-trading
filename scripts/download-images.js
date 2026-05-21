/**
 * One-time image setup for offline development.
 *
 * Run: npm run setup
 *
 * Downloads all stock photos to /public/images/ so the site works
 * fully offline after the first install. Skips files that already
 * exist (safe to re-run).
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const images = [
  // Hero slider (3 slides)
  { url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=2000&q=80", file: "hero-horticulture.jpg" },
  { url: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=2000&q=80", file: "hero-poultry.jpg" },
  { url: "https://images.unsplash.com/photo-1559762717-99c81ac85459?w=2000&q=80", file: "hero-feed.jpg" },

  // About section
  { url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80", file: "about.jpg" },

  // CTA background
  { url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80", file: "cta-bg.jpg" },

  // Product cards (6 cards)
  { url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=900&q=80", file: "product-horticulture.jpg" },
  { url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80", file: "product-chicks.jpg" },
  { url: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=900&q=80", file: "product-chickens.jpg" },
  { url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&q=80", file: "product-pigs.jpg" },
  { url: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&q=80", file: "product-feed.jpg" },
  { url: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=900&q=80", file: "product-dogfood.jpg" },

  // Insights cover images (3 sample posts)
  { url: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1400&q=80", file: "insights/insight-poultry-prices.jpg" },
  { url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80", file: "insights/insight-horticulture-exports.jpg" },
  { url: "https://images.unsplash.com/photo-1612197527762-8cfb55b618d1?w=1400&q=80", file: "insights/insight-chick-supply.jpg" },
];

const root = path.join(__dirname, "..", "public", "images");
if (!fs.existsSync(root)) fs.mkdirSync(root, { recursive: true });
if (!fs.existsSync(path.join(root, "insights"))) {
  fs.mkdirSync(path.join(root, "insights"), { recursive: true });
}

function download({ url, file }) {
  return new Promise((resolve, reject) => {
    const dest = path.join(root, file);
    if (fs.existsSync(dest)) {
      console.log("  ✓ exists  :", file);
      return resolve();
    }
    console.log("  ↓ download:", file);
    const out = fs.createWriteStream(dest);
    const req = https.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirect
        https.get(res.headers.location, (r2) => r2.pipe(out));
      } else if (res.statusCode === 200) {
        res.pipe(out);
      } else {
        fs.unlinkSync(dest);
        return reject(new Error("HTTP " + res.statusCode + " for " + url));
      }
      out.on("finish", () => out.close(resolve));
    });
    req.on("error", (err) => {
      fs.unlink(dest, () => reject(err));
    });
    req.setTimeout(20000, () => req.destroy(new Error("timeout: " + url)));
  });
}

(async () => {
  console.log("\nPoultney Trading — downloading stock images for offline use\n");
  let ok = 0, fail = 0;
  for (const img of images) {
    try {
      await download(img);
      ok++;
    } catch (e) {
      console.error("  ✗ failed  :", img.file, "—", e.message);
      fail++;
    }
  }
  console.log(`\nDone. ${ok} ok, ${fail} failed. Images in /public/images/\n`);
  if (fail > 0) {
    console.log("Re-run 'npm run setup' to retry failed downloads when you have a stable connection.\n");
  }
})();
