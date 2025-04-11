import FAQSection from "@/components/faqs";
import FeaturesSection from "@/components/feature.section";
import FooterSection from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
