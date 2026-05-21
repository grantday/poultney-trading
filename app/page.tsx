import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import InsightsSlider from "@/components/InsightsSlider";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getAllInsights } from "@/lib/insights";

export default function Home() {
  const insights = getAllInsights({ limit: 5 });

  return (
    <main>
      <Navbar />
      <HeroSlider />
      <About />
      <Products />
      <WhyUs />
      <InsightsSlider insights={insights} />
      <CTA />
      <Footer />
    </main>
  );
}
